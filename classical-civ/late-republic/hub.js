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
    if (!input) return;

    input.addEventListener('input', () => {
        const query = input.value.toLowerCase().trim();
        clearBtn.style.display = query ? '' : 'none';

        const cards = document.querySelectorAll('.hub-topic-card');
        cards.forEach(card => {
            const title = (card.querySelector('.hub-topic-title') || {}).textContent || '';
            const desc = (card.querySelector('.hub-topic-desc') || {}).textContent || '';
            const chips = (card.querySelector('.hub-topic-letters') || {}).textContent || '';
            const text = (title + ' ' + desc + ' ' + chips).toLowerCase();
            card.classList.toggle('search-hidden', query !== '' && !text.includes(query));
        });

        // Hide section titles if all their cards are hidden
        document.querySelectorAll('.hub-topics-grid').forEach(grid => {
            const visibleCards = grid.querySelectorAll('.hub-topic-card:not(.search-hidden)');
            const sectionTitle = grid.previousElementSibling;
            if (sectionTitle && sectionTitle.classList.contains('hub-section-title')) {
                sectionTitle.classList.toggle('search-hidden', visibleCards.length === 0 && query !== '');
            }
        });
    });

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            input.value = '';
            input.dispatchEvent(new Event('input'));
            input.focus();
        });
    }
}

// ===== TIMELINE =====
const timelineEvents = [
    { year: 133, label: 'Gracchi begin land reform', color: 'var(--red)', page: 'gracchi' },
    { year: 107, label: 'Marius reforms the army', color: 'var(--red)', page: 'marius-sulla' },
    { year: 88, label: 'Sulla marches on Rome', color: 'var(--purple)', page: 'marius-sulla' },
    { year: 63, label: 'Catilinarian conspiracy', color: 'var(--blue)', page: 'cicero-early' },
    { year: 60, label: 'First Triumvirate formed', color: 'var(--red)', page: 'triumvirate' },
    { year: 58, label: 'Cicero exiled by Clodius', color: 'var(--yellow)', page: 'clodius-exile' },
    { year: 56, label: 'Conference at Luca', color: 'var(--purple)', page: 'fifties' },
    { year: 53, label: 'Crassus dies at Carrhae', color: 'var(--red)', page: 'fifties' },
    { year: 49, label: 'Caesar crosses the Rubicon', color: 'var(--red)', page: 'civil-war' },
    { year: 44, label: 'Ides of March', color: 'var(--red)', page: 'ides' },
    { year: 43, label: 'Cicero killed (proscriptions)', color: 'var(--blue)', page: 'aftermath' }
];

function initTimeline() {
    const line = document.getElementById('hub-timeline-line');
    if (!line) return;

    const minYear = 133;
    const maxYear = 43;
    const range = minYear - maxYear; // 90 years

    timelineEvents.forEach(evt => {
        const pct = ((minYear - evt.year) / range) * 100;
        const marker = document.createElement('div');
        marker.className = 'timeline-marker';
        marker.style.left = pct + '%';

        marker.innerHTML = `
            <div class="timeline-tooltip">${evt.label} (${evt.year} BC)</div>
            <div class="timeline-dot" style="background:${evt.color};"></div>
            <div class="timeline-year">${evt.year} BC</div>
        `;

        marker.addEventListener('click', () => {
            window.location.href = evt.page + '.html';
        });

        line.appendChild(marker);
    });
}

function toggleTimelineCollapse() {
    const section = document.getElementById('hub-timeline');
    if (section) section.classList.toggle('collapsed');
}

// ===== KEY FIGURES =====
const keyFigures = [
    { id: 'cicero', initials: 'CI', name: 'Cicero', color: 'var(--blue)', desc: 'Novus homo, Rome\'s greatest orator. Advocate of concordia ordinum; consul 63 BC who crushed the Catilinarian conspiracy. Exiled, recalled, and ultimately murdered in the proscriptions of 43 BC.', pages: ['cicero-early', 'clodius-exile', 'triumvirate', 'fifties', 'civil-war', 'aftermath', 'letters'] },
    { id: 'caesar', initials: 'CA', name: 'Caesar', color: 'var(--red)', desc: 'Military genius and popularis politician. Conquered Gaul, crossed the Rubicon, became dictator perpetuo. Assassinated on the Ides of March 44 BC.', pages: ['triumvirate', 'fifties', 'civil-war', 'dictatorship', 'ides'] },
    { id: 'pompey', initials: 'PO', name: 'Pompey', color: 'var(--purple)', desc: 'Magnus - outstanding military commander. Sole consul 52 BC. Initially allied with Caesar in the Triumvirate, then sided with the Senate. Defeated at Pharsalus and killed in Egypt.', pages: ['triumvirate', 'fifties', 'civil-war'] },
    { id: 'cato', initials: 'CT', name: 'Cato', color: 'var(--green)', desc: 'Stoic philosopher and defender of mos maiorum. Obstructed Caesar and the triumvirs. Chose suicide at Utica rather than accept Caesar\'s clementia.', pages: ['cato', 'civil-war', 'dictatorship'] },
    { id: 'clodius', initials: 'CL', name: 'Clodius', color: 'var(--yellow)', desc: 'Tribune of the plebs 58 BC. Weaponised popular politics and the tribunate. Engineered Cicero\'s exile. Killed by Milo\'s gang in 52 BC.', pages: ['clodius-exile', 'fifties'] },
    { id: 'gracchi', initials: 'GR', name: 'The Gracchi', color: 'var(--red)', desc: 'Tiberius (tribune 133 BC) and Gaius (tribune 123-122 BC). Pushed land reform and challenged senatorial power. Both murdered - setting the precedent for political violence.', pages: ['gracchi', 'republic'] },
    { id: 'marius', initials: 'MA', name: 'Marius', color: 'var(--red)', desc: 'Seven-time consul. Reformed the army by recruiting capite censi (landless poor), creating soldiers loyal to their commander rather than the state.', pages: ['marius-sulla'] },
    { id: 'sulla', initials: 'SU', name: 'Sulla', color: 'var(--purple)', desc: 'First man to march a Roman army on Rome (88 BC). As dictator, he carried out proscriptions and reformed the constitution - then retired. Template for Caesar.', pages: ['marius-sulla'] }
];

function initFigures() {
    const grid = document.getElementById('hub-figures-grid');
    const bioPanel = document.getElementById('hub-figure-bio');
    if (!grid) return;

    grid.innerHTML = keyFigures.map(f => `
        <div class="hub-figure-item" data-figure="${f.id}" onclick="selectFigure('${f.id}')">
            <div class="hub-figure-avatar" style="background:${f.color};">${f.initials}</div>
            <div class="hub-figure-name">${f.name}</div>
        </div>
    `).join('');
}

function selectFigure(figureId) {
    const figure = keyFigures.find(f => f.id === figureId);
    if (!figure) return;

    // Toggle active state
    const items = document.querySelectorAll('.hub-figure-item');
    const bioPanel = document.getElementById('hub-figure-bio');
    const clickedItem = document.querySelector(`.hub-figure-item[data-figure="${figureId}"]`);
    const wasActive = clickedItem && clickedItem.classList.contains('active');

    items.forEach(i => i.classList.remove('active'));

    // Clear all highlights
    document.querySelectorAll('.hub-topic-card').forEach(c => c.classList.remove('figure-highlight'));

    if (wasActive) {
        // Deselect
        if (bioPanel) {
            bioPanel.classList.remove('open');
            bioPanel.innerHTML = '';
        }
        return;
    }

    clickedItem.classList.add('active');

    // Show bio
    if (bioPanel) {
        bioPanel.innerHTML = `
            <div class="hub-figure-bio-inner">
                <div class="hub-figure-bio-avatar" style="background:${figure.color};">${figure.initials}</div>
                <div class="hub-figure-bio-text">
                    <div class="hub-figure-bio-name">${figure.name}</div>
                    <div class="hub-figure-bio-desc">${figure.desc}</div>
                </div>
            </div>
        `;
        bioPanel.classList.add('open');
    }

    // Highlight related cards
    document.querySelectorAll('.hub-topic-card').forEach(card => {
        const href = card.getAttribute('href') || '';
        const slug = href.replace('.html', '');
        if (figure.pages.includes(slug)) {
            card.classList.add('figure-highlight');
        }
    });
}

function toggleFiguresCollapse() {
    const section = document.getElementById('hub-figures');
    if (section) section.classList.toggle('collapsed');
}

// ===== PROGRESS TRACKER =====
function initProgress() {
    const STORAGE_KEY = 'classicalia-visited-pages';
    const currentFile = window.location.pathname.split('/').pop().replace('.html', '') || 'index';

    // Get visited pages
    let visited = [];
    try {
        visited = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (e) {
        visited = [];
    }

    // Mark current page as visited
    if (!visited.includes(currentFile)) {
        visited.push(currentFile);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(visited));
    }

    // Update progress bar (only on hub page)
    const fill = document.getElementById('hub-progress-fill');
    const label = document.getElementById('hub-progress-label');
    if (fill && label) {
        // Count only topic pages (not index)
        const topicSlugs = topicPages.filter(p => p.slug !== 'index').map(p => p.slug);
        const visitedTopics = topicSlugs.filter(s => visited.includes(s));
        const count = visitedTopics.length;
        const total = topicSlugs.length;
        const pct = total > 0 ? (count / total) * 100 : 0;

        fill.style.width = pct + '%';
        label.textContent = count + ' of ' + total + ' pages visited';
    }

    // Add visited badges to hub cards
    document.querySelectorAll('.hub-topic-card').forEach(card => {
        const href = card.getAttribute('href') || '';
        const slug = href.replace('.html', '');
        if (visited.includes(slug)) {
            card.classList.add('visited');
        }
        // Add badge element if not already present
        if (!card.querySelector('.hub-visited-badge')) {
            const badge = document.createElement('span');
            badge.className = 'hub-visited-badge';
            badge.textContent = '\u2713';
            badge.title = 'Visited';
            card.appendChild(badge);
        }
    });
}

// ===== CONNECTIONS MAP =====
const connectionData = [
    { from: 'Gracchi', fromPage: 'gracchi', fromColor: 'conn-red', to: 'Marius & Sulla', toPage: 'marius-sulla', toColor: 'conn-red', reason: 'Landless recruits created by agrarian crisis' },
    { from: 'Gracchi', fromPage: 'gracchi', fromColor: 'conn-red', to: 'Republic', toPage: 'republic', toColor: 'conn-teal', reason: 'Challenged cursus honorum and senatorial control' },
    { from: 'Gracchi', fromPage: 'gracchi', fromColor: 'conn-red', to: 'Clodius & Exile', toPage: 'clodius-exile', toColor: 'conn-yellow', reason: 'Tribunate weaponised as political tool' },
    { from: 'Gracchi', fromPage: 'gracchi', fromColor: 'conn-red', to: 'Dictatorship', toPage: 'dictatorship', toColor: 'conn-red', reason: 'Caesar later removes tribunes\' power' },
    { from: 'Cato', fromPage: 'cato', fromColor: 'conn-green', to: 'Civil War', toPage: 'civil-war', toColor: 'conn-red', reason: 'Principled resistance forced Caesar\'s hand' },
    { from: 'Cato', fromPage: 'cato', fromColor: 'conn-green', to: 'Dictatorship', toPage: 'dictatorship', toColor: 'conn-red', reason: 'Suicide at Utica rather than accept clementia' },
    { from: 'Triumvirate', fromPage: 'triumvirate', fromColor: 'conn-red', to: 'The Fifties', toPage: 'fifties', toColor: 'conn-purple', reason: 'Triumvirate fractures through the 50s' },
    { from: 'Triumvirate', fromPage: 'triumvirate', fromColor: 'conn-red', to: 'Civil War', toPage: 'civil-war', toColor: 'conn-red', reason: 'Collapse of power-sharing leads to war' },
    { from: 'Cicero: Early', fromPage: 'cicero-early', fromColor: 'conn-blue', to: 'Clodius & Exile', toPage: 'clodius-exile', toColor: 'conn-yellow', reason: 'Catiline executions used against Cicero' },
    { from: 'Ides of March', fromPage: 'ides', fromColor: 'conn-red', to: 'Aftermath', toPage: 'aftermath', toColor: 'conn-blue', reason: 'Assassination without a plan for what followed' }
];

function initConnections() {
    const canvas = document.getElementById('hub-connections-canvas');
    if (!canvas) return;

    let html = '<div class="connections-grid">';
    connectionData.forEach(conn => {
        html += `
            <div class="connection-row">
                <a href="${conn.fromPage}.html" class="connection-from ${conn.fromColor}">${conn.from}</a>
                <span class="connection-arrow">&rarr;</span>
                <a href="${conn.toPage}.html" class="connection-to ${conn.toColor}">${conn.to}</a>
                <span class="connection-reason">${conn.reason}</span>
            </div>
        `;
    });
    html += '</div>';
    canvas.innerHTML = html;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    buildTopicNav();
    initTabs();
    renderPage();
    initViewToggle();
    initStickyHeader();
    initSearch();
    initTimeline();
    initFigures();
    initProgress();
    initConnections();
});
