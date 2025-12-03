-- Migration: Add Co-Teachers Feature
-- Run this SQL in your Supabase SQL Editor to enable the co-teacher functionality

-- Create class_teachers table for many-to-many relationship between teachers and classes
CREATE TABLE IF NOT EXISTS class_teachers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
    teacher_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    added_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(class_id, teacher_id)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_class_teachers_class_id ON class_teachers(class_id);
CREATE INDEX IF NOT EXISTS idx_class_teachers_teacher_id ON class_teachers(teacher_id);

-- Enable Row Level Security
ALTER TABLE class_teachers ENABLE ROW LEVEL SECURITY;

-- Policy: Teachers can view co-teacher entries for classes they own or co-teach
CREATE POLICY "Teachers can view co-teachers of their classes"
ON class_teachers FOR SELECT
TO authenticated
USING (
    -- User is the class owner
    EXISTS (
        SELECT 1 FROM classes
        WHERE classes.id = class_teachers.class_id
        AND classes.teacher_id = auth.uid()
    )
    OR
    -- User is a co-teacher of this class
    EXISTS (
        SELECT 1 FROM class_teachers ct
        WHERE ct.class_id = class_teachers.class_id
        AND ct.teacher_id = auth.uid()
    )
);

-- Policy: Only class owners can add co-teachers
CREATE POLICY "Class owners can add co-teachers"
ON class_teachers FOR INSERT
TO authenticated
WITH CHECK (
    EXISTS (
        SELECT 1 FROM classes
        WHERE classes.id = class_teachers.class_id
        AND classes.teacher_id = auth.uid()
    )
);

-- Policy: Only class owners can remove co-teachers
CREATE POLICY "Class owners can remove co-teachers"
ON class_teachers FOR DELETE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM classes
        WHERE classes.id = class_teachers.class_id
        AND classes.teacher_id = auth.uid()
    )
);

-- Grant access to the authenticated role
GRANT ALL ON class_teachers TO authenticated;

-- Comment for documentation
COMMENT ON TABLE class_teachers IS 'Links co-teachers to classes. Allows multiple teachers to manage a single class.';
COMMENT ON COLUMN class_teachers.class_id IS 'The class being co-taught';
COMMENT ON COLUMN class_teachers.teacher_id IS 'The co-teacher (not the original owner)';
COMMENT ON COLUMN class_teachers.added_at IS 'When the co-teacher was added';
