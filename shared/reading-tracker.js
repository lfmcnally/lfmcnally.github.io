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
    todayTotalSeconds: 0, // Total time on Iliad today
    userId: null,
    lessonTitle: null,
    lessonPath: null,
    saveInterval: null,
    uiUpdateInterval: null,

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

    // UI Elements
    indicatorEl: null,

    // Set lesson info for this page
    setLesson(title, path) {
        this.lessonTitle = title || document.title;
        this.lessonPath = path || window.location.pathname;
    },

    // Create the tracking indicator UI
    createIndicator() {
        // Create container
        const indicator = document.createElement('div');
        indicator.id = 'reading-tracker-indicator';
        indicator.innerHTML = `
            <div class="rt-status">
                <span class="rt-dot"></span>
                <span class="rt-text">Checking...</span>
            </div>
            <div class="rt-times">
                <div class="rt-session">
                    <span class="rt-label">This session</span>
                    <span class="rt-value" id="rt-session-time">0:00</span>
                </div>
                <div class="rt-today">
                    <span class="rt-label">Iliad today</span>
                    <span class="rt-value" id="rt-today-time">0:00</span>
                </div>
            </div>
        `;

        // Add styles
        const styles = document.createElement('style');
        styles.textContent = `
            #reading-tracker-indicator {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: white;
                border-radius: 12px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                padding: 12px 16px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-size: 13px;
                z-index: 9999;
                min-width: 180px;
                border: 1px solid #e5e7eb;
                transition: all 0.3s ease;
            }

            #reading-tracker-indicator:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
            }

            #reading-tracker-indicator .rt-status {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 10px;
                padding-bottom: 10px;
                border-bottom: 1px solid #f3f4f6;
            }

            #reading-tracker-indicator .rt-dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #9ca3af;
                transition: background 0.3s;
            }

            #reading-tracker-indicator.tracking .rt-dot {
                background: #22c55e;
                animation: pulse 2s infinite;
            }

            #reading-tracker-indicator.paused .rt-dot {
                background: #f59e0b;
            }

            #reading-tracker-indicator.not-tracking .rt-dot {
                background: #9ca3af;
            }

            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
            }

            #reading-tracker-indicator .rt-text {
                color: #4b5563;
                font-weight: 500;
            }

            #reading-tracker-indicator .rt-times {
                display: flex;
                gap: 16px;
            }

            #reading-tracker-indicator .rt-session,
            #reading-tracker-indicator .rt-today {
                display: flex;
                flex-direction: column;
                gap: 2px;
            }

            #reading-tracker-indicator .rt-label {
                font-size: 11px;
                color: #9ca3af;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            #reading-tracker-indicator .rt-value {
                font-size: 18px;
                font-weight: 700;
                color: #1f2937;
                font-variant-numeric: tabular-nums;
            }

            #reading-tracker-indicator .rt-today .rt-value {
                color: #0066ff;
            }

            /* Not logged in state */
            #reading-tracker-indicator.not-logged-in .rt-times {
                display: none;
            }

            #reading-tracker-indicator.not-logged-in .rt-status {
                border-bottom: none;
                margin-bottom: 0;
                padding-bottom: 0;
            }

            #reading-tracker-indicator .rt-login-link {
                color: #0066ff;
                text-decoration: none;
                font-weight: 500;
            }

            #reading-tracker-indicator .rt-login-link:hover {
                text-decoration: underline;
            }

            /* Mobile styles */
            @media (max-width: 768px) {
                #reading-tracker-indicator {
                    bottom: 10px;
                    right: 10px;
                    left: 10px;
                    min-width: auto;
                }

                #reading-tracker-indicator .rt-times {
                    justify-content: space-between;
                }
            }
        `;

        document.head.appendChild(styles);
        document.body.appendChild(indicator);
        this.indicatorEl = indicator;
    },

    // Update the indicator UI
    updateIndicator(status, message) {
        if (!this.indicatorEl) return;

        const statusText = this.indicatorEl.querySelector('.rt-text');

        // Remove all status classes
        this.indicatorEl.classList.remove('tracking', 'paused', 'not-tracking', 'not-logged-in');

        switch (status) {
            case 'tracking':
                this.indicatorEl.classList.add('tracking');
                statusText.textContent = message || 'Tracking your reading';
                break;
            case 'paused':
                this.indicatorEl.classList.add('paused');
                statusText.textContent = message || 'Paused (idle)';
                break;
            case 'not-logged-in':
                this.indicatorEl.classList.add('not-logged-in');
                statusText.innerHTML = message || '<a href="/auth/login.html" class="rt-login-link">Log in</a> to track progress';
                break;
            case 'not-tracking':
            default:
                this.indicatorEl.classList.add('not-tracking');
                statusText.textContent = message || 'Not tracking';
                break;
        }
    },

    // Update timer display
    updateTimerDisplay() {
        if (!this.indicatorEl) return;

        const sessionEl = document.getElementById('rt-session-time');
        const todayEl = document.getElementById('rt-today-time');

        if (sessionEl) {
            sessionEl.textContent = this.formatTime(this.activeTimeSeconds);
        }

        if (todayEl) {
            // Today total = previous today total + current session
            const totalToday = this.todayTotalSeconds + this.activeTimeSeconds;
            todayEl.textContent = this.formatTime(totalToday);
        }

        // Update status based on activity
        if (this.isTracking) {
            if (this.isActive) {
                this.updateIndicator('tracking');
            } else {
                this.updateIndicator('paused');
            }
        }
    },

    // Format seconds to mm:ss or h:mm:ss
    formatTime(totalSeconds) {
        const seconds = Math.round(totalSeconds);
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        if (hrs > 0) {
            return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    },

    // Fetch today's total time on Iliad lessons
    async fetchTodayTotal() {
        if (!this.userId) return 0;

        try {
            const today = new Date().toISOString().split('T')[0];

            const { data, error } = await supabase
                .from('task_attempts')
                .select('time_spent_seconds')
                .eq('student_id', this.userId)
                .gte('started_at', today + 'T00:00:00')
                .lt('started_at', today + 'T23:59:59');

            if (error) {
                console.error('Error fetching today total:', error);
                return 0;
            }

            // Sum up all time spent today (excluding current session which we'll add live)
            const total = (data || []).reduce((sum, a) => sum + (a.time_spent_seconds || 0), 0);
            return total;
        } catch (err) {
            console.error('Error in fetchTodayTotal:', err);
            return 0;
        }
    },

    // Initialize - check if user is logged in
    async init() {
        // Create indicator first
        this.createIndicator();

        if (typeof supabase === 'undefined') {
            console.log('Supabase not available - reading tracking disabled');
            this.updateIndicator('not-tracking', 'Tracking unavailable');
            return false;
        }

        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                console.log('User not logged in - reading tracking disabled');
                this.updateIndicator('not-logged-in');
                return false;
            }

            this.userId = user.id;

            // Check for task_id in URL (assigned reading)
            const urlParams = new URLSearchParams(window.location.search);
            this.taskId = urlParams.get('task_id') || null;

            // Fetch today's total
            this.todayTotalSeconds = await this.fetchTodayTotal();

            console.log('Reading tracker initialized', { userId: this.userId, taskId: this.taskId, todayTotal: this.todayTotalSeconds });
            return true;
        } catch (err) {
            console.error('Error initializing reading tracker:', err);
            this.updateIndicator('not-tracking', 'Error loading');
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
        // Note: We use the page URL (window.location.pathname) to identify which lesson
        // was read. The lessonPath is stored in localStorage for the dashboard to query.
        const lessonKey = `iliad_lesson_${this.userId}_${this.lessonPath}`;
        const existingTime = parseInt(localStorage.getItem(lessonKey) || '0', 10);

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
            this.updateIndicator('not-tracking', 'Error starting');
            return false;
        }

        this.attemptId = data.id;
        this.isTracking = true;
        console.log('Reading tracking started', { attemptId: this.attemptId, lesson: this.lessonTitle });

        // Update UI
        this.updateIndicator('tracking');
        this.updateTimerDisplay();

        // Set up activity listeners
        this.setupActivityListeners();

        // Start activity timer
        this.startActivityTimer();

        // Start UI update timer (every second)
        this.uiUpdateInterval = setInterval(() => this.updateTimerDisplay(), 1000);

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
            if (!this.isActive) {
                this.isActive = true;
                this.updateIndicator('tracking');
            }
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
                if (this.isActive) {
                    this.isActive = false;
                    this.updateIndicator('paused');
                }
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
            this.updateIndicator('paused', 'Paused (tab hidden)');
            this.saveProgress();
        } else {
            // Tab is visible again - resume if there's activity
            this.lastActivityTime = new Date();
            this.isActive = true;
            this.updateIndicator('tracking');
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

                // Also save per-lesson time to localStorage for dashboard tracking
                if (this.lessonPath && this.userId) {
                    const lessonKey = `iliad_lesson_${this.lessonPath}`;
                    const existingData = JSON.parse(localStorage.getItem('iliad_lesson_times') || '{}');
                    existingData[this.lessonPath] = (existingData[this.lessonPath] || 0) + Math.round(this.activeTimeSeconds);
                    localStorage.setItem('iliad_lesson_times', JSON.stringify(existingData));
                }
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

        if (this.uiUpdateInterval) {
            clearInterval(this.uiUpdateInterval);
            this.uiUpdateInterval = null;
        }

        this.isTracking = false;
        this.updateIndicator('not-tracking', 'Stopped');
    },

    // Get formatted time string (legacy)
    getFormattedTime() {
        return this.formatTime(this.activeTimeSeconds);
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
