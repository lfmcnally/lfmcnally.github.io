// Lesson 1.3: Breathings, Accents & Diphthongs - Data

const lessonData = {
    // Introduction content
    introduction: `
        <p>Every Greek word that begins with a vowel must have a <strong>breathing mark</strong>. Think of this as Greek's way of telling you how to start pronouncing the word.</p>
        <p>Greek also uses accent marks to show which syllable to stress, and combines vowels into diphthongs that create new sounds.</p>
        <p>Don't worry - these marks follow clear patterns, and once you learn them, reading Greek becomes much easier!</p>
    `,

    // Breathing marks explanation
    breathingMarks: {
        title: "Breathing Marks",
        explanation: "Every Greek word that begins with a vowel needs a breathing mark. This tells you whether to add an 'h' sound or not.",
        types: [
            {
                name: "Smooth Breathing",
                symbol: "᾽",
                description: "Looks like an apostrophe. You pronounce the vowel normally - no extra sound.",
                examples: [
                    {
                        greek: "ἀγαθός",
                        pronunciation: "[a-ga-THOS]",
                        meaning: "good"
                    },
                    {
                        greek: "ἄνθρωπος",
                        pronunciation: "[AN-thro-pos]",
                        meaning: "human, person"
                    },
                    {
                        greek: "εἰρήνη",
                        pronunciation: "[ei-REE-nee]",
                        meaning: "peace"
                    }
                ]
            },
            {
                name: "Rough Breathing",
                symbol: "῾",
                description: "Looks like a backwards apostrophe. Add an 'h' sound before the vowel.",
                examples: [
                    {
                        greek: "ἡμέρα",
                        pronunciation: "[he-ME-ra]",
                        meaning: "day"
                    },
                    {
                        greek: "ὁ",
                        pronunciation: "[ho]",
                        meaning: "the (masculine)"
                    },
                    {
                        greek: "ὑπό",
                        pronunciation: "[hu-PO]",
                        meaning: "under, by"
                    }
                ]
            }
        ],
        memoryTip: "Smooth breathing = smooth sailing (no extra sound). Rough breathing = rough seas (add that 'h' sound!)."
    },

    // Special cases for breathing
    specialCases: {
        title: "Special Cases",
        cases: [
            {
                rule: "Rho (ρ) at the beginning of words",
                explanation: "The letter ρ (rho) at the beginning of words always has rough breathing, even though it's a consonant!",
                examples: [
                    {
                        greek: "ῥήτωρ",
                        pronunciation: "[RHEE-tor]",
                        meaning: "speaker, orator"
                    },
                    {
                        greek: "ῥυθμός",
                        pronunciation: "[rhuth-MOS]",
                        meaning: "rhythm"
                    }
                ]
            },
            {
                rule: "Upsilon (υ) at the beginning",
                explanation: "Words beginning with υ (upsilon) almost always have rough breathing.",
                examples: [
                    {
                        greek: "ὑπό",
                        pronunciation: "[hu-PO]",
                        meaning: "under, by"
                    },
                    {
                        greek: "υἱός",
                        pronunciation: "[hui-OS]",
                        meaning: "son"
                    }
                ]
            }
        ]
    },

    // Accent marks
    accentMarks: {
        title: "Accent Marks",
        explanation: "Greek uses three accent marks to show which syllable is stressed and how the pitch changes. For now, just use them to know which syllable to emphasize.",
        types: [
            {
                name: "Acute Accent",
                symbol: "´",
                description: "The most common accent. Shows the stressed syllable with rising pitch.",
                examples: [
                    {
                        greek: "σοφός",
                        pronunciation: "[so-PHOS]",
                        meaning: "wise"
                    },
                    {
                        greek: "καλός",
                        pronunciation: "[ka-LOS]",
                        meaning: "good, beautiful"
                    }
                ]
            },
            {
                name: "Grave Accent",
                symbol: "`",
                description: "Used instead of acute when the word isn't at the end of a sentence.",
                examples: [
                    {
                        greek: "σοφὸς ἀνήρ",
                        pronunciation: "[so-PHOS a-NEER]",
                        meaning: "wise man"
                    }
                ]
            },
            {
                name: "Circumflex Accent",
                symbol: "῀",
                description: "Shows a rising-then-falling pitch on long vowels.",
                examples: [
                    {
                        greek: "σῶμα",
                        pronunciation: "[SO-ma]",
                        meaning: "body"
                    },
                    {
                        greek: "πῶς",
                        pronunciation: "[pos]",
                        meaning: "how?"
                    }
                ]
            }
        ],
        beginnerTip: "Don't worry about the pitch changes yet. Just use accents to know which syllable to stress when speaking."
    },

    // Diphthongs
    diphthongs: {
        title: "Diphthongs",
        explanation: "A diphthong is two vowels that blend together to make one sound. Greek has several important diphthongs you need to recognize.",
        mainDiphthongs: [
            {
                letters: "αι",
                sound: "[ai] or [eye]",
                example: {
                    greek: "παῖς",
                    meaning: "child"
                }
            },
            {
                letters: "ει",
                sound: "[ei] or [ay]",
                example: {
                    greek: "εἰμί",
                    meaning: "I am"
                }
            },
            {
                letters: "οι",
                sound: "[oi] or [oy]",
                example: {
                    greek: "οἶκος",
                    meaning: "house"
                }
            },
            {
                letters: "υι",
                sound: "[ui] or [wee]",
                example: {
                    greek: "υἱός",
                    meaning: "son"
                }
            },
            {
                letters: "αυ",
                sound: "[au] or [ow]",
                example: {
                    greek: "αὐτός",
                    meaning: "self, same"
                }
            },
            {
                letters: "ευ",
                sound: "[eu] or [ew]",
                example: {
                    greek: "εὖ",
                    meaning: "well"
                }
            },
            {
                letters: "ου",
                sound: "[ou] or [oo]",
                example: {
                    greek: "οὐ",
                    meaning: "not"
                }
            }
        ]
    },

    // Iota subscript
    iotaSubscript: {
        title: "The Iota Subscript",
        explanation: "Sometimes you'll see a tiny iota written underneath a vowel: ᾳ, ῃ, ῳ. This is called iota subscript.",
        history: "In ancient times, these were pronounced as diphthongs (αι, ηι, ωι), but the iota sound was eventually lost.",
        modernPronunciation: "Just pronounce the main vowel (α, η, ω) and ignore the subscript iota.",
        examples: [
            {
                greek: "τῇ ἡμέρᾳ",
                pronunciation: "[tee he-ME-ra]",
                meaning: "on the day"
            },
            {
                greek: "τῷ ἀνθρώπῳ",
                pronunciation: "[to an-THRO-po]",
                meaning: "to/for the person"
            }
        ]
    },

    // Practice words
    practiceWords: [
        {
            greek: "ἀρχή",
            pronunciation: "[ar-KHEE]",
            meaning: "beginning, rule",
            notes: "Notice the rough breathing on alpha and the accent on the final syllable"
        },
        {
            greek: "εἰρήνη",
            pronunciation: "[ei-REE-nee]",
            meaning: "peace",
            notes: "Contains the diphthong ει"
        },
        {
            greek: "οὐρανός",
            pronunciation: "[ou-ra-NOS]",
            meaning: "heaven, sky",
            notes: "Starts with the diphthong ου"
        },
        {
            greek: "ὁ παῖς",
            pronunciation: "[ho PAIS]",
            meaning: "the child",
            notes: "Rough breathing on the article, diphthong αι in παῖς"
        },
        {
            greek: "εὐδαιμονία",
            pronunciation: "[eu-dai-mo-NEE-a]",
            meaning: "happiness",
            notes: "Contains two diphthongs: ευ and αι"
        },
        {
            greek: "ῥήτωρ",
            pronunciation: "[RHEE-tor]",
            meaning: "speaker",
            notes: "Rho with rough breathing at the beginning"
        }
    ],

    // Key points summary
    keyPoints: [
        "Breathing marks: Every word starting with a vowel needs one",
        "Smooth ( ᾽ ): No extra sound",
        "Rough ( ῾ ): Add 'h' sound",
        "Accents: Show which syllable to stress",
        "Diphthongs: Two vowels = one sound",
        "Common diphthongs: αι [ai], ει [ei], οι [oi], ου [ou], αυ [au], ευ [eu]",
        "Iota subscript: Ignore the tiny iota underneath"
    ],

    // Study checklist
    checklist: [
        "Understand the difference between smooth and rough breathing",
        "Recognize all seven main diphthongs",
        "Know when rho takes rough breathing",
        "Practice reading words with accent marks",
        "Understand what iota subscript means",
        "Read all practice words aloud correctly"
    ],

    // Quick reference
    quickReference: {
        title: "Quick Reference",
        breathings: "᾽ = smooth (no h), ῾ = rough (add h)",
        accents: "´ = acute, ` = grave, ῀ = circumflex",
        diphthongs: "αι, ει, οι, υι, αυ, ευ, ου",
        note: "When in doubt, look for the breathing mark on vowels and stress the accented syllable."
    },

    // Grammar tips
    grammarTips: {
        title: "Pronunciation Tips",
        points: [
            "🗣️ Practice breathing marks by putting your hand in front of your mouth - you should feel air with rough breathing",
            "🎵 Don't worry about pitch accent yet - just stress the syllable with the accent mark",
            "🔤 Diphthongs are your friends - they're actually easier than pronouncing two separate vowels",
            "👁️ Train your eye to spot breathing marks immediately - they're crucial for correct pronunciation",
            "📚 The most common diphthongs are ου [oo] and αι [eye] - master these first"
        ]
    },

    // Navigation
    navigation: {
        previous: {
            lesson: "1-2",
            title: "The Greek Alphabet"
        },
        next: {
            lesson: "1-4", 
            title: "Present Tense"
        },
        courseHome: "../../../index.html"
    }
};

// Function to load all data into the HTML
function loadLessonData() {
    // Load Introduction
    const introContent = document.getElementById('introduction-content');
    if (introContent) {
        introContent.innerHTML = lessonData.introduction;
    }

    // Load Breathing Marks explanation
    const breathingExplanation = document.getElementById('breathing-explanation');
    if (breathingExplanation) {
        breathingExplanation.innerHTML = lessonData.breathingMarks.explanation;
    }

    // Load Breathing Types
    const breathingTypes = document.getElementById('breathing-types');
    if (breathingTypes) {
        breathingTypes.innerHTML = lessonData.breathingMarks.types.map(type => `
            <div class="grammar-item">
                <h3>${type.name} ( ${type.symbol} )</h3>
                <p>${type.description}</p>
                <div class="examples-list">
                    ${type.examples.map(ex => `
                        <div class="example-word">
                            <span class="greek-text">${ex.greek}</span>
                            <span class="pronunciation">${ex.pronunciation}</span>
                            <span class="meaning">${ex.meaning}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    // Load Memory Tip
    const memoryTip = document.getElementById('memory-tip');
    if (memoryTip) {
        memoryTip.innerHTML = `<strong>Memory Tip:</strong> ${lessonData.breathingMarks.memoryTip}`;
    }

    // Load Special Cases
    const specialCases = document.getElementById('special-cases');
    if (specialCases) {
        specialCases.innerHTML = lessonData.specialCases.cases.map(caseItem => `
            <div class="special-case">
                <h4>${caseItem.rule}</h4>
                <p>${caseItem.explanation}</p>
                <div class="examples-list">
                    ${caseItem.examples.map(ex => `
                        <div class="example-word">
                            <span class="greek-text">${ex.greek}</span>
                            <span class="pronunciation">${ex.pronunciation}</span>
                            <span class="meaning">${ex.meaning}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    // Load Accent Marks
    const accentTypes = document.getElementById('accent-types');
    if (accentTypes) {
        accentTypes.innerHTML = lessonData.accentMarks.types.map(type => `
            <div class="grammar-item">
                <h3>${type.name} ( ${type.symbol} )</h3>
                <p>${type.description}</p>
                <div class="examples-list">
                    ${type.examples.map(ex => `
                        <div class="example-word">
                            <span class="greek-text">${ex.greek}</span>
                            <span class="pronunciation">${ex.pronunciation}</span>
                            <span class="meaning">${ex.meaning}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    // Load Accent Tip
    const accentTip = document.getElementById('accent-tip');
    if (accentTip) {
        accentTip.innerHTML = `<strong>For Beginners:</strong> ${lessonData.accentMarks.beginnerTip}`;
    }

    // Load Diphthongs Grid
    const diphthongsGrid = document.getElementById('diphthongs-grid');
    if (diphthongsGrid) {
        diphthongsGrid.innerHTML = lessonData.diphthongs.mainDiphthongs.map(diph => `
            <div class="diphthong-card">
                <div class="diphthong-letters">${diph.letters}</div>
                <div class="diphthong-sound">${diph.sound}</div>
                <div class="diphthong-example">
                    <span class="greek-text">${diph.example.greek}</span> = <span class="meaning">${diph.example.meaning}</span>
                </div>
            </div>
        `).join('');
    }

    // Load Iota Subscript content
    const iotaContent = document.getElementById('iota-content');
    if (iotaContent) {
        iotaContent.innerHTML = `
            <p>${lessonData.iotaSubscript.explanation}</p>
            <p>${lessonData.iotaSubscript.history}</p>
            <div class="examples-list">
                ${lessonData.iotaSubscript.examples.map(ex => `
                    <div class="example-word">
                        <span class="greek-text">${ex.greek}</span>
                        <span class="pronunciation">${ex.pronunciation}</span>
                        <span class="meaning">${ex.meaning}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Load Iota Tip
    const iotaTip = document.getElementById('iota-tip');
    if (iotaTip) {
        iotaTip.innerHTML = `<strong>Modern Pronunciation:</strong> ${lessonData.iotaSubscript.modernPronunciation}`;
    }

    // Load Practice Words
    const practiceGrid = document.getElementById('practice-grid');
    if (practiceGrid) {
        practiceGrid.innerHTML = lessonData.practiceWords.map(word => `
            <div class="practice-word">
                <div class="greek-text">${word.greek}</div>
                <div class="pronunciation">${word.pronunciation}</div>
                <div class="meaning">${word.meaning}</div>
                <div class="notes">${word.notes}</div>
            </div>
        `).join('');
    }

    // Load Key Points
    const keyPoints = document.getElementById('key-points');
    if (keyPoints) {
        keyPoints.innerHTML = `
            <ul>
                ${lessonData.keyPoints.map(point => `<li>${point}</li>`).join('')}
            </ul>
        `;
    }

    // Load Study Checklist
    const checklist = document.getElementById('study-checklist');
    if (checklist) {
        checklist.innerHTML = lessonData.checklist.map((item, index) => `
            <div class="checklist-row">
                <label class="checklist-item">
                    <input type="checkbox"> ${item}
                </label>
                <button class="do-now-btn" id="do-now-${index}" onclick="markAsDoingNow(${index})">Do now</button>
            </div>
        `).join('');
    }

    // Load Quick Reference
    const quickRef = document.getElementById('quick-reference-content');
    if (quickRef) {
        quickRef.innerHTML = `
            <p><strong>${lessonData.quickReference.title}</strong></p>
            <p><strong>Breathings:</strong> ${lessonData.quickReference.breathings}</p>
            <p><strong>Accents:</strong> ${lessonData.quickReference.accents}</p>
            <p><strong>Diphthongs:</strong> ${lessonData.quickReference.diphthongs}</p>
            <p>${lessonData.quickReference.note}</p>
        `;
    }

    // Load Grammar Tips
    const tipsContent = document.getElementById('grammar-tips-content');
    if (tipsContent) {
        let tipsHtml = `<p><strong>${lessonData.grammarTips.title}</strong></p><ul>`;
        lessonData.grammarTips.points.forEach(point => {
            tipsHtml += `<li>${point}</li>`;
        });
        tipsHtml += '</ul>';
        tipsContent.innerHTML = tipsHtml;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadLessonData();
});
