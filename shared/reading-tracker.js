// Reading Tracker - Passive time tracking for content/revision pages
// Tracks time spent reading without quiz functionality

const readingTracker = {
    isTracking: false,
    startTime: null,
    lastActivity: null,
    language: 'classics',
    pageTitle: document.title,

    // Configuration
    IDLE_THRESHOLD: 180, // 3 minutes - if no activity, stop counting
    SAVE_INTERVAL: 30000, // Auto-save every 30 seconds
    MIN_TIME_TO_TRACK: 10, // Minimum 10 seconds to count as a session

    // Initialize and start tracking
    async init() {
        // Check if tracking scripts are available
        if (typeof supabase === 'undefined') {
            console.log('Reading tracker: Supabase not available');
            return;
        }

        // Check if user is logged in
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                console.log('Reading tracker: User not logged in');
                return;
            }

            // Start tracking
            this.start();

        } catch (err) {
            console.error('Reading tracker: Error checking auth', err);
        }
    },

    start() {
        if (this.isTracking) return;

        this.isTracking = true;
        this.startTime = Date.now();
        this.lastActivity = Date.now();

        // Set up activity listeners
        this.setupListeners();

        // Set up auto-save
        this.saveInterval = setInterval(() => this.autoSave(), this.SAVE_INTERVAL);

        // Save on page leave
        window.addEventListener('beforeunload', () => this.save());
        window.addEventListener('pagehide', () => this.save());
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                this.save();
            }
        });

        console.log('Reading tracker: Started tracking');
    },

    setupListeners() {
        // Record activity on various user interactions
        const recordActivity = () => this.recordActivity();

        document.addEventListener('scroll', recordActivity, { passive: true });
        document.addEventListener('mousemove', this.throttle(recordActivity, 5000), { passive: true });
        document.addEventListener('keydown', recordActivity, { passive: true });
        document.addEventListener('click', recordActivity, { passive: true });
        document.addEventListener('touchstart', recordActivity, { passive: true });
    },

    recordActivity() {
        this.lastActivity = Date.now();
    },

    // Throttle helper to prevent too many calls
    throttle(func, limit) {
        let inThrottle;
        return function() {
            if (!inThrottle) {
                func.apply(this, arguments);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Calculate active time (excluding idle periods)
    calculateActiveTime() {
        if (!this.startTime) return 0;

        const now = Date.now();
        const totalTime = (now - this.startTime) / 1000; // in seconds

        // If last activity was too long ago, cap the time
        const timeSinceLastActivity = (now - this.lastActivity) / 1000;
        if (timeSinceLastActivity > this.IDLE_THRESHOLD) {
            // Return time up to when they became idle
            return Math.max(0, totalTime - timeSinceLastActivity + this.IDLE_THRESHOLD);
        }

        return totalTime;
    },

    async autoSave() {
        if (!this.isTracking) return;

        const activeTime = this.calculateActiveTime();
        if (activeTime < this.MIN_TIME_TO_TRACK) return;

        // Just update last activity time, don't save yet
        console.log(`Reading tracker: Active time ${Math.round(activeTime)}s`);
    },

    async save() {
        if (!this.isTracking) return;

        const activeTime = Math.round(this.calculateActiveTime());
        if (activeTime < this.MIN_TIME_TO_TRACK) {
            console.log('Reading tracker: Session too short to save');
            return;
        }

        // Clear interval
        if (this.saveInterval) {
            clearInterval(this.saveInterval);
        }

        this.isTracking = false;

        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;

            // Get the page path for tracking
            const pagePath = window.location.pathname;

            // Save to task_attempts table (for consistency with quiz tracking)
            const { error } = await supabase
                .from('task_attempts')
                .insert({
                    student_id: user.id,
                    task_id: null, // No task - this is free reading
                    language: this.language,
                    started_at: new Date(this.startTime).toISOString(),
                    completed_at: new Date().toISOString(),
                    time_spent_seconds: activeTime,
                    score: null, // No score for reading
                    total_questions: 0,
                    correct_answers: 0,
                    content_path: pagePath,
                    content_title: this.pageTitle
                });

            if (error) {
                console.error('Reading tracker: Error saving', error);
            } else {
                console.log(`Reading tracker: Saved ${activeTime}s of reading time`);

                // Award XP for reading time (if xpSystem is available)
                if (typeof xpSystem !== 'undefined') {
                    const xpForReading = Math.floor(activeTime / 60) * 2; // 2 XP per minute
                    if (xpForReading > 0) {
                        await xpSystem.awardXP(xpForReading, 'reading_time');
                    }
                }
            }
        } catch (err) {
            console.error('Reading tracker: Error saving session', err);
        }
    },

    setLanguage(lang) {
        this.language = lang;
    }
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure Supabase is initialized
    setTimeout(() => readingTracker.init(), 500);
});
