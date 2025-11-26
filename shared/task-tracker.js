// ============================================
// CLASSICALIA - TASK & WORD MASTERY TRACKER
// ============================================
// Tracks practice sessions (both assigned tasks and free practice)
// and individual word mastery for each student.

const taskTracker = {
    isTracking: false,
    attemptId: null,
    taskId: null,
    startTime: null,
    userId: null,
    wordsAnswered: [], // Track words answered this session
    questionsAnswered: 0,
    correctAnswers: 0,
    saveInterval: null,
    
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
    
    // Handle page leave - save progress
    handlePageLeave() {
        if (this.isTracking && this.attemptId) {
            this.saveProgress(true);
        }
    },
    
    // Save current progress (without marking complete)
    async saveProgress(isLeaving = false) {
        if (!this.isTracking || !this.attemptId) return;
        
        const now = new Date();
        const timeSpentSeconds = Math.round((now - this.startTime) / 1000);
        const percentage = this.questionsAnswered > 0 
            ? Math.round((this.correctAnswers / this.questionsAnswered) * 100) 
            : 0;
        
        // Use sendBeacon for page leave (more reliable)
        if (isLeaving && navigator.sendBeacon) {
            // sendBeacon doesn't work well with Supabase, so we use a sync approach
            // Just let the regular save handle it
        }
        
        const { error } = await supabase
            .from('task_attempts')
            .update({
                score: percentage,
                total_questions: this.questionsAnswered,
                correct_answers: this.correctAnswers,
                time_spent_seconds: timeSpentSeconds
            })
            .eq('id', this.attemptId);
        
        if (error) {
            console.error('Error saving progress:', error);
        } else {
            console.log('Progress saved', { time: timeSpentSeconds, questions: this.questionsAnswered });
        }
    },
    
    // Record a word answer (correct or incorrect)
    async recordWordAnswer(wordData, isCorrect) {
        if (!this.userId) {
            // Try to init if not done
            const ready = await this.init();
            if (!ready) {
                console.log('Not ready to track word');
                return;
            }
        }
        
        // Track counts for this session
        this.questionsAnswered++;
        if (isCorrect) this.correctAnswers++;
        
        // Track for this session
        this.wordsAnswered.push({
            word: wordData.latin,
            correct: isCorrect,
            timestamp: new Date()
        });
        
        // Update word_mastery table
        try {
            // First, try to get existing record
            const { data: existing, error: fetchError } = await supabase
                .from('word_mastery')
                .select('*')
                .eq('student_id', this.userId)
                .eq('word_latin', wordData.latin)
                .maybeSingle();
            
            if (fetchError) {
                console.error('Error fetching word mastery:', fetchError);
                return;
            }
            
            if (existing) {
                // Update existing record
                const { error: updateError } = await supabase
                    .from('word_mastery')
                    .update({
                        correct_count: isCorrect ? existing.correct_count + 1 : existing.correct_count,
                        incorrect_count: isCorrect ? existing.incorrect_count : existing.incorrect_count + 1,
                        last_seen_at: new Date().toISOString()
                    })
                    .eq('id', existing.id);
                
                if (updateError) {
                    console.error('Error updating word mastery:', updateError);
                } else {
                    console.log('Word mastery updated:', wordData.latin, isCorrect ? '✓' : '✗');
                }
                    
            } else {
                // Insert new record
                const { error: insertError } = await supabase
                    .from('word_mastery')
                    .insert({
                        student_id: this.userId,
                        word_latin: wordData.latin,
                        word_english: wordData.english,
                        chapter: parseInt(wordData.chapter) || null,
                        correct_count: isCorrect ? 1 : 0,
                        incorrect_count: isCorrect ? 0 : 1,
                        last_seen_at: new Date().toISOString()
                    });
                
                if (insertError) {
                    console.error('Error inserting word mastery:', insertError);
                } else {
                    console.log('Word mastery created:', wordData.latin, isCorrect ? '✓' : '✗');
                }
            }
            
        } catch (err) {
            console.error('Error in recordWordAnswer:', err);
        }
    },
    
    // Complete the practice session
    async complete(score, totalQuestions, correctAnswers) {
        if (!this.isTracking || !this.attemptId) {
            console.log('Not tracking or no attempt ID');
            return;
        }
        
        // Clear auto-save interval
        if (this.saveInterval) {
            clearInterval(this.saveInterval);
            this.saveInterval = null;
        }
        
        // Remove page leave handlers
        window.removeEventListener('beforeunload', this.handlePageLeave.bind(this));
        window.removeEventListener('pagehide', this.handlePageLeave.bind(this));
        
        const endTime = new Date();
        const timeSpentSeconds = Math.round((endTime - this.startTime) / 1000);
        
        const { error } = await supabase
            .from('task_attempts')
            .update({
                completed_at: endTime.toISOString(),
                score: Math.round(score),
                total_questions: totalQuestions,
                correct_answers: correctAnswers,
                time_spent_seconds: timeSpentSeconds
            })
            .eq('id', this.attemptId);
        
        if (error) {
            console.error('Error completing attempt:', error);
            return;
        }
        
        console.log('Practice completed', {
            attemptId: this.attemptId,
            score: score,
            timeSpent: timeSpentSeconds,
            wordsAnswered: this.wordsAnswered.length
        });
        
        this.isTracking = false;
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
