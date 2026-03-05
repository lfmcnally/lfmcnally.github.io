// 5.2 The City Dionysia - Data & Rendering

const lessonData = {
    objectives: [
        'Describe how the City Dionysia was founded',
        'Describe what happened on each day of the City Dionysia',
        'Describe the sacrifices at the City Dionysia',
        'Explain why the City Dionysia was important to the Athenians',
        'Explain how Dionysus was worshipped at the City Dionysia'
    ],

    foundation: [
        'The City Dionysia (also called the Great Dionysia) was established by the tyrant <strong>Peisistratos</strong> around <strong>534 BC</strong>.',
        'Peisistratos brought the cult of <strong>Dionysus Eleuthereus</strong> from the town of <strong>Eleutherae</strong> on the Athenian-Boeotian border to Athens, transforming a rural cult into a major civic festival.',
        'A wooden cult statue of Dionysus was placed in a temple near the <strong>Theatre of Dionysus</strong> on the south slope of the Acropolis.',
        'The festival was held annually in the month of <strong>Elaphebolion</strong> (roughly late March/early April), as the sailing season reopened and visitors could travel from across the Greek world.',
        '<strong>Thespis</strong> is traditionally credited as the first winner of the tragic contest in 534 BC. He is said to have invented the actor by adding a speaker separate from the chorus. His name gives us the word <em>thespian</em>.',
        'The festival grew to become Athens\u2019 most prestigious cultural event, attracting visitors from across the Greek world.'
    ],

    timeline: [
        {
            label: 'Day 1',
            title: 'The Proagon (Preview)',
            text: 'A public preview ceremony held in the <strong>Odeon</strong>. Each playwright presented his actors unmasked and without costume, and announced the subjects of his plays. This built excitement and anticipation among the Athenian audience.'
        },
        {
            label: 'Day 1 (Evening)',
            title: 'The Eisagoge (Bringing-In)',
            text: 'The wooden statue of Dionysus was carried from his temple to a point on the road to <strong>Eleutherae</strong>, re-enacting his original arrival. Then, by torchlight, the <strong>epheboi</strong> (young men doing military training) carried the statue back into the city to the Theatre of Dionysus, accompanied by singing, dancing and sacrificing.'
        },
        {
            label: 'Day 2',
            title: 'The Grand Procession (Pompe)',
            text: 'A grand procession through the city. Citizens, metics and allied representatives carried <strong>phalloi</strong> (wooden or bronze phalluses symbolising fertility). A fine <strong>bull</strong> was led for sacrifice. <strong>Wine</strong> was carried and drunk freely. The procession ended at the Theatre of Dionysus.'
        },
        {
            label: 'Day 2 (After)',
            title: 'Dithyrambic Contests',
            text: 'Ten choruses of 50 men and ten choruses of 50 boys (one from each Athenian tribe) competed singing <strong>dithyrambs</strong> \u2014 choral songs in honour of Dionysus. An astonishing <strong>1,000 performers</strong> in total.'
        },
        {
            label: 'Days 3\u20135',
            title: 'Tragic Contests',
            text: 'Three playwrights each presented a <strong>tetralogy</strong>: three tragedies and a satyr play. Each playwright had one full day. Famous playwrights included <strong>Aeschylus</strong>, <strong>Sophocles</strong> and <strong>Euripides</strong>. Judges were chosen by lot.'
        },
        {
            label: 'Day 6',
            title: 'Comic Contests',
            text: 'Five comic playwrights each presented one comedy. <strong>Aristophanes</strong> was the most famous. Comedies often mocked politicians and public figures \u2014 a unique outlet for free speech in the ancient world.'
        }
    ],

    sacrifices: [
        'A <strong>bull was sacrificed</strong> in the orchestra (dancing area) of the Theatre of Dionysus before the dramatic performances began.',
        'The bull had been led in the grand procession, <strong>garlanded with ribbons</strong>.',
        '<strong>Libations</strong> (drink offerings) of wine were poured to Dionysus before every performance. Wine was Dionysus\u2019 sacred gift to humanity.',
        'The blood of sacrifice <strong>consecrated the performance space</strong> as sacred ground. Without this, the performances could not proceed.',
        'The sacrifice reminded the audience that the plays were <strong>religious acts, not mere entertainment</strong> \u2014 every tragedy, comedy and dithyramb was an offering to Dionysus.'
    ],

    worship: [
        'The <strong>dramatic performances themselves were acts of worship</strong> \u2014 tragedy and comedy were religious rituals performed in Dionysus\u2019 honour. The god was believed to be present watching the plays.',
        'The <strong>procession (pompe)</strong> honoured Dionysus by re-enacting his arrival in Athens and displaying symbols of his power \u2014 phalloi, wine and ivy.',
        'The <strong>dithyrambs</strong> were choral hymns composed specifically to praise Dionysus and tell his myths.',
        'The <strong>eisagoge</strong> re-created Dionysus\u2019 mythical journey from Eleutherae, renewing his presence in the city each year.',
        'The <strong>Theatre of Dionysus</strong> was a sacred precinct \u2014 his temple stood beside the theatre and his priest had a front-row seat (the <em>prohedria</em>).',
        'Wearing <strong>ivy wreaths</strong> and drinking <strong>wine</strong> (both sacred to Dionysus) were forms of worship during the festival.',
        'Dionysus was the god of <strong>transformation, masks and performance</strong> \u2014 drama itself was his domain. To watch or perform a play was to enter Dionysus\u2019 world.'
    ],

    importance: [
        { heading: 'Democratic Showcase', text: 'The City Dionysia displayed Athens\u2019 organisation, wealth and cultural achievement to the whole Greek world.' },
        { heading: 'Imperial Display', text: 'Athens\u2019 allies were required to bring tribute, which was publicly displayed in the theatre \u2014 a powerful statement of Athenian power.' },
        { heading: 'Civic Participation', text: 'Massive civic involvement as actors, chorus members, sponsors (<em>choregoi</em> who funded productions) and audience members.' },
        { heading: 'Religious Duty', text: 'Honouring Dionysus maintained his favour and ensured the city\u2019s prosperity. Neglecting the god could invite divine punishment.' },
        { heading: 'Cultural Prestige', text: 'Produced the greatest works of Western literature \u2014 the tragedies of Aeschylus, Sophocles and Euripides.' },
        { heading: 'Social Cohesion', text: 'The whole city came together. Prisoners were temporarily released. The <em>theorikon</em> fund paid for poorer citizens\u2019 tickets.' },
        { heading: 'International Audience', text: 'Spring timing meant the seas reopened \u2014 visitors from across Greece attended, making it a showcase of Athenian greatness.' }
    ],

    keyTerms: [
        'City Dionysia', 'Proagon', 'Eisagoge', 'Pompe', 'Dithyramb', 'Tetralogy',
        'Satyr play', 'Choregos', 'Theorikon', 'Phalloi', 'Dionysus Eleuthereus', 'Thespis'
    ],

    sourceQuote: {
        text: 'Come, Lord Dionysus, to your holy temple by the sea, come with the Graces to your temple, rushing with your bull\u2019s foot.',
        attribution: 'Fragment of a cult hymn to Dionysus'
    },

    quickFacts: [
        { label: 'Festival', value: 'Annual' },
        { label: 'When', value: 'Elaphebolion (March/April)' },
        { label: 'Where', value: 'Theatre of Dionysus, Athens' },
        { label: 'For', value: 'Dionysus Eleuthereus' },
        { label: 'Key sacrifice', value: 'Bull in the orchestra' }
    ]
};

document.addEventListener('DOMContentLoaded', function () {
    renderObjectives();
    renderFoundation();
    renderDayByDay();
    renderSacrifices();
    renderWorship();
    renderImportance();
    renderKeyTerms();
    renderSourceQuote();
    renderQuickFacts();
});

function renderObjectives() {
    var el = document.getElementById('objectives');
    if (!el) return;
    var items = lessonData.objectives.map(function (obj) {
        return '<li>' + obj + '</li>';
    }).join('');
    el.innerHTML =
        '<div class="objectives-title">\uD83C\uDFAF Learning Objectives</div>' +
        '<ul class="objectives-list">' + items + '</ul>';
}

function renderFoundation() {
    var el = document.getElementById('foundation');
    if (!el) return;
    var paras = lessonData.foundation.map(function (p) {
        return '<p>' + p + '</p>';
    }).join('');
    el.innerHTML = paras;
}

function renderDayByDay() {
    var el = document.getElementById('day-by-day');
    if (!el) return;
    var items = lessonData.timeline.map(function (item) {
        return (
            '<div class="timeline-item">' +
                '<div class="timeline-marker"></div>' +
                '<div class="timeline-label">' + item.label + '</div>' +
                '<div class="timeline-content">' +
                    '<h3>' + item.title + '</h3>' +
                    '<p>' + item.text + '</p>' +
                '</div>' +
            '</div>'
        );
    }).join('');
    el.innerHTML = '<div class="timeline">' + items + '</div>';
}

function renderSacrifices() {
    var el = document.getElementById('sacrifices');
    if (!el) return;
    var paras = lessonData.sacrifices.map(function (p) {
        return '<p>' + p + '</p>';
    }).join('');
    el.innerHTML = paras;
}

function renderWorship() {
    var el = document.getElementById('worship');
    if (!el) return;
    var paras = lessonData.worship.map(function (p) {
        return '<p>' + p + '</p>';
    }).join('');
    el.innerHTML = paras;
}

function renderImportance() {
    var el = document.getElementById('importance');
    if (!el) return;
    var cards = lessonData.importance.map(function (item) {
        return (
            '<div class="detail-card">' +
                '<h4>' + item.heading + '</h4>' +
                '<p>' + item.text + '</p>' +
            '</div>'
        );
    }).join('');
    el.innerHTML = '<div class="detail-grid">' + cards + '</div>';
}

function renderKeyTerms() {
    var el = document.getElementById('key-terms');
    if (!el) return;
    var chips = lessonData.keyTerms.map(function (term) {
        return '<span class="term-chip">' + term + '</span>';
    }).join('');
    el.innerHTML = '<div class="terms-grid">' + chips + '</div>';
}

function renderSourceQuote() {
    var el = document.getElementById('source-quote');
    if (!el) return;
    var q = lessonData.sourceQuote;
    el.innerHTML =
        '<div class="source-quote-block">' +
            '<p>' + q.text + '</p>' +
            '<span class="quote-attribution">\u2014 ' + q.attribution + '</span>' +
        '</div>';
}

function renderQuickFacts() {
    var el = document.getElementById('quick-facts');
    if (!el) return;
    var items = lessonData.quickFacts.map(function (fact) {
        return '<li><strong>' + fact.label + ':</strong> ' + fact.value + '</li>';
    }).join('');
    el.innerHTML = '<ul class="quick-facts-list">' + items + '</ul>';
}
