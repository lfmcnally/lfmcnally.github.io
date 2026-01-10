# Student Tracking System Refactoring Plan

## Current Issues Identified

### 1. Fragmented Tracking Display
- Vocabulary, quizzes, reading, and prep are scattered across the dashboard
- Students in multiple classes don't have a clear overview of what needs attention
- Different tracking for Latin/Greek/Classics creates confusion

### 2. Missing Features
- **Content Tester tracking** - Not implemented at all
- **Prep assignment clarity** - Mixed with regular tasks, hard to distinguish

### 3. Database Inconsistencies
- `set_text_progress` uses `user_id`
- `word_mastery` uses `student_id`
- Makes cross-table queries harder

### 4. Quiz Tracking Complexity
- 3 separate quiz systems (vocabulary, set text, classics)
- No unified "quiz progress" view for students
- Teachers can't easily see overall quiz performance

### 5. Reading Tracking Issues
- Heavy reliance on localStorage for lesson times
- Data doesn't sync across devices
- No clear "reading assignments" vs "optional reading"

### 6. Classics Class UX
- Features hidden for Classics students (achievements, leaderboards)
- Creates inconsistent experience
- Word bank section completely hidden even though they might need it for other classes

---

## Proposed Solutions

### STUDENT DASHBOARD IMPROVEMENTS

#### A. New Unified Tracking Sections (Per Class)

**1. "What's Due" Section** (Top Priority)
- All upcoming tasks with due dates
- Clear labels: Prep Assignment, Vocabulary Quiz, Content Test, Reading Assignment
- Visual indicators: Overdue (red), Due Soon (orange), Upcoming (blue)
- Completion status clearly shown

**2. "My Progress" Section** (Per Subject Type)

**For Latin/Prep-Latin:**
- Vocabulary Mastery Card
  - Words mastered count
  - Words needing practice
  - Recent practice activity
  - Quick "Practice Now" button
- Set Text Progress
  - 3 texts with clear progress bars
  - Score badges (mastered/proficient/needs work)
  - Latest attempt shown
- Reading Tracking
  - Lessons completed vs total
  - Time spent this week
  - Current reading assignment highlighted

**For Greek:**
- Vocabulary Mastery Card (same as Latin)
- Grammar Progress (if applicable)
- Reading Tracking (Greek Art, etc.)

**For Classics:**
- Topic Mastery Grid
  - Politics course progress
  - Myth course progress
  - Visual progress indicators per subtopic
- Reading Tracking (Iliad, Aeneid, Greek Art)
- Content Test Performance

**3. "Practice & Review" Section**
- Quick access buttons to:
  - Vocabulary practice (filtered by mastery level)
  - Content testers (new feature)
  - Set text practice
  - Reading assignments

**4. "Multi-Class Overview"** (If student in >1 class)
- Quick switcher between classes at top
- "All My Tasks" view showing everything across all classes
- Merged calendar showing activity across all subjects

#### B. New Content Tester Tracking

**Database Table:** `content_test_attempts`
```sql
- student_id
- class_id
- test_id
- topic
- score_percentage
- questions_total
- questions_correct
- completed_at
- time_spent_seconds
```

**Display:**
- Similar to quiz tracking
- Shows topics mastered, topics needing review
- Practice mode available for each topic
- Progress tracking per chapter/unit

#### C. Improved Prep Assignment Tracking

**Changes:**
- Visually distinct card style for prep assignments
- "Prep Homework" label clearly shown
- Separate counter in dashboard header: "3 prep tasks due"
- Filter toggle: Show All Tasks / Prep Only / Regular Only

---

### TEACHER DASHBOARD IMPROVEMENTS

#### A. Class Overview Enhancements

**1. Student Progress Table**
- Sortable columns:
  - Vocabulary mastered (for Latin/Greek)
  - Set text average score
  - Content test performance
  - Reading time this week
  - Overall engagement score
- Color coding: Green (on track), Orange (needs attention), Red (struggling)
- Click student name to see detailed breakdown

**2. Assignment Tracking**
- Visual grid showing which students completed which assignments
- Filter by: All / Prep / Quizzes / Content Tests / Reading
- See at a glance who's behind

**3. Class Performance Analytics**
- Average vocabulary mastery rate
- Quiz performance trends
- Reading engagement (time spent)
- Comparison to previous terms (if data available)

#### B. Individual Student View

**Detailed Modal When Clicking Student:**
- Full breakdown of their progress
- All tracking categories side-by-side
- Recent activity timeline
- Ability to add teacher notes/comments

---

### MULTI-CLASS STUDENT HANDLING

#### Improvements:

**1. Smart Class Switcher**
- Dropdown at top shows all classes
- Badge showing number of pending tasks per class
- Option to view "All Classes" combined view

**2. Combined Dashboard View**
- Toggle: "Current Class" vs "All My Classes"
- When viewing all:
  - Tasks from all classes shown together
  - Grouped by due date
  - Class label on each item
  - Combined XP and streak tracking

**3. Subject-Specific Tracking**
- Vocabulary tracking shows combined Latin + Prep-Latin + Greek words
- Filter available: "Show all languages" or "Current class only"
- Reading tracking shows all courses (Iliad, Aeneid, Greek Art) with class labels

---

### DATABASE SCHEMA IMPROVEMENTS

#### 1. Standardize Field Names
- Migrate all `user_id` fields to `student_id` for consistency
- Update queries across all files

#### 2. New Tables

**`content_tests`** - Define available content tests
```sql
- id
- class_id
- title
- topic
- created_at
```

**`content_test_attempts`** - Track student attempts
```sql
- id
- student_id
- test_id
- score_percentage
- questions_total
- questions_correct
- completed_at
- time_spent_seconds
```

**`reading_assignments`** - Formal reading assignments vs optional reading
```sql
- id
- class_id
- lesson_path
- title
- due_date
- created_at
```

#### 3. Enhanced Task Types
- Add `task_type` enum: 'vocabulary-quiz', 'content-test', 'reading', 'prep-vocab', 'set-text'
- Makes filtering and displaying much clearer

---

### UI/UX CONSISTENCY

#### 1. Unified Card Design
- All tracking cards follow same visual pattern
- Header: Icon + Title + Action Button
- Body: Stats grid or progress bars
- Footer: Last activity or quick link

#### 2. Color System
- Mastered/Proficient: Green
- Learning/In Progress: Blue
- Needs Practice/Attention: Orange
- Struggling/Overdue: Red
- Not Started: Gray

#### 3. Consistent Icons
- 📖 Vocabulary
- 📝 Quizzes/Tests
- 📚 Reading
- ✏️ Prep Work
- 🎯 Content Tests
- 📊 Progress

#### 4. Remove Classics Feature Hiding
- Show achievements, leaderboards, activity calendar for ALL class types
- Adjust metrics shown based on class type, but keep consistent UI
- Students in multiple classes need consistent interface

---

### READING TRACKER IMPROVEMENTS

#### Changes:
1. Store lesson-level times in database, not localStorage
2. New `reading_sessions` table for granular tracking
3. Teachers can assign specific readings with due dates
4. Students see: Required Reading vs Additional Reading
5. Progress bars for assigned readings
6. Time goals can be set per reading assignment

---

### IMPLEMENTATION PRIORITY

**Phase 1: Critical Fixes**
1. ✅ Refactor student dashboard layout - organize tracking sections
2. ✅ Add content tester tracking system
3. ✅ Improve prep assignment visibility
4. ✅ Consolidate quiz display

**Phase 2: Teacher Improvements**
5. Enhance teacher class dashboard
6. Add student progress table
7. Add assignment completion grid

**Phase 3: Multi-Class & Polish**
8. Improve multi-class switcher and combined views
9. Update reading tracker database integration
10. Remove Classics feature hiding
11. Standardize database field names (migration)

**Phase 4: Testing**
12. Test with Latin class student
13. Test with Greek class student
14. Test with Classics class student
15. Test with multi-class student (Latin + Classics)
16. Test teacher views

---

## Success Metrics

After refactoring, we should achieve:

1. **Clarity** - Student knows exactly what's due and what needs attention
2. **Consistency** - Same UI patterns across all class types
3. **Completeness** - All tracking types visible and accessible
4. **Multi-class Support** - Students in >1 class have clear view across all
5. **Teacher Insight** - Teachers can quickly identify struggling students
6. **Data Integrity** - Database consistent and well-structured

---

## Files to Modify

### Student-Facing:
- `/dashboard/student.html` - Main refactor
- `/dashboard/student-hub.html` - Multi-class improvements
- `/dashboard/my-profile.html` - Minor updates

### Teacher-Facing:
- `/dashboard/class.html` - Major enhancements
- `/dashboard/teacher.html` - Minor updates

### Shared Libraries:
- `/shared/task-tracker.js` - Add content test tracking
- `/shared/reading-tracker.js` - Database improvements
- `/shared/vocabulary-quiz.js` - Better completion tracking
- `/shared/greek-vocabulary-quiz.js` - Better completion tracking
- `/shared/set-text-quiz.js` - Better completion tracking

### New Files:
- `/shared/content-test.js` - New content tester system
- `/dashboard/components/tracking-cards.js` - Reusable tracking card components

---

## Database Migrations Needed

1. Add `content_tests` table
2. Add `content_test_attempts` table
3. Add `reading_assignments` table
4. Add `reading_sessions` table (optional, for granular tracking)
5. Add `task_type` column to `tasks` table
6. Consider: Migrate `user_id` to `student_id` in `set_text_progress` and `set_text_answers`

---

## Next Steps

1. Get feedback on this plan
2. Start Phase 1 implementation
3. Test incrementally
4. Roll out progressively to minimize disruption
