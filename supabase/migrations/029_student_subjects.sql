-- ============================================
-- STUDENT SUBJECTS — Personal progress tracking
-- ============================================
-- Allows students to choose which subjects/levels they want to track
-- on their personal progress page, independent of class membership.
--
-- subject_key values match existing class type keys:
--   latin-prep, latin-gcse, latin-alevel,
--   greek-gcse, greek-alevel,
--   civ-gcse, civ-alevel

CREATE TABLE IF NOT EXISTS student_subjects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    subject_key TEXT NOT NULL CHECK (subject_key IN (
        'latin-prep', 'latin-gcse', 'latin-alevel',
        'greek-gcse', 'greek-alevel',
        'civ-gcse', 'civ-alevel'
    )),
    added_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(student_id, subject_key)
);

-- Index for fast lookup by student
CREATE INDEX IF NOT EXISTS idx_student_subjects_student
    ON student_subjects(student_id);

-- RLS policies
ALTER TABLE student_subjects ENABLE ROW LEVEL SECURITY;

-- Students can read their own subjects
CREATE POLICY student_subjects_select ON student_subjects
    FOR SELECT USING (auth.uid() = student_id);

-- Students can insert their own subjects
CREATE POLICY student_subjects_insert ON student_subjects
    FOR INSERT WITH CHECK (auth.uid() = student_id);

-- Students can delete their own subjects
CREATE POLICY student_subjects_delete ON student_subjects
    FOR DELETE USING (auth.uid() = student_id);

-- Teachers/admins can read any student's subjects (for class views)
CREATE POLICY student_subjects_teacher_select ON student_subjects
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM users WHERE id = auth.uid() AND role IN ('teacher', 'admin')
        )
    );
