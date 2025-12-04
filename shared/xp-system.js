// ============================================
// CLASSICALIA - XP & PROFILE CUSTOMIZATION SYSTEM
// ============================================
// Handles XP earning, spending, levels, emoji unlocks, and tag purchases

const xpSystem = {
    userId: null,
    userXp: 0,
    totalXpEarned: 0,
    selectedEmoji: null,
    selectedTag: null,
    unlockedEmojis: [],
    purchasedTags: [],

    // ============================================
    // XP EARNING RATES
    // ============================================
    XP_RATES: {
        PER_MINUTE: 2,           // 2 XP per minute of active practice
        WORD_MASTERED: 10,       // 10 XP when a word reaches "mastered" status
        PERFECT_SCORE: 25,       // 25 XP bonus for 100% on a session
        STREAK_BONUS: 5,         // 5 XP per day of streak (awarded daily)
        FIRST_SESSION_DAY: 15,   // 15 XP bonus for first session of the day
    },

    // ============================================
    // LEVEL THRESHOLDS
    // ============================================
    // Total XP earned determines level (not current balance)
    LEVELS: [
        { level: 1,  xp: 0,      title: 'Novice' },
        { level: 2,  xp: 100,    title: 'Beginner' },
        { level: 3,  xp: 250,    title: 'Learner' },
        { level: 4,  xp: 500,    title: 'Student' },
        { level: 5,  xp: 1000,   title: 'Scholar' },
        { level: 6,  xp: 1750,   title: 'Adept' },
        { level: 7,  xp: 2750,   title: 'Expert' },
        { level: 8,  xp: 4000,   title: 'Master' },
        { level: 9,  xp: 5500,   title: 'Sage' },
        { level: 10, xp: 7500,   title: 'Legend' },
        { level: 11, xp: 10000,  title: 'Mythic' },
        { level: 12, xp: 15000,  title: 'Immortal' },
    ],

    // ============================================
    // EMOJI COLLECTION (Mystery unlock system)
    // ============================================
    // All emojis cost XP to unlock - random selection, no level-gating
    EMOJI_UNLOCK_COST: 100,  // Cost to unlock one random emoji

    // All collectible emojis (mystery pool)
    ALL_EMOJIS: [
        // Faces
        '😊', '🙂', '😎', '🤓', '😄', '🥳', '🤩', '😇',
        // Study
        '📚', '📖', '✏️', '📝', '🎓', '📜', '🖋️', '📕',
        // Stars & sparkles
        '⭐', '🌟', '✨', '💫', '🔆', '💥', '🎇', '🎆',
        // Classical
        '🏛️', '🏺', '🗿', '⚱️', '🪔', '🎭', '🏟️', '⛩️',
        // Animals
        '🦁', '🐺', '🦅', '🐉', '🦊', '🐻', '🦉', '🐍',
        // Weapons & shields
        '⚔️', '🛡️', '🗡️', '🏹', '🔱', '⚒️', '🪓', '💣',
        // Royal & magic
        '👑', '💎', '🔮', '💍', '🧿', '🪬', '📿', '🎪',
        // Epic & dark
        '🔥', '💀', '⚡', '🌙', '☄️', '🌋', '👻', '💜',
        // Creative
        '🌈', '🎨', '🎵', '🎸', '🎤', '🎬', '🎯', '🎲',
        // Cosmic
        '🚀', '🌍', '☀️', '🌌', '🪐', '🌕', '💫', '🛸',
        // Mythical
        '🐲', '🦄', '🧙', '🧝', '🧚', '🧜', '🧞', '🦋',
        // Ultimate
        '👾', '🤖', '💯', '🏆', '🎖️', '🥇', '👁️', '🗝️',
    ],

    // ============================================
    // TAGS SHOP
    // ============================================
    // Tags cost XP to purchase (one-time, permanent)
    TAGS: [
        // Starter tags (cheap)
        { id: 'novice_learner', text: 'Novice Learner', emoji: '📖', cost: 50, category: 'starter' },
        { id: 'eager_student', text: 'Eager Student', emoji: '✨', cost: 75, category: 'starter' },
        { id: 'word_warrior', text: 'Word Warrior', emoji: '⚔️', cost: 100, category: 'starter' },

        // Latin themed
        { id: 'latin_lover', text: 'Latin Lover', emoji: '❤️', cost: 150, category: 'latin' },
        { id: 'roman_soldier', text: 'Roman Soldier', emoji: '🛡️', cost: 200, category: 'latin' },
        { id: 'senator', text: 'Senator', emoji: '🏛️', cost: 300, category: 'latin' },
        { id: 'caesar', text: 'Ave Caesar', emoji: '👑', cost: 500, category: 'latin' },
        { id: 'latin_legend', text: 'Latin Legend', emoji: '🏆', cost: 750, category: 'latin' },

        // Greek themed
        { id: 'greek_explorer', text: 'Greek Explorer', emoji: '🏺', cost: 150, category: 'greek' },
        { id: 'spartan', text: 'Spartan', emoji: '⚔️', cost: 200, category: 'greek' },
        { id: 'philosopher', text: 'Philosopher', emoji: '🤔', cost: 300, category: 'greek' },
        { id: 'olympian', text: 'Olympian', emoji: '⚡', cost: 500, category: 'greek' },
        { id: 'greek_god', text: 'Greek God', emoji: '🌩️', cost: 750, category: 'greek' },

        // Achievement themed
        { id: 'vocab_victor', text: 'Vocab Victor', emoji: '📚', cost: 250, category: 'achievement' },
        { id: 'streak_master', text: 'Streak Master', emoji: '🔥', cost: 300, category: 'achievement' },
        { id: 'perfectionist', text: 'Perfectionist', emoji: '💯', cost: 400, category: 'achievement' },
        { id: 'time_lord', text: 'Time Lord', emoji: '⏰', cost: 350, category: 'achievement' },
        { id: 'dedication', text: 'Dedicated Scholar', emoji: '💪', cost: 500, category: 'achievement' },

        // Fun/meme
        { id: 'big_brain', text: 'Big Brain', emoji: '🧠', cost: 200, category: 'fun' },
        { id: 'night_owl', text: 'Night Owl', emoji: '🦉', cost: 175, category: 'fun' },
        { id: 'coffee_addict', text: 'Coffee Addict', emoji: '☕', cost: 125, category: 'fun' },
        { id: 'bookworm', text: 'Bookworm', emoji: '🐛', cost: 150, category: 'fun' },
        { id: 'galaxy_brain', text: 'Galaxy Brain', emoji: '🌌', cost: 600, category: 'fun' },

        // Premium/rare
        { id: 'enlightened', text: 'Enlightened One', emoji: '✨', cost: 1000, category: 'premium' },
        { id: 'ancient_wisdom', text: 'Ancient Wisdom', emoji: '📿', cost: 1250, category: 'premium' },
        { id: 'immortal_scholar', text: 'Immortal Scholar', emoji: '🌟', cost: 1500, category: 'premium' },
        { id: 'classicalia_legend', text: 'Classicalia Legend', emoji: '🏛️', cost: 2000, category: 'premium' },
    ],

    // ============================================
    // SEASON PACKS (Future feature - just data for now)
    // ============================================
    SEASON_PACKS: [
        {
            id: 'winter_2024',
            name: 'Winter 2024',
            emoji: '❄️',
            available: false, // Set to true when season is active
            startDate: '2024-12-01',
            endDate: '2025-02-28',
            emojis: ['❄️', '⛄', '🎄', '🎅', '🦌', '🎁'],
            tags: [
                { id: 'winter_warrior', text: 'Winter Warrior', emoji: '❄️', cost: 200 },
                { id: 'frosty_scholar', text: 'Frosty Scholar', emoji: '⛄', cost: 300 },
            ]
        },
        {
            id: 'spring_2025',
            name: 'Spring 2025',
            emoji: '🌸',
            available: false,
            startDate: '2025-03-01',
            endDate: '2025-05-31',
            emojis: ['🌸', '🌷', '🌻', '🐣', '🦋', '🌈'],
            tags: [
                { id: 'spring_spirit', text: 'Spring Spirit', emoji: '🌸', cost: 200 },
                { id: 'blooming_genius', text: 'Blooming Genius', emoji: '🌷', cost: 300 },
            ]
        },
    ],

    // ============================================
    // INITIALIZATION
    // ============================================

    async init() {
        if (typeof supabase === 'undefined') {
            console.log('Supabase not available - XP system disabled');
            return false;
        }

        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            console.log('User not logged in - XP system disabled');
            return false;
        }

        this.userId = user.id;
        await this.loadUserData();

        console.log('XP System initialized', {
            xp: this.userXp,
            totalXp: this.totalXpEarned,
            level: this.getLevel(),
            emoji: this.selectedEmoji,
            tag: this.selectedTag
        });

        return true;
    },

    async loadUserData() {
        // Load user XP and selections
        const { data: userData, error: userError } = await supabase
            .from('users')
            .select('xp, total_xp_earned, selected_emoji, selected_tag')
            .eq('id', this.userId)
            .single();

        if (userData) {
            this.userXp = userData.xp || 0;
            this.totalXpEarned = userData.total_xp_earned || 0;
            this.selectedEmoji = userData.selected_emoji;
            this.selectedTag = userData.selected_tag;
        }

        // Load unlocked emojis
        const { data: emojiData } = await supabase
            .from('emoji_unlocks')
            .select('emoji')
            .eq('user_id', this.userId);

        this.unlockedEmojis = emojiData ? emojiData.map(e => e.emoji) : [];

        // Load purchased tags
        const { data: tagData } = await supabase
            .from('tag_purchases')
            .select('tag_id')
            .eq('user_id', this.userId);

        this.purchasedTags = tagData ? tagData.map(t => t.tag_id) : [];
    },

    // ============================================
    // LEVEL CALCULATIONS
    // ============================================

    getLevel() {
        let currentLevel = this.LEVELS[0];
        for (const level of this.LEVELS) {
            if (this.totalXpEarned >= level.xp) {
                currentLevel = level;
            } else {
                break;
            }
        }
        return currentLevel;
    },

    getNextLevel() {
        const current = this.getLevel();
        const idx = this.LEVELS.findIndex(l => l.level === current.level);
        return this.LEVELS[idx + 1] || null; // null if max level
    },

    getXpToNextLevel() {
        const next = this.getNextLevel();
        if (!next) return 0;
        return next.xp - this.totalXpEarned;
    },

    getLevelProgress() {
        const current = this.getLevel();
        const next = this.getNextLevel();
        if (!next) return 100; // Max level

        const xpIntoLevel = this.totalXpEarned - current.xp;
        const xpForLevel = next.xp - current.xp;
        return Math.round((xpIntoLevel / xpForLevel) * 100);
    },

    // ============================================
    // EMOJI METHODS (Mystery unlock system)
    // ============================================

    getAvailableEmojis() {
        // Only return emojis that have been unlocked/purchased
        return [...this.unlockedEmojis];
    },

    getLockedEmojis() {
        // Get emojis that haven't been unlocked yet
        return this.ALL_EMOJIS.filter(emoji => !this.unlockedEmojis.includes(emoji));
    },

    getAllEmojisWithStatus() {
        // Returns all emojis with their unlock status (for display grid)
        return this.ALL_EMOJIS.map(emoji => ({
            emoji,
            unlocked: this.unlockedEmojis.includes(emoji),
            selected: this.selectedEmoji === emoji
        }));
    },

    getCollectionProgress() {
        return {
            unlocked: this.unlockedEmojis.length,
            total: this.ALL_EMOJIS.length,
            percent: Math.round((this.unlockedEmojis.length / this.ALL_EMOJIS.length) * 100)
        };
    },

    canUnlockEmoji() {
        // Check if user can afford to unlock and there are emojis left
        const lockedEmojis = this.getLockedEmojis();
        return this.userXp >= this.EMOJI_UNLOCK_COST && lockedEmojis.length > 0;
    },

    async unlockRandomEmoji() {
        // Get emojis that haven't been unlocked yet
        const lockedEmojis = this.getLockedEmojis();

        if (lockedEmojis.length === 0) {
            throw new Error('All emojis already unlocked!');
        }

        if (this.userXp < this.EMOJI_UNLOCK_COST) {
            throw new Error(`Not enough XP. Need ${this.EMOJI_UNLOCK_COST} XP.`);
        }

        // Pick a random emoji from the locked pool
        const randomIndex = Math.floor(Math.random() * lockedEmojis.length);
        const newEmoji = lockedEmojis[randomIndex];

        // Deduct XP
        const newXp = this.userXp - this.EMOJI_UNLOCK_COST;

        // Update user XP
        const { error: updateError } = await supabase
            .from('users')
            .update({ xp: newXp })
            .eq('id', this.userId);

        if (updateError) throw updateError;

        // Record the unlock
        const { error: unlockError } = await supabase
            .from('emoji_unlocks')
            .insert({
                user_id: this.userId,
                emoji: newEmoji,
                unlock_source: 'purchase'
            });

        if (unlockError) throw unlockError;

        // Log transaction
        await this.logTransaction(-this.EMOJI_UNLOCK_COST, 'emoji_unlock', null);

        // Update local state
        this.userXp = newXp;
        this.unlockedEmojis.push(newEmoji);

        console.log(`🎉 Unlocked new emoji: ${newEmoji}`);

        return {
            emoji: newEmoji,
            remaining: lockedEmojis.length - 1,
            newXpBalance: newXp
        };
    },

    async selectEmoji(emoji) {
        const available = this.getAvailableEmojis();
        if (!available.includes(emoji)) {
            throw new Error('Emoji not unlocked');
        }

        const { error } = await supabase
            .from('users')
            .update({ selected_emoji: emoji })
            .eq('id', this.userId);

        if (error) throw error;

        this.selectedEmoji = emoji;
        return true;
    },

    async clearEmoji() {
        const { error } = await supabase
            .from('users')
            .update({ selected_emoji: null })
            .eq('id', this.userId);

        if (error) throw error;

        this.selectedEmoji = null;
        return true;
    },

    // ============================================
    // TAG METHODS
    // ============================================

    getAvailableTags() {
        return this.TAGS.filter(tag => this.purchasedTags.includes(tag.id));
    },

    getAllTagsWithStatus() {
        return this.TAGS.map(tag => ({
            ...tag,
            purchased: this.purchasedTags.includes(tag.id),
            canAfford: this.userXp >= tag.cost,
            selected: this.selectedTag === tag.id
        }));
    },

    async purchaseTag(tagId) {
        const tag = this.TAGS.find(t => t.id === tagId);
        if (!tag) throw new Error('Tag not found');
        if (this.purchasedTags.includes(tagId)) throw new Error('Tag already owned');
        if (this.userXp < tag.cost) throw new Error('Not enough XP');

        // Deduct XP
        const newXp = this.userXp - tag.cost;

        // Update user XP
        const { error: updateError } = await supabase
            .from('users')
            .update({ xp: newXp })
            .eq('id', this.userId);

        if (updateError) throw updateError;

        // Record purchase
        const { error: purchaseError } = await supabase
            .from('tag_purchases')
            .insert({
                user_id: this.userId,
                tag_id: tagId,
                xp_cost: tag.cost
            });

        if (purchaseError) throw purchaseError;

        // Log transaction
        await this.logTransaction(-tag.cost, 'tag_purchase', null);

        this.userXp = newXp;
        this.purchasedTags.push(tagId);

        return true;
    },

    async selectTag(tagId) {
        if (!this.purchasedTags.includes(tagId)) {
            throw new Error('Tag not owned');
        }

        const { error } = await supabase
            .from('users')
            .update({ selected_tag: tagId })
            .eq('id', this.userId);

        if (error) throw error;

        this.selectedTag = tagId;
        return true;
    },

    async clearTag() {
        const { error } = await supabase
            .from('users')
            .update({ selected_tag: null })
            .eq('id', this.userId);

        if (error) throw error;

        this.selectedTag = null;
        return true;
    },

    getTagById(tagId) {
        return this.TAGS.find(t => t.id === tagId);
    },

    // ============================================
    // XP EARNING METHODS
    // ============================================

    async awardXp(amount, reason, referenceId = null) {
        if (amount <= 0) return { levelUp: false, xpAwarded: 0 };

        if (!this.userId) {
            console.error('Cannot award XP: user not initialized');
            return false;
        }

        const newXp = this.userXp + amount;
        const newTotal = this.totalXpEarned + amount;
        const oldLevel = this.getLevel().level;

        // Update user
        const { error } = await supabase
            .from('users')
            .update({
                xp: newXp,
                total_xp_earned: newTotal
            })
            .eq('id', this.userId);

        if (error) {
            console.error('Error awarding XP:', error);
            // Emit custom event for UI to catch
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('xp-award-failed', {
                    detail: { amount, reason, error: error.message || 'Database error' }
                }));
            }
            return false;
        }

        // Log transaction (don't fail if this fails)
        await this.logTransaction(amount, reason, referenceId);

        this.userXp = newXp;
        this.totalXpEarned = newTotal;

        // Emit success event
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('xp-awarded', {
                detail: { amount, reason, newXp, newTotal }
            }));
        }

        // Check for level up (no automatic emoji unlocks - those are purchased now)
        const newLevel = this.getLevel().level;
        if (newLevel > oldLevel) {
            console.log(`Level up! ${oldLevel} -> ${newLevel}`);
            // Emit level up event
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('xp-level-up', {
                    detail: { oldLevel, newLevel, xpAwarded: amount }
                }));
            }
            return { levelUp: true, oldLevel, newLevel, xpAwarded: amount };
        }

        return { levelUp: false, xpAwarded: amount };
    },

    async logTransaction(amount, reason, referenceId) {
        try {
            await supabase
                .from('xp_transactions')
                .insert({
                    user_id: this.userId,
                    amount,
                    reason,
                    reference_id: referenceId
                });
        } catch (e) {
            console.error('Error logging XP transaction:', e);
        }
    },

    // ============================================
    // XP CALCULATION HELPERS
    // ============================================

    calculateTimeXp(seconds) {
        // XP for practice time
        const minutes = Math.floor(seconds / 60);
        return minutes * this.XP_RATES.PER_MINUTE;
    },

    calculateSessionXp(timeSeconds, score, isFirstToday = false) {
        let xp = 0;

        // Time XP
        xp += this.calculateTimeXp(timeSeconds);

        // Perfect score bonus
        if (score === 100) {
            xp += this.XP_RATES.PERFECT_SCORE;
        }

        // First session of day bonus
        if (isFirstToday) {
            xp += this.XP_RATES.FIRST_SESSION_DAY;
        }

        return xp;
    },

    // ============================================
    // DISPLAY HELPERS
    // ============================================

    formatXp(xp) {
        if (xp >= 1000) {
            return (xp / 1000).toFixed(1) + 'k';
        }
        return xp.toString();
    },

    getDisplayData() {
        const level = this.getLevel();
        const tag = this.selectedTag ? this.getTagById(this.selectedTag) : null;
        const collection = this.getCollectionProgress();

        return {
            xp: this.userXp,
            totalXp: this.totalXpEarned,
            level: level.level,
            levelTitle: level.title,
            emoji: this.selectedEmoji,
            tag: tag ? { text: tag.text, emoji: tag.emoji } : null,
            progress: this.getLevelProgress(),
            xpToNext: this.getXpToNextLevel(),
            // Emoji collection info
            emojiCollection: collection,
            emojiUnlockCost: this.EMOJI_UNLOCK_COST,
            canUnlockEmoji: this.canUnlockEmoji()
        };
    }
};

// Make available globally
window.xpSystem = xpSystem;
