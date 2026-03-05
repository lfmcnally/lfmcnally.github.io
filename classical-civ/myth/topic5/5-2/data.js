// 5.2 The City Dionysia - Data & Rendering

const lessonData = {
    objectives: [
        "Describe how the City Dionysia was founded",
        "Describe what happened on each day of the City Dionysia",
        "Describe the sacrifices at the City Dionysia",
        "Explain why the City Dionysia was important to the Athenians",
        "Explain how Dionysus was worshipped at the City Dionysia"
    ],

    foundation: {
        icon: "🏛️",
        title: "Foundation of the Festival",
        paragraphs: [
            "The City Dionysia (also called the Great Dionysia) was established in Athens by the tyrant <strong>Peisistratos</strong> around <strong>534 BC</strong>. Peisistratos brought the cult of <strong>Dionysus Eleuthereus</strong> from the town of Eleutherae on the Athenian-Boeotian border to Athens, transforming a rural cult into one of the city's most important civic festivals.",
            "A wooden cult statue of Dionysus was placed in a temple near the <strong>Theatre of Dionysus</strong> on the south slope of the Acropolis. This theatre would become the heart of the festival and the birthplace of Western drama.",
            "The festival was held annually in the month of <strong>Elaphebolion</strong> (roughly late March/early April), as the sailing season reopened and visitors could travel from across the Greek world. This timing was deliberate — Athens wanted the widest possible audience for its greatest cultural showcase.",
            "<strong>Thespis</strong> is traditionally credited as the first winner of the tragic contest in 534 BC, and is said to have invented the actor by adding a speaker separate from the chorus. His name gives us the English word <em>thespian</em>, meaning actor.",
            "The festival grew to become Athens' most prestigious cultural event, attracting visitors from across the Greek world and producing the greatest works of ancient drama."
        ],
        callout: "The City Dionysia was not just a religious festival — it was a statement of Athenian cultural superiority. By the 5th century BC, it had become the most important event in the Athenian calendar."
    },

    timeline: {
        icon: "📅",
        title: "Day-by-Day Events",
        items: [
            {
                label: "Day 1 — The Proagon",
                title: "The Proagon (Preview Ceremony)",
                text: "A public preview ceremony held in the Odeon. Each playwright presented his actors (unmasked and without costume) and announced the subjects of his plays. This built excitement and anticipation among the Athenian audience."
            },
            {
                label: "Day 1 (Evening) — The Eisagoge",
                title: "The Eisagoge (Bringing-In)",
                text: "The wooden statue of Dionysus was carried from his temple to a point on the road to Eleutherae, re-enacting his original arrival in Athens. Then, by torchlight, the epheboi (young men doing military training) carried the statue back into the city to the Theatre of Dionysus. This was accompanied by singing, dancing and sacrificing."
            },
            {
                label: "Day 2 — The Grand Procession",
                title: "The Pompe (Grand Procession)",
                text: "A grand procession through the city in which citizens, metics and representatives of allied states participated. They carried phalloi (wooden or bronze phalluses symbolising fertility and Dionysus' power). A fine bull was led at the head of the procession for sacrifice. Wine was carried and drunk freely. The procession ended at the Theatre of Dionysus."
            },
            {
                label: "Day 2 (After Procession) — Dithyrambic Contests",
                title: "Dithyrambic Contests",
                text: "Ten choruses of fifty men and ten choruses of fifty boys (one from each Athenian tribe) competed singing dithyrambs — choral songs in honour of Dionysus. This involved an astonishing 1,000 performers in total."
            },
            {
                label: "Days 3–5 — Tragic Contests",
                title: "Tragic Contests",
                text: "Three playwrights each presented a tetralogy: three tragedies and a satyr play. Each playwright had one full day. Famous playwrights included Aeschylus, Sophocles and Euripides. Judges chosen by lot awarded first, second and third prizes."
            },
            {
                label: "Day 6 — Comic Contests",
                title: "Comic Contests",
                text: "Five comic playwrights each presented one comedy. Aristophanes was the most famous comic playwright. Comedies often mocked politicians and public figures, making them a unique outlet for free speech in the ancient world."
            }
        ]
    },

    sacrifices: {
        icon: "🔥",
        title: "Sacrifices at the City Dionysia",
        paragraphs: [
            "Before the dramatic performances began, a <strong>bull was sacrificed</strong> in the orchestra (dancing area) of the Theatre of Dionysus. The bull had been led in the grand procession and was garlanded with ribbons.",
            "<strong>Libations</strong> (drink offerings) of wine were poured to Dionysus before every performance. Wine was Dionysus' sacred gift to humanity, and pouring it was a direct act of devotion.",
            "The blood of sacrifice <strong>consecrated the performance space</strong>, making the theatre a sacred area. Without this ritual purification, the performances could not proceed.",
            "The sacrifice reminded the audience that the plays were <strong>not mere entertainment but religious acts</strong> dedicated to Dionysus. Every tragedy, comedy and dithyramb was, at its heart, an offering to the god."
        ],
        callout: "<strong>Key point:</strong> The sacrifice of the bull transformed the theatre from an ordinary public space into sacred ground. The dramatic performances that followed were religious rituals, not secular entertainment."
    },

    worship: {
        icon: "🎭",
        title: "How Dionysus Was Worshipped",
        paragraphs: [
            "The <strong>dramatic performances themselves were acts of worship</strong> — tragedy and comedy were religious rituals performed in Dionysus' honour, not just entertainment. The god was believed to be present in the theatre watching the plays.",
            "The <strong>procession (pompe)</strong> honoured Dionysus by re-enacting his arrival in Athens and displaying symbols of his power — phalloi, wine and ivy.",
            "The <strong>dithyrambs</strong> were choral hymns composed specifically to praise Dionysus and tell his myths.",
            "The <strong>eisagoge</strong> re-created Dionysus' mythical journey from Eleutherae, renewing his presence in the city each year. This annual re-enactment kept the god's power fresh and alive.",
            "The <strong>Theatre of Dionysus</strong> was itself a sacred precinct — his temple stood beside the theatre and his priest had a front-row seat (the <em>prohedria</em>).",
            "Wearing <strong>ivy wreaths</strong> (sacred to Dionysus) and drinking <strong>wine</strong> (his gift to humanity) were both forms of worship during the festival.",
            "Dionysus was the god of <strong>transformation, masks and performance</strong> — drama itself was his domain. To watch or perform a play was to enter Dionysus' world."
        ],
        quote: {
            text: "Come, Lord Dionysus, to your holy temple by the sea, come with the Graces to your temple, rushing with your bull\u2019s foot.",
            citation: "Fragment of a cult hymn to Dionysus"
        }
    },

    importance: {
        icon: "⭐",
        title: "Why the City Dionysia Was Important to Athenians",
        cards: [
            {
                title: "Democratic Showcase",
                text: "The City Dionysia displayed Athenian democracy in action — the city's organisation, wealth and cultural achievements were on show to the whole Greek world."
            },
            {
                title: "Imperial Display",
                text: "Athens' allies were required to bring tribute during the festival, and this was publicly displayed in the theatre — a powerful statement of Athenian power."
            },
            {
                title: "Civic Participation",
                text: "The festival required massive civic involvement — as actors, chorus members, sponsors (choregoi who funded productions), and audience members."
            },
            {
                title: "Religious Duty",
                text: "Honouring Dionysus maintained his favour and ensured the city's prosperity. Neglecting the god could invite divine punishment."
            },
            {
                title: "Cultural Prestige",
                text: "Athens' dramatic festivals produced the greatest works of Western literature — the tragedies of Aeschylus, Sophocles and Euripides."
            },
            {
                title: "Social Cohesion",
                text: "The whole city came together. Even prisoners were temporarily released to attend. A special fund (the theorikon) paid for poorer citizens' tickets."
            },
            {
                title: "International Audience",
                text: "The timing in spring, when the seas reopened for travel, meant visitors from across Greece attended — making it a showcase of Athenian greatness."
            }
        ]
    },

    keyTerms: [
        "City Dionysia",
        "Proagon",
        "Eisagoge",
        "Pompe",
        "Dithyramb",
        "Tetralogy",
        "Satyr play",
        "Choregos",
        "Theorikon",
        "Phalloi",
        "Dionysus Eleuthereus",
        "Thespis"
    ]
};

document.addEventListener('DOMContentLoaded', function () {
    renderLesson();
});

function renderLesson() {
    renderObjectives();
    renderFoundation();
    renderTimeline();
    renderSacrifices();
    renderWorship();
    renderImportance();
    renderKeyTerms();
}

function renderObjectives() {
    const el = document.getElementById('objectives');
    if (!el) return;
    el.innerHTML = `
        <h2>🎯 Learning Objectives</h2>
        <ul>
            ${lessonData.objectives.map(obj => `<li>${obj}</li>`).join('')}
        </ul>
    `;
}

function renderFoundation() {
    const el = document.getElementById('foundation');
    if (!el) return;
    const d = lessonData.foundation;
    el.innerHTML = `
        <div class="section-header">
            <span class="section-icon">${d.icon}</span>
            <h2 class="section-title">${d.title}</h2>
        </div>
        ${d.paragraphs.map(p => `<p>${p}</p>`).join('')}
        <div class="info-callout">${d.callout}</div>
    `;
}

function renderTimeline() {
    const el = document.getElementById('day-by-day');
    if (!el) return;
    const d = lessonData.timeline;
    el.innerHTML = `
        <div class="section-header">
            <span class="section-icon">${d.icon}</span>
            <h2 class="section-title">${d.title}</h2>
        </div>
        <div class="timeline">
            ${d.items.map(item => `
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <span class="timeline-label">${item.label}</span>
                    <div class="timeline-content">
                        <h3>${item.title}</h3>
                        <p>${item.text}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderSacrifices() {
    const el = document.getElementById('sacrifices');
    if (!el) return;
    const d = lessonData.sacrifices;
    el.innerHTML = `
        <div class="section-header">
            <span class="section-icon">${d.icon}</span>
            <h2 class="section-title">${d.title}</h2>
        </div>
        ${d.paragraphs.map(p => `<p>${p}</p>`).join('')}
        <div class="info-callout">${d.callout}</div>
    `;
}

function renderWorship() {
    const el = document.getElementById('worship');
    if (!el) return;
    const d = lessonData.worship;
    el.innerHTML = `
        <div class="section-header">
            <span class="section-icon">${d.icon}</span>
            <h2 class="section-title">How Dionysus Was Worshipped</h2>
        </div>
        ${d.paragraphs.map(p => `<p>${p}</p>`).join('')}
        <div class="source-quote">
            <p class="quote-text">${d.quote.text}</p>
            <span class="quote-citation">— ${d.quote.citation}</span>
        </div>
    `;
}

function renderImportance() {
    const el = document.getElementById('importance');
    if (!el) return;
    const d = lessonData.importance;
    el.innerHTML = `
        <div class="section-header">
            <span class="section-icon">${d.icon}</span>
            <h2 class="section-title">${d.title}</h2>
        </div>
        <div class="detail-grid">
            ${d.cards.map(card => `
                <div class="detail-card">
                    <h4>${card.title}</h4>
                    <p>${card.text}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function renderKeyTerms() {
    const el = document.getElementById('key-terms');
    if (!el) return;
    el.innerHTML = `
        <div class="section-header">
            <span class="section-icon">📚</span>
            <h2 class="section-title">Key Terms</h2>
        </div>
        <div class="terms-grid">
            ${lessonData.keyTerms.map(term => `<span class="term-chip">${term}</span>`).join('')}
        </div>
    `;
}
