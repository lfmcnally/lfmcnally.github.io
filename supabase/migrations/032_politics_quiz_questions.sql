-- ============================================
-- POLITICS QUIZ QUESTIONS
-- ============================================
-- Shared question bank for Politics of the Late Republic flashcard quizzes.
-- Public read so quiz pages work for logged-out users.
-- Admin-only write via admin page at /classical-civ/politics/admin.html

CREATE TABLE IF NOT EXISTS politics_quiz_questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lesson TEXT NOT NULL,              -- e.g. '1.1', '3.7'
    lesson_title TEXT NOT NULL,        -- e.g. 'What was the Roman Republic?'
    question TEXT NOT NULL,
    model_answer TEXT NOT NULL,
    key_points JSONB NOT NULL DEFAULT '[]'::jsonb,
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_politics_quiz_questions_lesson
    ON politics_quiz_questions(lesson);

-- Enable RLS
ALTER TABLE politics_quiz_questions ENABLE ROW LEVEL SECURITY;

-- Anyone (including anonymous) can read quiz questions
CREATE POLICY "Anyone can view politics quiz questions"
    ON politics_quiz_questions FOR SELECT
    USING (true);

-- Only admins can insert
CREATE POLICY "Admins can insert politics quiz questions"
    ON politics_quiz_questions FOR INSERT
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM users
            WHERE id = auth.uid() AND is_admin = true
        )
    );

-- Only admins can update
CREATE POLICY "Admins can update politics quiz questions"
    ON politics_quiz_questions FOR UPDATE
    USING (
        EXISTS (
            SELECT 1 FROM users
            WHERE id = auth.uid() AND is_admin = true
        )
    );

-- Only admins can delete
CREATE POLICY "Admins can delete politics quiz questions"
    ON politics_quiz_questions FOR DELETE
    USING (
        EXISTS (
            SELECT 1 FROM users
            WHERE id = auth.uid() AND is_admin = true
        )
    );

-- Auto-update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_politics_quiz_questions_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER politics_quiz_questions_updated
    BEFORE UPDATE ON politics_quiz_questions
    FOR EACH ROW
    EXECUTE FUNCTION update_politics_quiz_questions_timestamp();
