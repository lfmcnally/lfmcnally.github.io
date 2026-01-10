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
            .eq('user_id', studentId); // Note: set_text_progress uses user_id

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
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnalyticsEngine;
}
