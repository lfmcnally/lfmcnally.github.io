// ============================================
// CLASSICALIA - VOCAB REVIEW ENGINE
// ============================================
// Manages smart review sessions combining:
// - Words due for spaced repetition review
// - Words marked as tricky
// - Words with low accuracy (struggling)

const vocabReviewEngine = {
    // Current review session data
    reviewWords: [],
    currentIndex: 0,
    sessionStats: {
        total: 0,
        correct: 0,
        dueReviewed: 0,
        trickyReviewed: 0
    },
    userId: null,
    language: 'latin',

    // Initialize the review engine
    async init(language = 'latin') {
        this.language = language;

        if (typeof supabase === 'undefined') {
            console.error('Supabase not available');
            return false;
        }

        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            console.log('User not logged in');
            return false;
        }

        this.userId = user.id;
        return true;
    },

    // Load words for smart review
    async loadSmartReviewWords(limit = 30) {
        if (!this.userId) {
            const ready = await this.init(this.language);
            if (!ready) return [];
        }

        if (typeof spacedRepetition !== 'undefined') {
            this.reviewWords = await spacedRepetition.getSmartReviewWords(
                this.userId,
                this.language,
                limit
            );
        } else {
            // Fallback: load from database directly
            this.reviewWords = await this.loadReviewWordsDirect(limit);
        }

        this.currentIndex = 0;
        this.sessionStats = {
            total: this.reviewWords.length,
            correct: 0,
            dueReviewed: 0,
            trickyReviewed: 0
        };

        return this.reviewWords;
    },

    // Load only tricky words
    async loadTrickyOnlyWords(limit = 30) {
        if (!this.userId) {
            const ready = await this.init(this.language);
            if (!ready) return [];
        }

        if (typeof spacedRepetition !== 'undefined') {
            this.reviewWords = await spacedRepetition.getTrickyWords(
                this.userId,
                this.language,
                limit
            );
        } else {
            this.reviewWords = await this.loadTrickyWordsDirect(limit);
        }

        // Mark all as tricky reason
        this.reviewWords = this.reviewWords.map(w => ({ ...w, reviewReason: 'tricky' }));

        this.currentIndex = 0;
        this.sessionStats = {
            total: this.reviewWords.length,
            correct: 0,
            dueReviewed: 0,
            trickyReviewed: 0
        };

        return this.reviewWords;
    },

    // Load only due-for-review words (spaced repetition)
    async loadDueWords(limit = 30) {
        if (!this.userId) {
            const ready = await this.init(this.language);
            if (!ready) return [];
        }

        if (typeof spacedRepetition !== 'undefined') {
            this.reviewWords = await spacedRepetition.getDueWords(
                this.userId,
                this.language,
                limit
            );
        } else {
            this.reviewWords = await this.loadDueWordsDirect(limit);
        }

        // Mark all as due reason
        this.reviewWords = this.reviewWords.map(w => ({ ...w, reviewReason: 'due' }));

        this.currentIndex = 0;
        this.sessionStats = {
            total: this.reviewWords.length,
            correct: 0,
            dueReviewed: 0,
            trickyReviewed: 0
        };

        return this.reviewWords;
    },

    // Direct database queries (fallback if spacedRepetition not loaded)
    async loadReviewWordsDirect(limit) {
        const now = new Date().toISOString();

        // Get due words
        const { data: dueWords } = await supabase
            .from('word_mastery')
            .select('*')
            .eq('student_id', this.userId)
            .eq('language', this.language)
            .lte('next_review_at', now)
            .limit(Math.floor(limit * 0.6));

        // Get tricky words
        const { data: trickyWords } = await supabase
            .from('word_mastery')
            .select('*')
            .eq('student_id', this.userId)
            .eq('language', this.language)
            .eq('is_tricky', true)
            .limit(Math.floor(limit * 0.4));

        // Combine and deduplicate
        const wordMap = new Map();
        (dueWords || []).forEach(w => wordMap.set(w.id, { ...w, reviewReason: 'due' }));
        (trickyWords || []).forEach(w => {
            if (!wordMap.has(w.id)) {
                wordMap.set(w.id, { ...w, reviewReason: 'tricky' });
            }
        });

        return Array.from(wordMap.values()).slice(0, limit);
    },

    async loadTrickyWordsDirect(limit) {
        const { data } = await supabase
            .from('word_mastery')
            .select('*')
            .eq('student_id', this.userId)
            .eq('language', this.language)
            .eq('is_tricky', true)
            .limit(limit);

        return data || [];
    },

    async loadDueWordsDirect(limit) {
        const now = new Date().toISOString();

        const { data } = await supabase
            .from('word_mastery')
            .select('*')
            .eq('student_id', this.userId)
            .eq('language', this.language)
            .lte('next_review_at', now)
            .limit(limit);

        return data || [];
    },

    // Get current word for review
    getCurrentWord() {
        if (this.currentIndex >= this.reviewWords.length) {
            return null;
        }
        return this.reviewWords[this.currentIndex];
    },

    // Record answer for current word and advance
    async recordAnswer(isCorrect) {
        const word = this.getCurrentWord();
        if (!word) return null;

        // Update session stats
        if (isCorrect) {
            this.sessionStats.correct++;
        }

        if (word.reviewReason === 'due') {
            this.sessionStats.dueReviewed++;
        } else if (word.reviewReason === 'tricky') {
            this.sessionStats.trickyReviewed++;
        }

        // Update spaced repetition schedule
        if (typeof spacedRepetition !== 'undefined' && word.id) {
            await spacedRepetition.recordReviewResult(
                word.id,
                isCorrect,
                word.review_interval_days || 1
            );
        }

        // Move to next word
        this.currentIndex++;

        return {
            isComplete: this.currentIndex >= this.reviewWords.length,
            remaining: this.reviewWords.length - this.currentIndex,
            stats: { ...this.sessionStats }
        };
    },

    // Get summary of available review words
    async getReviewSummary() {
        if (!this.userId) {
            const ready = await this.init(this.language);
            if (!ready) return null;
        }

        let dueCount = 0;
        let trickyCount = 0;
        let masteredCount = 0;

        if (typeof spacedRepetition !== 'undefined') {
            [dueCount, trickyCount, masteredCount] = await Promise.all([
                spacedRepetition.getDueWordCount(this.userId, this.language),
                spacedRepetition.getTrickyWordCount(this.userId, this.language),
                spacedRepetition.getMasteredWordCount(this.userId, this.language)
            ]);
        } else {
            // Direct queries
            const now = new Date().toISOString();

            const [dueResult, trickyResult, masteredResult] = await Promise.all([
                supabase
                    .from('word_mastery')
                    .select('id', { count: 'exact', head: true })
                    .eq('student_id', this.userId)
                    .eq('language', this.language)
                    .lte('next_review_at', now),
                supabase
                    .from('word_mastery')
                    .select('id', { count: 'exact', head: true })
                    .eq('student_id', this.userId)
                    .eq('language', this.language)
                    .eq('is_tricky', true),
                supabase
                    .from('word_mastery')
                    .select('id', { count: 'exact', head: true })
                    .eq('student_id', this.userId)
                    .eq('language', this.language)
                    .not('mastered_at', 'is', null)
            ]);

            dueCount = dueResult.count || 0;
            trickyCount = trickyResult.count || 0;
            masteredCount = masteredResult.count || 0;
        }

        return {
            dueForReview: dueCount,
            trickyWords: trickyCount,
            masteredWords: masteredCount,
            totalToReview: dueCount + trickyCount
        };
    },

    // Convert database word format to quiz word format
    toQuizWord(dbWord) {
        // The word_latin field stores the source language word (Latin or Greek)
        // Determine which field to use based on language
        const isGreek = this.language === 'greek';

        return {
            latin: isGreek ? undefined : dbWord.word_latin,
            greek: isGreek ? dbWord.word_latin : undefined,
            english: dbWord.word_english,
            chapter: dbWord.chapter,
            info: `Chapter ${dbWord.chapter || '?'}`,
            // Include review metadata
            _reviewId: dbWord.id,
            _reviewReason: dbWord.reviewReason,
            _isTricky: dbWord.is_tricky,
            _intervalDays: dbWord.review_interval_days
        };
    },

    // Get review words in quiz-compatible format
    getQuizWords() {
        return this.reviewWords.map(w => this.toQuizWord(w));
    },

    // Reset session
    reset() {
        this.reviewWords = [];
        this.currentIndex = 0;
        this.sessionStats = {
            total: 0,
            correct: 0,
            dueReviewed: 0,
            trickyReviewed: 0
        };
    }
};

// Make available globally
window.vocabReviewEngine = vocabReviewEngine;
