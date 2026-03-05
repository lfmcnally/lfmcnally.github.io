// 5.3 The Lupercalia - Data & Rendering

const lessonData = {
    objectives: [
        'Describe the origins of the Lupercalia',
        'Describe what happened at the Lupercalia',
        'Describe the sacrifices at the Lupercalia',
        'Explain why the Lupercalia was important to the Romans',
        'Explain how Lupercus was worshipped at the Lupercalia'
    ],

    origins: {
        paragraphs: [
            'The Lupercalia was one of Rome\u2019s most ancient festivals, held annually on <strong>15 February</strong>.',
            'It was so old that even the Romans were unsure of its exact origins.',
            'It was associated with the <strong>Lupercal cave</strong> on the Palatine Hill \u2014 the very cave where, according to legend, the she-wolf (<em>lupa</em>) had suckled the infant twins <strong>Romulus and Remus</strong>, the founders of Rome.',
            'The festival was connected to the god <strong>Lupercus</strong> (sometimes identified with Faunus or the Greek god Pan), a god of shepherds, flocks and fertility.',
            'Some Romans believed it was founded by <strong>Evander</strong>, a mythical Greek settler who arrived in Italy before the Trojan War and established a settlement on the Palatine Hill.',
            'The name \u201CLupercalia\u201D may come from <em>lupus</em> (wolf) \u2014 connecting it to the she-wolf legend \u2014 or from <em>luere per caprum</em> (\u201Cto purify by means of a goat\u201D).',
            'February itself takes its name from <em>februa</em> meaning \u201Cinstruments of purification\u201D \u2014 the Lupercalia was a festival of purification (<em>februatio</em>) to cleanse the city and prepare for the new year (which originally began in March in the Roman calendar).'
        ]
    },

    whatHappened: {
        timeline: [
            {
                label: 'The Gathering',
                title: 'The Gathering at the Lupercal',
                description: 'The Luperci assembled at the Lupercal cave on the Palatine Hill. The Luperci were divided into two colleges: the <strong>Fabiani</strong> and the <strong>Quintiliani</strong> (later a third, the <strong>Juliani</strong>, was added by Julius Caesar).'
            },
            {
                label: 'The Sacrifice',
                title: 'The Sacrifice',
                description: 'Goats and a dog were sacrificed by the Luperci at the Lupercal cave. The goat represented <strong>fertility</strong>; the dog represented <strong>purification</strong> and guarding.'
            },
            {
                label: 'The Smearing',
                title: 'The Smearing',
                description: 'After the sacrifice, two young Luperci of noble birth were brought forward. The sacrificial knife, still wet with the goats\u2019 blood, was touched to their foreheads. The blood was then wiped away with wool soaked in milk. At this point, the young men were required to <strong>laugh</strong>.'
            },
            {
                label: 'The Feast',
                title: 'The Feast',
                description: 'The Luperci ate a sacrificial meal of goat meat at the Lupercal.'
            },
            {
                label: 'The Run',
                title: 'The Run',
                description: 'After the feast, the Luperci stripped naked (or nearly so, wearing only goatskin loincloths) and cut the goatskins into strips called <strong>februa</strong>. They then ran around the boundary of the ancient Palatine Hill, striking anyone they encountered with these goatskin thongs.'
            },
            {
                label: 'Women and the Thongs',
                title: 'Women and the Thongs',
                description: 'Women of Rome, including those of high social rank, deliberately positioned themselves along the route to be struck by the <em>februa</em>. Being struck was believed to promote <strong>fertility</strong> and ease the pains of childbirth. Some women even bared their hands and backs to receive the blows.'
            }
        ]
    },

    sacrifices: {
        items: [
            {
                heading: 'Goats',
                text: 'Goats were the primary sacrifice \u2014 goats were associated with fertility and sexual energy, connecting to Lupercus/Faunus as a pastoral deity.'
            },
            {
                heading: 'Dog',
                text: 'A dog was also sacrificed \u2014 dogs were connected to purification and guardianship in Roman religion.'
            },
            {
                heading: 'Location',
                text: 'The sacrifices took place at the <strong>Lupercal cave</strong> itself, in the most sacred spot of the ritual.'
            },
            {
                heading: 'Blood and Milk',
                text: 'The blood smeared on the foreheads of the young Luperci and then wiped with milk-soaked wool was a powerful symbolic act: blood represented death and sacrifice, while milk represented new life and purity.'
            },
            {
                heading: 'Goatskin Thongs',
                text: 'The goatskin thongs (<em>februa</em>) made from the sacrificed animals carried the purifying and fertilising power of the sacrifice out into the city.'
            },
            {
                heading: 'A Distinctly Roman Ritual',
                text: 'There were no offerings burned for the gods in the Greek manner \u2014 this was a distinctly Roman ritual focused on direct physical contact with sacred materials.'
            }
        ],
        callout: '<strong>Key Point:</strong> The Lupercalia was so ancient that it predated the founding of Rome itself. Its roots stretched back to a time of pastoral shepherds on the Palatine Hill, long before the city grew around it.'
    },

    worship: {
        items: [
            {
                heading: 'Physical Ritual',
                text: 'Lupercus was worshipped through <strong>direct physical ritual</strong> rather than through formal temple worship or prayer \u2014 this was an intensely physical, embodied festival.'
            },
            {
                heading: 'The Luperci Priests',
                text: 'The <strong>Luperci priests</strong> were his dedicated servants \u2014 they were young men, often of aristocratic families, who served as the instruments of the god\u2019s purifying and fertilising power.'
            },
            {
                heading: 'The Sacred Run',
                text: 'The <strong>run around the Palatine</strong> was itself an act of worship \u2014 by tracing the sacred boundary of Rome\u2019s oldest settlement, the Luperci renewed the city\u2019s protective boundary.'
            },
            {
                heading: 'Striking with Februa',
                text: 'The <strong>striking with <em>februa</em></strong> distributed the god\u2019s blessing to the people \u2014 this was how his worshippers received divine favour for fertility.'
            },
            {
                heading: 'Sacrifice of Goats',
                text: 'The <strong>sacrifice of goats</strong> honoured Lupercus as a pastoral god of flocks and herds.'
            },
            {
                heading: 'The Lupercal Cave',
                text: 'The Lupercal cave was his most sacred site \u2014 the ritual always centred on this specific location, tying worship of the god to the very foundations of Rome.'
            },
            {
                heading: 'Ritual Laughter',
                text: 'The <strong>laughter</strong> required after the blood-smearing may have been a ritual act symbolising joy, vitality and the life-force that Lupercus embodied.'
            }
        ],
        callout: '<strong>Exam Tip:</strong> When explaining how Lupercus was worshipped, emphasise the <strong>physical, embodied</strong> nature of the ritual. The Lupercalia was not about quiet prayer or temple offerings \u2014 it was about blood, running, striking and laughter.'
    },

    importance: {
        details: [
            {
                heading: 'Connection to Rome\u2019s Founding',
                text: 'The festival directly linked to Romulus and Remus and the she-wolf \u2014 it celebrated the very origins of Roman civilisation.'
            },
            {
                heading: 'Purification (Februatio)',
                text: 'The Lupercalia cleansed the city of harmful influences as the old year ended and the new one (originally March) approached.'
            },
            {
                heading: 'Fertility',
                text: 'In a society where infant mortality was high and Rome needed citizens and soldiers, promoting fertility was a vital concern.'
            },
            {
                heading: 'Tradition (Mos Maiorum)',
                text: 'The Romans valued ancestral custom enormously. The Lupercalia was so ancient that it was considered essential to maintain \u2014 to abandon it would be to break with the ways of the ancestors.'
            },
            {
                heading: 'Community Participation',
                text: 'The festival involved the whole community \u2014 the Luperci running through the streets and women positioning themselves along the route created a shared, public ritual experience.'
            },
            {
                heading: 'Remarkable Survival',
                text: 'The Lupercalia was still being celebrated in the 5th century AD, long after Rome had become officially Christian \u2014 Pope Gelasius I finally banned it in <strong>494 AD</strong>, showing how deeply embedded it was in Roman culture.'
            }
        ]
    },

    sourceQuote: {
        text: 'At the Lupercalia... young men run through the city naked, striking those they meet with shaggy thongs. Many women of rank purposely get in their way, presenting their hands to be struck, believing that this helps those who are pregnant to an easy delivery, and those who are barren to become pregnant.',
        attribution: 'Plutarch, Life of Caesar 61'
    },

    keyTerms: [
        'Lupercalia',
        'Luperci',
        'Lupercal',
        'Februa',
        'Februatio',
        'Lupercus',
        'Faunus',
        'Mos maiorum',
        'Palatine Hill',
        'Romulus and Remus'
    ],

    quickFacts: [
        { label: 'Festival', value: 'Annual' },
        { label: 'When', value: '15 February' },
        { label: 'Where', value: 'Palatine Hill, Rome' },
        { label: 'For', value: 'Lupercus/Faunus' },
        { label: 'Key sacrifice', value: 'Goats and a dog' }
    ]
};

// ── Rendering ──────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
    renderLesson();
});

function renderLesson() {
    renderObjectives();
    renderOrigins();
    renderWhatHappened();
    renderSacrifices();
    renderWorship();
    renderImportance();
    renderKeyTerms();
    renderSourceQuote();
    renderQuickFacts();
}

function renderObjectives() {
    var el = document.getElementById('objectives');
    var items = lessonData.objectives.map(function (obj) {
        return '<li>' + obj + '</li>';
    }).join('');
    el.innerHTML =
        '<div class="objectives-title">\u{1F3AF} Learning Objectives</div>' +
        '<ul class="objectives-list">' + items + '</ul>';
}

function renderOrigins() {
    var el = document.getElementById('origins');
    if (!el) return;
    var paras = lessonData.origins.paragraphs.map(function (p) {
        return '<p>' + p + '</p>';
    }).join('');
    el.innerHTML = paras;
}

function renderWhatHappened() {
    var el = document.getElementById('what-happened');
    if (!el) return;
    var d = lessonData.whatHappened;
    var items = d.timeline.map(function (item) {
        return (
            '<div class="timeline-item">' +
                '<div class="timeline-marker"></div>' +
                '<div class="timeline-label">' + item.label + '</div>' +
                '<div class="timeline-content">' +
                    '<h3>' + item.title + '</h3>' +
                    '<p>' + item.description + '</p>' +
                '</div>' +
            '</div>'
        );
    }).join('');
    el.innerHTML =
        '<p>The Lupercalia was a single-day festival on 15 February. The events followed a specific ritual sequence:</p>' +
        '<div class="timeline">' + items + '</div>';
}

function renderSacrifices() {
    var el = document.getElementById('sacrifices');
    if (!el) return;
    var d = lessonData.sacrifices;
    var cards = d.items.map(function (item) {
        return (
            '<div class="detail-card">' +
                '<h4>' + item.heading + '</h4>' +
                '<p>' + item.text + '</p>' +
            '</div>'
        );
    }).join('');
    el.innerHTML =
        '<p>Sacrifice was at the heart of the Lupercalia. The animals chosen and the way their remains were used all carried deep symbolic meaning.</p>' +
        '<div class="detail-grid">' + cards + '</div>' +
        '<div class="info-callout">' + d.callout + '</div>';
}

function renderWorship() {
    var el = document.getElementById('worship');
    if (!el) return;
    var d = lessonData.worship;
    var cards = d.items.map(function (item) {
        return (
            '<div class="detail-card">' +
                '<h4>' + item.heading + '</h4>' +
                '<p>' + item.text + '</p>' +
            '</div>'
        );
    }).join('');
    el.innerHTML =
        '<p>The worship of Lupercus at the Lupercalia was unlike the formal, temple-based worship of many other Roman gods. It was raw, physical and deeply embodied.</p>' +
        '<div class="detail-grid">' + cards + '</div>' +
        '<div class="info-callout">' + d.callout + '</div>';
}

function renderImportance() {
    var el = document.getElementById('importance');
    if (!el) return;
    var d = lessonData.importance;
    var cards = d.details.map(function (item) {
        return (
            '<div class="detail-card">' +
                '<h4>' + item.heading + '</h4>' +
                '<p>' + item.text + '</p>' +
            '</div>'
        );
    }).join('');
    el.innerHTML =
        '<p>The Lupercalia mattered to the Romans for several interconnected reasons:</p>' +
        '<div class="detail-grid">' + cards + '</div>';
}

function renderKeyTerms() {
    var el = document.getElementById('key-terms');
    if (!el) return;
    var chips = lessonData.keyTerms.map(function (term) {
        return '<span class="term-chip">' + term + '</span>';
    }).join('');
    el.innerHTML = '<div class="term-chips">' + chips + '</div>';
}

function renderSourceQuote() {
    var el = document.getElementById('source-quote');
    if (!el) return;
    var d = lessonData.sourceQuote;
    el.innerHTML =
        '<div class="source-quote">' +
            '<p>' + d.text + '</p>' +
            '<span class="quote-attribution">\u2014 ' + d.attribution + '</span>' +
        '</div>';
}

function renderQuickFacts() {
    var el = document.getElementById('quick-facts');
    if (!el) return;
    var items = lessonData.quickFacts.map(function (fact) {
        return '<li><span class="fact-label">' + fact.label + ':</span> ' + fact.value + '</li>';
    }).join('');
    el.innerHTML = '<ul class="quick-facts-list">' + items + '</ul>';
}
