// Vocab Schedule Engine
// Calculates daily word chunks for deadline-driven vocabulary learning
// Works with any vocabulary dataset (A-Level Latin, GCSE, Greek, etc.)

const VocabSchedule = {

    // Calculate the full schedule: which words to learn each day
    // Returns { daysTotal, wordsPerDay, schedule: [{ day, date, startIndex, endIndex }] }
    calculateSchedule(startDate, deadlineDate, totalWords) {
        const start = new Date(startDate);
        start.setHours(0, 0, 0, 0);
        const deadline = new Date(deadlineDate);
        deadline.setHours(0, 0, 0, 0);

        const msPerDay = 1000 * 60 * 60 * 24;
        const daysTotal = Math.max(1, Math.round((deadline - start) / msPerDay));
        const wordsPerDay = Math.ceil(totalWords / daysTotal);

        const schedule = [];
        for (let day = 0; day < daysTotal; day++) {
            const date = new Date(start.getTime() + day * msPerDay);
            const startIndex = day * wordsPerDay;
            const endIndex = Math.min(startIndex + wordsPerDay - 1, totalWords - 1);
            if (startIndex >= totalWords) break;
            schedule.push({ day: day + 1, date, startIndex, endIndex });
        }

        return { daysTotal, wordsPerDay, totalWords, schedule };
    },

    // Get today's day number (1-based) in the schedule
    getCurrentDay(startDate) {
        const start = new Date(startDate);
        start.setHours(0, 0, 0, 0);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const msPerDay = 1000 * 60 * 60 * 24;
        return Math.max(1, Math.floor((today - start) / msPerDay) + 1);
    },

    // Get the words for a specific day
    getDayWords(vocabularyData, schedule, dayNumber) {
        const daySchedule = schedule.find(d => d.day === dayNumber);
        if (!daySchedule) return [];
        return vocabularyData.slice(daySchedule.startIndex, daySchedule.endIndex + 1);
    },

    // Get today's new words to learn
    getTodaysWords(vocabularyData, startDate, deadlineDate) {
        const totalWords = vocabularyData.length;
        const { schedule } = this.calculateSchedule(startDate, deadlineDate, totalWords);
        const currentDay = this.getCurrentDay(startDate);
        return this.getDayWords(vocabularyData, schedule, currentDay);
    },

    // Get all words learned so far (days 1 through currentDay-1)
    getLearnedPool(vocabularyData, startDate, deadlineDate) {
        const totalWords = vocabularyData.length;
        const { schedule } = this.calculateSchedule(startDate, deadlineDate, totalWords);
        const currentDay = this.getCurrentDay(startDate);

        // All words from completed days (before today)
        const lastCompletedDay = currentDay - 1;
        if (lastCompletedDay < 1) return [];

        const lastDaySchedule = schedule.find(d => d.day === lastCompletedDay);
        if (!lastDaySchedule) return [];

        return vocabularyData.slice(0, lastDaySchedule.endIndex + 1);
    },

    // Get a random review set from the learned pool
    getReviewSet(vocabularyData, startDate, deadlineDate, count) {
        const pool = this.getLearnedPool(vocabularyData, startDate, deadlineDate);
        if (pool.length === 0) return [];

        const reviewCount = Math.min(count || 25, pool.length);
        const shuffled = [...pool];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled.slice(0, reviewCount);
    },

    // Get the current week number (1-based)
    getCurrentWeek(startDate) {
        const currentDay = this.getCurrentDay(startDate);
        return Math.ceil(currentDay / 7);
    },

    // Get all words learned in a specific week (for weekly test)
    getWeekWords(vocabularyData, startDate, deadlineDate, weekNumber) {
        const totalWords = vocabularyData.length;
        const { schedule } = this.calculateSchedule(startDate, deadlineDate, totalWords);

        const weekStartDay = (weekNumber - 1) * 7 + 1;
        const weekEndDay = weekNumber * 7;

        let startIndex = null;
        let endIndex = null;

        for (const entry of schedule) {
            if (entry.day >= weekStartDay && entry.day <= weekEndDay) {
                if (startIndex === null) startIndex = entry.startIndex;
                endIndex = entry.endIndex;
            }
        }

        if (startIndex === null) return [];
        return vocabularyData.slice(startIndex, endIndex + 1);
    },

    // Get all words learned up to and including a specific week (cumulative test)
    getCumulativeWords(vocabularyData, startDate, deadlineDate, weekNumber) {
        const totalWords = vocabularyData.length;
        const { schedule } = this.calculateSchedule(startDate, deadlineDate, totalWords);

        const weekEndDay = weekNumber * 7;
        let endIndex = 0;

        for (const entry of schedule) {
            if (entry.day <= weekEndDay) {
                endIndex = entry.endIndex;
            }
        }

        return vocabularyData.slice(0, endIndex + 1);
    },

    // Get progress summary for display
    getProgressSummary(vocabularyData, startDate, deadlineDate) {
        const totalWords = vocabularyData.length;
        const { daysTotal, wordsPerDay, schedule } = this.calculateSchedule(startDate, deadlineDate, totalWords);
        const currentDay = this.getCurrentDay(startDate);
        const currentWeek = this.getCurrentWeek(startDate);

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const deadline = new Date(deadlineDate);
        deadline.setHours(0, 0, 0, 0);
        const msPerDay = 1000 * 60 * 60 * 24;
        const daysRemaining = Math.max(0, Math.round((deadline - today) / msPerDay));

        // Words covered up to today
        const todaySchedule = schedule.find(d => d.day === currentDay);
        const wordsCoveredToday = todaySchedule ? todaySchedule.endIndex + 1 : totalWords;

        // Is it the end of a week? (day 7, 14, 21, etc.)
        const dayInWeek = ((currentDay - 1) % 7) + 1;
        const isEndOfWeek = dayInWeek >= 6; // Saturday or Sunday of the learning week

        const hasFinished = currentDay > daysTotal;

        return {
            currentDay: Math.min(currentDay, daysTotal),
            daysTotal,
            daysRemaining,
            wordsPerDay,
            wordsCoveredToday: Math.min(wordsCoveredToday, totalWords),
            totalWords,
            currentWeek,
            isEndOfWeek,
            hasFinished,
            percentComplete: Math.min(100, Math.round((wordsCoveredToday / totalWords) * 100))
        };
    }
};

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.VocabSchedule = VocabSchedule;
}
