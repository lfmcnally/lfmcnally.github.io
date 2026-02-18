/**
 * Analytics Engine for Classicalia Progress Tracking
 * Provides weak area detection, recommendations, and insights
 * Subject-enrollment based analytics
 */

class AnalyticsEngine {
    constructor(supabaseClient) {
        this.supabase = supabaseClient;
        this.WEAK_THRESHOLD = 0.70; // Below 70% accuracy is considered weak
        this.MASTERY_THRESHOLD = 0.85; // Above 85% is mastery
        this.MIN_ATTEMPTS = 3; // Minimum attempts to determine weak area
    }

    /**
     * Analyze student performance across all tracking types for a specific subject
     * @param {string} studentId - Student UUID
     * @param {string} classId - Class UUID
     * @param {string} classType - 'latin', 'greek', 'classics', 'prep-latin'
     * @returns {Object} Analysis results with weak areas, strengths, and recommendations
     */
    async analyzeStudentPerformance(studentId, classId, classType) {
        const analysis = {
            weakAreas: [],
            strengths: [],
            recommendations: [],
            activitySummary: {
                totalTime: 0,
                sessionCount: 0,
                lastActive: null,
                streakDays: 0
            },
            byCategory: {}
        };

        // Get all tracking data for this student in this class
        const trackingData = await this._fetchTrackingData(studentId, classId);

        // Analyze based on subject type
        if (classType === 'latin') {
            analysis.byCategory.vocabulary = await this._analyzeVocabulary(studentId, 'latin');
            analysis.byCategory.setTexts = await this._analyzeSetTexts(studentId);
            analysis.byCategory.prepTasks = await this._analyzePrepTasks(studentId, classId);
            analysis.byCategory.contentTests = await this._analyzeContentTests(studentId, classId);
        } else if (classType === 'greek') {
            analysis.byCategory.vocabulary = await this._analyzeVocabulary(studentId, 'greek');
            analysis.byCategory.prepTasks = await this._analyzePrepTasks(studentId, classId);
            analysis.byCategory.contentTests = await this._analyzeContentTests(studentId, classId);
        } else if (classType === 'prep-latin') {
            analysis.byCategory.vocabulary = await this._analyzeVocabulary(studentId, 'prep-latin');
            analysis.byCategory.prepTasks = await this._analyzePrepTasks(studentId, classId);
        } else if (classType === 'classics') {
            analysis.byCategory.reading = await this._analyzeReading(studentId);
            analysis.byCategory.contentTests = await this._analyzeContentTests(studentId, classId);
            analysis.byCategory.prepTasks = await this._analyzePrepTasks(studentId, classId);
        }

        // Calculate activity summary
        analysis.activitySummary = await this._calculateActivitySummary(studentId, classId, trackingData);

        // Identify weak areas and strengths from category analysis
        this._identifyWeakAreasAndStrengths(analysis);

        // Generate recommendations
        analysis.recommendations = this._generateRecommendations(analysis, classType);

        return analysis;
    }

    /**
     * Fetch all tracking data for a student in a class
     */
    async _fetchTrackingData(studentId, classId) {
        // Get task attempts
        const { data: attempts } = await this.supabase
            .from('task_attempts')
            .select('*')
            .eq('student_id', studentId);

        // Get tasks for this class
        const { data: tasks } = await this.supabase
            .from('tasks')
            .select('*')
            .eq('class_id', classId);

        return {
            attempts: attempts || [],
            tasks: tasks || []
        };
    }

    /**
     * Analyze vocabulary performance
     */
    async _analyzeVocabulary(studentId, language) {
        const { data: wordMastery } = await this.supabase
            .from('word_mastery')
            .select('*')
            .eq('student_id', studentId)
            .eq('language', language);

        if (!wordMastery || wordMastery.length === 0) {
            return {
                status: 'not_started',
                totalWords: 0,
                mastered: 0,
                learning: 0,
                struggling: 0,
                accuracy: 0,
                weakWords: [],
                strongWords: []
            };
        }

        const mastered = wordMastery.filter(w => w.mastered_at).length;
        const struggling = wordMastery.filter(w => {
            const total = w.correct_count + w.incorrect_count;
            const accuracy = total > 0 ? w.correct_count / total : 0;
            return total >= this.MIN_ATTEMPTS && accuracy < this.WEAK_THRESHOLD && !w.mastered_at;
        });

        const learning = wordMastery.length - mastered - struggling.length;

        const totalAttempts = wordMastery.reduce((sum, w) => sum + w.correct_count + w.incorrect_count, 0);
        const totalCorrect = wordMastery.reduce((sum, w) => sum + w.correct_count, 0);
        const overallAccuracy = totalAttempts > 0 ? totalCorrect / totalAttempts : 0;

        // Get weakest words (for targeted practice)
        const weakWords = struggling
            .sort((a, b) => {
                const accA = (a.correct_count / (a.correct_count + a.incorrect_count)) || 0;
                const accB = (b.correct_count / (b.correct_count + b.incorrect_count)) || 0;
                return accA - accB;
            })
            .slice(0, 10)
            .map(w => ({
                latin: w.word_latin,
                english: w.word_english,
                accuracy: (w.correct_count / (w.correct_count + w.incorrect_count)) || 0,
                attempts: w.correct_count + w.incorrect_count
            }));

        // Get strongest words
        const strongWords = wordMastery
            .filter(w => w.mastered_at)
            .sort((a, b) => {
                const accA = (a.correct_count / (a.correct_count + a.incorrect_count)) || 0;
                const accB = (b.correct_count / (b.correct_count + b.incorrect_count)) || 0;
                return accB - accA;
            })
            .slice(0, 5)
            .map(w => ({
                latin: w.word_latin,
                english: w.word_english,
                accuracy: (w.correct_count / (w.correct_count + w.incorrect_count)) || 0
            }));

        return {
            status: overallAccuracy >= this.MASTERY_THRESHOLD ? 'strong' :
                    overallAccuracy >= this.WEAK_THRESHOLD ? 'okay' : 'weak',
            totalWords: wordMastery.length,
            mastered,
            learning,
            struggling: struggling.length,
            accuracy: overallAccuracy,
            weakWords,
            strongWords
        };
    }

    /**
     * Analyze set text performance (Latin only)
     */
    async _analyzeSetTexts(studentId) {
        const { data: progress } = await this.supabase
            .from('set_text_progress')
            .select('*')
            .eq('student_id', studentId);

        if (!progress || progress.length === 0) {
            return {
                status: 'not_started',
                texts: [],
                averageScore: 0,
                weakSections: []
            };
        }

        const textIds = ['messalina', 'otium', 'baucis-philemon'];
        const textAnalysis = textIds.map(textId => {
            const sections = progress.filter(p => p.text_id === textId);
            if (sections.length === 0) return null;

            const avgScore = sections.reduce((sum, s) => sum + (s.best_score || 0), 0) / sections.length;
            const weakSections = sections.filter(s => (s.best_score || 0) < this.WEAK_THRESHOLD * 100);

            return {
                textId,
                sectionsAttempted: sections.length,
                averageScore: avgScore,
                weakSections: weakSections.map(s => ({
                    sectionId: s.section_id,
                    score: s.best_score
                }))
            };
        }).filter(t => t !== null);

        const overallAvg = textAnalysis.reduce((sum, t) => sum + t.averageScore, 0) / (textAnalysis.length || 1);

        return {
            status: overallAvg >= this.MASTERY_THRESHOLD * 100 ? 'strong' :
                    overallAvg >= this.WEAK_THRESHOLD * 100 ? 'okay' : 'weak',
            texts: textAnalysis,
            averageScore: overallAvg,
            weakSections: textAnalysis.flatMap(t =>
                t.weakSections.map(s => ({ text: t.textId, ...s }))
            )
        };
    }

    /**
     * Analyze reading completion and time (Classics only)
     */
    async _analyzeReading(studentId) {
        const { data: readingSessions } = await this.supabase
            .from('task_attempts')
            .select('content_path, time_spent_seconds, started_at')
            .eq('student_id', studentId)
            .eq('total_questions', 0); // Reading sessions have 0 questions

        if (!readingSessions || readingSessions.length === 0) {
            return {
                status: 'not_started',
                totalTime: 0,
                sessionsCompleted: 0,
                coursesStarted: [],
                recommendedNext: []
            };
        }

        // Categorize by course
        const courseData = {
            iliad: { sessions: 0, time: 0, lessons: new Set() },
            aeneid: { sessions: 0, time: 0, lessons: new Set() },
            odyssey: { sessions: 0, time: 0, lessons: new Set() },
            'greek-art': { sessions: 0, time: 0, lessons: new Set() }
        };

        readingSessions.forEach(s => {
            const path = s.content_path || '';
            const time = s.time_spent_seconds || 0;

            for (const course of Object.keys(courseData)) {
                if (path.includes(course)) {
                    courseData[course].sessions++;
                    courseData[course].time += time;

                    // Extract lesson ID from path
                    const match = path.match(/\/(\d+-\d+)\.html/);
                    if (match) {
                        courseData[course].lessons.add(match[1]);
                    }
                }
            }
        });

        const totalTime = Object.values(courseData).reduce((sum, c) => sum + c.time, 0);
        const coursesStarted = Object.keys(courseData).filter(c => courseData[c].sessions > 0);

        return {
            status: totalTime > 3600 ? 'strong' : totalTime > 1200 ? 'okay' : 'weak',
            totalTime,
            sessionsCompleted: readingSessions.length,
            coursesStarted: coursesStarted.map(c => ({
                name: c,
                sessions: courseData[c].sessions,
                time: courseData[c].time,
                lessonsCompleted: courseData[c].lessons.size
            })),
            courseData
        };
    }

    /**
     * Analyze content test performance
     */
    async _analyzeContentTests(studentId, classId) {
        const { data: attempts } = await this.supabase
            .from('content_test_attempts')
            .select(`
                *,
                content_tests (
                    id,
                    title,
                    topic,
                    class_id
                )
            `)
            .eq('student_id', studentId);

        if (!attempts || attempts.length === 0) {
            return {
                status: 'not_started',
                testsAttempted: 0,
                averageScore: 0,
                weakTests: []
            };
        }

        // Filter to current class
        const classAttempts = attempts.filter(a => a.content_tests?.class_id === classId);

        if (classAttempts.length === 0) {
            return {
                status: 'not_started',
                testsAttempted: 0,
                averageScore: 0,
                weakTests: []
            };
        }

        const avgScore = classAttempts.reduce((sum, a) => sum + (a.score_percentage || 0), 0) / classAttempts.length;
        const weakTests = classAttempts
            .filter(a => (a.score_percentage || 0) < this.WEAK_THRESHOLD * 100)
            .map(a => ({
                testId: a.test_id,
                title: a.content_tests?.title || 'Unknown',
                score: a.score_percentage,
                topic: a.content_tests?.topic
            }));

        return {
            status: avgScore >= this.MASTERY_THRESHOLD * 100 ? 'strong' :
                    avgScore >= this.WEAK_THRESHOLD * 100 ? 'okay' : 'weak',
            testsAttempted: classAttempts.length,
            averageScore: avgScore,
            weakTests
        };
    }

    /**
     * Analyze prep task completion
     */
    async _analyzePrepTasks(studentId, classId) {
        const { data: tasks } = await this.supabase
            .from('tasks')
            .select('*')
            .eq('class_id', classId);

        if (!tasks || tasks.length === 0) {
            return {
                status: 'not_started',
                total: 0,
                completed: 0,
                pending: 0,
                overdue: 0
            };
        }

        const { data: attempts } = await this.supabase
            .from('task_attempts')
            .select('task_id, completed_at')
            .eq('student_id', studentId)
            .in('task_id', tasks.map(t => t.id));

        const completedTasks = new Set(
            (attempts || []).filter(a => a.completed_at).map(a => a.task_id)
        );

        const now = new Date();
        const pending = tasks.filter(t => !completedTasks.has(t.id) && new Date(t.due_date) >= now).length;
        const overdue = tasks.filter(t => !completedTasks.has(t.id) && new Date(t.due_date) < now).length;

        const completionRate = tasks.length > 0 ? completedTasks.size / tasks.length : 0;

        return {
            status: completionRate >= 0.9 ? 'strong' :
                    completionRate >= 0.7 ? 'okay' : 'weak',
            total: tasks.length,
            completed: completedTasks.size,
            pending,
            overdue
        };
    }

    /**
     * Calculate activity summary
     */
    async _calculateActivitySummary(studentId, classId, trackingData) {
        const attempts = trackingData.attempts || [];

        const totalTime = attempts.reduce((sum, a) => sum + (a.time_spent_seconds || 0), 0);
        const sessionCount = attempts.length;

        // Find last active date
        const lastActive = attempts.length > 0
            ? attempts.reduce((latest, a) => {
                const date = new Date(a.started_at || a.completed_at);
                return date > latest ? date : latest;
            }, new Date(0))
            : null;

        // Calculate streak
        const streakDays = this._calculateStreak(attempts);

        return {
            totalTime,
            sessionCount,
            lastActive,
            streakDays
        };
    }

    /**
     * Calculate activity streak
     */
    _calculateStreak(attempts) {
        if (!attempts || attempts.length === 0) return 0;

        // Get unique dates of activity
        const dates = [...new Set(
            attempts.map(a => {
                const date = new Date(a.started_at || a.completed_at);
                return date.toISOString().split('T')[0];
            })
        )].sort().reverse();

        if (dates.length === 0) return 0;

        // Check if today or yesterday is in the dates (streak is still active)
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];

        if (dates[0] !== today && dates[0] !== yesterday) {
            return 0; // Streak broken
        }

        // Count consecutive days
        let streak = 1;
        let currentDate = new Date(dates[0]);

        for (let i = 1; i < dates.length; i++) {
            const expectedDate = new Date(currentDate);
            expectedDate.setDate(expectedDate.getDate() - 1);
            const expected = expectedDate.toISOString().split('T')[0];

            if (dates[i] === expected) {
                streak++;
                currentDate = new Date(dates[i]);
            } else {
                break;
            }
        }

        return streak;
    }

    /**
     * Identify weak areas and strengths from category analysis
     */
    _identifyWeakAreasAndStrengths(analysis) {
        for (const [category, data] of Object.entries(analysis.byCategory)) {
            if (!data) continue;

            if (data.status === 'weak') {
                analysis.weakAreas.push({
                    category,
                    severity: 'high',
                    details: data
                });
            } else if (data.status === 'okay') {
                analysis.weakAreas.push({
                    category,
                    severity: 'medium',
                    details: data
                });
            } else if (data.status === 'strong') {
                analysis.strengths.push({
                    category,
                    details: data
                });
            }
        }

        // Sort weak areas by severity
        analysis.weakAreas.sort((a, b) => {
            const severityOrder = { high: 0, medium: 1, low: 2 };
            return severityOrder[a.severity] - severityOrder[b.severity];
        });
    }

    /**
     * Generate personalized recommendations
     */
    _generateRecommendations(analysis, classType) {
        const recommendations = [];

        // Check for overdue tasks first (highest priority)
        if (analysis.byCategory.prepTasks?.overdue > 0) {
            recommendations.push({
                priority: 'urgent',
                category: 'prep-tasks',
                title: 'Complete overdue assignments',
                description: `You have ${analysis.byCategory.prepTasks.overdue} overdue assignment${analysis.byCategory.prepTasks.overdue > 1 ? 's' : ''}. Complete these as soon as possible.`,
                action: 'View assignments',
                actionUrl: null // Will be set by calling code based on context
            });
        }

        // Vocabulary recommendations (Latin/Greek/Prep-Latin)
        if (analysis.byCategory.vocabulary) {
            const vocab = analysis.byCategory.vocabulary;

            if (vocab.struggling > 0) {
                recommendations.push({
                    priority: 'high',
                    category: 'vocabulary',
                    title: 'Practice struggling vocabulary',
                    description: `You have ${vocab.struggling} words that need practice. Focus on these to improve your mastery.`,
                    action: 'Review weak words',
                    actionUrl: null,
                    weakWords: vocab.weakWords.slice(0, 5)
                });
            }

            if (vocab.mastered < 50 && vocab.totalWords > 50) {
                recommendations.push({
                    priority: 'medium',
                    category: 'vocabulary',
                    title: 'Keep building vocabulary',
                    description: `You've mastered ${vocab.mastered} words so far. Try to reach 50 words mastered!`,
                    action: 'Practice vocabulary',
                    actionUrl: null
                });
            }
        }

        // Set text recommendations (Latin only)
        if (analysis.byCategory.setTexts) {
            const setTexts = analysis.byCategory.setTexts;

            if (setTexts.weakSections.length > 0) {
                recommendations.push({
                    priority: 'high',
                    category: 'set-texts',
                    title: 'Review set text sections',
                    description: `You have ${setTexts.weakSections.length} set text section${setTexts.weakSections.length > 1 ? 's' : ''} scoring below 70%. Review these passages.`,
                    action: 'Practice set texts',
                    actionUrl: null,
                    sections: setTexts.weakSections.slice(0, 3)
                });
            }

            if (setTexts.status === 'not_started') {
                recommendations.push({
                    priority: 'medium',
                    category: 'set-texts',
                    title: 'Start practicing set texts',
                    description: 'The set texts are a key part of Latin GCSE. Begin practicing them now.',
                    action: 'Start set texts',
                    actionUrl: null
                });
            }
        }

        // Reading recommendations (Classics only)
        if (analysis.byCategory.reading) {
            const reading = analysis.byCategory.reading;

            if (reading.status === 'not_started') {
                recommendations.push({
                    priority: 'high',
                    category: 'reading',
                    title: 'Begin reading assignments',
                    description: 'Start reading the prescribed texts for Classical Civilisation.',
                    action: 'Start reading',
                    actionUrl: null
                });
            } else if (reading.coursesStarted.length < 4) {
                const notStarted = ['iliad', 'aeneid', 'odyssey', 'greek-art']
                    .filter(c => !reading.coursesStarted.find(s => s.name === c));

                if (notStarted.length > 0) {
                    recommendations.push({
                        priority: 'medium',
                        category: 'reading',
                        title: `Explore ${notStarted[0]}`,
                        description: `You haven't started reading ${notStarted[0]} yet. This is part of your course.`,
                        action: 'Start reading',
                        actionUrl: null
                    });
                }
            }
        }

        // Content test recommendations
        if (analysis.byCategory.contentTests) {
            const tests = analysis.byCategory.contentTests;

            if (tests.weakTests.length > 0) {
                recommendations.push({
                    priority: 'high',
                    category: 'content-tests',
                    title: 'Retry low-scoring content tests',
                    description: `You scored below 70% on ${tests.weakTests.length} content test${tests.weakTests.length > 1 ? 's' : ''}. Review the material and try again.`,
                    action: 'View content tests',
                    actionUrl: null,
                    tests: tests.weakTests.slice(0, 3)
                });
            }
        }

        // Activity recommendations
        if (analysis.activitySummary.streakDays === 0) {
            recommendations.push({
                priority: 'low',
                category: 'activity',
                title: 'Build a study streak',
                description: 'Practice regularly to build a study streak and improve retention.',
                action: 'Start practicing',
                actionUrl: null
            });
        }

        // Sort by priority
        const priorityOrder = { urgent: 0, high: 1, medium: 2, low: 3 };
        recommendations.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

        return recommendations.slice(0, 5); // Top 5 recommendations
    }

    /**
     * Generate activity heatmap data for teacher dashboard
     * @param {string} classId - Class UUID
     * @param {number} days - Number of days to include (default 30)
     * @returns {Object} Heatmap data with student activity
     */
    async generateClassActivityHeatmap(classId, days = 30) {
        // Get all students in the class
        const { data: members } = await this.supabase
            .from('class_members')
            .select(`
                student_id,
                users!inner (
                    id,
                    full_name
                )
            `)
            .eq('class_id', classId);

        if (!members || members.length === 0) {
            return { students: [], dates: [], data: [] };
        }

        const studentIds = members.map(m => m.student_id);

        // Get all activity in the last N days
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);

        const { data: attempts } = await this.supabase
            .from('task_attempts')
            .select('student_id, started_at, time_spent_seconds, score')
            .in('student_id', studentIds)
            .gte('started_at', startDate.toISOString());

        // Build heatmap data structure
        const heatmapData = [];
        const dateRange = [];

        for (let i = days - 1; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            dateRange.push(date.toISOString().split('T')[0]);
        }

        members.forEach(member => {
            const studentData = {
                studentId: member.student_id,
                studentName: member.users.full_name,
                activity: {}
            };

            // Initialize all dates with 0
            dateRange.forEach(date => {
                studentData.activity[date] = {
                    sessions: 0,
                    timeSpent: 0,
                    avgScore: 0,
                    scores: []
                };
            });

            // Fill in actual activity
            (attempts || [])
                .filter(a => a.student_id === member.student_id)
                .forEach(attempt => {
                    const date = attempt.started_at.split('T')[0];
                    if (studentData.activity[date]) {
                        studentData.activity[date].sessions++;
                        studentData.activity[date].timeSpent += attempt.time_spent_seconds || 0;
                        if (attempt.score !== null && attempt.score !== undefined) {
                            studentData.activity[date].scores.push(attempt.score);
                        }
                    }
                });

            // Calculate average scores
            Object.keys(studentData.activity).forEach(date => {
                const scores = studentData.activity[date].scores;
                if (scores.length > 0) {
                    studentData.activity[date].avgScore =
                        scores.reduce((sum, s) => sum + s, 0) / scores.length;
                }
            });

            heatmapData.push(studentData);
        });

        return {
            students: heatmapData,
            dates: dateRange,
            summary: {
                totalStudents: members.length,
                activeStudents: heatmapData.filter(s =>
                    Object.values(s.activity).some(a => a.sessions > 0)
                ).length,
                totalSessions: (attempts || []).length,
                totalTime: (attempts || []).reduce((sum, a) => sum + (a.time_spent_seconds || 0), 0)
            }
        };
    }

    // ========================================================================
    // Phase 2: Enhanced Analytics Methods
    // ========================================================================

    /**
     * Calculate performance score for a student in a given class type.
     * Shared helper used by calculateInterventionsQuadrant and getStudentRanking.
     * @param {string} studentId - Student UUID
     * @param {string} classId - Class UUID
     * @param {string} classType - 'latin', 'greek', 'classics', 'prep-latin'
     * @returns {Object} { performanceScore, vocabAccuracy, avgScore, taskCompletionRate, readingProgress, vocabMastered }
     */
    async _calculatePerformanceScore(studentId, classId, classType) {
        const metrics = {};
        const weights = {};

        // --- Vocab accuracy (% of words at >70% accuracy) ---
        if (['latin', 'greek', 'prep-latin'].includes(classType)) {
            const language = classType === 'prep-latin' ? 'prep-latin' : classType;
            const { data: wordMastery } = await this.supabase
                .from('word_mastery')
                .select('correct_count, incorrect_count')
                .eq('student_id', studentId)
                .eq('language', language);

            if (wordMastery && wordMastery.length > 0) {
                const wordsAboveThreshold = wordMastery.filter(w => {
                    const total = w.correct_count + w.incorrect_count;
                    return total > 0 && (w.correct_count / total) > 0.70;
                }).length;
                metrics.vocabAccuracy = (wordsAboveThreshold / wordMastery.length) * 100;
                metrics.vocabMastered = wordsAboveThreshold;
            } else {
                metrics.vocabAccuracy = 0;
                metrics.vocabMastered = 0;
            }
            weights.vocabAccuracy = 0.3;
        }

        // --- Quiz/test average score ---
        if (['latin', 'greek', 'classics'].includes(classType)) {
            const { data: testAttempts } = await this.supabase
                .from('content_test_attempts')
                .select(`
                    score_percentage,
                    content_tests!inner (class_id)
                `)
                .eq('student_id', studentId)
                .eq('content_tests.class_id', classId);

            if (testAttempts && testAttempts.length > 0) {
                metrics.avgScore = testAttempts.reduce((sum, a) => sum + (a.score_percentage || 0), 0) / testAttempts.length;
            } else {
                metrics.avgScore = 0;
            }
            weights.avgScore = 0.3;
        }

        // --- Task completion rate ---
        const { data: tasks } = await this.supabase
            .from('tasks')
            .select('id')
            .eq('class_id', classId);

        if (tasks && tasks.length > 0) {
            const { data: completedAttempts } = await this.supabase
                .from('task_attempts')
                .select('task_id, completed_at')
                .eq('student_id', studentId)
                .in('task_id', tasks.map(t => t.id))
                .not('completed_at', 'is', null);

            const completedTaskIds = new Set((completedAttempts || []).map(a => a.task_id));
            metrics.taskCompletionRate = (completedTaskIds.size / tasks.length) * 100;
            metrics.tasksCompleted = completedTaskIds.size;
            metrics.tasksTotal = tasks.length;
        } else {
            metrics.taskCompletionRate = 0;
            metrics.tasksCompleted = 0;
            metrics.tasksTotal = 0;
        }
        weights.taskCompletionRate = 0.2;

        // --- Reading progress (classics only) ---
        if (classType === 'classics') {
            const readingAnalysis = await this._analyzeReading(studentId);
            // Score based on total time: 3600s+ = 100, scale linearly below
            metrics.readingProgress = Math.min(100, (readingAnalysis.totalTime / 3600) * 100);
            weights.readingProgress = 0.2;
        }

        // Normalise weights to sum to 1
        const totalWeight = Object.values(weights).reduce((sum, w) => sum + w, 0);
        let performanceScore = 0;
        if (totalWeight > 0) {
            for (const key of Object.keys(weights)) {
                performanceScore += (metrics[key] || 0) * (weights[key] / totalWeight);
            }
        }

        return {
            performanceScore: Math.round(performanceScore * 100) / 100,
            vocabAccuracy: metrics.vocabAccuracy || 0,
            avgScore: metrics.avgScore || 0,
            taskCompletionRate: metrics.taskCompletionRate || 0,
            readingProgress: metrics.readingProgress || 0,
            vocabMastered: metrics.vocabMastered || 0,
            tasksCompleted: metrics.tasksCompleted || 0,
            tasksTotal: metrics.tasksTotal || 0
        };
    }

    /**
     * Calculate effort score for a student.
     * @param {string} studentId - Student UUID
     * @param {string} classId - Class UUID
     * @param {number} classAvgTimeSeconds - Average time spent across the class (for relative comparison)
     * @returns {Object} { effortScore, activeDays, timeSpentSeconds, tasksAttempted }
     */
    async _calculateEffortScore(studentId, classId, classAvgTimeSeconds) {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        // Get all attempts in last 30 days
        const { data: recentAttempts } = await this.supabase
            .from('task_attempts')
            .select('started_at, time_spent_seconds')
            .eq('student_id', studentId)
            .gte('started_at', thirtyDaysAgo.toISOString());

        const attempts = recentAttempts || [];

        // Active days in last 30 days
        const activeDaysSet = new Set(
            attempts
                .filter(a => a.started_at)
                .map(a => a.started_at.split('T')[0])
        );
        const activeDays = activeDaysSet.size;
        // Out of ~20 school days, capped at 100
        const activeDaysScore = Math.min(100, (activeDays / 20) * 100);

        // Time spent relative to class average (100 = average, capped at 150)
        const totalTimeSeconds = attempts.reduce((sum, a) => sum + (a.time_spent_seconds || 0), 0);
        let timeRelativeScore = 100;
        if (classAvgTimeSeconds > 0) {
            timeRelativeScore = Math.min(150, (totalTimeSeconds / classAvgTimeSeconds) * 100);
        }

        // Tasks attempted count relative to available tasks
        const { data: classTasks } = await this.supabase
            .from('tasks')
            .select('id')
            .eq('class_id', classId);

        let tasksAttemptedScore = 0;
        let tasksAttempted = 0;
        const availableTasks = (classTasks || []).length;

        if (availableTasks > 0) {
            const { data: taskAttempts } = await this.supabase
                .from('task_attempts')
                .select('task_id')
                .eq('student_id', studentId)
                .in('task_id', (classTasks || []).map(t => t.id));

            const attemptedTaskIds = new Set((taskAttempts || []).map(a => a.task_id));
            tasksAttempted = attemptedTaskIds.size;
            tasksAttemptedScore = Math.min(100, (tasksAttempted / availableTasks) * 100);
        }

        // Weighted composite
        const effortScore = (activeDaysScore * 0.4) + (timeRelativeScore * 0.3) + (tasksAttemptedScore * 0.3);

        return {
            effortScore: Math.round(effortScore * 100) / 100,
            activeDays,
            timeSpentSeconds: totalTimeSeconds,
            tasksAttempted
        };
    }

    /**
     * Determine quadrant based on performance and effort scores
     * @param {number} performanceScore
     * @param {number} effortScore
     * @returns {string} Quadrant label
     */
    _determineQuadrant(performanceScore, effortScore) {
        if (performanceScore >= 70 && effortScore >= 60) return 'needs_stretch';
        if (performanceScore >= 70 && effortScore < 60) return 'needs_more_effort';
        if (performanceScore < 70 && effortScore >= 60) return 'praise_for_commitment';
        return 'needs_support';
    }

    /**
     * Calculate interventions quadrant data for a class
     * Places students into quadrants based on performance and effort scores
     * @param {string} classId - Class UUID
     * @param {string} classType - 'latin', 'greek', 'classics', 'prep-latin'
     * @param {Array} students - Array of {id, name, email}
     * @returns {Object} { students: [{id, name, performanceScore, effortScore, quadrant}], classAvgPerformance, classAvgEffort }
     */
    async calculateInterventionsQuadrant(classId, classType, students) {
        try {
            if (!students || students.length === 0) {
                return { students: [], classAvgPerformance: 0, classAvgEffort: 0 };
            }

            // First pass: calculate performance scores and time spent for class average
            const studentPerfData = [];
            const timeTotals = [];

            for (const student of students) {
                const perfData = await this._calculatePerformanceScore(student.id, classId, classType);

                // Get time spent for class average calculation
                const thirtyDaysAgo = new Date();
                thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
                const { data: recentAttempts } = await this.supabase
                    .from('task_attempts')
                    .select('time_spent_seconds')
                    .eq('student_id', student.id)
                    .gte('started_at', thirtyDaysAgo.toISOString());

                const totalTime = (recentAttempts || []).reduce((sum, a) => sum + (a.time_spent_seconds || 0), 0);
                timeTotals.push(totalTime);

                studentPerfData.push({
                    student,
                    perfData
                });
            }

            // Calculate class average time for effort scoring
            const classAvgTimeSeconds = timeTotals.length > 0
                ? timeTotals.reduce((sum, t) => sum + t, 0) / timeTotals.length
                : 0;

            // Second pass: calculate effort scores with class average context
            const results = [];
            for (const { student, perfData } of studentPerfData) {
                const effortData = await this._calculateEffortScore(student.id, classId, classAvgTimeSeconds);
                const quadrant = this._determineQuadrant(perfData.performanceScore, effortData.effortScore);

                results.push({
                    id: student.id,
                    name: student.name,
                    performanceScore: perfData.performanceScore,
                    effortScore: effortData.effortScore,
                    quadrant
                });
            }

            const classAvgPerformance = results.length > 0
                ? Math.round((results.reduce((sum, r) => sum + r.performanceScore, 0) / results.length) * 100) / 100
                : 0;
            const classAvgEffort = results.length > 0
                ? Math.round((results.reduce((sum, r) => sum + r.effortScore, 0) / results.length) * 100) / 100
                : 0;

            return {
                students: results,
                classAvgPerformance,
                classAvgEffort
            };
        } catch (error) {
            console.error('Error calculating interventions quadrant:', error);
            return { students: [], classAvgPerformance: 0, classAvgEffort: 0 };
        }
    }

    /**
     * Get plain-language strengths and areas for improvement for a student
     * @param {string} studentId - Student UUID
     * @param {string} classId - Class UUID
     * @param {string} classType - 'latin', 'greek', 'classics', 'prep-latin'
     * @returns {Object} { strengths: string[], areasForImprovement: string[] }
     */
    async getStrengthsAndWeaknesses(studentId, classId, classType) {
        try {
            const strengths = [];
            const areasForImprovement = [];

            // --- Vocabulary analysis ---
            if (['latin', 'greek', 'prep-latin'].includes(classType)) {
                const language = classType === 'prep-latin' ? 'prep-latin' : classType;
                const vocabAnalysis = await this._analyzeVocabulary(studentId, language);

                if (vocabAnalysis.status !== 'not_started') {
                    // Check per-chapter performance by grouping words
                    const { data: wordMastery } = await this.supabase
                        .from('word_mastery')
                        .select('word_latin, word_english, correct_count, incorrect_count, mastered_at, chapter')
                        .eq('student_id', studentId)
                        .eq('language', language);

                    if (wordMastery && wordMastery.length > 0) {
                        // Group by chapter
                        const chapterMap = {};
                        wordMastery.forEach(w => {
                            const ch = w.chapter || 'General';
                            if (!chapterMap[ch]) chapterMap[ch] = [];
                            chapterMap[ch].push(w);
                        });

                        for (const [chapter, words] of Object.entries(chapterMap)) {
                            const totalAttempts = words.reduce((s, w) => s + w.correct_count + w.incorrect_count, 0);
                            const totalCorrect = words.reduce((s, w) => s + w.correct_count, 0);
                            const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

                            if (accuracy >= 85) {
                                strengths.push(`Vocabulary ${chapter} (${accuracy}% accuracy)`);
                            } else if (accuracy < 70 && totalAttempts > 0) {
                                areasForImprovement.push(`Vocabulary ${chapter} (${accuracy}% accuracy)`);
                            }
                        }

                        // If no chapters, use overall
                        if (Object.keys(chapterMap).length <= 1) {
                            if (vocabAnalysis.accuracy >= 0.85) {
                                strengths.push(`Overall vocabulary (${Math.round(vocabAnalysis.accuracy * 100)}% accuracy)`);
                            } else if (vocabAnalysis.accuracy < 0.70 && vocabAnalysis.accuracy > 0) {
                                areasForImprovement.push(`Overall vocabulary (${Math.round(vocabAnalysis.accuracy * 100)}% accuracy)`);
                            }
                        }
                    }
                }
            }

            // --- Set texts analysis (Latin only) ---
            if (classType === 'latin') {
                const setTextAnalysis = await this._analyzeSetTexts(studentId);

                if (setTextAnalysis.status !== 'not_started') {
                    const textNames = {
                        messalina: 'Messalina',
                        otium: 'Otium',
                        'baucis-philemon': 'Baucis & Philemon'
                    };

                    for (const text of setTextAnalysis.texts) {
                        const name = textNames[text.textId] || text.textId;
                        if (text.averageScore >= 85) {
                            strengths.push(`Set Text: ${name} (${Math.round(text.averageScore)}%)`);
                        } else if (text.averageScore < 70) {
                            areasForImprovement.push(`Set Text: ${name} (below ${Math.round(text.averageScore)}%)`);
                        }
                    }
                }
            }

            // --- Reading analysis (Classics only) ---
            if (classType === 'classics') {
                const readingAnalysis = await this._analyzeReading(studentId);

                if (readingAnalysis.status !== 'not_started') {
                    const courseNames = {
                        iliad: 'Iliad',
                        aeneid: 'Aeneid',
                        odyssey: 'Odyssey',
                        'greek-art': 'Greek Art'
                    };

                    for (const course of readingAnalysis.coursesStarted) {
                        if (course.time > 1200) { // More than 20 mins = on track
                            strengths.push(`Reading: on track with ${courseNames[course.name] || course.name}`);
                        }
                    }

                    if (readingAnalysis.status === 'weak') {
                        areasForImprovement.push('Reading: more time needed on prescribed texts');
                    }
                }
            }

            // --- Content tests analysis ---
            if (['latin', 'greek', 'classics'].includes(classType)) {
                const testAnalysis = await this._analyzeContentTests(studentId, classId);

                if (testAnalysis.status !== 'not_started') {
                    if (testAnalysis.averageScore >= 85) {
                        strengths.push(`Content tests (${Math.round(testAnalysis.averageScore)}% average)`);
                    } else if (testAnalysis.averageScore < 70) {
                        areasForImprovement.push(`Content tests (${Math.round(testAnalysis.averageScore)}% average)`);
                    }

                    // Call out specific weak tests
                    for (const wt of testAnalysis.weakTests.slice(0, 2)) {
                        areasForImprovement.push(`${wt.title} (${Math.round(wt.score)}%)`);
                    }
                }
            }

            // --- Prep tasks analysis ---
            const prepAnalysis = await this._analyzePrepTasks(studentId, classId);

            if (prepAnalysis.status !== 'not_started') {
                if (prepAnalysis.overdue > 0) {
                    areasForImprovement.push(`${prepAnalysis.overdue} overdue prep task${prepAnalysis.overdue > 1 ? 's' : ''}`);
                }

                const completionPct = prepAnalysis.total > 0
                    ? Math.round((prepAnalysis.completed / prepAnalysis.total) * 100)
                    : 0;

                if (completionPct >= 85) {
                    strengths.push(`Task completion (${completionPct}% complete)`);
                } else if (completionPct < 70 && prepAnalysis.total > 0) {
                    areasForImprovement.push(`Task completion (${completionPct}% complete)`);
                }
            }

            return { strengths, areasForImprovement };
        } catch (error) {
            console.error('Error getting strengths and weaknesses:', error);
            return { strengths: [], areasForImprovement: [] };
        }
    }

    /**
     * Determine activity type from content path and task_id
     * @param {string} contentPath - The content path from a task attempt
     * @param {string|null} taskId - The task ID if this was an assigned task
     * @returns {Object} { type, typeName }
     */
    _determineActivityType(contentPath, taskId) {
        const path = (contentPath || '').toLowerCase();

        if (path.includes('vocab') || path.includes('vocabulary')) {
            return { type: 'vocabulary', typeName: 'Vocabulary' };
        }
        if (path.includes('set-text')) {
            return { type: 'set-text', typeName: 'Set Text' };
        }
        if (path.includes('content-test')) {
            return { type: 'content-test', typeName: 'Content Test' };
        }
        if (path.includes('iliad') || path.includes('aeneid') || path.includes('odyssey') || path.includes('greek-art')) {
            return { type: 'reading', typeName: 'Reading' };
        }
        if (taskId) {
            return { type: 'prep', typeName: 'Prep Task' };
        }
        return { type: 'practice', typeName: 'Practice' };
    }

    /**
     * Derive a subject tag from content path
     * @param {string} contentPath
     * @returns {string} Subject tag
     */
    _deriveSubjectTag(contentPath) {
        const path = (contentPath || '').toLowerCase();
        if (path.includes('/latin/') || path.includes('latin')) return 'latin';
        if (path.includes('/greek/') || path.includes('greek')) return 'greek';
        if (path.includes('/classics/') || path.includes('iliad') || path.includes('aeneid') || path.includes('odyssey') || path.includes('greek-art')) return 'classics';
        if (path.includes('prep')) return 'prep-latin';
        return 'general';
    }

    /**
     * Get recently completed activities for a student
     * @param {string} studentId - Student UUID
     * @param {number} limit - Max results to return (default 10)
     * @returns {Array} Array of {id, type, typeName, score, timeSpentSeconds, completedAt, contentPath, subjectTag}
     */
    async getRecentlyCompleted(studentId, limit = 10) {
        try {
            const { data: attempts, error } = await this.supabase
                .from('task_attempts')
                .select('id, task_id, content_path, score, time_spent_seconds, completed_at')
                .eq('student_id', studentId)
                .not('completed_at', 'is', null)
                .order('completed_at', { ascending: false })
                .limit(limit);

            if (error) {
                console.error('Error fetching recent completions:', error);
                return [];
            }

            if (!attempts || attempts.length === 0) {
                return [];
            }

            return attempts.map(attempt => {
                const { type, typeName } = this._determineActivityType(attempt.content_path, attempt.task_id);
                const subjectTag = this._deriveSubjectTag(attempt.content_path);

                return {
                    id: attempt.id,
                    type,
                    typeName,
                    score: attempt.score || 0,
                    timeSpentSeconds: attempt.time_spent_seconds || 0,
                    completedAt: attempt.completed_at,
                    contentPath: attempt.content_path || '',
                    subjectTag
                };
            });
        } catch (error) {
            console.error('Error getting recently completed activities:', error);
            return [];
        }
    }

    /**
     * Get student ranking for a class sorted by overall performance score
     * @param {string} classId - Class UUID
     * @param {string} classType - 'latin', 'greek', 'classics', 'prep-latin'
     * @param {Array} students - Array of {id, name, email}
     * @returns {Array} Sorted array of {id, name, overallScore, rank, vocabMastered, avgScore, activeDays, tasksCompleted}
     */
    async getStudentRanking(classId, classType, students) {
        try {
            if (!students || students.length === 0) {
                return [];
            }

            const thirtyDaysAgo = new Date();
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

            const rankings = [];

            for (const student of students) {
                const perfData = await this._calculatePerformanceScore(student.id, classId, classType);

                // Get active days
                const { data: recentAttempts } = await this.supabase
                    .from('task_attempts')
                    .select('started_at')
                    .eq('student_id', student.id)
                    .gte('started_at', thirtyDaysAgo.toISOString());

                const activeDaysSet = new Set(
                    (recentAttempts || [])
                        .filter(a => a.started_at)
                        .map(a => a.started_at.split('T')[0])
                );

                rankings.push({
                    id: student.id,
                    name: student.name,
                    overallScore: perfData.performanceScore,
                    rank: 0, // Will be set after sorting
                    vocabMastered: perfData.vocabMastered || 0,
                    avgScore: Math.round(perfData.avgScore * 100) / 100,
                    activeDays: activeDaysSet.size,
                    tasksCompleted: perfData.tasksCompleted || 0
                });
            }

            // Sort by overall score descending
            rankings.sort((a, b) => b.overallScore - a.overallScore);

            // Assign ranks
            rankings.forEach((entry, index) => {
                entry.rank = index + 1;
            });

            return rankings;
        } catch (error) {
            console.error('Error getting student ranking:', error);
            return [];
        }
    }

    /**
     * Get class summary statistics
     * @param {string} classId - Class UUID
     * @param {string} classType - 'latin', 'greek', 'classics', 'prep-latin'
     * @param {Array} students - Array of {id, name, email}
     * @returns {Object} { activeStudents, totalStudents, avgScore, completionRate, totalSessions, totalTimeMinutes, studentsNeedingAttention }
     */
    async getClassSummary(classId, classType, students) {
        try {
            if (!students || students.length === 0) {
                return {
                    activeStudents: 0,
                    totalStudents: 0,
                    avgScore: 0,
                    completionRate: 0,
                    totalSessions: 0,
                    totalTimeMinutes: 0,
                    studentsNeedingAttention: 0
                };
            }

            const studentIds = students.map(s => s.id);
            const thirtyDaysAgo = new Date();
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

            // Get all attempts for these students
            const { data: allAttempts } = await this.supabase
                .from('task_attempts')
                .select('student_id, score, time_spent_seconds, started_at, completed_at')
                .in('student_id', studentIds);

            const attempts = allAttempts || [];

            // Active students (any activity in last 30 days)
            const activeStudentIds = new Set(
                attempts
                    .filter(a => a.started_at && new Date(a.started_at) >= thirtyDaysAgo)
                    .map(a => a.student_id)
            );

            // Total sessions and time
            const totalSessions = attempts.length;
            const totalTimeSeconds = attempts.reduce((sum, a) => sum + (a.time_spent_seconds || 0), 0);
            const totalTimeMinutes = Math.round(totalTimeSeconds / 60);

            // Average score across all scored attempts
            const scoredAttempts = attempts.filter(a => a.score !== null && a.score !== undefined);
            const avgScore = scoredAttempts.length > 0
                ? Math.round((scoredAttempts.reduce((sum, a) => sum + a.score, 0) / scoredAttempts.length) * 100) / 100
                : 0;

            // Completion rate: completed tasks / total assigned tasks across all students
            const { data: classTasks } = await this.supabase
                .from('tasks')
                .select('id')
                .eq('class_id', classId);

            let completionRate = 0;
            if (classTasks && classTasks.length > 0) {
                const totalAssignments = classTasks.length * students.length;
                const { data: completedAttempts } = await this.supabase
                    .from('task_attempts')
                    .select('student_id, task_id, completed_at')
                    .in('student_id', studentIds)
                    .in('task_id', classTasks.map(t => t.id))
                    .not('completed_at', 'is', null);

                // Deduplicate by student+task (a student may have multiple attempts at same task)
                const completedPairs = new Set(
                    (completedAttempts || []).map(a => `${a.student_id}:${a.task_id}`)
                );
                completionRate = totalAssignments > 0
                    ? Math.round((completedPairs.size / totalAssignments) * 100 * 100) / 100
                    : 0;
            }

            // Students needing attention = students in "needs_support" quadrant
            const quadrantData = await this.calculateInterventionsQuadrant(classId, classType, students);
            const studentsNeedingAttention = quadrantData.students.filter(s => s.quadrant === 'needs_support').length;

            return {
                activeStudents: activeStudentIds.size,
                totalStudents: students.length,
                avgScore,
                completionRate,
                totalSessions,
                totalTimeMinutes,
                studentsNeedingAttention
            };
        } catch (error) {
            console.error('Error getting class summary:', error);
            return {
                activeStudents: 0,
                totalStudents: students.length || 0,
                avgScore: 0,
                completionRate: 0,
                totalSessions: 0,
                totalTimeMinutes: 0,
                studentsNeedingAttention: 0
            };
        }
    }

    // ========================================================================
    // Task Categorisation & Urgency (merged from student-tracking.js)
    // ========================================================================

    /**
     * Get all upcoming tasks with improved categorization
     * @param {string} classId - Class UUID
     * @param {string} studentId - Student UUID
     * @param {number|null} limit - Max results (null for all)
     * @returns {Array} Enhanced tasks with category and urgency info
     */
    async getUpcomingTasks(classId, studentId, limit = null) {
        if (!classId) return [];

        const now = new Date();
        const { data: tasks, error } = await this.supabase
            .from('tasks')
            .select('*')
            .eq('class_id', classId)
            .gte('due_date', now.toISOString())
            .order('due_date', { ascending: true });

        if (error) {
            console.error('Error loading tasks:', error);
            return [];
        }

        // Get completion status for tasks
        const { data: attempts } = await this.supabase
            .from('task_attempts')
            .select('task_id, completed_at, score')
            .eq('student_id', studentId)
            .in('task_id', (tasks || []).map(t => t.id));

        const completedMap = new Map();
        (attempts || []).forEach(a => {
            if (a.completed_at) {
                completedMap.set(a.task_id, {
                    completed: true,
                    score: a.score
                });
            }
        });

        // Enhance tasks with completion status and categorization
        const enhancedTasks = (tasks || []).map(task => {
            const completion = completedMap.get(task.id);
            const category = this.categorizeTask(task);

            return {
                ...task,
                isCompleted: !!completion,
                score: completion?.score,
                category: category.type,
                categoryLabel: category.label,
                categoryIcon: category.icon,
                categoryColor: category.color,
                urgency: this.calculateUrgency(task.due_date)
            };
        });

        return limit ? enhancedTasks.slice(0, limit) : enhancedTasks;
    }

    /**
     * Categorize task by type based on title and content path
     * @param {Object} task - Task object with title and content_path
     * @returns {Object} { type, label, icon, color }
     */
    categorizeTask(task) {
        const title = (task.title || '').toLowerCase();
        const contentPath = (task.content_path || '').toLowerCase();

        if (contentPath.includes('prep') || title.includes('prep') || task.type === 'prep-latin') {
            return { type: 'prep', label: 'Prep Assignment', icon: '\u270F\uFE0F', color: '#8b5cf6' };
        }
        if (contentPath.includes('vocabulary') || title.includes('vocab')) {
            return { type: 'vocabulary', label: 'Vocabulary Quiz', icon: '\uD83D\uDCD6', color: '#0066ff' };
        }
        if (contentPath.includes('set-text') || contentPath.includes('messalina') ||
            contentPath.includes('baucis') || contentPath.includes('otium')) {
            return { type: 'set-text', label: 'Set Text Quiz', icon: '\uD83D\uDCDC', color: '#059669' };
        }
        if (contentPath.includes('content-test') || title.includes('test')) {
            return { type: 'content-test', label: 'Content Test', icon: '\uD83C\uDFAF', color: '#dc2626' };
        }
        if (contentPath.includes('iliad') || contentPath.includes('aeneid') ||
            contentPath.includes('odyssey') || contentPath.includes('greek-art') ||
            title.includes('reading')) {
            return { type: 'reading', label: 'Reading Assignment', icon: '\uD83D\uDCDA', color: '#ea580c' };
        }
        return { type: 'general', label: 'Assignment', icon: '\uD83D\uDCDD', color: '#6b7280' };
    }

    /**
     * Calculate task urgency based on due date
     * @param {string} dueDate - ISO date string
     * @returns {Object} { level, label, color }
     */
    calculateUrgency(dueDate) {
        const now = new Date();
        const due = new Date(dueDate);
        const daysUntil = Math.ceil((due - now) / (1000 * 60 * 60 * 24));

        if (daysUntil < 0) {
            return { level: 'overdue', label: 'Overdue!', color: '#dc2626' };
        } else if (daysUntil === 0) {
            return { level: 'today', label: 'Due today', color: '#ea580c' };
        } else if (daysUntil === 1) {
            return { level: 'tomorrow', label: 'Due tomorrow', color: '#f59e0b' };
        } else if (daysUntil <= 3) {
            return { level: 'soon', label: `Due in ${daysUntil} days`, color: '#f59e0b' };
        } else if (daysUntil <= 7) {
            return { level: 'thisweek', label: due.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' }), color: '#0066ff' };
        } else {
            return { level: 'later', label: due.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }), color: '#6b7280' };
        }
    }

    /**
     * Get task summary stats
     * @param {Array} tasks - Array of enhanced task objects (from getUpcomingTasks)
     * @returns {Object} Summary with counts by status and category
     */
    getTaskSummary(tasks) {
        const now = new Date();

        return {
            total: tasks.length,
            completed: tasks.filter(t => t.isCompleted).length,
            pending: tasks.filter(t => !t.isCompleted).length,
            overdue: tasks.filter(t => !t.isCompleted && new Date(t.due_date) < now).length,
            dueToday: tasks.filter(t => !t.isCompleted && this.calculateUrgency(t.due_date).level === 'today').length,
            dueSoon: tasks.filter(t => !t.isCompleted && ['tomorrow', 'soon'].includes(this.calculateUrgency(t.due_date).level)).length,
            byCategory: {
                prep: tasks.filter(t => t.category === 'prep').length,
                vocabulary: tasks.filter(t => t.category === 'vocabulary').length,
                setText: tasks.filter(t => t.category === 'set-text').length,
                contentTest: tasks.filter(t => t.category === 'content-test').length,
                reading: tasks.filter(t => t.category === 'reading').length
            }
        };
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnalyticsEngine;
}

// Compatibility shim: existing code referencing studentTracking will use analyticsEngine instance
// Note: studentTracking was a class-based module; this shim maps to AnalyticsEngine.
// Consumers that used `new StudentTracking(supabase)` can now use `new AnalyticsEngine(supabase)` instead.
// The static methods (categorizeTask, calculateUrgency) are available on the prototype.
window.StudentTracking = AnalyticsEngine;
