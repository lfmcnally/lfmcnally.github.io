# Classicalia Tracking Overhaul - Comprehensive Plan

## The Problem

Tracking on Classicalia has grown organically and now suffers from:

1. **Duplication**: The same data is tracked in multiple places differently
   - Word mastery logic in both `task-tracker.js` AND `spaced-repetition.js`
   - Time tracking in both `task-tracker.js` (3-min idle) AND `reading-tracker.js` (2-min idle)
   - Analytics calculations duplicated between `analytics-engine.js` and dashboard inline code

2. **Inconsistency**: Database field naming (`user_id` vs `student_id`), quiz answer storage (set texts save individual answers, vocab doesn't), different idle thresholds

3. **Clutter**: Teacher dashboards try to show everything at once - 5+ stat columns, leaderboards, task grids, set text grids, vocab grids, classics grids, co-teacher panels - all on one page

4. **Poor multi-class UX**: A student in Latin + Classics sees a class switcher dropdown but the experience isn't designed around multi-subject students

5. **No clear "how is this student doing?" answer**: Teachers have to mentally aggregate scattered metrics to judge student progress

---

## Design Inspiration: Century Tech Patterns

Taking cues from Century Tech's approach:

### Teacher Assessment View
- **Interventions quadrant**: Categorise students as "Needs stretch" / "Praise for commitment" / "Needs more effort" / "Needs support" - gives teachers immediate, actionable groupings
- **Per-question grids**: Students x Questions with tick/cross - shows exactly where understanding breaks down
- **Overview stats**: Attempts count, average score, clear bar charts of correct vs incorrect

### Student Dashboard
- **Activity chart** with week/month/year toggle - shows engagement patterns
- **Recently completed items** with subject tags, scores, and timestamps
- **Active days calendar** (GitHub-style heatmap) - visual motivation
- **Nuggets completed / time spent** - simple headline metrics

### Student Profile (Teacher View)
- **Course selector** with arrows to flip between subjects
- **Strengths** and **Areas for improvement** lists - clear, plain language
- **Tracker table**: Item name, last attempt date, last score, best score - sortable columns
- **Learning activity chart** per student

---

## Architecture: What Changes

### Current Tracking Files (7 trackers + analytics)

| File | Purpose | Problem |
|------|---------|---------|
| `task-tracker.js` | Records vocab answers, session time, XP | Also does word mastery + spaced repetition |
| `reading-tracker.js` | Reading page time tracking | Separate time/idle implementation |
| `spaced-repetition.js` | Word review scheduling | Overlaps with task-tracker mastery logic |
| `student-tracking.js` | Task categorisation/urgency | Mostly used by student dashboard only |
| `analytics-engine.js` | Weak area detection, recommendations | Duplicates some dashboard calculations |
| `content-tester.js` | Content knowledge tests | Separate from quiz tracking flow |
| `xp-system.js` | Gamification layer | Works fine, leave as-is |

### Proposed Consolidation

**Keep and refine:**
- `task-tracker.js` - Single source for recording all activity (vocab, quizzes, content tests)
- `reading-tracker.js` - Keep separate (reading has unique UX needs: scroll detection, page-level tracking)
- `xp-system.js` - Works well, no changes needed
- `analytics-engine.js` - Becomes the ONLY place analysis happens (remove duplication from dashboards)

**Merge/remove:**
- `spaced-repetition.js` - Merge into `task-tracker.js` (it's already mostly there)
- `student-tracking.js` - Merge task categorisation into `analytics-engine.js`

**Standardise:**
- Idle threshold: **2 minutes** everywhere (reading-tracker's value is more reasonable)
- Field naming: `student_id` everywhere (execute the migration plan already documented)
- All quiz types store individual answers (not just set texts)

---

## Dashboard Redesign

### 1. Student Dashboard (`student.html`)

**Current layout**: Header > Quick Actions > Two-column grid (language cards left, activity/tasks right) > Leaderboard

**New layout inspired by Century Tech:**

```
+--------------------------------------------------+
|  HEADER: Welcome, [Name]        [Class Switcher]  |
|  "You have 3 things due"        [All Classes ▾]   |
+--------------------------------------------------+

+--------------------------------------------------+
|  HEADLINE METRICS (3-4 cards)                      |
|  [Words Mastered] [Avg Score] [Active Days] [XP]   |
+--------------------------------------------------+

+-----------------------------+--------------------+
|  MY PROGRESS               |  WHAT'S DUE         |
|                            |                      |
|  Subject-filtered cards:   |  Unified task list:  |
|  - Vocabulary mastery %    |  - Overdue (red)     |
|  - Set text best scores    |  - Due soon (orange) |
|  - Reading progress        |  - Upcoming (blue)   |
|  - Content test scores     |                      |
|                            |  Each item shows:    |
|  Each with:                |  class label, type,  |
|  - Progress bar            |  due date            |
|  - "Practice" button       |                      |
+-----------------------------+--------------------+

+--------------------------------------------------+
|  ACTIVITY CALENDAR (heatmap)                       |
|  [Week] [Month] [Year] toggle                      |
|  Shows active days with intensity                  |
+--------------------------------------------------+

+--------------------------------------------------+
|  RECENTLY COMPLETED                                |
|  Item | Subject tag | Score | Date                 |
|  (last 10 completed activities)                    |
+--------------------------------------------------+
```

**Key changes:**
- **Class switcher** at top with badge counts per class showing pending items
- **"All Classes" view** that merges everything with class labels on each item
- **Headline metrics** - at-a-glance numbers (like Century Tech's nuggets completed / time spent)
- **Activity calendar** with week/month/year toggle (Century Tech pattern)
- **Recently completed** feed with subject tags and scores
- Remove the current scattered subject-specific card grid

**Multi-class student behaviour:**
- Default view: currently selected class
- "All Classes" option in switcher shows merged view
- Each item in merged view has a coloured class label (Latin = blue, Greek = green, Classics = purple, Prep = orange)
- Headline metrics aggregate across all classes in "All" view, or filter to selected class

### 2. Teacher Class Dashboard (`class.html`)

**Current layout**: Header with join code > 5-column stats grid > Leaderboard > Task completion grid > Set text grid > Classics grid > Vocab tests > Vocab schedule > Co-teachers

**New layout inspired by Century Tech:**

```
+--------------------------------------------------+
|  HEADER: [Class Name] - [Subject] [Year]          |
|  Join code: ABCD    [Settings] [Back to Hub]       |
+--------------------------------------------------+

+--------------------------------------------------+
|  CLASS OVERVIEW (3 cards)                          |
|  [Active Students] [Avg Score] [Completion Rate]   |
+--------------------------------------------------+

+--------------------------------------------------+
|  STUDENT INTERVENTIONS QUADRANT                    |
|  ┌─────────────┬─────────────┐                     |
|  │ Needs       │ Needs       │                     |
|  │ Stretch     │ More Effort │                     |
|  │ (high score,│ (high score,│                     |
|  │ high effort)│ low effort) │                     |
|  ├─────────────┼─────────────┤                     |
|  │ Praise for  │ Needs       │                     |
|  │ Commitment  │ Support     │                     |
|  │ (low score, │ (low score, │                     |
|  │ high effort)│ low effort) │                     |
|  └─────────────┴─────────────┘                     |
|  Students plotted by effort (x) vs score (y)       |
+--------------------------------------------------+

+--------------------------------------------------+
|  STUDENT TRACKER TABLE                             |
|  Sortable columns:                                 |
|  Name | Last Active | Vocab Mastered | Avg Score | |
|  Tasks Done | Effort Score | Status                |
|                                                    |
|  Status: On Track / Needs Attention / At Risk      |
|  Click row -> Student Profile                      |
+--------------------------------------------------+

+--------------------------------------------------+
|  ASSIGNMENT TRACKER (tab-filtered)                 |
|  [All] [Prep] [Quizzes] [Content Tests] [Reading] |
|  Grid: Students x Assignments with ✓/✗/- cells    |
+--------------------------------------------------+

+--------------------------------------------------+
|  ACTIVITY HEATMAP                                  |
|  Class-wide activity over last 30 days             |
|  [14d] [30d] [60d] toggle                         |
+--------------------------------------------------+
```

**Key changes:**
- **Interventions quadrant** (Century Tech's best idea) - plots each student on a 2D grid:
  - Y-axis: Performance (average scores across all tracked areas)
  - X-axis: Effort (active days, time spent, tasks completed)
  - Quadrants: "Needs Stretch" (high both), "Needs More Effort" (high perf/low effort), "Praise for Commitment" (low perf/high effort), "Needs Support" (low both)
  - Each dot is a student name - clickable to profile
- **Student tracker table** replaces the current scattered grids - one sortable table with all key metrics as columns, subject-appropriate columns shown based on class type
- **Assignment tracker** with tab filtering replaces the multiple separate grids (task grid, set text grid, classics grid, vocab tests)
- **Fewer but better stats** - 3 headline cards instead of 5 columns
- **Remove leaderboard from teacher view** - it's a student motivation tool, not a teacher tool

### 3. Student Profile (`student-profile.html`) - Teacher's View of Individual Student

**Current layout**: Header with 4 stats > Activity chart > Word mastery breakdown > Reading cards > Quiz progress > Task grid

**New layout inspired by Century Tech:**

```
+--------------------------------------------------+
|  HEADER: [Student Name]                            |
|  [< Prev Student]  [Class: Latin GCSE ▾]  [Next >]|
|  [email]                                           |
+--------------------------------------------------+

+--------------------------------------------------+
|  HEADLINE STATS (4 cards)                          |
|  [Total Activities] [Avg Score] [Active Days]      |
|  [Words Mastered] or [Reading Time] per subject    |
+--------------------------------------------------+

+--------------------------------------------------+
|  STRENGTHS              |  AREAS FOR IMPROVEMENT   |
|  - Vocab Ch. 1-3 (92%) |  - Set Text: Messalina   |
|  - Reading (on track)   |  - Vocab Ch. 7 (45%)     |
|  - Content: Politics    |  - Overdue prep tasks (2) |
+--------------------------------------------------+

+--------------------------------------------------+
|  LEARNING ACTIVITY (chart)                         |
|  [30 days] [90 days] [All time] toggle            |
|  Line chart of sessions/scores over time           |
+--------------------------------------------------+

+--------------------------------------------------+
|  TRACKER TABLE                                     |
|  Item | Type | Last Attempt | Last Score |         |
|  Best Score | Status                               |
|  Sortable, filterable by type                      |
|  (Vocab chapters, set texts, content tests,        |
|   reading courses, prep tasks - all in one table)  |
+--------------------------------------------------+
```

**Key changes:**
- **Prev/Next student arrows** (Century Tech pattern) - navigate between students without going back to class view
- **Subject switcher** if student is in multiple classes - dropdown to see their progress in each
- **Strengths / Areas for improvement** in plain language (Century Tech pattern) - generated by analytics engine
- **Single tracker table** replaces the current 4+ separate sections - one unified view with type column and filters
- **Activity chart** with configurable time range

### 4. Teacher Hub (`teacher.html`)

**Current layout**: Welcome header > Class cards with 4-stat grid > Recent activity feed

**Minimal changes needed:**
- Keep class cards but update stats to match new metrics (Active Students, Avg Score, Completion Rate, Students Needing Attention)
- Add a small "needs attention" badge on class cards showing count of at-risk students
- Recent activity feed is useful - keep it

---

## Subject-Specific Tracking Matrix

What gets tracked per class type, and what shows in the tracker table:

| Tracking Type | Latin | Greek | Classics | Prep Latin |
|---------------|-------|-------|----------|------------|
| Vocabulary mastery | Yes | Yes | No | Yes |
| Set text quizzes | Yes | No | No | No |
| Content tests | Yes | Yes | Yes | No |
| Reading time | No | No | Yes | No |
| Prep tasks | Yes | Yes | Yes | Yes |
| Spaced repetition | Yes | Yes | No | Yes |

The tracker tables and progress sections dynamically show/hide columns based on class type. In "All Classes" student view, all types show with a class label column.

---

## Database Changes Required

### 1. Field Standardisation (execute existing migration plan)
- `set_text_progress`: `user_id` -> `student_id`
- `set_text_answers`: `user_id` -> `student_id`
- `classics_quiz_progress`: `user_id` -> `student_id`

### 2. New/Modified Tables

**`vocab_quiz_answers`** (NEW - store individual vocab quiz answers like set texts already do):
```sql
CREATE TABLE vocab_quiz_answers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID REFERENCES users(id) NOT NULL,
    class_id UUID REFERENCES classes(id),
    word_latin TEXT NOT NULL,
    word_english TEXT NOT NULL,
    student_answer TEXT,
    is_correct BOOLEAN NOT NULL,
    language TEXT NOT NULL, -- 'latin', 'greek', 'prep-latin'
    quiz_session_id UUID, -- links to task_attempts.id
    answered_at TIMESTAMPTZ DEFAULT NOW()
);
```

**`reading_assignments`** (NEW - distinguish assigned vs free reading):
```sql
CREATE TABLE reading_assignments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    class_id UUID REFERENCES classes(id) NOT NULL,
    lesson_path TEXT NOT NULL,
    title TEXT NOT NULL,
    course_name TEXT, -- 'Iliad', 'Aeneid', etc.
    due_date DATE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Modify `tasks` table** - add `task_type` enum for cleaner filtering:
```sql
ALTER TABLE tasks ADD COLUMN task_type TEXT
CHECK (task_type IN ('prep', 'vocabulary-quiz', 'content-test', 'reading', 'set-text', 'other'));
```

### 3. Idle Threshold Standardisation
- Update `task-tracker.js` `IDLE_THRESHOLD` from 180 to 120 (match reading-tracker)
- Single source of truth for idle detection

---

## Interventions Quadrant - How It Works

This is the most impactful teacher feature. Here's the algorithm:

### Performance Score (Y-axis, 0-100)
Weighted average of available metrics for the class type:
- **Vocab accuracy** (% of attempted words at >70% accuracy) - weight 30%
- **Quiz/test average score** - weight 30%
- **Task completion rate** (completed / assigned) - weight 20%
- **Reading progress** (% of assigned reading done) - weight 20%

Only non-zero weights for metrics that exist for the class type.

### Effort Score (X-axis, 0-100)
Composite of engagement signals:
- **Active days** in last 30 days (out of school days) - weight 40%
- **Time spent** relative to class average - weight 30%
- **Tasks attempted** (not just completed) - weight 30%

### Quadrant Assignment
- **Needs Stretch** (top-right): Performance >= 70 AND Effort >= 60 - These students are doing well and working hard. Push them further.
- **Needs More Effort** (top-left): Performance >= 70 AND Effort < 60 - Capable but coasting. Need to engage more.
- **Praise for Commitment** (bottom-right): Performance < 70 AND Effort >= 60 - Working hard but struggling. Encourage and support.
- **Needs Support** (bottom-left): Performance < 70 AND Effort < 60 - At risk. Need intervention.

### Visualisation
Scatter plot with student initials/names as points. Hover for details. Click to go to student profile. Quadrant backgrounds lightly coloured (green/yellow/blue/red).

---

## Implementation Phases

### Phase 1: Data Layer Cleanup
- Execute `student_id` migration across `set_text_progress`, `set_text_answers`, `classics_quiz_progress`
- Merge `spaced-repetition.js` logic into `task-tracker.js`
- Standardise idle threshold to 120s in `task-tracker.js`
- Add `task_type` column to `tasks` table
- Create `vocab_quiz_answers` table
- Move all analytics calculations out of dashboard files into `analytics-engine.js`

### Phase 2: Analytics Engine Enhancement
- Add interventions quadrant calculation (performance score + effort score)
- Add strengths/areas-for-improvement generation (plain language)
- Add "recently completed" query method
- Add student comparison/ranking within class
- Consolidate `student-tracking.js` task categorisation into analytics engine

### Phase 3: Teacher Dashboards
- Rebuild `class.html` with new layout:
  - Interventions quadrant (scatter plot)
  - Unified student tracker table (sortable)
  - Tab-filtered assignment grid
  - Activity heatmap
- Rebuild `student-profile.html` with:
  - Prev/next student navigation
  - Subject switcher for multi-class students
  - Strengths / areas for improvement
  - Unified tracker table
  - Activity chart with time range toggle

### Phase 4: Student Dashboard
- Rebuild `student.html` with new layout:
  - Class switcher with pending task badges
  - "All Classes" merged view
  - Headline metrics cards
  - Unified "My Progress" section
  - "What's Due" unified task list
  - Activity calendar (heatmap with week/month/year)
  - Recently completed feed

### Phase 5: Polish & Testing
- Test each class type: Latin, Greek, Classics, Prep Latin
- Test multi-class student (Latin + Classics)
- Test teacher views for each class type
- Mobile responsiveness pass
- Remove `student-tracking.js` if fully merged
- Update existing design docs to reflect new reality
- Clean up any remaining `user_id` references in code

---

## What NOT to Change

- **XP system** (`xp-system.js`) - Works well, students enjoy it, leave as-is
- **Vocabulary quiz mechanics** (`vocabulary-quiz.js`, `greek-vocabulary-quiz.js`) - The quiz flow itself is fine, we're just improving how results are tracked and displayed
- **Set text quiz mechanics** (`set-text-quiz.js`) - Same as above
- **Content tester mechanics** (`content-tester.js`) - Same
- **Navigation** (`navigation.js`) - Unrelated
- **Reading page UX** - The reading tracker indicator on lesson pages is fine; we're improving how that data shows on dashboards
- **Leaderboard on student dashboard** - Keep it for student motivation (remove from teacher class view only)

---

## Summary of Key Decisions

| Decision | Choice | Why |
|----------|--------|-----|
| Multi-class students | Class switcher + "All Classes" merged view | Students shouldn't have to maintain mental model across separate pages |
| Teacher "is student progressing?" | Interventions quadrant + unified tracker table | One glance shows who needs attention and why |
| Tracking duplication | Consolidate into task-tracker + analytics-engine | Two files doing different jobs, not four files overlapping |
| Per-question tracking | Store individual vocab answers (like set texts already do) | Enables Century Tech-style per-question grids |
| Idle detection | 2 minutes everywhere | Reading-tracker's 2min is more reasonable than task-tracker's 3min |
| Dashboard layout | Century Tech-inspired: metrics > progress > activity calendar | Proven UX pattern, user explicitly likes it |
| Student profile navigation | Prev/next arrows + subject dropdown | Teachers review students sequentially, shouldn't need to go back each time |
