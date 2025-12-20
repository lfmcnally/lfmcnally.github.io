// ============================================
// CLASSICALIA - READING TIME TRACKER
// ============================================
// Tracks time spent reading lesson pages.
// Saves reading sessions to task_attempts table.
// Integrates with student profiles.

const readingTracker = {
    isTracking: false,
    attemptId: null,
    taskId: null,
    startTime: null,
    lastActivityTime: null,
    activeTimeSeconds: 0,
    userId: null,
    lessonTitle: null,
    lessonPath: null,
    saveInterval: null,

    // Config
    IDLE_THRESHOLD: 120, // 2 minutes - if no activity, pause counting
    ACTIVITY_CHECK_INTERVAL: 1000, // Check activity every second
    SAVE_INTERVAL: 30000, // Save progress every 30 seconds

    // Activity tracking
    isActive: true,
    activityTimer: null,
    lastScrollTime: null,
    lastClickTime: null,
    lastKeyTime: null,

    // Set lesson info for this page
    setLesson(title, path) {
        this.lessonTitle = title || document.title;
        this.lessonPath = path || window.location.pathname;
    },

    // Initialize - check if user is logged in
    async init() {
        if (typeof supabase === 'undefined') {
            console.log('Supabase not available - reading tracking disabled');
            return false;
        }

        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                console.log('User not logged in - reading tracking disabled');
                return false;
            }

            this.userId = user.id;

            // Check for task_id in URL (assigned reading)
            const urlParams = new URLSearchParams(window.location.search);
            this.taskId = urlParams.get('task_id') || null;

            console.log('Reading tracker initialized', { userId: this.userId, taskId: this.taskId });
            return true;
        } catch (err) {
            console.error('Error initializing reading tracker:', err);
            return false;
        }
    },

    // Start tracking reading session
    async start() {
        const ready = await this.init();
        if (!ready) return false;

        this.startTime = new Date();
        this.lastActivityTime = new Date();
        this.activeTimeSeconds = 0;
        this.isActive = true;

        // Get lesson info from page if not set
        if (!this.lessonTitle) {
            this.lessonTitle = document.title.replace(' - Classicalia', '');
        }
        if (!this.lessonPath) {
            this.lessonPath = window.location.pathname;
        }

        // Create attempt record for reading session
        const { data, error } = await supabase
            .from('task_attempts')
            .insert({
                task_id: this.taskId,
                student_id: this.userId,
                started_at: this.startTime.toISOString(),
                // Store lesson info in a way that can be identified
                total_questions: 0, // 0 indicates reading session
                correct_answers: 0
            })
            .select()
            .single();

        if (error) {
            console.error('Error creating reading attempt:', error);
            return false;
        }

        this.attemptId = data.id;
        this.isTracking = true;
        console.log('Reading tracking started', { attemptId: this.attemptId, lesson: this.lessonTitle });

        // Set up activity listeners
        this.setupActivityListeners();

        // Start activity timer
        this.startActivityTimer();

        // Set up auto-save
        this.saveInterval = setInterval(() => this.saveProgress(), this.SAVE_INTERVAL);

        // Save on page leave
        window.addEventListener('beforeunload', this.handlePageLeave.bind(this));
        window.addEventListener('pagehide', this.handlePageLeave.bind(this));
        document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));

        return true;
    },

    // Set up activity listeners
    setupActivityListeners() {
        const recordActivity = () => {
            this.lastActivityTime = new Date();
            this.isActive = true;
        };

        // Track various user activities
        document.addEventListener('scroll', () => {
            this.lastScrollTime = new Date();
            recordActivity();
        }, { passive: true });

        document.addEventListener('click', () => {
            this.lastClickTime = new Date();
            recordActivity();
        });

        document.addEventListener('keydown', () => {
            this.lastKeyTime = new Date();
            recordActivity();
        });

        document.addEventListener('mousemove', this.throttle(() => {
            recordActivity();
        }, 5000), { passive: true }); // Throttle mousemove to every 5 seconds

        document.addEventListener('touchstart', () => {
            recordActivity();
        }, { passive: true });
    },

    // Throttle function
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Activity timer - counts time only when user is active
    startActivityTimer() {
        this.activityTimer = setInterval(() => {
            if (!this.isTracking) return;

            const now = new Date();
            const timeSinceActivity = (now - this.lastActivityTime) / 1000;

            // If user has been idle too long, stop counting
            if (timeSinceActivity > this.IDLE_THRESHOLD) {
                this.isActive = false;
            }

            // Only count time if user is active
            if (this.isActive) {
                this.activeTimeSeconds += 1;
            }
        }, this.ACTIVITY_CHECK_INTERVAL);
    },

    // Handle visibility change (tab switch)
    handleVisibilityChange() {
        if (document.hidden) {
            // Tab is hidden - stop counting
            this.isActive = false;
            this.saveProgress();
        } else {
            // Tab is visible again - resume if there's activity
            this.lastActivityTime = new Date();
        }
    },

    // Handle page leave
    handlePageLeave() {
        if (this.isTracking && this.attemptId) {
            this.saveProgress(true);
        }
    },

    // Save current progress
    async saveProgress(isLeaving = false) {
        if (!this.isTracking || !this.attemptId) return;

        const updateData = {
            time_spent_seconds: Math.round(this.activeTimeSeconds)
        };

        // If leaving, mark as completed
        if (isLeaving) {
            updateData.completed_at = new Date().toISOString();
            updateData.score = 100; // Reading completion = 100%
        }

        try {
            const { error } = await supabase
                .from('task_attempts')
                .update(updateData)
                .eq('id', this.attemptId);

            if (error) {
                console.error('Error saving reading progress:', error);
            } else {
                console.log('Reading progress saved', {
                    activeTime: Math.round(this.activeTimeSeconds),
                    isLeaving
                });
            }
        } catch (err) {
            console.error('Error in saveProgress:', err);
        }
    },

    // Stop tracking
    stop() {
        if (this.activityTimer) {
            clearInterval(this.activityTimer);
            this.activityTimer = null;
        }

        if (this.saveInterval) {
            clearInterval(this.saveInterval);
            this.saveInterval = null;
        }

        this.isTracking = false;
    },

    // Get formatted time string
    getFormattedTime() {
        const seconds = Math.round(this.activeTimeSeconds);
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
};

// Auto-start when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure Supabase is loaded
    setTimeout(() => {
        readingTracker.start();
    }, 500);
});

// Make available globally
window.readingTracker = readingTracker;
