// ============================================
// CLASSICALIA - TASK & WORD MASTERY TRACKER
// ============================================
// Tracks practice sessions (both assigned tasks and free practice)
// and individual word mastery for each student.
// Also awards XP for practice time and achievements.

const taskTracker = {
    isTracking: false,
    attemptId: null,
    taskId: null,
    startTime: null,
    lastActivityTime: null,
    activeTimeSeconds: 0, // Only counts actual activity time
    userId: null,
    language: 'latin', // Default language for word tracking
    wordsAnswered: [], // Track words answered this session
    questionsAnswered: 0,
    correctAnswers: 0,
    saveInterval: null,
    
    // Config
    MAX_TIME_PER_QUESTION: 120, // Max 2 minutes counted per question
    IDLE_THRESHOLD: 120, // 2 minutes - if gap > this, don't count idle time (matches reading-tracker.js)
    
    // Set language for this session
    setLanguage(lang) {
        this.language = lang || 'latin';
        console.log('Task tracker language set to:', this.language);
    },

    // Set custom content path (e.g. to distinguish weekly tests from regular practice)
    setContentPath(path) {
        this.contentPath = path;
    },
    
    // Initialize - check if user is logged in
    async init() {
        if (typeof supabase === 'undefined') {
            console.log('Supabase not available - tracking disabled');
            return false;
        }
        
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            console.log('User not logged in - tracking disabled');
            return false;
        }
        
        this.userId = user.id;
        
        // Check for task_id in URL (assigned task)
        const urlParams = new URLSearchParams(window.location.search);
        this.taskId = urlParams.get('task_id') || null;
        
        console.log('Task tracker initialized', { userId: this.userId, taskId: this.taskId });
        return true;
    },
    
    // Start tracking a practice session
    async start() {
        const ready = await this.init();
        if (!ready) return;
        
        this.startTime = new Date();
        this.lastActivityTime = new Date();
        this.activeTimeSeconds = 0;
        this.wordsAnswered = [];
        this.questionsAnswered = 0;
        this.correctAnswers = 0;
        
        // Create attempt record
        const { data, error } = await supabase
            .from('task_attempts')
            .insert({
                task_id: this.taskId, // null for free practice
                student_id: this.userId,
                content_path: this.contentPath || window.location.pathname, // Track what page they're practicing
                started_at: this.startTime.toISOString()
            })
            .select()
            .single();
        
        if (error) {
            console.error('Error creating attempt:', error);
            return;
        }
        
        this.attemptId = data.id;
        this.isTracking = true;
        console.log('Tracking started', { attemptId: this.attemptId, taskId: this.taskId });
        
        // Set up auto-save every 30 seconds
        this.saveInterval = setInterval(() => this.saveProgress(), 30000);
        
        // Save on page leave
        window.addEventListener('beforeunload', this.handlePageLeave.bind(this));
        window.addEventListener('pagehide', this.handlePageLeave.bind(this));
    },
    
    // Record activity and update active time
    recordActivity() {
        const now = new Date();
        const gap = (now - this.lastActivityTime) / 1000; // seconds since last activity
        
        // Only count time if gap is reasonable (not idle)
        if (gap <= this.IDLE_THRESHOLD) {
            // Cap at MAX_TIME_PER_QUESTION
            const timeToAdd = Math.min(gap, this.MAX_TIME_PER_QUESTION);
            this.activeTimeSeconds += timeToAdd;
        }
        // If gap > IDLE_THRESHOLD, they were idle - don't count that time
        
        this.lastActivityTime = now;
    },
    
    // Handle page leave - save progress
    handlePageLeave() {
        if (this.isTracking && this.attemptId) {
            this.saveProgress(true);
        }
    },
    
    // Save current progress (without marking complete)
    async saveProgress(isLeaving = false) {
        if (!this.isTracking || !this.attemptId) return;
        
        const percentage = this.questionsAnswered > 0 
            ? Math.round((this.correctAnswers / this.questionsAnswered) * 100) 
            : 0;
        
        const { error } = await supabase
            .from('task_attempts')
            .update({
                score: percentage,
                total_questions: this.questionsAnswered,
                correct_answers: this.correctAnswers,
                time_spent_seconds: Math.round(this.activeTimeSeconds)
            })
            .eq('id', this.attemptId);
        
        if (error) {
            console.error('Error saving progress:', error);
        } else {
            console.log('Progress saved', { activeTime: Math.round(this.activeTimeSeconds), questions: this.questionsAnswered });
        }
    },
    
    // Record a word answer (correct or incorrect)
    // Awards XP immediately for correct answers and word mastery
    async recordWordAnswer(wordData, isCorrect) {
        if (!this.userId) {
            // Try to init if not done
            const ready = await this.init();
            if (!ready) {
                console.log('Not ready to track word');
                return;
            }
        }

        // Record activity time (only counts active time, not idle)
        this.recordActivity();

        // Track counts for this session
        this.questionsAnswered++;
        if (isCorrect) this.correctAnswers++;

        // Track for this session
        this.wordsAnswered.push({
            word: wordData.latin,
            correct: isCorrect,
            timestamp: new Date()
        });

        // Award XP immediately for correct answers
        if (isCorrect) {
            await this.awardWordXp(wordData.latin);
        }

        // Update word_mastery table
        try {
            // First, try to get existing record (check by language too)
            const { data: existing, error: fetchError } = await supabase
                .from('word_mastery')
                .select('*')
                .eq('student_id', this.userId)
                .eq('word_latin', wordData.latin)
                .eq('language', this.language)
                .maybeSingle();

            if (fetchError) {
                console.error('Error fetching word mastery:', fetchError);
                return;
            }

            if (existing) {
                // Calculate new counts
                const newCorrect = isCorrect ? existing.correct_count + 1 : existing.correct_count;
                const newIncorrect = isCorrect ? existing.incorrect_count : existing.incorrect_count + 1;

                // Check if word meets mastery criteria NOW
                // Mastered = 3+ correct AND >70% accuracy
                const meetsMasteryCriteria = newCorrect >= 3 &&
                    (newCorrect / (newCorrect + newIncorrect)) >= 0.7;

                // Only award mastery bonus if:
                // 1. Word has NEVER been mastered before (mastered_at is null)
                // 2. Word now meets mastery criteria
                const neverMasteredBefore = !existing.mastered_at;
                const shouldAwardMasteryBonus = neverMasteredBefore && meetsMasteryCriteria;

                // Build update object
                const updateData = {
                    correct_count: newCorrect,
                    incorrect_count: newIncorrect,
                    last_seen_at: new Date().toISOString()
                };

                // Set mastered_at timestamp if this is first time mastering
                if (shouldAwardMasteryBonus) {
                    updateData.mastered_at = new Date().toISOString();
                }

                // Schedule spaced repetition for ALL words (not just mastered)
                const currentInterval = existing.review_interval_days || 1;
                if (isCorrect) {
                    // Correct: advance to next interval
                    const intervals = [1, 3, 7, 14, 30, 60, 120];
                    const currentIdx = intervals.indexOf(currentInterval);
                    const nextIdx = currentIdx === -1 ? 0 : Math.min(currentIdx + 1, intervals.length - 1);
                    const nextInterval = intervals[nextIdx];
                    updateData.next_review_at = new Date(Date.now() + nextInterval * 24 * 60 * 60 * 1000).toISOString();
                    updateData.review_interval_days = nextInterval;
                } else {
                    // Incorrect: reset to 1 day
                    updateData.next_review_at = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
                    updateData.review_interval_days = 1;
                }

                // Update existing record
                const { error: updateError } = await supabase
                    .from('word_mastery')
                    .update(updateData)
                    .eq('id', existing.id);

                if (updateError) {
                    console.error('Error updating word mastery:', updateError);
                } else {
                    console.log('Word mastery updated:', wordData.latin, isCorrect ? '✓' : '✗');

                    // Award mastery bonus ONLY if first time mastering this word
                    if (shouldAwardMasteryBonus) {
                        await this.awardMasteryBonusXp(wordData.latin);
                    }
                }

            } else {
                // Insert new record with language
                // Schedule first review in 1 day (all new words enter the SR system)
                const { error: insertError } = await supabase
                    .from('word_mastery')
                    .insert({
                        student_id: this.userId,
                        word_latin: wordData.latin,
                        word_english: wordData.english,
                        chapter: parseInt(wordData.chapter) || null,
                        language: this.language,
                        correct_count: isCorrect ? 1 : 0,
                        incorrect_count: isCorrect ? 0 : 1,
                        last_seen_at: new Date().toISOString(),
                        next_review_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
                        review_interval_days: 1
                    });

                if (insertError) {
                    console.error('Error inserting word mastery:', insertError);
                } else {
                    console.log('Word mastery created:', wordData.latin, '(' + this.language + ')', isCorrect ? '✓' : '✗');
                }
            }

        } catch (err) {
            console.error('Error in recordWordAnswer:', err);
        }
    },

    // Award XP for a correct answer (1 XP per correct answer)
    async awardWordXp(wordLatin) {
        if (typeof xpSystem === 'undefined' || !xpSystem.userId) {
            // Initialize XP system if needed
            if (typeof xpSystem !== 'undefined' && !xpSystem.userId) {
                await xpSystem.init();
            }
            if (typeof xpSystem === 'undefined' || !xpSystem.userId) {
                return; // Can't award XP
            }
        }

        try {
            const result = await xpSystem.awardXp(1, 'correct_answer', this.attemptId);
            if (result === false) {
                console.warn('Failed to award XP for correct answer');
            }
        } catch (err) {
            console.error('Error awarding word XP:', err);
        }
    },

    // Award bonus XP when a word reaches mastered status
    async awardMasteryBonusXp(wordLatin) {
        if (typeof xpSystem === 'undefined' || !xpSystem.userId) {
            return;
        }

        try {
            const masteryBonus = xpSystem.XP_RATES?.WORD_MASTERED || 10;
            const result = await xpSystem.awardXp(masteryBonus, 'word_mastered', this.attemptId);
            if (result !== false) {
                console.log(`🎉 Word mastered: ${wordLatin} (+${masteryBonus} XP bonus)`);
                // Show notification if handler exists
                if (typeof showXpNotification === 'function') {
                    showXpNotification(masteryBonus, false, `Word mastered: ${wordLatin}`);
                }
            }
        } catch (err) {
            console.error('Error awarding mastery bonus:', err);
        }
    },
    
    // Complete the practice session
    async complete(score, totalQuestions, correctAnswers) {
        if (!this.isTracking || !this.attemptId) {
            console.log('Not tracking or no attempt ID');
            return;
        }

        // Record final activity
        this.recordActivity();

        // Clear auto-save interval
        if (this.saveInterval) {
            clearInterval(this.saveInterval);
            this.saveInterval = null;
        }

        // Remove page leave handlers
        window.removeEventListener('beforeunload', this.handlePageLeave.bind(this));
        window.removeEventListener('pagehide', this.handlePageLeave.bind(this));

        const endTime = new Date();

        const { error } = await supabase
            .from('task_attempts')
            .update({
                completed_at: endTime.toISOString(),
                score: Math.round(score),
                total_questions: totalQuestions,
                correct_answers: correctAnswers,
                time_spent_seconds: Math.round(this.activeTimeSeconds)
            })
            .eq('id', this.attemptId);

        if (error) {
            console.error('Error completing attempt:', error);
            return;
        }

        console.log('Practice completed', {
            attemptId: this.attemptId,
            score: score,
            activeTime: Math.round(this.activeTimeSeconds),
            wordsAnswered: this.wordsAnswered.length
        });

        // Award XP for this session
        await this.awardSessionXp(score, Math.round(this.activeTimeSeconds));

        this.isTracking = false;
    },

    // Award completion bonuses for finishing a practice session
    // Note: XP for correct answers is now awarded immediately in recordWordAnswer()
    async awardSessionXp(score, timeSeconds) {
        // Check if xpSystem is available
        if (typeof xpSystem === 'undefined') {
            console.log('XP system not loaded - skipping completion bonuses');
            return { success: false, reason: 'xp_system_not_loaded' };
        }

        try {
            // Initialize XP system if needed
            if (!xpSystem.userId) {
                await xpSystem.init();
            }

            if (!xpSystem.userId) {
                console.log('XP system not initialized - skipping completion bonuses');
                return { success: false, reason: 'xp_system_not_initialized' };
            }

            let totalBonusXp = 0;
            const bonuses = [];

            // Perfect score bonus
            if (score === 100) {
                const perfectBonus = xpSystem.XP_RATES?.PERFECT_SCORE || 25;
                totalBonusXp += perfectBonus;
                bonuses.push({ type: 'perfect_score', amount: perfectBonus });
            }

            // First session of day bonus
            const isFirstToday = await this.isFirstSessionToday();
            if (isFirstToday) {
                const firstDayBonus = xpSystem.XP_RATES?.FIRST_SESSION_DAY || 15;
                totalBonusXp += firstDayBonus;
                bonuses.push({ type: 'first_session_today', amount: firstDayBonus });
            }

            // Award completion bonuses if any
            if (totalBonusXp > 0) {
                const result = await xpSystem.awardXp(totalBonusXp, 'session_completion_bonus', this.attemptId);

                if (result === false) {
                    console.error('Failed to award completion bonus XP');
                    return { success: false, reason: 'award_failed', bonuses };
                }

                console.log('Completion bonuses awarded:', {
                    total: totalBonusXp,
                    bonuses,
                    levelUp: result?.levelUp
                });

                // Show XP notification if there's a UI handler
                if (typeof showXpNotification === 'function') {
                    const bonusText = bonuses.map(b =>
                        b.type === 'perfect_score' ? 'Perfect score!' :
                        b.type === 'first_session_today' ? 'First session today!' : b.type
                    ).join(' + ');
                    showXpNotification(totalBonusXp, result?.levelUp, bonusText);
                }

                return { success: true, totalBonusXp, bonuses, levelUp: result?.levelUp };
            }

            return { success: true, totalBonusXp: 0, bonuses: [] };
        } catch (err) {
            console.error('Error awarding completion bonuses:', err);
            return { success: false, reason: 'exception', error: err.message };
        }
    },

    // Check if this is the user's first completed session today
    async isFirstSessionToday() {
        const today = new Date().toISOString().split('T')[0];

        const { data, error } = await supabase
            .from('task_attempts')
            .select('id')
            .eq('student_id', this.userId)
            .gte('completed_at', today + 'T00:00:00')
            .lt('completed_at', today + 'T23:59:59')
            .limit(2);

        // If this is the only completed session today (count <= 1), it's the first
        return !error && (!data || data.length <= 1);
    },
    
    // Get word mastery stats for current user
    async getWordMasteryStats() {
        if (!this.userId) {
            const ready = await this.init();
            if (!ready) return null;
        }
        
        const { data, error } = await supabase
            .from('word_mastery')
            .select('*')
            .eq('student_id', this.userId);
        
        if (error) {
            console.error('Error fetching word mastery:', error);
            return null;
        }
        
        // Categorise words
        const stats = {
            mastered: [],    // 3+ correct, >70% accuracy
            learning: [],    // Some attempts, <70% accuracy or <3 correct
            struggling: [],  // >50% incorrect
            total: data.length
        };
        
        data.forEach(word => {
            const total = word.correct_count + word.incorrect_count;
            const accuracy = total > 0 ? (word.correct_count / total) * 100 : 0;
            
            if (word.correct_count >= 3 && accuracy >= 70) {
                stats.mastered.push(word);
            } else if (accuracy < 50 && word.incorrect_count >= 2) {
                stats.struggling.push(word);
            } else {
                stats.learning.push(word);
            }
        });
        
        return stats;
    },
    
    // Get struggling words for review
    async getStrugglingWords(limit = 20) {
        if (!this.userId) {
            const ready = await this.init();
            if (!ready) return [];
        }

        const { data, error } = await supabase
            .from('word_mastery')
            .select('*')
            .eq('student_id', this.userId)
            .order('incorrect_count', { ascending: false })
            .limit(limit);

        if (error) {
            console.error('Error fetching struggling words:', error);
            return [];
        }

        // Filter to words where incorrect > correct or accuracy < 60%
        return data.filter(word => {
            const total = word.correct_count + word.incorrect_count;
            const accuracy = total > 0 ? (word.correct_count / total) * 100 : 0;
            return accuracy < 60 || word.incorrect_count > word.correct_count;
        });
    },

    // Toggle tricky status for a word by its Latin text
    async toggleTricky(wordLatin) {
        if (!this.userId) {
            const ready = await this.init();
            if (!ready) return { success: false, error: 'Not logged in' };
        }

        return this.toggleTrickyByWord(this.userId, wordLatin, this.language);
    },

    // Get tricky word status for a specific word
    async getTrickyStatus(wordLatin) {
        if (!this.userId) {
            const ready = await this.init();
            if (!ready) return null;
        }

        const { data, error } = await supabase
            .from('word_mastery')
            .select('is_tricky')
            .eq('student_id', this.userId)
            .eq('word_latin', wordLatin)
            .eq('language', this.language)
            .maybeSingle();

        if (error || !data) {
            return false;
        }

        return data.is_tricky || false;
    },

    // ============================================
    // SPACED REPETITION METHODS
    // ============================================
    // Previously in spaced-repetition.js, now consolidated here.

    // Review intervals in days (based on memory research)
    INTERVALS: [1, 3, 7, 14, 30, 60, 120],

    // Calculate the next interval based on current interval and success
    calculateNextInterval(currentIntervalDays, wasCorrect) {
        if (!wasCorrect) {
            return this.INTERVALS[0];
        }

        const currentIdx = this.INTERVALS.indexOf(currentIntervalDays);
        if (currentIdx === -1) {
            const closestIdx = this.INTERVALS.findIndex(i => i >= currentIntervalDays);
            const nextIdx = closestIdx === -1 ? this.INTERVALS.length - 1 : Math.min(closestIdx + 1, this.INTERVALS.length - 1);
            return this.INTERVALS[nextIdx];
        }

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

        if (wasCorrect) {
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

    // Toggle tricky status for a word by its mastery record ID
    async toggleTrickyById(wordMasteryId, currentTrickyStatus = null) {
        if (typeof supabase === 'undefined') {
            return { success: false, error: 'Supabase not available' };
        }

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
            return { success: false, error: 'Word not found in mastery table' };
        }

        return this.toggleTrickyById(existing.id, existing.is_tricky);
    },

    // Get struggling words with language filter (parameterized version)
    async getStrugglingWordsForStudent(studentId, language = null, limit = 20) {
        if (typeof supabase === 'undefined') {
            return [];
        }

        let query = supabase
            .from('word_mastery')
            .select('*')
            .eq('student_id', studentId)
            .gte('incorrect_count', 2)
            .order('incorrect_count', { ascending: false })
            .limit(limit * 2);

        if (language) {
            query = query.eq('language', language);
        }

        const { data, error } = await query;

        if (error) {
            console.error('Error fetching struggling words:', error);
            return [];
        }

        const struggling = (data || []).filter(word => {
            const total = word.correct_count + word.incorrect_count;
            const accuracy = total > 0 ? word.correct_count / total : 0;
            return accuracy < 0.6;
        });

        return struggling.slice(0, limit);
    },

    // Get smart review words (combination of due, tricky, and struggling)
    async getSmartReviewWords(studentId, language = null, limit = 30) {
        const dueLimit = Math.floor(limit * 0.6);
        const trickyLimit = Math.floor(limit * 0.3);
        const strugglingLimit = limit - dueLimit - trickyLimit;

        const [dueWords, trickyWords, strugglingWords] = await Promise.all([
            this.getDueWords(studentId, language, dueLimit),
            this.getTrickyWords(studentId, language, trickyLimit),
            this.getStrugglingWordsForStudent(studentId, language, strugglingLimit)
        ]);

        const wordMap = new Map();

        dueWords.forEach(w => wordMap.set(w.id, { ...w, reviewReason: 'due' }));

        trickyWords.forEach(w => {
            if (!wordMap.has(w.id)) {
                wordMap.set(w.id, { ...w, reviewReason: 'tricky' });
            }
        });

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
window.taskTracker = taskTracker;

// Compatibility shim: existing code referencing spacedRepetition will use taskTracker
window.spacedRepetition = taskTracker;
