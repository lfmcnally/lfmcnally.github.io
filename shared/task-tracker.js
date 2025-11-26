// ============================================
// CLASSICALIA - TASK TRACKER
// ============================================
// Add this script to any exercise page to track student progress.
// It will only track if the student is logged in and doing an assigned task.
//
// Usage: Include these scripts at the bottom of your exercise page:
//   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
//   <script src="/auth/config.js"></script>
//   <script src="/shared/task-tracker.js"></script>
//
// Then call these functions from your quiz code:
//   taskTracker.start()        - Call when quiz begins
//   taskTracker.complete(score, total, correct)  - Call when quiz ends
// ============================================

const taskTracker = {
    taskId: null,
    attemptId: null,
    startTime: null,
    userId: null,
    isTracking: false,

    // Initialize the tracker - checks if user is logged in and doing a task
    async init() {
        // Check if Supabase is available
        if (typeof supabase === 'undefined') {
            console.log('TaskTracker: Supabase not loaded, tracking disabled');
            return false;
        }

        // Check if user is logged in
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            console.log('TaskTracker: User not logged in, tracking disabled');
            return false;
        }
        this.userId = user.id;

        // Check if there's a task_id in the URL
        const params = new URLSearchParams(window.location.search);
        this.taskId = params.get('task_id');
        
        if (!this.taskId) {
            console.log('TaskTracker: No task_id in URL, tracking disabled (free practice)');
            return false;
        }

        console.log('TaskTracker: Ready to track task', this.taskId);
        this.isTracking = true;
        return true;
    },

    // Call this when the quiz/exercise starts
    async start() {
        if (!this.isTracking) {
            await this.init();
        }
        
        if (!this.isTracking) {
            return null;
        }

        this.startTime = new Date();

        // Create an attempt record
        const { data, error } = await supabase
            .from('task_attempts')
            .insert({
                task_id: this.taskId,
                student_id: this.userId,
                started_at: this.startTime.toISOString()
            })
            .select()
            .single();

        if (error) {
            console.error('TaskTracker: Error creating attempt', error);
            return null;
        }

        this.attemptId = data.id;
        console.log('TaskTracker: Started tracking attempt', this.attemptId);
        return this.attemptId;
    },

    // Call this when the quiz/exercise is complete
    async complete(score, totalQuestions, correctAnswers) {
        if (!this.isTracking || !this.attemptId) {
            console.log('TaskTracker: Not tracking, skipping completion');
            return null;
        }

        const endTime = new Date();
        const timeSpentSeconds = Math.round((endTime - this.startTime) / 1000);

        // Update the attempt record
        const { data, error } = await supabase
            .from('task_attempts')
            .update({
                completed_at: endTime.toISOString(),
                score: score,
                total_questions: totalQuestions,
                correct_answers: correctAnswers,
                time_spent_seconds: timeSpentSeconds
            })
            .eq('id', this.attemptId)
            .select()
            .single();

        if (error) {
            console.error('TaskTracker: Error updating attempt', error);
            return null;
        }

        console.log('TaskTracker: Completed tracking', {
            score: score,
            total: totalQuestions,
            correct: correctAnswers,
            timeSpent: timeSpentSeconds + 's'
        });

        return data;
    },

    // Get URL parameters for pre-filling quiz settings
    getParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            taskId: params.get('task_id'),
            chapter: params.get('chapter'),
            from: params.get('from'),
            to: params.get('to')
        };
    },

    // Check if this is a task (vs free practice)
    isTask() {
        const params = new URLSearchParams(window.location.search);
        return params.get('task_id') !== null;
    }
};

// Auto-initialize when the script loads
document.addEventListener('DOMContentLoaded', function() {
    taskTracker.init();
});
