// 5.3 The Lupercalia - Data & Rendering

const lessonData = {
    objectives: [
        "Describe the origins of the Lupercalia",
        "Describe what happened at the Lupercalia",
        "Describe the sacrifices at the Lupercalia",
        "Explain why the Lupercalia was important to the Romans",
        "Explain how Lupercus was worshipped at the Lupercalia"
    ],

    origins: [
        'The Lupercalia was one of Rome\u2019s most ancient festivals, held annually on <strong>15 February</strong>.',
        'It was so old that even the Romans were unsure of its exact origins.',
        'It was associated with the <strong>Lupercal cave</strong> on the Palatine Hill \u2014 the very cave where, according to legend, the she-wolf (<em>lupa</em>) had suckled the infant twins <strong>Romulus and Remus</strong>, the founders of Rome.',
        'The festival was connected to the god <strong>Lupercus</strong> (sometimes identified with Faunus or the Greek god Pan), a god of shepherds, flocks and fertility.',
        'Some Romans believed it was founded by <strong>Evander</strong>, a mythical Greek settler who arrived in Italy before the Trojan War and established a settlement on the Palatine Hill.',
        'The name \u201CLupercalia\u201D may come from <em>lupus</em> (wolf) \u2014 connecting it to the she-wolf legend \u2014 or from <em>luere per caprum</em> (\u201Cto purify by means of a goat\u201D).',
        'February itself takes its name from <em>februa</em> meaning \u201Cinstruments of purification\u201D \u2014 the Lupercalia was a festival of purification (<em>februatio</em>) to cleanse the city and prepare for the new year (which originally began in March in the Roman calendar).'
    ],

    whatHappened: [
        {
            label: "The Gathering at the Lupercal",
            content: "The festival began at the Lupercal cave on the Palatine Hill, where the Luperci (the priests of Lupercus) assembled. The Luperci were divided into two colleges: the <strong>Fabiani</strong> and the <strong>Quintiliani</strong> (later a third, the <strong>Juliani</strong>, was added by Julius Caesar)."
        },
        {
            label: "The Sacrifice",
            content: "Goats and a dog were sacrificed by the Luperci at the Lupercal cave. The goat represented <strong>fertility</strong>; the dog represented <strong>purification</strong> and guarding."
        },
        {
            label: "The Smearing",
            content: "After the sacrifice, two young Luperci of noble birth were brought forward. The sacrificial knife, still wet with the goats\u2019 blood, was touched to their foreheads. The blood was then wiped away with wool soaked in milk. At this point, the young men were required to <strong>laugh</strong>."
        },
        {
            label: "The Feast",
            content: "The Luperci ate a sacrificial meal of goat meat at the Lupercal."
        },
        {
            label: "The Run",
            content: "After the feast, the Luperci stripped naked (or nearly so, wearing only goatskin loincloths) and cut the goatskins into strips called <strong>februa</strong>. They then ran around the boundary of the ancient Palatine Hill, striking anyone they encountered with these goatskin thongs."
        },
        {
            label: "Women and the Thongs",
            content: "Women of Rome, including those of high social rank, deliberately positioned themselves along the route to be struck by the <em>februa</em>. Being struck was believed to promote <strong>fertility</strong> and ease the pains of childbirth. Some women even bared their hands and backs to receive the blows."
        }
    ],

    sacrifices: [
        {
            title: "Goats",
            text: "Goats were the primary sacrifice \u2014 goats were associated with fertility and sexual energy, connecting to Lupercus/Faunus as a pastoral deity."
        },
        {
            title: "Dog",
            text: "A dog was also sacrificed \u2014 dogs were connected to purification and guardianship in Roman religion."
        },
        {
            title: "Location",
            text: "The sacrifices took place at the <strong>Lupercal cave</strong> itself, in the most sacred spot of the ritual."
        },
        {
            title: "Blood and Milk",
            text: "The blood smeared on the foreheads of the young Luperci and then wiped with milk-soaked wool was a powerful symbolic act: blood represented death and sacrifice, while milk represented new life and purity."
        },
        {
            title: "Goatskin Thongs",
            text: "The goatskin thongs (<em>februa</em>) made from the sacrificed animals carried the purifying and fertilising power of the sacrifice out into the city."
        },
        {
            title: "A Distinctly Roman Ritual",
            text: "There were no offerings burned for the gods in the Greek manner \u2014 this was a distinctly Roman ritual focused on direct physical contact with sacred materials."
        }
    ],

    worship: [
        {
            title: "Physical Ritual",
            text: "Lupercus was worshipped through <strong>direct physical ritual</strong> rather than through formal temple worship or prayer \u2014 this was an intensely physical, embodied festival."
        },
        {
            title: "The Luperci Priests",
            text: "The <strong>Luperci priests</strong> were his dedicated servants \u2014 they were young men, often of aristocratic families, who served as the instruments of the god\u2019s purifying and fertilising power."
        },
        {
            title: "The Sacred Run",
            text: "The <strong>run around the Palatine</strong> was itself an act of worship \u2014 by tracing the sacred boundary of Rome\u2019s oldest settlement, the Luperci renewed the city\u2019s protective boundary."
        },
        {
            title: "Striking with Februa",
            text: "The <strong>striking with <em>februa</em></strong> distributed the god\u2019s blessing to the people \u2014 this was how his worshippers received divine favour for fertility."
        },
        {
            title: "Sacrifice of Goats",
            text: "The <strong>sacrifice of goats</strong> honoured Lupercus as a pastoral god of flocks and herds."
        },
        {
            title: "The Lupercal Cave",
            text: "The Lupercal cave was his most sacred site \u2014 the ritual always centred on this specific location, tying worship of the god to the very foundations of Rome."
        },
        {
            title: "Ritual Laughter",
            text: "The <strong>laughter</strong> required after the blood-smearing may have been a ritual act symbolising joy, vitality and the life-force that Lupercus embodied."
        }
    ],

    importance: [
        {
            title: "Connection to Rome\u2019s Founding",
            text: "The festival directly linked to Romulus and Remus and the she-wolf \u2014 it celebrated the very origins of Roman civilisation."
        },
        {
            title: "Purification (Februatio)",
            text: "The Lupercalia cleansed the city of harmful influences as the old year ended and the new one (originally March) approached."
        },
        {
            title: "Fertility",
            text: "In a society where infant mortality was high and Rome needed citizens and soldiers, promoting fertility was a vital concern."
        },
        {
            title: "Tradition (Mos Maiorum)",
            text: "The Romans valued ancestral custom enormously. The Lupercalia was so ancient that it was considered essential to maintain \u2014 to abandon it would be to break with the ways of the ancestors."
        },
        {
            title: "Community Participation",
            text: "The festival involved the whole community \u2014 the Luperci running through the streets and women positioning themselves along the route created a shared, public ritual experience."
        },
        {
            title: "Remarkable Survival",
            text: "The Lupercalia was still being celebrated in the 5th century AD, long after Rome had become officially Christian \u2014 Pope Gelasius I finally banned it in <strong>494 AD</strong>, showing how deeply embedded it was in Roman culture."
        }
    ],

    sourceQuote: {
        text: "At the Lupercalia... young men run through the city naked, striking those they meet with shaggy thongs. Many women of rank purposely get in their way, presenting their hands to be struck, believing that this helps those who are pregnant to an easy delivery, and those who are barren to become pregnant.",
        citation: "Plutarch, Life of Caesar 61"
    },

    keyTerms: [
        "Lupercalia",
        "Luperci",
        "Lupercal",
        "Februa",
        "Februatio",
        "Lupercus",
        "Faunus",
        "Mos maiorum",
        "Palatine Hill",
        "Romulus and Remus"
    ]
};

// ── Rendering ──────────────────────────────────────────────

function renderObjectives() {
    const el = document.getElementById('objectives');
    if (!el) return;
    el.innerHTML = `
        <h2>\uD83C\uDFAF Learning Objectives</h2>
        <ul>${lessonData.objectives.map(o => `<li>${o}</li>`).join('')}</ul>
    `;
}

function renderOrigins() {
    const el = document.getElementById('origins');
    if (!el) return;
    el.innerHTML = `
        <div class="section-header">
            <span class="section-icon">\uD83D\uDCDC</span>
            <h2 class="section-title">Origins of the Lupercalia</h2>
        </div>
        ${lessonData.origins.map(p => `<p>${p}</p>`).join('')}
        <div class="info-callout">
            <strong>Key Point:</strong> The Lupercalia was so ancient that it predated the founding of Rome itself. Its roots stretched back to a time of pastoral shepherds on the Palatine Hill, long before the city grew around it.
        </div>
    `;
}

function renderWhatHappened() {
    const el = document.getElementById('what-happened');
    if (!el) return;
    el.innerHTML = `
        <div class="section-header">
            <span class="section-icon">\uD83C\uDFC3</span>
            <h2 class="section-title">What Happened at the Lupercalia</h2>
        </div>
        <p>The Lupercalia was a single-day festival on 15 February. The events followed a specific ritual sequence:</p>
        <div class="timeline">
            ${lessonData.whatHappened.map(item => `
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <span class="timeline-label">${item.label}</span>
                    <span class="timeline-content">${item.content}</span>
                </div>
            `).join('')}
        </div>
        <div class="source-quote">
            <div class="quote-text">${lessonData.sourceQuote.text}</div>
            <span class="quote-citation">\u2014 ${lessonData.sourceQuote.citation}</span>
        </div>
    `;
}

function renderSacrifices() {
    const el = document.getElementById('sacrifices');
    if (!el) return;
    el.innerHTML = `
        <div class="section-header">
            <span class="section-icon">\uD83D\uDD2A</span>
            <h2 class="section-title">The Sacrifices</h2>
        </div>
        <p>Sacrifice was at the heart of the Lupercalia. The animals chosen and the way their remains were used all carried deep symbolic meaning.</p>
        <div class="detail-grid">
            ${lessonData.sacrifices.map(s => `
                <div class="detail-card">
                    <h4>${s.title}</h4>
                    <p>${s.text}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function renderWorship() {
    const el = document.getElementById('worship');
    if (!el) return;
    el.innerHTML = `
        <div class="section-header">
            <span class="section-icon">\uD83D\uDE4F</span>
            <h2 class="section-title">How Lupercus Was Worshipped</h2>
        </div>
        <p>The worship of Lupercus at the Lupercalia was unlike the formal, temple-based worship of many other Roman gods. It was raw, physical and deeply embodied.</p>
        <div class="detail-grid">
            ${lessonData.worship.map(w => `
                <div class="detail-card">
                    <h4>${w.title}</h4>
                    <p>${w.text}</p>
                </div>
            `).join('')}
        </div>
        <div class="info-callout">
            <strong>Exam Tip:</strong> When explaining how Lupercus was worshipped, emphasise the <strong>physical, embodied</strong> nature of the ritual. The Lupercalia was not about quiet prayer or temple offerings \u2014 it was about blood, running, striking and laughter.
        </div>
    `;
}

function renderImportance() {
    const el = document.getElementById('importance');
    if (!el) return;
    el.innerHTML = `
        <div class="section-header">
            <span class="section-icon">\u2B50</span>
            <h2 class="section-title">Why the Lupercalia Was Important</h2>
        </div>
        <p>The Lupercalia mattered to the Romans for several interconnected reasons:</p>
        <div class="detail-grid">
            ${lessonData.importance.map(i => `
                <div class="detail-card">
                    <h4>${i.title}</h4>
                    <p>${i.text}</p>
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
            <span class="section-icon">\uD83D\uDCD6</span>
            <h2 class="section-title">Key Terms</h2>
        </div>
        <div class="terms-grid">
            ${lessonData.keyTerms.map(t => `<span class="term-chip">${t}</span>`).join('')}
        </div>
    `;
}

// ── Initialise ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
    renderObjectives();
    renderOrigins();
    renderWhatHappened();
    renderSacrifices();
    renderWorship();
    renderImportance();
    renderKeyTerms();
});
