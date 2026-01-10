# Classicalia Progress Tracking System Redesign

## Overview

This redesign addresses the core issues with the Classicalia progress tracking system by implementing subject-enrollment based tracking with intelligent analytics, personalized recommendations, and enhanced teacher dashboards.

## Problems Solved

### Before
1. ❌ Latin/Greek students saw Classical Civ reading tracking (irrelevant)
2. ❌ Classical Civ students saw vocab tracking (irrelevant)
3. ❌ No weak area detection or personalized recommendations
4. ❌ Teacher dashboards lacked activity visualization
5. ❌ No intelligent insights or analytics

### After
1. ✅ Subject-specific tracking already filtered by class type
2. ✅ **NEW:** Intelligent analytics engine for weak area detection
3. ✅ **NEW:** Personalized recommendations for students
4. ✅ **NEW:** Activity heatmap visualization for teachers
5. ✅ **NEW:** Comprehensive analytics with actionable insights

## Core Principle

**Tracking is subject-enrollment based**: Students see only relevant tracking data based on their enrolled class type (Latin, Greek, Classical Civilisation, Prep Latin).

## Implementation Details

### 1. Analytics Engine (`shared/analytics-engine.js`)

A comprehensive analytics system that provides:

#### Features
- **Weak Area Detection**: Automatically identifies areas where students score below 70%
- **Performance Analysis**: Analyzes vocabulary, set texts, reading, content tests, and prep tasks
- **Activity Tracking**: Calculates total time, session counts, and activity streaks
- **Personalized Recommendations**: Generates targeted next steps based on performance

#### Subject-Specific Analysis

**For Latin Students:**
- Vocabulary mastery tracking (mastered/learning/struggling)
- Set text performance analysis (3 texts: Messalina, Baucis & Philemon, Otium)
- Content test tracking
- Prep task completion

**For Greek Students:**
- Vocabulary mastery tracking (Greek vocabulary)
- Content test tracking
- Prep task completion

**For Classical Civilisation Students:**
- Reading completion tracking (Iliad, Aeneid, Odyssey, Greek Art)
- Content test tracking
- Prep task completion

**For Prep Latin Students:**
- Vocabulary mastery tracking (Suburani vocabulary)
- Prep task completion

#### Key Methods

```javascript
// Analyze student performance for a specific subject
await analyticsEngine.analyzeStudentPerformance(studentId, classId, classType)

// Generate activity heatmap for teachers
await analyticsEngine.generateClassActivityHeatmap(classId, days)
```

#### Analytics Thresholds
- **Weak**: Below 70% accuracy
- **Okay**: 70-85% accuracy
- **Strong**: Above 85% accuracy
- **Minimum attempts**: 3 (to determine weak area)

### 2. Student Dashboard Enhancements (`dashboard/student.html`)

#### New Feature: Recommended Next Steps Card

**Location**: Right column, above "Upcoming Tasks"

**Features:**
- Shows top 3 personalized recommendations
- Priority-based (Urgent → High → Medium → Low)
- Color-coded by importance:
  - 🚨 Red: Urgent (overdue tasks)
  - ⚠️ Orange: High priority (weak areas)
  - 💡 Yellow: Medium priority (improvements)
  - ✨ Blue: Low priority (suggestions)
- Direct action links to relevant practice pages

**Recommendation Types:**
1. **Overdue Prep Tasks**: Highest priority
2. **Weak Vocabulary**: Practice struggling words
3. **Set Text Review**: Sections scoring below 70%
4. **Reading Assignments**: Start unread courses
5. **Content Test Retakes**: Tests scoring below 70%
6. **Activity Streaks**: Encourage regular practice

#### Implementation
```javascript
// Initialize analytics engine
analyticsEngine = new AnalyticsEngine(supabase);

// Load recommendations on dashboard load
loadRecommendations();
```

**Display Logic:**
- Hidden if no recommendations (shows "Great work!" message)
- Top 3 recommendations shown by default
- Link to view all if more than 3 exist

### 3. Teacher Dashboard Enhancements (`dashboard/class.html`)

#### New Feature: Activity Heatmap

**Location**: Above "Student Progress Overview" table

**Features:**
- GitHub-style contribution graph
- Visual representation of student activity over time
- Configurable time periods (14/30/60 days)
- Color intensity based on session count:
  - Gray: No activity
  - Light green: 1 session
  - Medium green: 2-3 sessions
  - Dark green: 4-5 sessions
  - Darker green: 5+ sessions
- Hover tooltips show:
  - Date
  - Number of sessions
  - Time spent (minutes)
  - Average score (if applicable)

**Summary Statistics:**
- Active students count (students with any activity)
- Total sessions across all students
- Total practice time (minutes)

**Time Period Selector:**
- Last 14 days
- Last 30 days (default)
- Last 60 days

#### Implementation
```javascript
// Initialize analytics engine
analyticsEngine = new AnalyticsEngine(supabase);

// Load heatmap on dashboard load
await loadActivityHeatmap();
```

### 4. Subject-Specific Filtering (Already Implemented)

The existing system already properly filters tracking by class type:

**Latin GCSE (`type = 'latin'`):**
- ✅ Vocabulary tracking (Latin)
- ✅ Set text quizzes (3 texts)
- ✅ Content tests
- ✅ Prep tasks

**Greek GCSE (`type = 'greek'`):**
- ✅ Vocabulary tracking (Greek)
- ✅ Content tests
- ✅ Prep tasks

**Classical Civilisation (`type = 'classics'`):**
- ✅ Reading tracking (Iliad, Aeneid, Odyssey, Greek Art)
- ✅ Content tests
- ✅ Prep tasks
- ❌ NO vocabulary tracking (correctly hidden)

**Prep Latin (`type = 'prep-latin'`):**
- ✅ Vocabulary tracking (Suburani)
- ✅ Prep tasks

## Data Structure

### Existing Tables (Used by Analytics)

1. **`class_members`** - Subject enrollment system
   - Links students to classes (many-to-many)
   - Each class has a `type` field

2. **`task_attempts`** - Unified tracking table
   - Stores all activity: vocabulary, reading, quizzes
   - Fields: `student_id`, `task_id`, `content_path`, `time_spent_seconds`, `score`, `completed_at`
   - `total_questions=0` indicates reading session

3. **`word_mastery`** - Vocabulary tracking
   - Fields: `student_id`, `word_latin`, `word_english`, `language`, `correct_count`, `incorrect_count`, `mastered_at`
   - Language: 'latin', 'greek', or 'prep-latin'

4. **`set_text_progress`** - Set text scores (Latin only)
   - Fields: `user_id`, `text_id`, `section_id`, `best_score`, `attempts`

5. **`content_test_attempts`** - Content test tracking
   - Fields: `student_id`, `test_id`, `score_percentage`, `questions_total`, `questions_correct`

6. **`tasks`** - Assigned prep work
   - Fields: `class_id`, `title`, `due_date`, `content_path`, `type`

## UI/UX Improvements

### Progressive Disclosure
- Recommendations card hidden if no recommendations
- Activity heatmap hidden if no students
- Subject-specific columns in teacher table

### Color Coding
- **Green**: Strong performance (≥85%)
- **Yellow**: Needs work (70-85%)
- **Red**: Urgent attention (<70%)
- **Gray**: Not started/no data

### Consistent Patterns
- Same card layout across student and teacher views
- Consistent color scheme (blue primary, green success, red urgent)
- Hover effects for interactivity

### Mobile-Friendly
- Heatmap scrolls horizontally on small screens
- Recommendation cards stack vertically
- Responsive grid layouts

## Technical Architecture

### Analytics Engine Architecture

```
AnalyticsEngine
├── analyzeStudentPerformance()
│   ├── _analyzeVocabulary()
│   ├── _analyzeSetTexts()
│   ├── _analyzeReading()
│   ├── _analyzeContentTests()
│   ├── _analyzePrepTasks()
│   ├── _calculateActivitySummary()
│   └── _generateRecommendations()
└── generateClassActivityHeatmap()
    └── Returns activity data for visualization
```

### Integration Points

1. **Student Dashboard**
   - Initializes `analyticsEngine` on page load
   - Calls `loadRecommendations()` to display personalized next steps
   - Shows recommendations card if data available

2. **Teacher Dashboard**
   - Initializes `analyticsEngine` after loading students
   - Calls `loadActivityHeatmap()` to display class activity
   - Shows heatmap card if students exist

3. **Both Dashboards**
   - Use same analytics engine for consistent data
   - Subject-aware (only analyzes relevant tracking)
   - Error-tolerant (graceful degradation)

## Files Modified

1. **`/shared/analytics-engine.js`** - NEW
   - Core analytics and recommendation engine

2. **`/dashboard/student.html`**
   - Added analytics engine import
   - Added recommendations card HTML
   - Added `loadRecommendations()` function
   - Integrated analytics into init flow

3. **`/dashboard/class.html`**
   - Added analytics engine import
   - Added activity heatmap card HTML
   - Added heatmap CSS styles
   - Added `loadActivityHeatmap()` function
   - Integrated analytics into init flow

## Benefits

### For Students
1. **Personalized Guidance**: Know exactly what to work on next
2. **Clear Priorities**: Urgent tasks highlighted first
3. **Motivation**: See progress and celebrate achievements
4. **Subject-Relevant**: Only see tracking for enrolled subjects

### For Teachers
1. **Visual Overview**: Quickly identify engaged vs. struggling students
2. **Activity Patterns**: Spot trends over time
3. **Data-Driven**: Make informed decisions about intervention
4. **Time-Saving**: At-a-glance insights without drilling into individual profiles

### For the System
1. **Scalable**: Analytics engine works across all subject types
2. **Maintainable**: Centralized analytics logic
3. **Extensible**: Easy to add new recommendation types
4. **Consistent**: Same data model across student and teacher views

## Future Enhancements (Not Implemented)

1. **Student Profile Subject Tabs**
   - Tabbed interface for students in multiple subjects
   - Detailed analytics per subject

2. **Export Functionality**
   - Download progress reports as CSV/PDF
   - For teacher records and reports

3. **Comparison View**
   - Class average vs. individual student
   - Percentile rankings

4. **Time Series Charts**
   - Progress over time graphs
   - Trend analysis

5. **Automated Interventions**
   - Email alerts for struggling students
   - Suggested resources based on weak areas

## Testing Recommendations

### Student Dashboard
1. Test with student in each subject type (Latin, Greek, Classics, Prep Latin)
2. Verify recommendations appear for students with weak areas
3. Verify "Great work!" message for high-performing students
4. Test recommendation action links

### Teacher Dashboard
1. Test heatmap with different time periods (14/30/60 days)
2. Verify heatmap shows correct activity levels
3. Test with classes of different sizes
4. Verify summary statistics are accurate
5. Test hover tooltips on heatmap cells

### Analytics Engine
1. Test weak area detection with various score thresholds
2. Test recommendation priority ordering
3. Test with students having incomplete data
4. Test streak calculation
5. Test with students in multiple classes

## Success Metrics

- ✅ Subject-specific tracking properly filtered
- ✅ Analytics engine successfully identifies weak areas
- ✅ Recommendations provide actionable next steps
- ✅ Activity heatmap visualizes class engagement
- ✅ No errors in console when loading dashboards
- ✅ Graceful degradation when data unavailable

## Conclusion

This redesign transforms the Classicalia progress tracking system from a simple data display into an intelligent, actionable system that provides personalized guidance to students and powerful insights to teachers. The subject-enrollment based approach ensures students only see relevant tracking, while the new analytics engine provides the intelligence to identify weaknesses and recommend improvements.
