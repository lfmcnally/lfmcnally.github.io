-- ============================================
-- ILIAD QUIZ QUESTIONS
-- ============================================
-- Shared question bank for Iliad flashcard retrieval quizzes.
-- Public read so quiz pages work for logged-out users.
-- Admin-only write via admin page at /classical-civ/iliad/admin.html

CREATE TABLE IF NOT EXISTS iliad_quiz_questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lesson TEXT NOT NULL,              -- e.g. '1.1', '7.5'
    lesson_title TEXT NOT NULL,
    question TEXT NOT NULL,
    model_answer TEXT NOT NULL,
    key_points JSONB NOT NULL DEFAULT '[]'::jsonb,
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_iliad_quiz_questions_lesson
    ON iliad_quiz_questions(lesson);

ALTER TABLE iliad_quiz_questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view iliad quiz questions"
    ON iliad_quiz_questions FOR SELECT
    USING (true);

CREATE POLICY "Admins can insert iliad quiz questions"
    ON iliad_quiz_questions FOR INSERT
    WITH CHECK (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = true)
    );

CREATE POLICY "Admins can update iliad quiz questions"
    ON iliad_quiz_questions FOR UPDATE
    USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = true)
    );

CREATE POLICY "Admins can delete iliad quiz questions"
    ON iliad_quiz_questions FOR DELETE
    USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = true)
    );

CREATE OR REPLACE FUNCTION update_iliad_quiz_questions_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER iliad_quiz_questions_updated
    BEFORE UPDATE ON iliad_quiz_questions
    FOR EACH ROW
    EXECUTE FUNCTION update_iliad_quiz_questions_timestamp();
