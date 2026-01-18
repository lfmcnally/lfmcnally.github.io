// ============================================
// CLASSICALIA - SPACED REPETITION SYSTEM
// ============================================
// Manages spaced repetition scheduling for vocabulary words.
// Based on a simplified SM-2 algorithm with fixed intervals.

const spacedRepetition = {
    // Review intervals in days (based on memory research)
    // After each successful review, advance to next interval
    // On failure, reset to 1 day
    INTERVALS: [1, 3, 7, 14, 30, 60, 120],

    // Calculate the next interval based on current interval and success
    calculateNextInterval(currentIntervalDays, wasCorrect) {
        if (!wasCorrect) {
            // Failed review: reset to shortest interval
            return this.INTERVALS[0];
        }

        // Successful review: advance to next interval
        const currentIdx = this.INTERVALS.indexOf(currentIntervalDays);
        if (currentIdx === -1) {
            // Not in standard intervals, find closest
            const closestIdx = this.INTERVALS.findIndex(i => i >= currentIntervalDays);
            const nextIdx = closestIdx === -1 ? this.INTERVALS.length - 1 : Math.min(closestIdx + 1, this.INTERVALS.length - 1);
            return this.INTERVALS[nextIdx];
        }

        // Move to next interval (or stay at max)
        const nextIdx = Math.min(currentIdx + 1, this.INTERVALS.length - 1);
        return this.INTERVALS[nextIdx];
    },

    // Calculate next review date from now
    calculateNextReviewDate(intervalDays) {
        const now = new Date();
        now.setDate(now.getDate() + intervalDays);
        return now.toISOString();
    },

    // Schedule a review for a word (called when word is mastered or after a review)
    async scheduleReview(studentId, wordId, intervalDays = 1) {
        if (typeof supabase === 'undefined') {
            console.error('Supabase not available');
            return false;
        }

        const nextReviewAt = this.calculateNextReviewDate(intervalDays);

        const { error } = await supabase
            .from('word_mastery')
            .update({
                next_review_at: nextReviewAt,
                review_interval_days: intervalDays
            })
            .eq('id', wordId);

        if (error) {
            console.error('Error scheduling review:', error);
            return false;
        }

        console.log(`Scheduled review for word ${wordId} in ${intervalDays} days`);
        return true;
    },

    // Record a review result and schedule next review
    async recordReviewResult(wordId, wasCorrect, currentIntervalDays = 1) {
        if (typeof supabase === 'undefined') {
            console.error('Supabase not available');
            return false;
        }

        const newInterval = this.calculateNextInterval(currentIntervalDays, wasCorrect);
        const nextReviewAt = this.calculateNextReviewDate(newInterval);

        const updateData = {
            next_review_at: nextReviewAt,
            review_interval_days: newInterval,
            last_seen_at: new Date().toISOString()
        };

        // If successful, increment review count
        if (wasCorrect) {
            // We need to get current count first
            const { data: existing } = await supabase
                .from('word_mastery')
                .select('review_count')
                .eq('id', wordId)
                .single();

            updateData.review_count = (existing?.review_count || 0) + 1;
        }

        const { error } = await supabase
            .from('word_mastery')
            .update(updateData)
            .eq('id', wordId);

        if (error) {
            console.error('Error recording review result:', error);
            return false;
        }

        console.log(`Review recorded: ${wasCorrect ? 'success' : 'fail'}, next in ${newInterval} days`);
        return { success: true, newInterval, nextReviewAt };
    },

    // Get words that are due for review
    async getDueWords(studentId, language = null, limit = 30) {
        if (typeof supabase === 'undefined') {
            console.error('Supabase not available');
            return [];
        }

        const now = new Date().toISOString();

        let query = supabase
            .from('word_mastery')
            .select('*')
            .eq('student_id', studentId)
            .lte('next_review_at', now)
            .order('next_review_at', { ascending: true })
            .limit(limit);

        if (language) {
            query = query.eq('language', language);
        }

        const { data, error } = await query;

        if (error) {
            console.error('Error fetching due words:', error);
            return [];
        }

        return data || [];
    },

    // Get count of words due for review
    async getDueWordCount(studentId, language = null) {
        if (typeof supabase === 'undefined') {
            return 0;
        }

        const now = new Date().toISOString();

        let query = supabase
            .from('word_mastery')
            .select('id', { count: 'exact', head: true })
            .eq('student_id', studentId)
            .lte('next_review_at', now);

        if (language) {
            query = query.eq('language', language);
        }

        const { count, error } = await query;

        if (error) {
            console.error('Error counting due words:', error);
            return 0;
        }

        return count || 0;
    },

    // Get tricky words (explicitly marked)
    async getTrickyWords(studentId, language = null, limit = 30) {
        if (typeof supabase === 'undefined') {
            return [];
        }

        let query = supabase
            .from('word_mastery')
            .select('*')
            .eq('student_id', studentId)
            .eq('is_tricky', true)
            .order('last_seen_at', { ascending: true })
            .limit(limit);

        if (language) {
            query = query.eq('language', language);
        }

        const { data, error } = await query;

        if (error) {
            console.error('Error fetching tricky words:', error);
            return [];
        }

        return data || [];
    },

    // Get count of tricky words
    async getTrickyWordCount(studentId, language = null) {
        if (typeof supabase === 'undefined') {
            return 0;
        }

        let query = supabase
            .from('word_mastery')
            .select('id', { count: 'exact', head: true })
            .eq('student_id', studentId)
            .eq('is_tricky', true);

        if (language) {
            query = query.eq('language', language);
        }

        const { count, error } = await query;

        if (error) {
            console.error('Error counting tricky words:', error);
            return 0;
        }

        return count || 0;
    },

    // Toggle tricky status for a word
    async toggleTricky(wordMasteryId, currentTrickyStatus = null) {
        if (typeof supabase === 'undefined') {
            return { success: false, error: 'Supabase not available' };
        }

        // If we don't know current status, fetch it
        let isTricky = currentTrickyStatus;
        if (isTricky === null) {
            const { data } = await supabase
                .from('word_mastery')
                .select('is_tricky')
                .eq('id', wordMasteryId)
                .single();
            isTricky = data?.is_tricky || false;
        }

        const newTrickyStatus = !isTricky;

        const { error } = await supabase
            .from('word_mastery')
            .update({ is_tricky: newTrickyStatus })
            .eq('id', wordMasteryId);

        if (error) {
            console.error('Error toggling tricky status:', error);
            return { success: false, error };
        }

        return { success: true, isTricky: newTrickyStatus };
    },

    // Toggle tricky by word text (for use during quiz when we don't have the ID)
    async toggleTrickyByWord(studentId, wordLatin, language, currentTrickyStatus = null) {
        if (typeof supabase === 'undefined') {
            return { success: false, error: 'Supabase not available' };
        }

        // First find the word mastery record
        const { data: existing, error: fetchError } = await supabase
            .from('word_mastery')
            .select('id, is_tricky')
            .eq('student_id', studentId)
            .eq('word_latin', wordLatin)
            .eq('language', language)
            .maybeSingle();

        if (fetchError) {
            console.error('Error finding word:', fetchError);
            return { success: false, error: fetchError };
        }

        if (!existing) {
            // Word not yet in mastery table - need to create it first
            // This shouldn't normally happen during quiz since recordWordAnswer creates the record
            return { success: false, error: 'Word not found in mastery table' };
        }

        return this.toggleTricky(existing.id, existing.is_tricky);
    },

    // Get struggling words (low accuracy, not explicitly marked as tricky)
    async getStrugglingWords(studentId, language = null, limit = 20) {
        if (typeof supabase === 'undefined') {
            return [];
        }

        let query = supabase
            .from('word_mastery')
            .select('*')
            .eq('student_id', studentId)
            .gte('incorrect_count', 2) // At least 2 incorrect
            .order('incorrect_count', { ascending: false })
            .limit(limit * 2); // Fetch more to filter

        if (language) {
            query = query.eq('language', language);
        }

        const { data, error } = await query;

        if (error) {
            console.error('Error fetching struggling words:', error);
            return [];
        }

        // Filter to words with <60% accuracy
        const struggling = (data || []).filter(word => {
            const total = word.correct_count + word.incorrect_count;
            const accuracy = total > 0 ? word.correct_count / total : 0;
            return accuracy < 0.6;
        });

        return struggling.slice(0, limit);
    },

    // Get smart review words (combination of due, tricky, and struggling)
    async getSmartReviewWords(studentId, language = null, limit = 30) {
        // Priority: 60% due for review, 30% tricky, 10% struggling
        const dueLimit = Math.floor(limit * 0.6);
        const trickyLimit = Math.floor(limit * 0.3);
        const strugglingLimit = limit - dueLimit - trickyLimit;

        const [dueWords, trickyWords, strugglingWords] = await Promise.all([
            this.getDueWords(studentId, language, dueLimit),
            this.getTrickyWords(studentId, language, trickyLimit),
            this.getStrugglingWords(studentId, language, strugglingLimit)
        ]);

        // Combine and deduplicate (some words might be in multiple categories)
        const wordMap = new Map();

        // Add due words first (highest priority)
        dueWords.forEach(w => wordMap.set(w.id, { ...w, reviewReason: 'due' }));

        // Add tricky words (mark as tricky if not already due)
        trickyWords.forEach(w => {
            if (!wordMap.has(w.id)) {
                wordMap.set(w.id, { ...w, reviewReason: 'tricky' });
            }
        });

        // Add struggling words
        strugglingWords.forEach(w => {
            if (!wordMap.has(w.id)) {
                wordMap.set(w.id, { ...w, reviewReason: 'struggling' });
            }
        });

        const combined = Array.from(wordMap.values());

        // Shuffle to mix the categories
        for (let i = combined.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [combined[i], combined[j]] = [combined[j], combined[i]];
        }

        return combined.slice(0, limit);
    },

    // Get mastered words for a student (for excluding from practice)
    async getMasteredWords(studentId, language = null) {
        if (typeof supabase === 'undefined') {
            return [];
        }

        let query = supabase
            .from('word_mastery')
            .select('word_latin')
            .eq('student_id', studentId)
            .not('mastered_at', 'is', null);

        if (language) {
            query = query.eq('language', language);
        }

        const { data, error } = await query;

        if (error) {
            console.error('Error fetching mastered words:', error);
            return [];
        }

        return (data || []).map(w => w.word_latin);
    },

    // Get mastered word count
    async getMasteredWordCount(studentId, language = null) {
        if (typeof supabase === 'undefined') {
            return 0;
        }

        let query = supabase
            .from('word_mastery')
            .select('id', { count: 'exact', head: true })
            .eq('student_id', studentId)
            .not('mastered_at', 'is', null);

        if (language) {
            query = query.eq('language', language);
        }

        const { count, error } = await query;

        if (error) {
            console.error('Error counting mastered words:', error);
            return 0;
        }

        return count || 0;
    }
};

// Make available globally
window.spacedRepetition = spacedRepetition;
