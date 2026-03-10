/* Late Republic Revision Hub - Shared JS */

// ===== TOPIC NAVIGATION =====
const topicPages = [
    { slug: 'index', short: 'Home', title: 'Overview' },
    { slug: 'republic', short: 'Republic', title: 'How It Worked' },
    { slug: 'gracchi', short: 'Gracchi', title: 'The Gracchi' },
    { slug: 'marius-sulla', short: 'Marius & Sulla', title: 'Marius and Sulla' },
    { slug: 'cato', short: 'Cato', title: 'Cato' },
    { slug: 'cicero-early', short: 'Cicero', title: 'Cicero: Early Career' },
    { slug: 'triumvirate', short: 'Triumvirate', title: 'First Triumvirate' },
    { slug: 'clodius-exile', short: 'Exile', title: 'Clodius & Exile' },
    { slug: 'fifties', short: 'Fifties', title: 'The Fifties' },
    { slug: 'civil-war', short: 'Civil War', title: 'Civil War' },
    { slug: 'dictatorship', short: 'Dictatorship', title: "Caesar's Dictatorship" },
    { slug: 'ides', short: 'Ides', title: 'Ides of March' },
    { slug: 'aftermath', short: 'Aftermath', title: 'Aftermath' },
    { slug: 'letters', short: 'Letters', title: "Cicero's Letters" },
    { slug: 'themes', short: 'Themes', title: 'Themes & Exam' }
];

function buildTopicNav() {
    const nav = document.getElementById('topic-nav');
    if (!nav) return;
    const currentFile = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    const inner = document.createElement('div');
    inner.className = 'topic-nav-inner';
    topicPages.forEach(p => {
        const a = document.createElement('a');
        a.href = p.slug === 'index' ? 'index.html' : p.slug + '.html';
        a.className = 'topic-nav-link';
        a.textContent = p.short;
        if (currentFile === p.slug) a.classList.add('active');
        inner.appendChild(a);
    });
    nav.appendChild(inner);
}

// ===== TABS =====
function initTabs() {
    const tabs = document.querySelectorAll('.page-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
            const panel = document.getElementById('tab-' + target);
            if (panel) panel.classList.add('active');
        });
    });
}

// ===== MODAL =====
function openModal(cardId) {
    const data = window.pageData;
    if (!data) return;
    let card = null;
    // Search all card arrays
    const arrays = ['overviewCards', 'eventCards', 'sourceCards', 'examQuestions', 'letterCards', 'themeCards', 'allLetters'];
    for (const key of arrays) {
        if (data[key]) {
            card = data[key].find(c => c.id === cardId);
            if (card) break;
        }
    }
    if (!card || !card.modal) return;

    const overlay = document.getElementById('modal-overlay');
    const modal = overlay.querySelector('.modal');
    const m = card.modal;

    // Set accent
    const accent = modal.querySelector('.modal-accent');
    accent.className = 'modal-accent accent-' + (card.accent || 'teal');

    // Set header
    modal.querySelector('.modal-title').textContent = card.modalTitle || card.title;
    const dateEl = modal.querySelector('.modal-date');
    if (card.date) {
        dateEl.textContent = card.date;
        dateEl.style.display = '';
    } else {
        dateEl.style.display = 'none';
    }

    // Build body
    const body = modal.querySelector('.modal-body');
    let html = '';

    // Sections
    if (m.sections) {
        m.sections.forEach(s => {
            html += '<div class="modal-section">';
            if (s.heading) html += '<h4>' + s.heading + '</h4>';
            html += s.body;
            html += '</div>';
        });
    }

    // Latin quotes
    if (m.latinQuotes && m.latinQuotes.length) {
        m.latinQuotes.forEach(q => {
            html += '<div class="latin-quote">';
            html += '<div class="latin-text">' + q.latin + '</div>';
            html += '<div class="latin-translation">' + q.translation + '</div>';
            if (q.analysis) html += '<div class="latin-analysis">' + q.analysis + '</div>';
            html += '</div>';
        });
    }

    // See Also cross-references
    if (m.seeAlso && m.seeAlso.length) {
        html += '<div class="see-also">';
        html += '<div class="see-also-label">See Also</div>';
        html += '<div class="see-also-links">';
        m.seeAlso.forEach(ref => {
            html += '<a href="' + ref.page + '.html" class="see-also-chip">';
            html += '<span class="see-also-arrow">→</span> ' + ref.label;
            html += '</a>';
        });
        html += '</div></div>';
    }

    // Exam tip
    if (m.examTip) {
        html += '<div class="exam-tip">';
        html += '<div class="exam-tip-label">Exam Tip</div>';
        html += m.examTip;
        html += '</div>';
    }

    body.innerHTML = html;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    if (overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// Close on overlay click
document.addEventListener('click', e => {
    if (e.target.classList.contains('modal-overlay') && e.target.classList.contains('open')) {
        closeModal();
    }
});

// Close on Escape
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeModal();
        closeInfoModal();
    }
});

// ===== RENDER CARDS =====
function renderEventCards(containerId, cards) {
    const container = document.getElementById(containerId);
    if (!container || !cards) return;
    container.innerHTML = cards.map(c => {
        if (c.type === 'letter') {
            return `<div class="letter-card" onclick="openModal('${c.id}')">
                <div class="letter-card-ref">${c.ref || c.title}</div>
                <div class="letter-card-meta">${c.date || ''} ${c.recipient ? '· To ' + c.recipient : ''}</div>
                <div class="letter-card-summary">${c.summary}</div>
                ${c.keyPhrase ? '<span class="letter-card-phrase">' + c.keyPhrase + '</span>' : ''}
            </div>`;
        }
        return `<div class="event-card" onclick="openModal('${c.id}')">
            <div class="event-card-accent accent-${c.accent || 'teal'}"></div>
            <div class="event-card-body">
                ${c.date ? '<div class="event-card-date">' + c.date + '</div>' : ''}
                <div class="event-card-title">${c.title}</div>
                <div class="event-card-summary">${c.summary}</div>
            </div>
            <div class="event-card-arrow">→</div>
        </div>`;
    }).join('');
}

function renderEventsList(containerId, cards) {
    const container = document.getElementById(containerId);
    if (!container || !cards) return;
    container.innerHTML = cards.map(c => `
        <div class="event-list-item" onclick="openModal('${c.id}')">
            <div class="event-list-date">${c.date || ''}</div>
            <div class="event-list-content">
                <div class="event-list-title">${c.title}</div>
                <div class="event-list-summary">${c.summary}</div>
            </div>
        </div>
    `).join('');
}

function renderSourceCards(containerId, cards) {
    const container = document.getElementById(containerId);
    if (!container || !cards) return;
    container.innerHTML = cards.map(c => `
        <div class="source-card" id="source-${c.id}">
            <div class="source-card-header" onclick="toggleSource('${c.id}')">
                <div>
                    <div class="source-card-title">${c.title}</div>
                    <div class="source-card-author">${c.author || ''}</div>
                </div>
                <span class="source-card-toggle">▾</span>
            </div>
            <div class="source-card-body">${c.content}</div>
        </div>
    `).join('');
}

function toggleSource(id) {
    const el = document.getElementById('source-' + id);
    if (el) el.classList.toggle('open');
}

function renderExamQuestions(containerId, questions) {
    const container = document.getElementById(containerId);
    if (!container || !questions) return;
    container.innerHTML = questions.map(q => `
        <div class="question-card" id="q-${q.id}">
            <div class="question-card-header" onclick="toggleQuestion('${q.id}')">
                <div class="question-text">${q.question}</div>
                <span class="question-type-chip">${q.type || '30-mark'}</span>
                <span class="question-card-toggle">▾</span>
            </div>
            <div class="question-card-body">
                <div class="argument-structure">
                    <h5>Suggested Argument Structure</h5>
                    <ul>${q.structure.map(s => '<li>' + s + '</li>').join('')}</ul>
                </div>
                <div class="key-evidence">
                    <h5>Key Evidence</h5>
                    <p>${q.evidence}</p>
                </div>
                ${q.historiography ? '<div class="key-evidence"><h5>Historiographical Angle</h5><p>' + q.historiography + '</p></div>' : ''}
                ${q.modelParagraph ? '<div class="model-paragraph"><h5>Model Paragraph</h5><div class="model-paragraph-text">' + q.modelParagraph + '</div></div>' : ''}
            </div>
        </div>
    `).join('');
}

function toggleQuestion(id) {
    const el = document.getElementById('q-' + id);
    if (el) el.classList.toggle('open');
}

// ===== RENDER PAGE =====
function renderPage() {
    const data = window.pageData;
    if (!data) return;

    // Overview tab cards
    if (data.overviewCards) renderEventCards('overview-cards', data.overviewCards);

    // Events tab
    const eventCards = data.eventCards || data.overviewCards;
    if (eventCards) renderEventsList('events-list', eventCards);

    // Sources tab
    if (data.sourceCards) renderSourceCards('sources-list', data.sourceCards);

    // Exam tab
    if (data.examQuestions) renderExamQuestions('exam-list', data.examQuestions);
}

// ===== INFO MODAL =====
function showInfoModal() {
    const m = document.getElementById('info-modal');
    if (m) m.classList.add('open');
}

function closeInfoModal() {
    const m = document.getElementById('info-modal');
    if (m) m.classList.remove('open');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    buildTopicNav();
    initTabs();
    renderPage();
});
