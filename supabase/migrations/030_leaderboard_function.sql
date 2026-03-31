-- ============================================
-- LEADERBOARD FUNCTION — Aggregated time by student
-- ============================================
-- Returns anonymised leaderboard data (first name + last initial)
-- for a given content_path pattern and time window.
-- Uses SECURITY DEFINER to bypass RLS so all students' time is visible.

CREATE OR REPLACE FUNCTION get_leaderboard(
    path_filter TEXT,
    since_date TIMESTAMPTZ DEFAULT NULL,
    reading_only BOOLEAN DEFAULT FALSE,
    max_results INT DEFAULT 15
)
RETURNS TABLE (
    student_id UUID,
    display_name TEXT,
    total_seconds BIGINT
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN QUERY
    SELECT
        ta.student_id,
        -- Anonymise: first name + last initial
        CASE
            WHEN u.full_name IS NULL OR u.full_name = '' THEN 'Anonymous'
            WHEN position(' ' in trim(u.full_name)) = 0 THEN trim(u.full_name)
            ELSE split_part(trim(u.full_name), ' ', 1) || ' ' || left(split_part(trim(u.full_name), ' ', array_length(string_to_array(trim(u.full_name), ' '), 1)), 1)
        END AS display_name,
        COALESCE(SUM(ta.time_spent_seconds), 0)::BIGINT AS total_seconds
    FROM task_attempts ta
    JOIN users u ON u.id = ta.student_id
    WHERE
        (path_filter IS NULL OR ta.content_path ILIKE '%' || path_filter || '%')
        AND (since_date IS NULL OR ta.started_at >= since_date)
        AND (NOT reading_only OR ta.total_questions = 0 OR ta.total_questions IS NULL)
    GROUP BY ta.student_id, u.full_name
    HAVING COALESCE(SUM(ta.time_spent_seconds), 0) > 0
    ORDER BY total_seconds DESC
    LIMIT max_results;
END;
$$;
