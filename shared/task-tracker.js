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
    IDLE_THRESHOLD: 180, // 3 minutes - if gap > this, don't count idle time
    
    // Set language for this session
    setLanguage(lang) {
        this.language = lang || 'latin';
        console.log('Task tracker language set to:', this.language);
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

                // Check if this answer causes word to become mastered
                // Mastered = 3+ correct AND >70% accuracy
                const wasntMastered = existing.correct_count < 3 ||
                    (existing.correct_count / (existing.correct_count + existing.incorrect_count)) < 0.7;
                const isNowMastered = newCorrect >= 3 &&
                    (newCorrect / (newCorrect + newIncorrect)) >= 0.7;

                // Update existing record
                const { error: updateError } = await supabase
                    .from('word_mastery')
                    .update({
                        correct_count: newCorrect,
                        incorrect_count: newIncorrect,
                        last_seen_at: new Date().toISOString()
                    })
                    .eq('id', existing.id);

                if (updateError) {
                    console.error('Error updating word mastery:', updateError);
                } else {
                    console.log('Word mastery updated:', wordData.latin, isCorrect ? '✓' : '✗');

                    // Award mastery bonus if word just became mastered
                    if (wasntMastered && isNowMastered) {
                        await this.awardMasteryBonusXp(wordData.latin);
                    }
                }

            } else {
                // Insert new record with language
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
                        last_seen_at: new Date().toISOString()
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
    }
};

// Make available globally
window.taskTracker = taskTracker;
