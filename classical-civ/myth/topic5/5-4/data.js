// Lesson 5.4: The Saturnalia - Data & Rendering

const lessonData = {
    learningObjectives: [
        "Describe the origins of the Saturnalia",
        "Describe what happened at the Saturnalia",
        "Describe the sacrifices at the Saturnalia",
        "Explain why the Saturnalia was important to the Romans",
        "Explain how Saturn was worshipped at the Saturnalia"
    ],

    origins: [
        "The Saturnalia was Rome's most popular and joyful festival, honouring <strong>Saturn</strong>, the god of agriculture, wealth and time.",
        "It began on <strong>17 December</strong> and eventually extended to last up to a week (through 23 December) as its popularity grew.",
        "According to Roman tradition, Saturn had once ruled over Italy during the <strong>Golden Age (<em>Aurea Aetas</em>)</strong> — a mythical time of peace, equality, abundance and happiness when there was no slavery, no private property, and the earth provided for all without the need for labour.",
        "The festival was believed to have been established in very early Roman history. One tradition credited it to the legendary king <strong>Tullus Hostilius</strong> (7th century BC); another said it dated back to before the founding of Rome itself.",
        "Saturn's temple stood at the foot of the Capitoline Hill in the Roman Forum — it also served as the <strong>state treasury (<em>aerarium</em>)</strong>, connecting Saturn to Rome's wealth and prosperity.",
        "The festival took place around the <strong>winter solstice</strong> — the shortest day of the year — celebrating the return of longer days and the hope of agricultural renewal."
    ],

    whatHappened: [
        {
            label: "Opening Ceremony",
            title: "The Public Sacrifice and Feast",
            content: "The festival began with a public sacrifice at the Temple of Saturn in the Forum, followed by a great public banquet (<em>convivium publicum</em>) open to all. Senators and public figures attended in festive dress."
        },
        {
            label: "The Greeting",
            title: '"Io Saturnalia!"',
            content: 'The cry of "<em>Io Saturnalia!</em>" (roughly "Hooray for Saturnalia!") rang through the streets. This was the standard greeting during the festival and could be heard everywhere in Rome.'
        },
        {
            label: "Change of Dress",
            title: "Removal of Toga and Wearing of the Pilleus",
            content: "Roman citizens set aside their formal togas and instead wore colourful, informal dinner clothes (<em>synthesis</em>). Freed slaves and others wore the <strong>pilleus</strong> (a felt cap of freedom). This symbolised the temporary abolition of social distinctions."
        },
        {
            label: "Role Reversal",
            title: "Social Inversion",
            content: "The most distinctive feature: <strong>masters served their slaves</strong> at dinner. Social hierarchies were turned upside down. Slaves could speak freely, dine with their masters, and even give them orders (within reason). This re-enacted the equality of Saturn's Golden Age."
        },
        {
            label: "Games",
            title: "Gambling",
            content: "Gambling with dice, normally illegal or frowned upon in Rome, was freely permitted during the Saturnalia. People of all classes played together."
        },
        {
            label: "Exchanges",
            title: "Gift-Giving (Sigillaria)",
            content: "Romans exchanged gifts, particularly small clay or wax figurines called <strong>sigillaria</strong>, as well as candles (<em>cerei</em>), writing tablets, dice, and other small items. The gift-giving became so popular that an extra day (or days) called the <em>Sigillaria</em> was added to the festival."
        },
        {
            label: "Celebration",
            title: "Feasting and Drinking",
            content: "Lavish meals were prepared and eaten throughout the festival. Wine flowed freely. The normal rules of Roman modesty and restraint were relaxed."
        },
        {
            label: "Mock King",
            title: "The Saturnalicius Princeps",
            content: 'A "King of the Saturnalia" (sometimes called the Lord of Misrule) was chosen by lot to preside over the festivities. This mock king could give absurd commands that had to be obeyed (e.g. "sing naked" or "carry a flute-girl around the house").'
        },
        {
            label: "Public Holiday",
            title: "Schools and Courts Closed",
            content: "Normal business was suspended. Schools closed, law courts did not sit, and no wars could be declared. It was a genuine holiday for the entire city."
        }
    ],

    sacrifices: [
        "The central sacrifice took place at the <strong>Temple of Saturn</strong> in the Roman Forum on 17 December.",
        "The sacrifice was performed <strong><em>ritu Graeco</em></strong> (\"in the Greek manner\") — meaning the priest sacrificed with his head uncovered, unlike normal Roman practice where the priest covered his head with his toga. This was seen as evidence of the festival's great antiquity and possibly Greek origins.",
        "During the rest of the year, the cult statue of Saturn in his temple had its feet bound with woollen bands. At the Saturnalia, these were ceremonially <strong>removed (loosened)</strong>, symbolising the liberation and freedom of the Golden Age.",
        "A <strong><em>lectisternium</em></strong> (a sacred banquet for the gods) was prepared — couches were set out and a meal laid before the statue of Saturn, as if the god himself were dining.",
        "Individual households also made private offerings and libations to Saturn as part of their domestic celebrations."
    ],

    worship: [
        {
            title: "Public Sacrifice",
            icon: "🏛️",
            text: "The <strong>public sacrifice at his temple</strong> was the formal religious act that opened the festival."
        },
        {
            title: "Unbinding the Statue",
            icon: "🔓",
            text: "The <strong>unbinding of Saturn's statue</strong> was a deeply symbolic act of worship — by freeing the god's image, Romans symbolically brought about the freedom and equality of his Golden Age."
        },
        {
            title: "Divine Banquet",
            icon: "🍽️",
            text: "The <strong><em>lectisternium</em></strong> (divine banquet) honoured Saturn by treating him as an honoured guest — sharing food with the god."
        },
        {
            title: "Social Inversion",
            icon: "🔄",
            text: "The <strong>social inversion</strong> (masters serving slaves) was itself a religious act — it recreated the conditions of Saturn's Golden Age when all people were equal."
        },
        {
            title: "Gift-Giving",
            icon: "🎁",
            text: "<strong>Gift-giving</strong> echoed the generosity and abundance of the Golden Age that Saturn had presided over."
        },
        {
            title: "Suspension of Rules",
            icon: "🎲",
            text: "The <strong>suspension of normal rules</strong> (gambling, informal dress, relaxation of hierarchy) honoured Saturn by recreating the freedom of his reign."
        },
        {
            title: "Private Devotion",
            icon: "🏠",
            text: "Private households honoured Saturn with their own meals, toasts and celebrations."
        },
        {
            title: "Acclamation",
            icon: "📣",
            text: 'The greeting "<em>Io Saturnalia!</em>" was itself a form of religious acclamation.'
        }
    ],

    importance: [
        {
            title: "The Most Popular Roman Festival",
            icon: "⭐",
            text: 'The Saturnalia was the highlight of the Roman year. The poet Catullus called it "the best of days" (<em>optimo dierum</em>). Everyone looked forward to it.'
        },
        {
            title: "Social Release",
            icon: "⚖️",
            text: "In a highly hierarchical society, the Saturnalia provided a vital safety valve. By temporarily inverting social roles, it allowed tensions between masters and slaves, rich and poor, to be released in a controlled, festive way."
        },
        {
            title: "Agricultural Significance",
            icon: "🌾",
            text: "Saturn was the god of sowing and agriculture. The festival's timing around the winter solstice celebrated the completion of autumn sowing and the hope of a good harvest to come."
        },
        {
            title: "Preservation of Tradition (Mos Maiorum)",
            icon: "📜",
            text: "Like the Lupercalia, the Saturnalia connected Romans to their ancestors and the values of the past. Celebrating it was part of being Roman."
        },
        {
            title: "Community and Generosity",
            icon: "🤝",
            text: "The gift-giving, public feasting and shared celebration strengthened social bonds across the community."
        },
        {
            title: "Religious Duty",
            icon: "🕊️",
            text: "Honouring Saturn maintained the god's favour and, by extension, the prosperity and fertility of Roman agriculture and the state."
        },
        {
            title: "Cultural Legacy",
            icon: "🕯️",
            text: "The Saturnalia's influence can be seen in later winter festivals. Many of its traditions — gift-giving, feasting, decorating with greenery, candles — were absorbed into Christmas celebrations."
        }
    ],

    quotes: [
        {
            text: "It is now the month of December, when the greatest part of the city is in a bustle. Loose reins are given to public dissipation; everywhere you may hear the sound of great preparations.",
            attribution: "Seneca, Epistles 18.1"
        },
        {
            text: "During my Saturnalia it is permitted to everyone, even to slaves, to play with dice.",
            attribution: "Martial, Epigrams 14.1"
        }
    ],

    keyTerms: [
        "Saturnalia", "Saturn", "Golden Age (Aurea Aetas)", "Sigillaria", "Pilleus",
        "Synthesis", "Io Saturnalia", "Lectisternium", "Ritu Graeco",
        "Saturnalicius Princeps", "Aerarium", "Convivium publicum"
    ]
};

// ===== Rendering Functions =====

function renderObjectives() {
    const el = document.getElementById('objectives');
    if (!el) return;
    el.innerHTML = `
        <div class="objectives-title">🎯 Learning Objectives</div>
        <ul class="objectives-list">
            ${lessonData.learningObjectives.map(obj => `<li>${obj}</li>`).join('')}
        </ul>
    `;
}

function renderOrigins() {
    const el = document.getElementById('origins');
    if (!el) return;
    el.innerHTML = `
        <div class="section-header">
            <div class="section-icon">🌿</div>
            <h2>Origins of the Saturnalia</h2>
        </div>
        ${lessonData.origins.map(p => `<p>${p}</p>`).join('')}
        <div class="info-callout">
            <strong>Key Connection:</strong> Saturn's temple doubling as the state treasury (<em>aerarium</em>) shows how deeply the Romans connected this god with the wealth and prosperity of the entire state — not just agriculture, but Rome's financial well-being.
        </div>
    `;
}

function renderWhatHappened() {
    const el = document.getElementById('what-happened');
    if (!el) return;
    el.innerHTML = `
        <div class="section-header">
            <div class="section-icon">🎭</div>
            <h2>What Happened at the Saturnalia</h2>
        </div>
        <p>The Saturnalia followed a sequence of events that transformed Rome from an orderly, hierarchical city into a place of joyful chaos and equality:</p>
        <div class="timeline">
            ${lessonData.whatHappened.map(item => `
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-label">${item.label}</div>
                    <div class="timeline-content">
                        <h3>${item.title}</h3>
                        <p>${item.content}</p>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="source-quote">
            <p>${lessonData.quotes[0].text}</p>
            <div class="quote-attribution">— ${lessonData.quotes[0].attribution}</div>
        </div>
    `;
}

function renderSacrifices() {
    const el = document.getElementById('sacrifices');
    if (!el) return;
    el.innerHTML = `
        <div class="section-header">
            <div class="section-icon">🔥</div>
            <h2>Sacrifices at the Saturnalia</h2>
        </div>
        ${lessonData.sacrifices.map(p => `<p>${p}</p>`).join('')}
        <div class="info-callout">
            <strong>Exam Tip:</strong> The sacrifice performed <em>ritu Graeco</em> (with head uncovered) is a distinctive detail that examiners may ask about. It sets the Saturnalia apart from typical Roman sacrificial practice and suggests the festival's great age.
        </div>
    `;
}

function renderWorship() {
    const el = document.getElementById('worship');
    if (!el) return;
    el.innerHTML = `
        <div class="section-header">
            <div class="section-icon">🙏</div>
            <h2>How Saturn Was Worshipped</h2>
        </div>
        <p>Saturn was honoured through a combination of formal religious ritual and the festive activities themselves — the celebration <em>was</em> the worship:</p>
        <div class="detail-grid">
            ${lessonData.worship.map(item => `
                <div class="detail-card">
                    <h4>${item.icon} ${item.title}</h4>
                    <p>${item.text}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function renderImportance() {
    const el = document.getElementById('importance');
    if (!el) return;
    el.innerHTML = `
        <div class="section-header">
            <div class="section-icon">💡</div>
            <h2>Why the Saturnalia Was Important</h2>
        </div>
        <div class="detail-grid">
            ${lessonData.importance.map(item => `
                <div class="detail-card">
                    <h4>${item.icon} ${item.title}</h4>
                    <p>${item.text}</p>
                </div>
            `).join('')}
        </div>
        <div class="source-quote">
            <p>${lessonData.quotes[1].text}</p>
            <div class="quote-attribution">— ${lessonData.quotes[1].attribution}</div>
        </div>
    `;
}

function renderKeyTerms() {
    const el = document.getElementById('key-terms');
    if (!el) return;
    el.innerHTML = `
        <div class="terms-title">📚 Key Terms</div>
        <div class="terms-grid">
            ${lessonData.keyTerms.map(term => `<span class="term-chip">${term}</span>`).join('')}
        </div>
    `;
}

// ===== Initialise =====
document.addEventListener('DOMContentLoaded', function() {
    renderObjectives();
    renderOrigins();
    renderWhatHappened();
    renderSacrifices();
    renderWorship();
    renderImportance();
    renderKeyTerms();
});
