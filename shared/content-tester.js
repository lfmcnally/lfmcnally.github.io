/**
 * Content Tester System
 * Handles tracking and display of content knowledge tests
 * Similar to vocabulary quizzes but for broader topic/chapter content
 */

class ContentTesterSystem {
    constructor() {
        this.supabase = null;
        this.currentUser = null;
        this.currentClassId = null;
        this.currentTest = null;
    }

    async init(supabaseClient, classId) {
        this.supabase = supabaseClient;
        this.currentClassId = classId;

        // Get current user
        const { data: { user } } = await this.supabase.auth.getUser();
        this.currentUser = user;

        return this;
    }

    /**
     * Get all content tests for a class
     */
    async getClassTests(classId = null) {
        const targetClassId = classId || this.currentClassId;

        const { data, error } = await this.supabase
            .from('content_tests')
            .select('*')
            .eq('class_id', targetClassId)
            .order('topic');

        if (error) {
            console.error('Error loading content tests:', error);
            return [];
        }

        return data || [];
    }

    /**
     * Get student's progress on all content tests
     */
    async getStudentProgress(studentId = null, classId = null) {
        const targetStudentId = studentId || this.currentUser?.id;
        const targetClassId = classId || this.currentClassId;

        if (!targetStudentId) return [];

        // Get all tests for the class
        const tests = await this.getClassTests(targetClassId);
        if (tests.length === 0) return [];

        // Get student's attempts
        const { data: attempts, error } = await this.supabase
            .from('content_test_attempts')
            .select('*')
            .eq('student_id', targetStudentId)
            .in('test_id', tests.map(t => t.id))
            .order('completed_at', { ascending: false });

        if (error) {
            console.error('Error loading test attempts:', error);
            return [];
        }

        // Combine test info with best attempt
        const progress = tests.map(test => {
            const testAttempts = (attempts || []).filter(a => a.test_id === test.id);
            const bestAttempt = testAttempts.reduce((best, current) => {
                if (!best) return current;
                return current.score_percentage > best.score_percentage ? current : best;
            }, null);

            return {
                test_id: test.id,
                topic: test.topic,
                title: test.title,
                attempts: testAttempts.length,
                best_score: bestAttempt?.score_percentage || 0,
                last_attempt: bestAttempt?.completed_at || null,
                status: this.getTestStatus(bestAttempt?.score_percentage, testAttempts.length)
            };
        });

        return progress;
    }

    /**
     * Get test status based on score
     */
    getTestStatus(score, attempts) {
        if (!score && attempts === 0) return 'not-started';
        if (score >= 80) return 'mastered';
        if (score >= 70) return 'proficient';
        if (score >= 50) return 'learning';
        return 'needs-work';
    }

    /**
     * Get status display info
     */
    getStatusInfo(status) {
        const statusConfig = {
            'mastered': { color: '#16a34a', bg: '#dcfce7', label: 'Mastered', emoji: '✅' },
            'proficient': { color: '#2563eb', bg: '#dbeafe', label: 'Proficient', emoji: '👍' },
            'learning': { color: '#ea580c', bg: '#ffedd5', label: 'Learning', emoji: '📚' },
            'needs-work': { color: '#dc2626', bg: '#fee2e2', label: 'Needs Work', emoji: '⚠️' },
            'not-started': { color: '#6b7280', bg: '#f3f4f6', label: 'Not Started', emoji: '⭕' }
        };
        return statusConfig[status] || statusConfig['not-started'];
    }

    /**
     * Record a test attempt
     */
    async recordAttempt(testId, questionsTotal, questionsCorrect, timeSpent) {
        if (!this.currentUser) {
            console.error('No user logged in');
            return { error: 'No user logged in' };
        }

        const scorePercentage = Math.round((questionsCorrect / questionsTotal) * 100);

        const { data, error } = await this.supabase
            .from('content_test_attempts')
            .insert({
                student_id: this.currentUser.id,
                test_id: testId,
                score_percentage: scorePercentage,
                questions_total: questionsTotal,
                questions_correct: questionsCorrect,
                completed_at: new Date().toISOString(),
                time_spent_seconds: timeSpent
            })
            .select()
            .single();

        if (error) {
            console.error('Error recording test attempt:', error);
            return { error };
        }

        // Award XP if xpSystem is available
        if (typeof xpSystem !== 'undefined' && xpSystem.awardXP) {
            // Award XP based on score
            const xpAmount = Math.max(5, Math.round(scorePercentage / 10));
            await xpSystem.awardXP(
                xpAmount,
                `Completed content test: ${scorePercentage}%`,
                'content_test',
                testId
            );
        }

        return { data };
    }

    /**
     * Get summary stats for student
     */
    async getSummaryStats(studentId = null, classId = null) {
        const progress = await this.getStudentProgress(studentId, classId);

        const stats = {
            total: progress.length,
            mastered: progress.filter(p => p.status === 'mastered').length,
            proficient: progress.filter(p => p.status === 'proficient').length,
            learning: progress.filter(p => p.status === 'learning').length,
            needsWork: progress.filter(p => p.status === 'needs-work').length,
            notStarted: progress.filter(p => p.status === 'not-started').length,
            averageScore: progress.length > 0
                ? Math.round(progress.reduce((sum, p) => sum + p.best_score, 0) / progress.length)
                : 0
        };

        return stats;
    }

    /**
     * Render progress card HTML
     */
    renderProgressCard(progress) {
        const stats = {
            mastered: progress.filter(p => p.status === 'mastered').length,
            needsWork: progress.filter(p => p.status === 'needs-work' || p.status === 'not-started').length,
            averageScore: progress.length > 0
                ? Math.round(progress.reduce((sum, p) => sum + p.best_score, 0) / progress.length)
                : 0,
            completed: progress.filter(p => p.attempts > 0).length,
            total: progress.length
        };

        return `
            <div class="language-section">
                <div class="language-header">
                    <div class="language-title">
                        <span class="language-title-icon">🎯</span>
                        Content Tests
                    </div>
                    <a href="../content-test/index.html" class="language-practise-btn">Take Test</a>
                </div>
                <div class="language-stats">
                    <div class="language-stat">
                        <div class="language-stat-value">${stats.mastered}</div>
                        <div class="language-stat-label">Mastered</div>
                    </div>
                    <div class="language-stat">
                        <div class="language-stat-value">${stats.completed}/${stats.total}</div>
                        <div class="language-stat-label">Completed</div>
                    </div>
                    <div class="language-stat">
                        <div class="language-stat-value">${stats.averageScore}%</div>
                        <div class="language-stat-label">Avg Score</div>
                    </div>
                    <div class="language-stat">
                        <div class="language-stat-value">${stats.needsWork}</div>
                        <div class="language-stat-label">Need Review</div>
                    </div>
                </div>
                ${stats.needsWork > 0 ? `
                    <a href="../content-test/review.html" class="language-review-btn">
                        Review ${stats.needsWork} ${stats.needsWork === 1 ? 'Topic' : 'Topics'}
                    </a>
                ` : ''}
            </div>
        `;
    }

    /**
     * Render topic progress list
     */
    renderTopicList(progress) {
        if (progress.length === 0) {
            return '<div class="no-tests">No content tests available yet.</div>';
        }

        return progress.map(p => {
            const statusInfo = this.getStatusInfo(p.status);
            const scoreDisplay = p.best_score > 0 ? `${p.best_score}%` : 'Not attempted';

            return `
                <div class="topic-item" style="
                    display: flex;
                    align-items: center;
                    padding: 0.75rem;
                    margin-bottom: 0.5rem;
                    background: white;
                    border: 2px solid #e5e7eb;
                    border-radius: 12px;
                    transition: all 0.2s;
                ">
                    <div class="topic-icon" style="
                        width: 40px;
                        height: 40px;
                        border-radius: 10px;
                        background: ${statusInfo.bg};
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 1.25rem;
                        margin-right: 0.75rem;
                    ">${statusInfo.emoji}</div>
                    <div class="topic-info" style="flex: 1;">
                        <div class="topic-title" style="font-weight: 600; color: #1f2937; margin-bottom: 0.2rem;">
                            ${p.topic}
                        </div>
                        <div class="topic-meta" style="font-size: 0.75rem; color: #6b7280;">
                            ${scoreDisplay} • ${p.attempts} ${p.attempts === 1 ? 'attempt' : 'attempts'}
                        </div>
                    </div>
                    <div class="topic-status" style="
                        background: ${statusInfo.bg};
                        color: ${statusInfo.color};
                        padding: 0.35rem 0.75rem;
                        border-radius: 20px;
                        font-size: 0.75rem;
                        font-weight: 600;
                    ">${statusInfo.label}</div>
                </div>
            `;
        }).join('');
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ContentTesterSystem;
}
