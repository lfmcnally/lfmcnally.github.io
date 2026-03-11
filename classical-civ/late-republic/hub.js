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

// ===== VIEW TOGGLE (grid ↔ timeline) =====
function initViewToggle() {
    const toggle = document.getElementById('view-toggle');
    if (!toggle) return;
    const gridBtn = toggle.querySelector('[data-view="grid"]');
    const listBtn = toggle.querySelector('[data-view="list"]');
    const gridContainer = document.getElementById('overview-cards');
    const listContainer = document.getElementById('overview-list');
    if (!gridBtn || !listBtn || !gridContainer || !listContainer) return;

    function setView(mode) {
        if (mode === 'list') {
            gridContainer.style.display = 'none';
            listContainer.style.display = '';
            gridBtn.classList.remove('active');
            listBtn.classList.add('active');
        } else {
            gridContainer.style.display = '';
            listContainer.style.display = 'none';
            gridBtn.classList.add('active');
            listBtn.classList.remove('active');
        }
        localStorage.setItem('hub-view-mode', mode);
    }

    gridBtn.addEventListener('click', () => setView('grid'));
    listBtn.addEventListener('click', () => setView('list'));

    // Restore preference
    const saved = localStorage.getItem('hub-view-mode');
    if (saved === 'list') setView('list');
}

// ===== RENDER PAGE =====
function renderPage() {
    const data = window.pageData;
    if (!data) return;

    // Overview tab - grid view
    if (data.overviewCards) renderEventCards('overview-cards', data.overviewCards);

    // Overview tab - list/timeline view
    const eventCards = data.eventCards || data.overviewCards;
    if (eventCards) {
        renderEventsList('overview-list', eventCards);
        const listContainer = document.getElementById('overview-list');
        if (listContainer) listContainer.style.display = 'none';
    }

    // Analysis components (after overview cards, within overview tab)
    if (data.argumentGrids) {
        data.argumentGrids.forEach((grid, i) => {
            const divId = 'argument-grid-' + i;
            let div = document.getElementById(divId);
            if (!div) {
                div = document.createElement('div');
                div.id = divId;
                const overviewTab = document.getElementById('tab-overview');
                if (overviewTab) overviewTab.appendChild(div);
            }
            renderArgumentGrid(divId, grid);
        });
    }

    if (data.keyPoints) {
        let kpDiv = document.getElementById('key-points-container');
        if (!kpDiv) {
            kpDiv = document.createElement('div');
            kpDiv.id = 'key-points-container';
            const overviewTab = document.getElementById('tab-overview');
            if (overviewTab) overviewTab.appendChild(kpDiv);
        }
        renderKeyPointBoxes('key-points-container', data.keyPoints);
    }

    if (data.analysisBoxes) {
        data.analysisBoxes.forEach((box, i) => {
            const divId = 'analysis-box-' + i;
            let div = document.getElementById(divId);
            if (!div) {
                div = document.createElement('div');
                div.id = divId;
                const overviewTab = document.getElementById('tab-overview');
                if (overviewTab) overviewTab.appendChild(div);
            }
            renderAnalysisBox(divId, box);
        });
    }

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

// ===== STICKY HEADER SHADOW =====
function initStickyHeader() {
    const header = document.querySelector('.page-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
}

// ===== ARGUMENT GRID =====
function renderArgumentGrid(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container || !data) return;
    container.innerHTML = `
        <div class="argument-grid">
            <div class="argument-grid-question">${data.question}</div>
            <div class="argument-grid-columns">
                <div class="argument-grid-col argument-grid-for">
                    <div class="argument-grid-col-header argument-grid-for-header">For</div>
                    <ul class="argument-grid-list">
                        ${data.forPoints.map(p => '<li>' + p + '</li>').join('')}
                    </ul>
                </div>
                <div class="argument-grid-col argument-grid-against">
                    <div class="argument-grid-col-header argument-grid-against-header">Against</div>
                    <ul class="argument-grid-list">
                        ${data.againstPoints.map(p => '<li>' + p + '</li>').join('')}
                    </ul>
                </div>
            </div>
            <div class="argument-grid-verdict">
                <div class="argument-grid-verdict-label">Verdict</div>
                <p>${data.verdict}</p>
            </div>
        </div>
    `;
}

// ===== KEY POINT BOXES =====
function renderKeyPointBoxes(containerId, points) {
    const container = document.getElementById(containerId);
    if (!container || !points) return;
    container.innerHTML = points.map(p => `
        <div class="key-point-box key-point-${p.accent || 'blue'}">
            <div class="key-point-label">${p.label}</div>
            <p class="key-point-text">${p.text}</p>
        </div>
    `).join('');
}

// ===== ANALYSIS BOX =====
function renderAnalysisBox(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container || !data) return;
    container.innerHTML = `
        <div class="analysis-box">
            <div class="analysis-box-title">${data.title || 'Why This Matters'}</div>
            <div class="analysis-box-sections">
                <div class="analysis-box-section analysis-box-short-term">
                    <div class="analysis-box-section-label">Short-term</div>
                    <p>${data.shortTerm}</p>
                </div>
                <div class="analysis-box-section analysis-box-long-term">
                    <div class="analysis-box-section-label">Long-term</div>
                    <p>${data.longTerm}</p>
                </div>
                <div class="analysis-box-section analysis-box-exam">
                    <div class="analysis-box-section-label">Exam Relevance</div>
                    <p>${data.examRelevance}</p>
                </div>
            </div>
        </div>
    `;
}

// ===== SEARCH =====
function initSearch() {
    const input = document.getElementById('hub-search-input');
    const clearBtn = document.getElementById('hub-search-clear');
    if (!input || !clearBtn) return;

    input.addEventListener('input', () => {
        const q = input.value.toLowerCase().trim();
        clearBtn.style.display = q ? '' : 'none';
        const cards = document.querySelectorAll('.hub-topic-card');
        const sections = document.querySelectorAll('.hub-topics > .hub-section-title');
        const grids = document.querySelectorAll('.hub-topics-grid');

        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.classList.toggle('search-hidden', q && !text.includes(q));
        });

        // Hide section titles if all their cards are hidden
        grids.forEach((grid, i) => {
            const visibleCards = grid.querySelectorAll('.hub-topic-card:not(.search-hidden)');
            if (sections[i]) sections[i].classList.toggle('search-hidden', q && visibleCards.length === 0);
        });
    });

    clearBtn.addEventListener('click', () => {
        input.value = '';
        input.dispatchEvent(new Event('input'));
        input.focus();
    });
}

// ===== TIMELINE =====
const timelineEvents = [
    { year: 133, label: 'Tiberius Gracchus', page: 'gracchi', color: 'var(--red)' },
    { year: 121, label: 'Death of Gaius Gracchus', page: 'gracchi', color: 'var(--red)' },
    { year: 107, label: "Marius's army reforms", page: 'marius-sulla', color: 'var(--red)' },
    { year: 88, label: 'Sulla marches on Rome', page: 'marius-sulla', color: 'var(--purple)' },
    { year: 82, label: "Sulla's proscriptions", page: 'marius-sulla', color: 'var(--purple)' },
    { year: 63, label: 'Catilinarian conspiracy', page: 'cicero-early', color: 'var(--blue)' },
    { year: 60, label: 'First Triumvirate formed', page: 'triumvirate', color: 'var(--red)' },
    { year: 58, label: "Cicero's exile", page: 'clodius-exile', color: 'var(--yellow)' },
    { year: 56, label: 'Conference of Luca', page: 'fifties', color: 'var(--purple)' },
    { year: 53, label: 'Death of Crassus', page: 'fifties', color: 'var(--teal)' },
    { year: 49, label: 'Caesar crosses Rubicon', page: 'civil-war', color: 'var(--red)' },
    { year: 48, label: 'Battle of Pharsalus', page: 'civil-war', color: 'var(--red)' },
    { year: 44, label: 'Ides of March', page: 'ides', color: 'var(--red)' },
    { year: 43, label: "Cicero's death", page: 'aftermath', color: 'var(--blue)' }
];

function initTimeline() {
    const line = document.getElementById('hub-timeline-line');
    if (!line) return;
    const minYear = 133, maxYear = 43;
    const range = minYear - maxYear;

    line.innerHTML = timelineEvents.map(e => {
        const pct = ((minYear - e.year) / range) * 100;
        return `<a href="${e.page}.html" class="timeline-marker" style="left:${pct}%">
            <div class="timeline-tooltip">${e.label}</div>
            <div class="timeline-dot" style="background:${e.color}"></div>
            <div class="timeline-year">${e.year} BC</div>
        </a>`;
    }).join('');
}

function toggleTimelineCollapse() {
    document.getElementById('hub-timeline').classList.toggle('collapsed');
}

// ===== KEY FIGURES =====
const keyFigures = [
    { id: 'cicero', name: 'Cicero', initials: 'MC', color: 'var(--blue)', bio: 'Novus homo, orator, consul 63 BC. Advocate of concordia ordinum and defender of the Republic through words. Executed without trial by the Second Triumvirate in 43 BC.', pages: ['cicero-early', 'clodius-exile', 'fifties', 'civil-war', 'dictatorship', 'ides', 'aftermath', 'letters'] },
    { id: 'caesar', name: 'Caesar', initials: 'GC', color: 'var(--red)', bio: 'Military genius, consul 59 BC, conqueror of Gaul, dictator perpetuo. Crossed the Rubicon in 49 BC. Assassinated on the Ides of March, 44 BC.', pages: ['triumvirate', 'fifties', 'civil-war', 'dictatorship', 'ides'] },
    { id: 'pompey', name: 'Pompey', initials: 'GP', color: 'var(--purple)', bio: 'Rome\'s greatest general before Caesar. Sole consul 52 BC. Drifted from triumvirate ally to Senate\'s champion. Defeated at Pharsalus, murdered in Egypt 48 BC.', pages: ['triumvirate', 'clodius-exile', 'fifties', 'civil-war'] },
    { id: 'cato', name: 'Cato', initials: 'CT', color: 'var(--green)', bio: 'Stoic, defender of mos maiorum, unyielding Republican. His inflexibility may have hastened the crisis he sought to prevent. Suicide at Utica, 46 BC.', pages: ['cato', 'fifties', 'civil-war'] },
    { id: 'clodius', name: 'Clodius', initials: 'PC', color: 'var(--yellow)', bio: 'Tribune 58 BC. Weaponised popular politics, exiled Cicero, organised the urban poor. Killed by Milo\'s gang in 52 BC.', pages: ['clodius-exile', 'fifties'] },
    { id: 'gracchi', name: 'Gracchi', initials: 'TG', color: 'var(--red)', bio: 'Tiberius (tribune 133 BC) and Gaius (tribune 123-122 BC). Land reform, grain subsidies, and the first political murders in Republican history.', pages: ['gracchi'] },
    { id: 'marius', name: 'Marius', initials: 'GM', color: 'var(--red)', bio: 'Seven-time consul, military reformer. Recruited landless poor into professional armies loyal to their commander — the template for every subsequent warlord.', pages: ['marius-sulla'] },
    { id: 'sulla', name: 'Sulla', initials: 'LS', color: 'var(--purple)', bio: 'First man to march legions on Rome (88 BC). Dictator, proscriber, constitutional reformer. Resigned and retired — the only one who did.', pages: ['marius-sulla'] }
];

function initFigures() {
    const grid = document.getElementById('hub-figures-grid');
    const bioPanel = document.getElementById('hub-figure-bio');
    if (!grid || !bioPanel) return;

    grid.innerHTML = keyFigures.map(f => `
        <div class="hub-figure-item" data-figure="${f.id}" onclick="selectFigure('${f.id}')">
            <div class="hub-figure-avatar" style="background:${f.color}">${f.initials}</div>
            <div class="hub-figure-name">${f.name}</div>
        </div>
    `).join('');
}

let activeFigure = null;
function selectFigure(id) {
    const fig = keyFigures.find(f => f.id === id);
    if (!fig) return;
    const bioPanel = document.getElementById('hub-figure-bio');
    const items = document.querySelectorAll('.hub-figure-item');
    const cards = document.querySelectorAll('.hub-topic-card');

    if (activeFigure === id) {
        // Deselect
        activeFigure = null;
        bioPanel.classList.remove('open');
        items.forEach(i => i.classList.remove('active'));
        cards.forEach(c => c.classList.remove('figure-highlight'));
        return;
    }

    activeFigure = id;
    items.forEach(i => i.classList.toggle('active', i.dataset.figure === id));

    bioPanel.innerHTML = `<div class="hub-figure-bio-inner">
        <div class="hub-figure-bio-avatar" style="background:${fig.color}">${fig.initials}</div>
        <div class="hub-figure-bio-text">
            <div class="hub-figure-bio-name">${fig.name}</div>
            <div class="hub-figure-bio-desc">${fig.bio}</div>
        </div>
    </div>`;
    bioPanel.classList.add('open');

    // Highlight relevant topic cards
    cards.forEach(card => {
        const href = card.getAttribute('href') || '';
        const slug = href.replace('.html', '');
        card.classList.toggle('figure-highlight', fig.pages.includes(slug));
    });
}

function toggleFiguresCollapse() {
    document.getElementById('hub-figures').classList.toggle('collapsed');
}

// ===== PROGRESS TRACKER =====
function initProgress() {
    // Mark current page as visited
    const currentFile = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    const storageKey = 'lr-visited-pages';
    let visited = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (!visited.includes(currentFile)) {
        visited.push(currentFile);
        localStorage.setItem(storageKey, JSON.stringify(visited));
    }

    // Update progress bar on hub
    const fill = document.getElementById('hub-progress-fill');
    const label = document.getElementById('hub-progress-label');
    if (!fill || !label) return;

    const pageCount = 14; // total topic pages (excluding index)
    const pageSlugs = topicPages.filter(p => p.slug !== 'index').map(p => p.slug);
    const visitedCount = pageSlugs.filter(s => visited.includes(s)).length;
    fill.style.width = ((visitedCount / pageCount) * 100) + '%';
    label.textContent = visitedCount + ' of ' + pageCount + ' pages visited';

    // Add visited badges to cards
    document.querySelectorAll('.hub-topic-card').forEach(card => {
        const href = card.getAttribute('href') || '';
        const slug = href.replace('.html', '');
        if (visited.includes(slug)) {
            card.classList.add('visited');
        }
        // Add badge element if not present
        if (!card.querySelector('.hub-visited-badge')) {
            const badge = document.createElement('span');
            badge.className = 'hub-visited-badge';
            badge.textContent = '✓';
            card.appendChild(badge);
        }
    });
}

// ===== CONNECTIONS =====
const connections = [
    { from: 'Gracchi', fromPage: 'gracchi', fromColor: 'red', to: 'Marius & Sulla', toPage: 'marius-sulla', toColor: 'red', reason: 'Landless citizens recruited into Marius\'s armies' },
    { from: 'Gracchi', fromPage: 'gracchi', fromColor: 'red', to: 'Clodius & Exile', toPage: 'clodius-exile', toColor: 'yellow', reason: 'Tribunate weaponised as tool of political aggression' },
    { from: 'Gracchi', fromPage: 'gracchi', fromColor: 'red', to: 'Republic', toPage: 'republic', toColor: 'teal', reason: 'SCU creates precedent for extrajudicial killing' },
    { from: 'Marius & Sulla', fromPage: 'marius-sulla', fromColor: 'red', to: 'Civil War', toPage: 'civil-war', toColor: 'red', reason: 'First march on Rome becomes template for Caesar' },
    { from: 'Marius & Sulla', fromPage: 'marius-sulla', fromColor: 'red', to: 'Aftermath', toPage: 'aftermath', toColor: 'blue', reason: 'Proscriptions repeated by Second Triumvirate' },
    { from: 'Cicero', fromPage: 'cicero-early', fromColor: 'blue', to: 'Clodius & Exile', toPage: 'clodius-exile', toColor: 'yellow', reason: 'Catilinarian executions used to exile Cicero' },
    { from: 'Cato', fromPage: 'cato', fromColor: 'green', to: 'Civil War', toPage: 'civil-war', toColor: 'red', reason: 'Inflexibility forces Caesar to choose between prosecution and war' },
    { from: 'Triumvirate', fromPage: 'triumvirate', fromColor: 'red', to: 'Fifties', toPage: 'fifties', toColor: 'purple', reason: 'Private alliance dictates state policy, renewed at Luca' },
    { from: 'Triumvirate', fromPage: 'triumvirate', fromColor: 'red', to: 'Civil War', toPage: 'civil-war', toColor: 'red', reason: 'Crassus\'s death removes stabilising third force' },
    { from: 'Dictatorship', fromPage: 'dictatorship', fromColor: 'red', to: 'Ides', toPage: 'ides', toColor: 'red', reason: 'Dictator perpetuo provokes tyrannicide conspiracy' },
    { from: 'Ides', fromPage: 'ides', fromColor: 'red', to: 'Aftermath', toPage: 'aftermath', toColor: 'blue', reason: 'Deed without a plan leads to Second Triumvirate' },
    { from: 'Cicero', fromPage: 'cicero-early', fromColor: 'blue', to: 'Aftermath', toPage: 'aftermath', toColor: 'blue', reason: 'Philippics against Antony become his death warrant' }
];

function initConnections() {
    const canvas = document.getElementById('hub-connections-canvas');
    if (!canvas) return;

    canvas.innerHTML = '<div class="connections-grid">' + connections.map(c => `
        <div class="connection-row">
            <a href="${c.fromPage}.html" class="connection-from conn-${c.fromColor}">${c.from}</a>
            <span class="connection-arrow">→</span>
            <a href="${c.toPage}.html" class="connection-to conn-${c.toColor}">${c.to}</a>
            <span class="connection-reason">${c.reason}</span>
        </div>
    `).join('') + '</div>';
}

// ===== VOCAB CHIP TOOLTIPS =====
function initVocabChips() {
    const definitions = {
        'ager publicus': 'Public land owned by the Roman state, often illegally occupied by wealthy senators.',
        'lex Sempronia agraria': 'Tiberius Gracchus\'s land redistribution law of 133 BC.',
        'lex frumentaria': 'Grain law — Gaius Gracchus\'s subsidised grain distribution to citizens.',
        'senatus consultum ultimum': '"Ultimate decree of the Senate" — emergency power authorising consuls to act against citizens.',
        'tribunicia potestas': 'The power of the tribune — including veto, legislation, and sacrosanctity.',
        'sacrosanctitas': 'Sacred inviolability — the religious protection of a tribune\'s person.',
        'optimates': '"The best men" — senators who defended traditional aristocratic authority.',
        'populares': '"Men of the people" — politicians who appealed directly to popular assemblies.',
        'mos maiorum': '"The custom of the ancestors" — Rome\'s unwritten constitution of tradition and precedent.',
        'dignitas': 'Honour, reputation, political standing — the core value of Roman aristocratic competition.',
        'auctoritas': 'Authority, influence — the Senate\'s non-legal power derived from prestige.',
        'concordia ordinum': '"Harmony of the orders" — Cicero\'s ideal of cooperation between Senate and equestrians.',
        'novus homo': '"New man" — first in a family to reach the consulship, like Cicero.',
        'cursus honorum': '"Course of honours" — the fixed sequence of magistracies: quaestor → aedile → praetor → consul.',
        'imperium': 'Supreme executive authority held by consuls, praetors, and dictators.',
        'dictator perpetuo': '"Dictator in perpetuity" — Caesar\'s unprecedented permanent dictatorship.',
        'clementia': 'Mercy, clemency — Caesar\'s policy of pardoning defeated enemies.',
        'res publica': '"The public thing" — the Roman state; the Republic as a concept.',
        'proscriptio': 'Proscription — published lists of enemies to be killed with bounties on their heads.',
        'libertas': 'Liberty, political freedom — the central value the Republic claimed to protect.'
    };

    document.querySelectorAll('.vocab-chip').forEach(chip => {
        const term = chip.textContent.trim().toLowerCase();
        const def = definitions[term];
        if (!def) return;

        chip.style.cursor = 'help';
        chip.setAttribute('title', def);

        // Create tooltip on hover
        chip.addEventListener('mouseenter', function(e) {
            let tip = document.getElementById('vocab-tooltip');
            if (!tip) {
                tip = document.createElement('div');
                tip.id = 'vocab-tooltip';
                tip.className = 'vocab-tooltip';
                document.body.appendChild(tip);
            }
            tip.textContent = def;
            tip.style.display = 'block';
            const rect = chip.getBoundingClientRect();
            tip.style.top = (rect.bottom + window.scrollY + 8) + 'px';
            tip.style.left = Math.max(8, Math.min(rect.left + rect.width / 2 - 150, window.innerWidth - 308)) + 'px';
        });

        chip.addEventListener('mouseleave', function() {
            const tip = document.getElementById('vocab-tooltip');
            if (tip) tip.style.display = 'none';
        });
    });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    buildTopicNav();
    initTabs();
    renderPage();
    initViewToggle();
    initStickyHeader();
    initProgress();
    initVocabChips();

    // Hub-only features
    const currentFile = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    if (currentFile === 'index') {
        initSearch();
        initTimeline();
        initFigures();
        initConnections();
    }
});
