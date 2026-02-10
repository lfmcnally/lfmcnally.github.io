-- ============================================
-- CHALLENGES SYSTEM
-- Teacher-created competitive vocab challenges
-- ============================================

-- Challenges table - stores challenge configuration
CREATE TABLE IF NOT EXISTS challenges (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    class_id UUID REFERENCES classes(id) ON DELETE CASCADE NOT NULL,
    created_by UUID REFERENCES auth.users(id) NOT NULL,
    title TEXT NOT NULL,
    challenge_type TEXT NOT NULL CHECK (challenge_type IN ('speed', 'streak', 'marathon')),
    -- speed: most correct in time limit
    -- streak: longest consecutive correct answers
    -- marathon: master all words fastest
    language TEXT NOT NULL CHECK (language IN ('latin', 'greek', 'prep-latin')),
    chapters INTEGER[] NOT NULL, -- which chapters to include
    word_from INTEGER, -- optional: start index within chapter words
    word_to INTEGER, -- optional: end index within chapter words
    time_limit_seconds INTEGER, -- for speed challenges (e.g. 300 = 5 mins)
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    expires_at TIMESTAMP WITH TIME ZONE -- optional auto-expiry
);

-- Challenge attempts table - stores student results
CREATE TABLE IF NOT EXISTS challenge_attempts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    challenge_id UUID REFERENCES challenges(id) ON DELETE CASCADE NOT NULL,
    student_id UUID REFERENCES auth.users(id) NOT NULL,
    score INTEGER DEFAULT 0, -- correct answers
    total_questions INTEGER DEFAULT 0, -- total attempted
    best_streak INTEGER DEFAULT 0, -- longest consecutive streak
    time_spent_seconds INTEGER DEFAULT 0,
    words_mastered INTEGER DEFAULT 0, -- for marathon mode
    completed BOOLEAN DEFAULT false,
    started_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    completed_at TIMESTAMP WITH TIME ZONE,
    UNIQUE(challenge_id, student_id) -- one attempt per student per challenge
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_challenges_class_id ON challenges(class_id);
CREATE INDEX IF NOT EXISTS idx_challenges_active ON challenges(is_active) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_challenge_attempts_challenge_id ON challenge_attempts(challenge_id);
CREATE INDEX IF NOT EXISTS idx_challenge_attempts_student_id ON challenge_attempts(student_id);

-- RLS Policies
ALTER TABLE challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenge_attempts ENABLE ROW LEVEL SECURITY;

-- Teachers can create/manage challenges for their classes
CREATE POLICY "Teachers can manage challenges for their classes"
    ON challenges FOR ALL
    USING (
        created_by = auth.uid()
        OR EXISTS (
            SELECT 1 FROM classes WHERE classes.id = challenges.class_id AND classes.teacher_id = auth.uid()
        )
        OR EXISTS (
            SELECT 1 FROM class_teachers WHERE class_teachers.class_id = challenges.class_id AND class_teachers.teacher_id = auth.uid()
        )
    );

-- Students can view challenges for their classes
CREATE POLICY "Students can view challenges for their classes"
    ON challenges FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM class_members WHERE class_members.class_id = challenges.class_id AND class_members.student_id = auth.uid()
        )
    );

-- Students can insert/update their own attempts
CREATE POLICY "Students can manage their own challenge attempts"
    ON challenge_attempts FOR ALL
    USING (student_id = auth.uid());

-- Teachers can view all attempts for their class challenges
CREATE POLICY "Teachers can view challenge attempts for their classes"
    ON challenge_attempts FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM challenges
            JOIN classes ON classes.id = challenges.class_id
            WHERE challenges.id = challenge_attempts.challenge_id
            AND (
                classes.teacher_id = auth.uid()
                OR EXISTS (
                    SELECT 1 FROM class_teachers
                    WHERE class_teachers.class_id = classes.id
                    AND class_teachers.teacher_id = auth.uid()
                )
            )
        )
    );

-- Enable realtime for live scoreboard
ALTER PUBLICATION supabase_realtime ADD TABLE challenge_attempts;
