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
    selectedBackground: null,
    selectedBorder: null,
    unlockedEmojis: [],
    unlockedBackgrounds: [],
    unlockedBorders: [],
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
        '😀', '😄', '😁', '😊', '🙂', '😇', '🤓', '🥳', '🤯', '🥹', '🥴',
        // Characters
        '🧛‍♂️', '🧛‍♀️', '🧚‍♀️', '🧙‍♀️', '🧙‍♂️', '🧙', '🧝‍♀️', '🧑‍🎓', '🧑‍🚀', '🧑‍💻', '🧑‍🎤', '🤹‍♀️', '🤹‍♂️', '🤡',
        // Mammals
        '🐶', '🐕', '🐱', '🐈', '🐭', '🐹', '🐰', '🦝', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐄', '🐷', '🐖', '🐗',
        '🐴', '🐎', '🦄', '🐑', '🐏', '🐐', '🐪', '🐫', '🦒', '🐘', '🦏', '🦛', '🐁', '🐀', '🐿️', '🦔', '🦡',
        // Birds
        '🐔', '🐣', '🐤', '🐦', '🐧', '🦆', '🦅', '🦉', '🦇',
        // Reptiles & Amphibians
        '🐸', '🐊', '🐢', '🦎', '🐍', '🐉', '🐲',
        // Sea creatures
        '🐳', '🐋', '🐬', '🐟', '🐠', '🐡', '🦈', '🦀', '🦞', '🦐', '🦑', '🐙', '🪼', '🐚',
        // Other animals
        '🦦', '🦨', '🦥', '🦘', '🐺', '🦌', '🦋', '🐝',
        // Food
        '🥗', '🥑', '🥝', '🥨', '🌽', '🥕', '🥪', '🥙', '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍿', '🍫', '🍪',
        // Flowers & Nature
        '🌹', '🌷', '🌼', '🌻', '🌺', '🌸', '🌱', '🌵', '🌲', '🌳', '🍁', '🍂', '🌿', '☘️', '🍄',
        // Classical & Space
        '🏛️', '🏺', '🌍', '☀️', '🌙', '⭐', '✨', '🌚', '🌛', '🌜', '🌝', '🌟',
        // Animal tracks & misc
        '🐾',
    ],

    // ============================================
    // BACKGROUND COLORS (Mystery unlock system)
    // ============================================
    BACKGROUND_UNLOCK_COST: 100,

    ALL_BACKGROUNDS: [
        // Soft pastels
        { id: 'pastel_pink', name: 'Pastel Pink', color: '#FFD1DC' },
        { id: 'pastel_blue', name: 'Pastel Blue', color: '#AEC6CF' },
        { id: 'pastel_green', name: 'Pastel Green', color: '#B5EAD7' },
        { id: 'pastel_yellow', name: 'Pastel Yellow', color: '#FDFD96' },
        { id: 'pastel_purple', name: 'Pastel Purple', color: '#E0BBE4' },
        { id: 'pastel_orange', name: 'Pastel Orange', color: '#FFB347' },
        // Vibrant
        { id: 'coral', name: 'Coral', color: '#FF6B6B' },
        { id: 'teal', name: 'Teal', color: '#4ECDC4' },
        { id: 'gold', name: 'Gold', color: '#FFD700' },
        { id: 'royal_purple', name: 'Royal Purple', color: '#7B68EE' },
        { id: 'ocean_blue', name: 'Ocean Blue', color: '#006994' },
        { id: 'forest_green', name: 'Forest Green', color: '#228B22' },
        // Gradients (CSS gradient strings)
        { id: 'sunset', name: 'Sunset', color: 'linear-gradient(135deg, #FF6B6B, #FFE66D)' },
        { id: 'ocean', name: 'Ocean', color: 'linear-gradient(135deg, #667eea, #764ba2)' },
        { id: 'mint', name: 'Mint Fresh', color: 'linear-gradient(135deg, #11998e, #38ef7d)' },
        { id: 'cotton_candy', name: 'Cotton Candy', color: 'linear-gradient(135deg, #ff9a9e, #fecfef)' },
        { id: 'night_sky', name: 'Night Sky', color: 'linear-gradient(135deg, #2c3e50, #4ca1af)' },
        { id: 'aurora', name: 'Aurora', color: 'linear-gradient(135deg, #a8edea, #fed6e3)' },
        { id: 'fire', name: 'Fire', color: 'linear-gradient(135deg, #f12711, #f5af19)' },
        { id: 'galaxy', name: 'Galaxy', color: 'linear-gradient(135deg, #654ea3, #eaafc8)' },
    ],

    // ============================================
    // BORDERS (Mystery unlock system)
    // ============================================
    BORDER_UNLOCK_COST: 100,

    ALL_BORDERS: [
        // Solid colors
        { id: 'gold_solid', name: 'Gold', style: '3px solid #FFD700' },
        { id: 'silver_solid', name: 'Silver', style: '3px solid #C0C0C0' },
        { id: 'bronze_solid', name: 'Bronze', style: '3px solid #CD7F32' },
        { id: 'ruby_solid', name: 'Ruby', style: '3px solid #E0115F' },
        { id: 'emerald_solid', name: 'Emerald', style: '3px solid #50C878' },
        { id: 'sapphire_solid', name: 'Sapphire', style: '3px solid #0F52BA' },
        { id: 'amethyst_solid', name: 'Amethyst', style: '3px solid #9966CC' },
        // Dashed
        { id: 'gold_dashed', name: 'Gold Dashed', style: '3px dashed #FFD700' },
        { id: 'rainbow_dashed', name: 'Rainbow Dashed', style: '3px dashed #FF6B6B' },
        // Double borders
        { id: 'gold_double', name: 'Gold Double', style: '4px double #FFD700' },
        { id: 'royal_double', name: 'Royal Double', style: '4px double #7B68EE' },
        // Thick borders
        { id: 'thick_black', name: 'Bold Black', style: '5px solid #1a1a1a' },
        { id: 'thick_white', name: 'Bold White', style: '5px solid #ffffff' },
        // Dotted
        { id: 'dotted_gold', name: 'Dotted Gold', style: '3px dotted #FFD700' },
        { id: 'dotted_pink', name: 'Dotted Pink', style: '3px dotted #FF69B4' },
    ],

    // ============================================
    // TAGS SHOP
    // ============================================
    // Tags cost XP to purchase (one-time, permanent)
    TAGS: [
        // Starter (cheap entry tags)
        { id: 'rookie', text: 'Rookie', emoji: '🌱', cost: 25, category: 'starter' },
        { id: 'just_vibing', text: 'Just Vibing', emoji: '😎', cost: 50, category: 'starter' },
        { id: 'work_in_progress', text: 'Work in Progress', emoji: '🚧', cost: 75, category: 'starter' },
        { id: 'trying_my_best', text: 'Trying My Best', emoji: '💪', cost: 100, category: 'starter' },

        // Latin
        { id: 'carpe_diem', text: 'Carpe Diem', emoji: '☀️', cost: 150, category: 'latin' },
        { id: 'veni_vidi_vici', text: 'Veni, Vidi, Vici', emoji: '⚔️', cost: 300, category: 'latin' },
        { id: 'per_aspera', text: 'Per Aspera Ad Astra', emoji: '⭐', cost: 250, category: 'latin' },
        { id: 'dulce_periculum', text: 'Dulce Periculum', emoji: '🎲', cost: 200, category: 'latin' },
        { id: 'audentes_fortuna', text: 'Audentes Fortuna Iuvat', emoji: '🍀', cost: 350, category: 'latin' },
        { id: 'memento_mori', text: 'Memento Mori', emoji: '💀', cost: 400, category: 'latin' },
        { id: 'tempus_fugit', text: 'Tempus Fugit', emoji: '⏳', cost: 175, category: 'latin' },
        { id: 'in_vino_veritas', text: 'In Vino Veritas', emoji: '🍷', cost: 225, category: 'latin' },

        // Greek
        { id: 'eureka', text: 'Eureka!', emoji: '💡', cost: 150, category: 'greek' },
        { id: 'know_thyself', text: 'Γνῶθι Σεαυτόν', emoji: '🪞', cost: 200, category: 'greek' },
        { id: 'nothing_excess', text: 'Μηδὲν Ἄγαν', emoji: '⚖️', cost: 175, category: 'greek' },
        { id: 'arete', text: 'Ἀρετή', emoji: '🏅', cost: 250, category: 'greek' },
        { id: 'sophrosyne', text: 'Σωφροσύνη', emoji: '🧘', cost: 225, category: 'greek' },
        { id: 'kudos', text: 'Κῦδος', emoji: '🌟', cost: 300, category: 'greek' },
        { id: 'kalos_kagathos', text: 'Καλὸς κἀγαθός', emoji: '✨', cost: 350, category: 'greek' },

        // Ancient Rome
        { id: 'senator', text: 'Senator', emoji: '🏛️', cost: 200, category: 'roman' },
        { id: 'centurion', text: 'Centurion', emoji: '🛡️', cost: 300, category: 'roman' },
        { id: 'gladiator', text: 'Gladiator', emoji: '⚔️', cost: 350, category: 'roman' },
        { id: 'praetor', text: 'Praetor', emoji: '📜', cost: 400, category: 'roman' },
        { id: 'consul', text: 'Consul', emoji: '🦅', cost: 500, category: 'roman' },
        { id: 'ave_caesar', text: 'Ave Caesar', emoji: '👑', cost: 750, category: 'roman' },
        { id: 'spqr', text: 'S.P.Q.R.', emoji: '🏛️', cost: 450, category: 'roman' },
        { id: 'roma_invicta', text: 'Roma Invicta', emoji: '🐺', cost: 600, category: 'roman' },

        // Ancient Greece
        { id: 'philosopher', text: 'Philosopher', emoji: '🤔', cost: 200, category: 'greek_culture' },
        { id: 'olympian', text: 'Olympian', emoji: '🏆', cost: 350, category: 'greek_culture' },
        { id: 'spartan', text: 'Spartan', emoji: '🔱', cost: 400, category: 'greek_culture' },
        { id: 'athenian', text: 'Athenian', emoji: '🦉', cost: 300, category: 'greek_culture' },
        { id: 'oracle', text: 'Oracle of Delphi', emoji: '🔮', cost: 500, category: 'greek_culture' },
        { id: 'muse', text: 'Muse', emoji: '🎭', cost: 275, category: 'greek_culture' },
        { id: 'argonaut', text: 'Argonaut', emoji: '⛵', cost: 450, category: 'greek_culture' },

        // Teacher sayings
        { id: 'piece_of_string', text: 'How long is a piece of string?', emoji: '🧵', cost: 200, category: 'teacher' },
        { id: 'depends', text: 'It Depends...', emoji: '🤔', cost: 150, category: 'teacher' },
        { id: 'read_the_question', text: 'Read the Question!', emoji: '👀', cost: 175, category: 'teacher' },
        { id: 'show_working', text: 'Show Your Working', emoji: '📝', cost: 125, category: 'teacher' },
        { id: 'context_is_key', text: 'Context is Key', emoji: '🔑', cost: 200, category: 'teacher' },
        { id: 'nearly_there', text: 'Nearly There...', emoji: '🎯', cost: 150, category: 'teacher' },

        // Fun Student
        { id: 'no_thoughts', text: 'No Thoughts Head Empty', emoji: '💭', cost: 200, category: 'fun' },
        { id: 'professional_guesser', text: 'Professional Guesser', emoji: '🎲', cost: 175, category: 'fun' },
        { id: 'chaotic_energy', text: 'Chaotic Energy', emoji: '🌀', cost: 250, category: 'fun' },
        { id: 'sleep_deprived', text: 'Sleep Deprived', emoji: '😴', cost: 150, category: 'fun' },
        { id: 'big_brain', text: 'Big Brain', emoji: '🧠', cost: 300, category: 'fun' },
        { id: 'procrastinator', text: 'Professional Procrastinator', emoji: '⏰', cost: 200, category: 'fun' },
        { id: 'caffeine_powered', text: 'Caffeine Powered', emoji: '☕', cost: 175, category: 'fun' },
        { id: 'night_owl', text: 'Night Owl', emoji: '🦉', cost: 225, category: 'fun' },

        // Mythical/Premium
        { id: 'titan', text: 'Titan', emoji: '🗻', cost: 800, category: 'mythical' },
        { id: 'demigod', text: 'Demigod', emoji: '⚡', cost: 1000, category: 'mythical' },
        { id: 'immortal', text: 'Immortal', emoji: '🌟', cost: 1500, category: 'mythical' },
        { id: 'olympus', text: 'Dweller of Olympus', emoji: '☁️', cost: 2000, category: 'mythical' },
        { id: 'phoenix', text: 'Phoenix', emoji: '🔥', cost: 1250, category: 'mythical' },
        { id: 'pegasus', text: 'Pegasus', emoji: '🐴', cost: 900, category: 'mythical' },
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
            .select('xp, total_xp_earned, selected_emoji, selected_tag, selected_background, selected_border')
            .eq('id', this.userId)
            .single();

        if (userData) {
            this.userXp = userData.xp || 0;
            this.totalXpEarned = userData.total_xp_earned || 0;
            this.selectedEmoji = userData.selected_emoji;
            this.selectedTag = userData.selected_tag;
            this.selectedBackground = userData.selected_background;
            this.selectedBorder = userData.selected_border;
        }

        // Load unlocked emojis
        const { data: emojiData } = await supabase
            .from('emoji_unlocks')
            .select('emoji')
            .eq('user_id', this.userId);

        this.unlockedEmojis = emojiData ? emojiData.map(e => e.emoji) : [];

        // Load unlocked backgrounds
        const { data: bgData } = await supabase
            .from('background_unlocks')
            .select('background_id')
            .eq('user_id', this.userId);

        this.unlockedBackgrounds = bgData ? bgData.map(b => b.background_id) : [];

        // Load unlocked borders
        const { data: borderData } = await supabase
            .from('border_unlocks')
            .select('border_id')
            .eq('user_id', this.userId);

        this.unlockedBorders = borderData ? borderData.map(b => b.border_id) : [];

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
    // BACKGROUND METHODS
    // ============================================

    getAvailableBackgrounds() {
        return this.ALL_BACKGROUNDS.filter(bg => this.unlockedBackgrounds.includes(bg.id));
    },

    getLockedBackgrounds() {
        return this.ALL_BACKGROUNDS.filter(bg => !this.unlockedBackgrounds.includes(bg.id));
    },

    getAllBackgroundsWithStatus() {
        return this.ALL_BACKGROUNDS.map(bg => ({
            ...bg,
            unlocked: this.unlockedBackgrounds.includes(bg.id),
            selected: this.selectedBackground === bg.id
        }));
    },

    getBackgroundProgress() {
        return {
            unlocked: this.unlockedBackgrounds.length,
            total: this.ALL_BACKGROUNDS.length,
            percent: Math.round((this.unlockedBackgrounds.length / this.ALL_BACKGROUNDS.length) * 100)
        };
    },

    canUnlockBackground() {
        const lockedBgs = this.getLockedBackgrounds();
        return this.userXp >= this.BACKGROUND_UNLOCK_COST && lockedBgs.length > 0;
    },

    async unlockRandomBackground() {
        const lockedBgs = this.getLockedBackgrounds();

        if (lockedBgs.length === 0) {
            throw new Error('All backgrounds already unlocked!');
        }

        if (this.userXp < this.BACKGROUND_UNLOCK_COST) {
            throw new Error(`Not enough XP. Need ${this.BACKGROUND_UNLOCK_COST} XP.`);
        }

        const randomIndex = Math.floor(Math.random() * lockedBgs.length);
        const newBg = lockedBgs[randomIndex];

        const newXp = this.userXp - this.BACKGROUND_UNLOCK_COST;

        const { error: updateError } = await supabase
            .from('users')
            .update({ xp: newXp })
            .eq('id', this.userId);

        if (updateError) throw updateError;

        const { error: unlockError } = await supabase
            .from('background_unlocks')
            .insert({
                user_id: this.userId,
                background_id: newBg.id
            });

        if (unlockError) throw unlockError;

        await this.logTransaction(-this.BACKGROUND_UNLOCK_COST, 'background_unlock', null);

        this.userXp = newXp;
        this.unlockedBackgrounds.push(newBg.id);

        return {
            background: newBg,
            remaining: lockedBgs.length - 1,
            newXpBalance: newXp
        };
    },

    async selectBackground(bgId) {
        if (!this.unlockedBackgrounds.includes(bgId)) {
            throw new Error('Background not unlocked');
        }

        const { error } = await supabase
            .from('users')
            .update({ selected_background: bgId })
            .eq('id', this.userId);

        if (error) throw error;

        this.selectedBackground = bgId;
        return true;
    },

    async clearBackground() {
        const { error } = await supabase
            .from('users')
            .update({ selected_background: null })
            .eq('id', this.userId);

        if (error) throw error;

        this.selectedBackground = null;
        return true;
    },

    getBackgroundById(bgId) {
        return this.ALL_BACKGROUNDS.find(bg => bg.id === bgId);
    },

    // ============================================
    // BORDER METHODS
    // ============================================

    getAvailableBorders() {
        return this.ALL_BORDERS.filter(b => this.unlockedBorders.includes(b.id));
    },

    getLockedBorders() {
        return this.ALL_BORDERS.filter(b => !this.unlockedBorders.includes(b.id));
    },

    getAllBordersWithStatus() {
        return this.ALL_BORDERS.map(b => ({
            ...b,
            unlocked: this.unlockedBorders.includes(b.id),
            selected: this.selectedBorder === b.id
        }));
    },

    getBorderProgress() {
        return {
            unlocked: this.unlockedBorders.length,
            total: this.ALL_BORDERS.length,
            percent: Math.round((this.unlockedBorders.length / this.ALL_BORDERS.length) * 100)
        };
    },

    canUnlockBorder() {
        const lockedBorders = this.getLockedBorders();
        return this.userXp >= this.BORDER_UNLOCK_COST && lockedBorders.length > 0;
    },

    async unlockRandomBorder() {
        const lockedBorders = this.getLockedBorders();

        if (lockedBorders.length === 0) {
            throw new Error('All borders already unlocked!');
        }

        if (this.userXp < this.BORDER_UNLOCK_COST) {
            throw new Error(`Not enough XP. Need ${this.BORDER_UNLOCK_COST} XP.`);
        }

        const randomIndex = Math.floor(Math.random() * lockedBorders.length);
        const newBorder = lockedBorders[randomIndex];

        const newXp = this.userXp - this.BORDER_UNLOCK_COST;

        const { error: updateError } = await supabase
            .from('users')
            .update({ xp: newXp })
            .eq('id', this.userId);

        if (updateError) throw updateError;

        const { error: unlockError } = await supabase
            .from('border_unlocks')
            .insert({
                user_id: this.userId,
                border_id: newBorder.id
            });

        if (unlockError) throw unlockError;

        await this.logTransaction(-this.BORDER_UNLOCK_COST, 'border_unlock', null);

        this.userXp = newXp;
        this.unlockedBorders.push(newBorder.id);

        return {
            border: newBorder,
            remaining: lockedBorders.length - 1,
            newXpBalance: newXp
        };
    },

    async selectBorder(borderId) {
        if (!this.unlockedBorders.includes(borderId)) {
            throw new Error('Border not unlocked');
        }

        const { error } = await supabase
            .from('users')
            .update({ selected_border: borderId })
            .eq('id', this.userId);

        if (error) throw error;

        this.selectedBorder = borderId;
        return true;
    },

    async clearBorder() {
        const { error } = await supabase
            .from('users')
            .update({ selected_border: null })
            .eq('id', this.userId);

        if (error) throw error;

        this.selectedBorder = null;
        return true;
    },

    getBorderById(borderId) {
        return this.ALL_BORDERS.find(b => b.id === borderId);
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
        const background = this.selectedBackground ? this.getBackgroundById(this.selectedBackground) : null;
        const border = this.selectedBorder ? this.getBorderById(this.selectedBorder) : null;
        const emojiCollection = this.getCollectionProgress();
        const bgCollection = this.getBackgroundProgress();
        const borderCollection = this.getBorderProgress();

        return {
            xp: this.userXp,
            totalXp: this.totalXpEarned,
            level: level.level,
            levelTitle: level.title,
            emoji: this.selectedEmoji,
            tag: tag ? { text: tag.text, emoji: tag.emoji } : null,
            background: background,
            border: border,
            progress: this.getLevelProgress(),
            xpToNext: this.getXpToNextLevel(),
            // Emoji collection info
            emojiCollection: emojiCollection,
            emojiUnlockCost: this.EMOJI_UNLOCK_COST,
            canUnlockEmoji: this.canUnlockEmoji(),
            // Background collection info
            backgroundCollection: bgCollection,
            backgroundUnlockCost: this.BACKGROUND_UNLOCK_COST,
            canUnlockBackground: this.canUnlockBackground(),
            // Border collection info
            borderCollection: borderCollection,
            borderUnlockCost: this.BORDER_UNLOCK_COST,
            canUnlockBorder: this.canUnlockBorder()
        };
    }
};

// Make available globally
window.xpSystem = xpSystem;
