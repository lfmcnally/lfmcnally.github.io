# Classicalia Overhaul Plan

## Part 1: Class Type Restructuring

### 1.1 New class types (replacing current `latin`, `prep-latin`, `greek`, `classics`)

| New Type Value | Display Name | Subject | Level |
|---|---|---|---|
| `latin-prep` | Prep School Latin | Latin | Prep/KS3 |
| `latin-gcse` | GCSE Latin | Latin | GCSE |
| `latin-alevel` | A Level Latin | Latin | A Level |
| `greek-gcse` | GCSE Greek | Greek | GCSE |
| `greek-alevel` | A Level Greek | Greek | A Level |
| `civ-gcse` | GCSE Classical Civilisation | Civ | GCSE |
| `civ-alevel` | A Level Classical Civilisation | Civ | A Level |

### 1.2 Auto-migration mapping

| Current type | Current class name heuristic | Maps to |
|---|---|---|
| `prep-latin` | (all) | `latin-prep` |
| `latin` | contains "a level" or "alevel" or "year 12/13" | `latin-alevel` |
| `latin` | (everything else) | `latin-gcse` |
| `greek` | contains "a level" or "alevel" or "year 12/13" | `greek-alevel` |
| `greek` | (everything else) | `greek-gcse` |
| `classics` | contains "a level" or "alevel" or "year 12/13" | `civ-alevel` |
| `classics` | (everything else) | `civ-gcse` |

Migration script runs once on page load, checks if old types exist, and updates them. Also provide a Supabase migration SQL file.

### 1.3 Per-class-type feature matrix

| Feature | latin-prep | latin-gcse | latin-alevel | greek-gcse | greek-alevel | civ-gcse | civ-alevel |
|---|---|---|---|---|---|---|---|
| Vocab tracking | Prep Latin only | GCSE Latin only | A Level Latin only | GCSE Greek only | A Level Greek only | NO | NO |
| Vocab schedule (split over weeks) | NO | NO | YES | NO | YES | NO | NO |
| Task assignment | YES | YES | YES | YES | YES | YES | YES |
| Time-on-page tracking | Prep pages only | GCSE Latin pages | A Level Latin pages | GCSE Greek pages | A Level Greek pages | GCSE Civ pages | A Level Civ pages |
| Content testers | NO | NO | NO | NO | NO | YES (Myth) | YES (Politics) |
| Set text tracking | REMOVED | REMOVED | REMOVED | REMOVED | REMOVED | REMOVED | REMOVED |

### 1.4 Files to change for class type restructuring

- `dashboard/teacher.html` — class creation modal: new type dropdown with 7 options
- `dashboard/class.html` — conditionally show/hide sections based on new types; remove set text sections entirely; filter vocab queries by language+level; filter time tracking by level-appropriate pages
- `dashboard/student.html` — show only relevant sections per class type
- `dashboard/student-profile.html` — show only relevant tracking per class type
- `dashboard/student-hub.html` — update type badges/icons
- `shared/vocab-schedule.js` — only used by `latin-alevel` and `greek-alevel`
- `shared/task-tracker.js` — filter content_path by class type/level
- `shared/reading-tracker.js` — filter by level-appropriate pages

### 1.5 Removals

- **Set text tracking**: Remove from `class.html` (set text progress grid, set text task type, content_settings.set_texts), `student-profile.html`, `student.html`. Leave DB tables intact but stop querying/displaying.
- **Whiteboard**: Remove whiteboard link from `student-hub.html`, remove navigation references. Leave `whiteboard.html` file intact but unlinked (can be re-added later).

---

## Part 2: Content Tester Fix for Civ Classes

### 2.1 Problem
Content testers on Civ pages aren't properly recording results back to the class dashboard.

### 2.2 Fix
- Ensure `content_test_attempts` records include the correct `course` identifier (e.g. `myth` for GCSE Civ, `politics` for A Level Civ)
- In `class.html`, filter content test results by:
  - `civ-gcse` → only show `myth` course results
  - `civ-alevel` → only show `politics` course results
- Verify `content-tester.js` is saving the course/topic path correctly

---

## Part 3: UI Redesign — Google Aesthetic

### 3.1 Design System

**Google Color Palette:**
- Blue: `#4285F4` (primary actions, links, active states)
- Red: `#EA4335` (errors, overdue, danger)
- Yellow: `#FBBC04` (warnings, in-progress)
- Green: `#34A853` (success, completed, mastered)
- Dark text: `#202124`
- Secondary text: `#5F6368`
- Border/divider: `#DADCE0`
- Background: `#F8F9FA`
- Card background: `#FFFFFF`
- Hover/selected: `#E8F0FE` (light blue tint)

**Typography:**
- Font: `'Google Sans', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif`
- Headings: 500 weight
- Body: 400 weight, `#202124`
- Secondary: 400 weight, `#5F6368`
- Small/caption: 12px, `#5F6368`

**Components:**
- Cards: White background, 1px `#DADCE0` border, 8px border-radius, no heavy shadows (just `0 1px 2px rgba(0,0,0,0.1)` on hover)
- Buttons: Rounded (20px radius), filled primary `#4285F4` white text, outlined secondary `#4285F4` border
- Chips/badges: Pill-shaped, light background with colored text (e.g. `#E8F0FE` bg, `#4285F4` text)
- Tables: Clean, minimal borders, alternating row `#F8F9FA`, hover `#E8F0FE`
- Inputs: Outlined style, 4px radius, `#DADCE0` border, focus `#4285F4`
- Navigation: Top bar white with bottom border, no gradients

**Layout Principles:**
- Generous whitespace (24px card padding, 16px gaps)
- Max-width container (1200px) centered
- Clean flat design — no gradients on headers, no glassmorphism
- Subtle transitions (0.2s ease)
- Cards for grouping, not nested cards

### 3.2 Shared Stylesheet

Create `/shared/google-theme.css` with all the design tokens and component classes. All dashboard pages will import this instead of duplicating inline styles.

### 3.3 Page-by-page redesign

#### teacher.html
- White top bar with "Classicalia" text logo + nav links (flat, no gradient)
- Stats row: 4 simple metric cards (white, border, number + label)
- Classes: Clean card grid, each card shows name, type chip, student count, action buttons
- Remove heavy gradient header

#### student-hub.html
- White top bar, student name + avatar
- XP/Level shown as a simple card (not purple gradient)
- Classes as clean cards with type chip badges
- Remove whiteboard links
- Quick actions as outlined button row

#### class.html (teacher view)
- Tab navigation (Overview | Students | Tasks | Settings) — Google-style underline tabs
- Overview tab: Key metrics row + interventions quadrant (cleaner, pastel quadrant colors using Google palette)
- Students tab: Clean sortable table with status chips
- Tasks tab: Task list with status badges, create task button
- Settings tab: Class config, co-teachers
- Conditionally show sections based on class type:
  - Language classes: vocab tracking, word mastery
  - Civ classes: time tracking, content tester results
  - A Level language: + vocab schedule

#### student.html (student class view)
- Clean task list (upcoming assignments front and center)
- Progress section relevant to class type only
- Resources section for the class level/subject

#### student-profile.html (teacher viewing student)
- Clean header with student info
- Tabs for different data: Progress | Sessions | Word Mastery (language) OR Progress | Sessions | Tester Results (civ)
- Tables and charts in Google style

#### my-profile.html
- Simple profile card, settings below
- No purple gradient

### 3.4 Responsive approach
- Mobile-first breakpoints: 768px (tablet), 1024px (desktop)
- Cards stack single-column on mobile
- Tables scroll horizontally on mobile
- Nav collapses to hamburger on mobile

---

## Part 4: Implementation Order

### Phase 1: Foundation
1. Create branch `claude/fix-class-settings-organization-jPTNJ`
2. Create `/shared/google-theme.css` with full design system
3. Write class type migration logic (JS function that runs on load + SQL migration)

### Phase 2: Class Type Restructuring
4. Update `teacher.html` — new class creation with 7 types, redesign to Google theme
5. Update `class.html` — conditional sections per type, remove set texts, fix content tester filtering, redesign to Google theme
6. Update `student.html` — scoped tracking per class type, redesign
7. Update `student-profile.html` — scoped data display, redesign
8. Update `student-hub.html` — remove whiteboard links, update type badges, redesign
9. Update `my-profile.html` — redesign

### Phase 3: Tracking Fixes
10. Fix `shared/task-tracker.js` — ensure content_path filtering by level
11. Fix `shared/reading-tracker.js` — ensure level-appropriate page tracking
12. Fix `shared/content-tester.js` — ensure course is saved and filterable
13. Update `shared/vocab-schedule.js` — scope to alevel types only

### Phase 4: Cleanup & Polish
14. Remove set text references from all files
15. Remove whiteboard navigation links
16. Test all class types render correctly
17. Commit and push
