/**
 * Student Tracking System
 * Improved organization and display of student progress tracking
 */

class StudentTracking {
    constructor(supabaseClient) {
        this.supabase = supabaseClient;
        this.currentUser = null;
        this.currentClassId = null;
        this.classType = null;
    }

    async init(classId, classType) {
        this.currentClassId = classId;
        this.classType = classType;

        const { data: { user } } = await this.supabase.auth.getUser();
        this.currentUser = user;

        return this;
    }

    /**
     * Get all upcoming tasks with improved categorization
     */
    async getUpcomingTasks(limit = null) {
        if (!this.currentClassId) return [];

        const now = new Date();
        const { data: tasks, error } = await this.supabase
            .from('tasks')
            .select('*')
            .eq('class_id', this.currentClassId)
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
            .eq('student_id', this.currentUser.id)
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
     * Categorize task by type
     */
    categorizeTask(task) {
        const title = task.title.toLowerCase();
        const contentPath = task.content_path.toLowerCase();

        // Check for prep assignments
        if (contentPath.includes('prep') || title.includes('prep') || task.type === 'prep-latin') {
            return {
                type: 'prep',
                label: 'Prep Assignment',
                icon: '✏️',
                color: '#8b5cf6'
            };
        }

        // Check for vocabulary
        if (contentPath.includes('vocabulary') || title.includes('vocab')) {
            return {
                type: 'vocabulary',
                label: 'Vocabulary Quiz',
                icon: '📖',
                color: '#0066ff'
            };
        }

        // Check for set text
        if (contentPath.includes('set-text') || contentPath.includes('messalina') ||
            contentPath.includes('baucis') || contentPath.includes('otium')) {
            return {
                type: 'set-text',
                label: 'Set Text Quiz',
                icon: '📜',
                color: '#059669'
            };
        }

        // Check for content tests
        if (contentPath.includes('content-test') || title.includes('test')) {
            return {
                type: 'content-test',
                label: 'Content Test',
                icon: '🎯',
                color: '#dc2626'
            };
        }

        // Check for reading
        if (contentPath.includes('iliad') || contentPath.includes('aeneid') ||
            contentPath.includes('odyssey') || contentPath.includes('greek-art') ||
            title.includes('reading')) {
            return {
                type: 'reading',
                label: 'Reading Assignment',
                icon: '📚',
                color: '#ea580c'
            };
        }

        // Default
        return {
            type: 'general',
            label: 'Assignment',
            icon: '📝',
            color: '#6b7280'
        };
    }

    /**
     * Calculate task urgency
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
     * Render improved tasks section with grouping
     */
    renderTasksSection(tasks, options = {}) {
        const { groupByCategory = true, showCompleted = true } = options;

        if (tasks.length === 0) {
            return `
                <div class="empty-state" style="text-align: center; padding: 2rem; color: #9ca3af;">
                    <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎉</div>
                    <p style="font-weight: 600; margin-bottom: 0.25rem;">All caught up!</p>
                    <p style="font-size: 0.85rem;">No upcoming tasks at the moment</p>
                </div>
            `;
        }

        let filteredTasks = showCompleted ? tasks : tasks.filter(t => !t.isCompleted);

        if (groupByCategory) {
            return this.renderGroupedTasks(filteredTasks);
        } else {
            return this.renderTasksList(filteredTasks);
        }
    }

    /**
     * Render tasks grouped by category
     */
    renderGroupedTasks(tasks) {
        // Group by category
        const grouped = tasks.reduce((groups, task) => {
            const category = task.category;
            if (!groups[category]) {
                groups[category] = [];
            }
            groups[category].push(task);
            return {};
        }, {});

        // Priority order for categories
        const categoryOrder = ['prep', 'content-test', 'vocabulary', 'set-text', 'reading', 'general'];

        let html = '';
        categoryOrder.forEach(category => {
            const categoryTasks = grouped[category];
            if (!categoryTasks || categoryTasks.length === 0) return;

            const categoryInfo = this.categorizeTask({ content_path: category, title: category, type: category });

            html += `
                <div class="task-category-group" style="margin-bottom: 1.5rem;">
                    <div class="task-category-header" style="
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        margin-bottom: 0.75rem;
                        padding-bottom: 0.5rem;
                        border-bottom: 2px solid #e5e7eb;
                    ">
                        <span style="font-size: 1.25rem;">${categoryInfo.icon}</span>
                        <span style="font-weight: 700; color: #1f2937;">${categoryInfo.label}</span>
                        <span style="
                            background: ${categoryInfo.color}15;
                            color: ${categoryInfo.color};
                            padding: 0.2rem 0.6rem;
                            border-radius: 12px;
                            font-size: 0.75rem;
                            font-weight: 600;
                        ">${categoryTasks.length}</span>
                    </div>
                    <div class="task-category-items">
                        ${this.renderTasksList(categoryTasks)}
                    </div>
                </div>
            `;
        });

        return html;
    }

    /**
     * Render tasks as a list
     */
    renderTasksList(tasks) {
        return tasks.map(task => this.renderTaskCard(task)).join('');
    }

    /**
     * Render individual task card
     */
    renderTaskCard(task) {
        const urgency = task.urgency;
        const isOverdue = urgency.level === 'overdue';

        return `
            <div class="task-card" style="
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1rem;
                margin-bottom: 0.75rem;
                background: white;
                border: 2px solid ${task.isCompleted ? '#10b981' : isOverdue ? '#dc2626' : '#e5e7eb'};
                border-radius: 12px;
                transition: all 0.2s;
                ${task.isCompleted ? 'opacity: 0.75;' : ''}
            " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.1)';"
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">

                <!-- Task Icon -->
                <div style="
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    background: ${task.categoryColor}15;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    flex-shrink: 0;
                ">${task.isCompleted ? '✅' : task.categoryIcon}</div>

                <!-- Task Info -->
                <div style="flex: 1; min-width: 0;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.3rem;">
                        <span style="font-weight: 600; color: #1f2937;">${task.title}</span>
                        ${task.isCompleted ? '<span style="color: #10b981; font-size: 0.75rem; font-weight: 600;">(Completed)</span>' : ''}
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.8rem; color: #6b7280;">
                        <span style="
                            background: ${urgency.color}15;
                            color: ${urgency.color};
                            padding: 0.2rem 0.5rem;
                            border-radius: 6px;
                            font-weight: 600;
                        ">${urgency.label}</span>
                        <span>${task.categoryLabel}</span>
                    </div>
                </div>

                <!-- Action Button -->
                <a href="${task.content_path}${task.content_path.includes('?') ? '&' : '?'}task_id=${task.id}"
                   style="
                        padding: 0.6rem 1.25rem;
                        background: ${task.isCompleted ? '#f3f4f6' : 'linear-gradient(135deg, #0066ff 0%, #0052cc 100%)'};
                        color: ${task.isCompleted ? '#6b7280' : 'white'};
                        border-radius: 10px;
                        font-weight: 600;
                        font-size: 0.85rem;
                        text-decoration: none;
                        white-space: nowrap;
                        transition: all 0.2s;
                   "
                   onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(0, 102, 255, 0.3)';"
                   onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
                    ${task.isCompleted ? 'Review' : 'Start'}
                </a>
            </div>
        `;
    }

    /**
     * Get task summary stats
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

    /**
     * Render task summary header
     */
    renderTaskSummaryHeader(tasks) {
        const summary = this.getTaskSummary(tasks);

        return `
            <div class="task-summary" style="
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                gap: 0.75rem;
                margin-bottom: 1.5rem;
            ">
                <div class="summary-stat" style="
                    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
                    border: 2px solid #3b82f6;
                    border-radius: 12px;
                    padding: 0.75rem;
                    text-align: center;
                ">
                    <div style="font-size: 1.5rem; font-weight: 700; color: #1e40af;">${summary.pending}</div>
                    <div style="font-size: 0.7rem; color: #1e40af; margin-top: 0.2rem;">To Do</div>
                </div>

                ${summary.overdue > 0 ? `
                <div class="summary-stat" style="
                    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
                    border: 2px solid #dc2626;
                    border-radius: 12px;
                    padding: 0.75rem;
                    text-align: center;
                ">
                    <div style="font-size: 1.5rem; font-weight: 700; color: #991b1b;">${summary.overdue}</div>
                    <div style="font-size: 0.7rem; color: #991b1b; margin-top: 0.2rem;">Overdue</div>
                </div>
                ` : ''}

                ${summary.dueToday > 0 ? `
                <div class="summary-stat" style="
                    background: linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%);
                    border: 2px solid #ea580c;
                    border-radius: 12px;
                    padding: 0.75rem;
                    text-align: center;
                ">
                    <div style="font-size: 1.5rem; font-weight: 700; color: #9a3412;">${summary.dueToday}</div>
                    <div style="font-size: 0.7rem; color: #9a3412; margin-top: 0.2rem;">Due Today</div>
                </div>
                ` : ''}

                <div class="summary-stat" style="
                    background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
                    border: 2px solid #16a34a;
                    border-radius: 12px;
                    padding: 0.75rem;
                    text-align: center;
                ">
                    <div style="font-size: 1.5rem; font-weight: 700; color: #15803d;">${summary.completed}</div>
                    <div style="font-size: 0.7rem; color: #15803d; margin-top: 0.2rem;">Completed</div>
                </div>
            </div>
        `;
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StudentTracking;
}
