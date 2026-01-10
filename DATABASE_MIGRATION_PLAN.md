# Database Field Name Standardization - Migration Plan

## Overview

This document outlines the plan to standardize student identifier field names across all database tables. Currently, some tables use `user_id` while others use `student_id`, making cross-table queries inconsistent and confusing.

## Current State Analysis

### Tables Using `student_id` (Correct)
- `word_mastery` - Uses `student_id`
- `task_attempts` - Uses `student_id`
- `class_members` - Uses `student_id`
- `content_test_attempts` - Uses `student_id` (new table from Phase 1)

### Tables Using `user_id` (Needs Migration)
- `set_text_progress` - Uses `user_id`
- `set_text_answers` - Uses `user_id`
- `classics_quiz_progress` - Likely uses `user_id` (needs verification)
- `reading_sessions` - Needs verification if exists

### Tables Using `user_id` Correctly (No Change)
- `users` - Core user table, uses `id` field
- `classes` - Teacher's class, uses `teacher_id` to reference users table
- Other tables that reference the users table for non-student purposes

## Migration Strategy

### Phase 1: Add New Columns (Non-Breaking)
This phase adds `student_id` columns alongside existing `user_id` columns.

#### 1.1 Add `student_id` to `set_text_progress`
```sql
ALTER TABLE set_text_progress
ADD COLUMN student_id UUID REFERENCES users(id);

-- Copy existing data
UPDATE set_text_progress
SET student_id = user_id;

-- Add index for performance
CREATE INDEX idx_set_text_progress_student_id
ON set_text_progress(student_id);
```

#### 1.2 Add `student_id` to `set_text_answers`
```sql
ALTER TABLE set_text_answers
ADD COLUMN student_id UUID REFERENCES users(id);

-- Copy existing data
UPDATE set_text_answers
SET student_id = user_id;

-- Add index for performance
CREATE INDEX idx_set_text_answers_student_id
ON set_text_answers(student_id);
```

#### 1.3 Add `student_id` to `classics_quiz_progress` (if applicable)
```sql
ALTER TABLE classics_quiz_progress
ADD COLUMN student_id UUID REFERENCES users(id);

-- Copy existing data
UPDATE classics_quiz_progress
SET student_id = user_id;

-- Add index for performance
CREATE INDEX idx_classics_quiz_progress_student_id
ON classics_quiz_progress(student_id);
```

### Phase 2: Update Application Code
Update all JavaScript files to use `student_id` instead of `user_id` when querying these tables.

#### Files to Update:
- `/shared/set-text-quiz.js` - Update queries to use `student_id`
- `/dashboard/student.html` - Update set text and classics quiz queries
- `/dashboard/class.html` - Update teacher view queries for set text data
- `/dashboard/student-profile.html` - Update profile queries
- Any other files that query these tables

#### Example Query Update:
```javascript
// OLD:
const { data } = await supabase
    .from('set_text_answers')
    .select('*')
    .eq('user_id', studentId);

// NEW:
const { data } = await supabase
    .from('set_text_answers')
    .select('*')
    .eq('student_id', studentId);
```

### Phase 3: Testing Period
- Deploy updated code with both `user_id` and `student_id` queries working
- Monitor for errors
- Verify all features work correctly
- Test with:
  - Latin class students
  - Greek class students
  - Classics class students
  - Multi-class students
  - Teacher views

### Phase 4: Make `student_id` Required (After Testing)
Once Phase 3 is complete and verified, make `student_id` the required field.

```sql
-- Make student_id NOT NULL
ALTER TABLE set_text_progress
ALTER COLUMN student_id SET NOT NULL;

ALTER TABLE set_text_answers
ALTER COLUMN student_id SET NOT NULL;

ALTER TABLE classics_quiz_progress
ALTER COLUMN student_id SET NOT NULL;
```

### Phase 5: Remove Old Columns (Final Cleanup)
After a grace period (1-2 weeks), remove the old `user_id` columns.

```sql
-- Remove old columns
ALTER TABLE set_text_progress DROP COLUMN user_id;
ALTER TABLE set_text_answers DROP COLUMN user_id;
ALTER TABLE classics_quiz_progress DROP COLUMN user_id;
```

## Rollback Plan

If issues arise during migration:

1. **Phase 2 Issues**: Revert code changes, keep using `user_id`
2. **Phase 3 Issues**: Application code can fall back to `user_id` since both columns exist
3. **Phase 4/5 Issues**: Restore `user_id` columns from database backup

## Benefits of Standardization

1. **Consistency** - All student references use the same field name
2. **Clarity** - Clear distinction between general users and students in class context
3. **Easier Queries** - Cross-table joins become simpler and more intuitive
4. **Better Code Maintenance** - Less confusion when writing new features
5. **Database Integrity** - Clear semantic meaning across all tables

## Timeline Recommendation

- **Phase 1**: 1 hour (SQL migrations)
- **Phase 2**: 2-3 hours (Code updates)
- **Phase 3**: 1 week (Testing period)
- **Phase 4**: 30 minutes (Make required)
- **Phase 5**: 30 minutes (Cleanup, after 1-2 week grace period)

**Total Time**: ~1-2 weeks including testing and grace periods

## Notes

- All migrations should be run during low-traffic periods
- Database backups should be taken before each phase
- Migration scripts should be version controlled
- Consider using a database migration tool (e.g., Supabase migrations, Flyway, or Liquibase) for production environments

## Status

- **Created**: 2026-01-10
- **Status**: PLAN - Not yet implemented
- **Phase**: Planning complete, ready for Phase 1 execution when approved
