-- ============================================
-- ESSAY SUBMISSIONS - Teacher essay tracking
-- ============================================
-- Allows teachers to track student essay submissions with marks,
-- feedback, dates submitted/returned, and optional file attachments.

CREATE TABLE IF NOT EXISTS essay_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    teacher_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    mark TEXT,                          -- flexible: "A+", "72%", "7/10", etc.
    feedback TEXT,
    date_submitted DATE,
    date_returned DATE,
    file_name TEXT,                     -- original filename for display
    file_data TEXT,                     -- base64-encoded file content (data URL)
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE essay_submissions ENABLE ROW LEVEL SECURITY;

-- Teachers can manage essays they created
CREATE POLICY "Teachers can view own essays"
    ON essay_submissions FOR SELECT
    USING (auth.uid() = teacher_id);

CREATE POLICY "Teachers can insert own essays"
    ON essay_submissions FOR INSERT
    WITH CHECK (auth.uid() = teacher_id);

CREATE POLICY "Teachers can update own essays"
    ON essay_submissions FOR UPDATE
    USING (auth.uid() = teacher_id);

CREATE POLICY "Teachers can delete own essays"
    ON essay_submissions FOR DELETE
    USING (auth.uid() = teacher_id);

-- Co-teachers can also view essays for classes they teach
CREATE POLICY "Co-teachers can view class essays"
    ON essay_submissions FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM class_teachers
            WHERE class_teachers.class_id = essay_submissions.class_id
            AND class_teachers.teacher_id = auth.uid()
        )
    );

-- Index for efficient lookups
CREATE INDEX idx_essay_submissions_teacher ON essay_submissions(teacher_id);
CREATE INDEX idx_essay_submissions_class ON essay_submissions(class_id);
CREATE INDEX idx_essay_submissions_student ON essay_submissions(student_id);

-- Auto-update timestamp
CREATE OR REPLACE FUNCTION update_essay_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER essay_submissions_updated
    BEFORE UPDATE ON essay_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_essay_timestamp();
