// Timeline Events Data
const timelineEventsData = [
    {
        id: 'tiberius-election',
        date: '133 BC (Early)',
        title: 'Tiberius Elected Tribune',
        description: 'Tiberius Gracchus wins tribunician election and proposes radical land reform',
        content: `
            <p><span class="key-figure" data-info="tiberius-gracchus">Tiberius Sempronius Gracchus</span> came from a distinguished family—his father had been consul and censor, his mother <span class="key-figure" data-info="cornelia">Cornelia</span> was daughter of <span class="key-figure" data-info="scipio-africanus">Scipio Africanus</span>. Yet he chose to champion the dispossessed against his own class.</p>
            
            <p>His military service in Spain had exposed him to the plight of Italian farmers losing their land. When he returned to Rome, he saw the consequences: impoverished citizens flooding into the city with no prospects.</p>
            
            <p>Upon election as tribune of the plebs in 133 BC, Tiberius immediately proposed the <span class="key-term" data-definition="lex-sempronia-agraria">Lex Sempronia Agraria</span>—a law to enforce existing limits on public land occupation (500 <em>iugera</em> per person) and redistribute excess land to landless citizens.</p>
            
            <div class="primary-source">
                The wild beasts have their dens, but the men who fight for Italy have nothing but air and light.
                <div class="source-citation">— Tiberius Gracchus, as quoted by Plutarch</div>
            </div>
        `
    },
    {
        id: 'plebeian-assembly',
        date: '133 BC (Spring)',
        title: 'Bill to Plebeian Assembly',
        description: 'Tiberius bypasses Senate, taking proposal directly to the people',
        content: `
            <p>Rather than working through the Senate as tradition demanded, Tiberius took his bill directly to the <span class="key-term" data-definition="plebeian-assembly">Plebeian Assembly</span>—the democratic body where all plebeian citizens could vote.</p>
            
            <p>This was constitutionally legal but politically explosive. The Senate expected to be consulted on major legislation, and senators viewed Tiberius's approach as an attack on their authority.</p>
            
            <p>Tiberius argued that the people, not the Senate, were sovereign. If the assembly approved his law, it would be binding on all Romans regardless of senatorial opposition.</p>
            
            <p>This established the <span class="key-concept" data-concept="popularis-methods">popularis method</span>: using tribunician power and popular assemblies to bypass traditional elite control.</p>
        `
    },
    {
        id: 'octavius-veto',
        date: '133 BC (Spring)',
        title: 'Octavius Vetoes Bill',
        description: 'Fellow tribune blocks the legislation at Senate\'s request',
        content: `
            <p>When Tiberius brought his land bill to a vote, fellow tribune <span class="key-figure" data-info="marcus-octavius">Marcus Octavius</span> exercised his veto—the traditional tribunician power to block legislation.</p>
            
            <p>Octavius, likely acting at the Senate's urging, argued that the bill threatened property rights and would cause economic chaos. His veto should have killed the proposal entirely.</p>
            
            <p>But Tiberius refused to accept this. He argued that a tribune who opposed the people's interests had violated his oath and forfeited his office.</p>
        `
    },
    {
        id: 'octavius-deposition',
        date: '133 BC (Mid-year)',
        title: 'Octavius Deposed',
        description: 'Unprecedented removal of a tribune shocks conservatives',
        content: `
            <p>In an unprecedented move, Tiberius convinced the Plebeian Assembly to vote Octavius out of office. No tribune had ever been deposed before.</p>
            
            <p>The <span class="key-concept" data-concept="tribunician-sacrosanctity">sacrosanctity of tribunes</span> was fundamental to Roman constitutional law—they were protected by religious sanction and supposedly untouchable.</p>
            
            <p>Tiberius's justification was democratic: the people who elected Octavius could remove him if he betrayed their interests. But conservatives saw this as tyrannical—if tribunes could be removed for opposing popular measures, what constitutional limits remained?</p>
            
            <p>With Octavius removed, the land bill passed the assembly and became law.</p>
        `
    },
    {
        id: 'pergamum',
        date: '133 BC (Summer)',
        title: 'Pergamum Bequest',
        description: 'Tiberius proposes using royal treasury to fund land commission',
        content: `
            <p>King Attalus III of Pergamum had recently died, bequeathing his kingdom and treasury to Rome. Traditionally, the Senate would have decided how to use this windfall.</p>
            
            <p>Instead, Tiberius proposed that the Plebeian Assembly should vote to use Pergamum's wealth to fund his land redistribution programme—providing equipment and seed for new smallholders.</p>
            
            <p>This was another direct challenge to senatorial authority. Foreign affairs and financial matters were traditionally Senate prerogatives, not subject to popular vote.</p>
            
            <p>The Senate was outraged. Tiberius was systematically stripping away their powers and transferring them to the popular assembly.</p>
        `
    },
    {
        id: 'reelection',
        date: '133 BC (Late Summer)',
        title: 'Re-election Attempt',
        description: 'Tiberius seeks second consecutive tribunate',
        content: `
            <p>As his tribunician year neared its end, Tiberius faced a problem: his land commission's work had barely begun, and his enemies would destroy it once he left office.</p>
            
            <p>He decided to stand for re-election as tribune—a move of dubious legality. It was unclear whether tribunes could serve consecutive terms, and opponents claimed this was forbidden.</p>
            
            <p>Tiberius argued necessity: his reforms needed protection. But his enemies saw this as proof of tyrannical ambition—seeking perpetual power like a king.</p>
            
            <p>As election day approached, tensions reached breaking point. Both sides mobilised supporters. Violence seemed inevitable.</p>
        `
    },
    {
        id: 'tiberius-death',
        date: '133 BC (Late)',
        title: 'Murder in the Forum',
        description: 'Senators kill Tiberius and 300 supporters during election',
        content: `
            <p>On election day, as voting proceeded, a group of senators led by Pontifex Maximus Scaevola armed themselves with clubs and broken furniture.</p>
            
            <p>They attacked Tiberius and his supporters in the Forum, beating them to death. Tiberius was killed with fragments of benches and chairs—the first political murder in Rome in centuries.</p>
            
            <p>A Roman tribune—supposedly <span class="key-concept" data-concept="tribunician-sacrosanctity">sacrosanct</span> and protected by the gods—had been murdered by his fellow senators. Religious taboos and constitutional norms had been shattered.</p>
            
            <p>Approximately 300 of Tiberius's supporters were killed alongside him. Their bodies were thrown into the Tiber River, denied proper burial.</p>
            
            <p>The Senate accepted parts of Tiberius's land law to calm popular anger, but his murder established a terrifying precedent: political opponents could be killed with impunity.</p>
        `
    },
    {
        id: 'gaius-election',
        date: '123 BC',
        title: 'Gaius Elected Tribune',
        description: 'Younger brother returns with broader, more systematic reforms',
        content: `
            <p>Ten years after his brother's death, <span class="key-figure" data-info="gaius-gracchus">Gaius Gracchus</span> was elected tribune with an even more ambitious reform programme. He had learned from Tiberius's mistakes and built a broader coalition for change.</p>
            
            <p>Rather than focusing solely on land reform, Gaius targeted multiple constituencies—urban poor, equites, Italian allies—creating a powerful reform coalition.</p>
        `
    },
    {
        id: 'scu',
        date: '121 BC',
        title: 'First Senatus Consultum Ultimum',
        description: 'Senate authorises use of force against citizens',
        content: `
            <p>When violence erupted between Gaius's supporters and opponents, the Senate passed the first <span class="key-term" data-definition="senatus-consultum-ultimum">Senatus Consultum Ultimum</span>—an emergency decree authorising the use of force.</p>
            
            <p>The SCU effectively declared martial law, suspending normal legal protections for Roman citizens. It represented the Senate's attempt to fight popularis methods with authoritarian measures.</p>
        `
    },
    {
        id: 'gaius-death',
        date: '121 BC (Late)',
        title: 'Gaius Dies on Aventine',
        description: '3,000 supporters executed without trial',
        content: `
            <p>Armed with the SCU, the consul led troops against Gaius and his supporters who had fortified themselves on the Aventine Hill. The resulting battle was more like a military campaign than civil disorder.</p>
            
            <p>Gaius was hunted down and killed. Approximately 3,000 of his supporters were executed without trial—a violation of fundamental citizen rights.</p>
            
            <p>The Aventine had been the historic refuge of the plebs during their early struggles with the patricians. Gaius's death there symbolically ended the possibility of peaceful popularis reform.</p>
        `
    }
];

// Brothers Data
const brothersData = [
    {
        id: 'tiberius',
        name: 'Tiberius Gracchus (168-133 BC)',
        content: [
            'Military experience in Spain gave Tiberius firsthand exposure to the suffering of dispossessed farmers.',
            'He focused primarily on land reform, using constitutional methods initially but becoming increasingly radical when opposed.',
            'Tiberius pioneered bypassing the Senate through direct appeal to popular assemblies—establishing the popularis method.',
            'His fatal mistake was seeking re-election as tribune, which opponents claimed was illegal and tyrannical.'
        ]
    },
    {
        id: 'gaius',
        name: 'Gaius Gracchus (154-121 BC)',
        content: [
            'Learning from his brother\'s experience, Gaius built broader coalitions and developed more sophisticated political strategies.',
            'His systematic reform programme targeted multiple constituencies—urban poor, equites, soldiers, Italian allies.',
            'Gaius created the first comprehensive popularis programme, showing how tribunician power could achieve wide-ranging change.',
            'Proposing citizenship for Italian allies proved disastrous, as existing citizens feared dilution of their privileges.'
        ]
    }
];

// Reform Data
const reformsData = [
    {
        id: 'grain',
        icon: '🌾',
        title: 'Lex Frumentaria',
        subtitle: 'Subsidised grain law',
        content: `
            <p>Gaius's <span class="key-term" data-definition="lex-frumentaria">grain law</span> allowed Roman citizens to buy wheat at below-market prices from state supplies. This was revolutionary—the first permanent welfare programme in Roman history.</p>
            
            <p>The law secured the loyalty of Rome's urban poor, who became a permanent popularis constituency. Citizens dependent on cheap grain would support politicians who maintained the system.</p>
            
            <p>However, the programme created enormous financial pressure on the state treasury, which had to import grain and subsidise the difference between market and sale prices.</p>
        `
    },
    {
        id: 'judicial',
        icon: '⚖️',
        title: 'Judicial Reform',
        subtitle: 'Equites control courts',
        content: `
            <p>Gaius transferred control of the <span class="key-term" data-definition="quaestio-repetundarum">extortion courts</span> from senators to <span class="key-term" data-definition="equites">equites</span> (wealthy non-senators). This seemingly technical change had massive political implications.</p>
            
            <p>Senators regularly extorted money from provincial subjects, but senatorial juries rarely convicted their peers. Gaius's solution was elegant: equestrian juries would be more willing to convict corrupt senators.</p>
            
            <p>This reform gained equestrian support for Gaius while weakening senatorial solidarity.</p>
        `
    },
    {
        id: 'military',
        icon: '⚔️',
        title: 'Military Reform',
        subtitle: 'State-funded equipment',
        content: `
            <p>Gaius required the state to provide military equipment for soldiers, rather than expecting them to supply their own gear. This reform addressed a major grievance among Rome's citizen-soldiers.</p>
            
            <p>Roman soldiers traditionally bought their own weapons and armour, which could cost several years' income for poor citizens. Many families were impoverished by military service.</p>
            
            <p>The reform established the principle that the state owed material support to citizens who served it—extending beyond legal protection to economic welfare.</p>
        `
    },
    {
        id: 'colonial',
        icon: '🏛️',
        title: 'Colonial Programme',
        subtitle: 'New settlements',
        content: `
            <p>Gaius proposed establishing colonies throughout the Mediterranean, including a controversial settlement at <span class="key-term" data-definition="carthage-colony">Carthage</span>. These colonies would provide land for Rome's dispossessed citizens.</p>
            
            <p>The Carthage proposal proved symbolically explosive. To settle Romans on the site where their greatest enemy once stood was provocative, and the city had been ritually cursed only 25 years earlier.</p>
            
            <p>Opposition politicians seized on religious fears about settling on cursed ground, portraying Gaius as reckless and impious.</p>
        `
    },
    {
        id: 'citizenship',
        icon: '🤝',
        title: 'Citizenship Extension',
        subtitle: 'Rights for Italian allies',
        content: `
            <p>Gaius proposed granting Roman citizenship to <span class="key-term" data-definition="latin-allies">Latin allies</span>. This reform, though just, proved politically disastrous.</p>
            
            <p>Italian allies provided troops for Roman armies and died in Roman wars, yet had no voice in Roman politics. They deserved citizenship as reward for their loyalty.</p>
            
            <p>However, existing Roman citizens feared that extending citizenship would dilute their own privileges—sharing voting power, grain distributions, and political opportunities with more people.</p>
            
            <p>This issue cost Gaius crucial support among the urban poor, who had been his most reliable constituency.</p>
        `
    }
];

// Definitions, Figures, and Concepts
const definitions = {
    'ager-publicus': {
        term: 'Ager Publicus',
        definition: 'Public land technically owned by the Roman state but often occupied informally by wealthy aristocrats.',
        context: 'The crisis over public land distribution was central to the Gracchan reforms. Wealthy elites had occupied far more than the legal limit of 500 iugera, displacing small farmers.'
    },
    'lex-sempronia-agraria': {
        term: 'Lex Sempronia Agraria',
        definition: 'Tiberius Gracchus\'s land law that enforced existing limits on public land occupation and redistributed excess to the poor.',
        context: 'This law established a three-man commission to reclaim and redistribute public land. It was revolutionary in bypassing the Senate to appeal directly to popular assemblies.'
    },
    'plebeian-assembly': {
        term: 'Plebeian Assembly',
        definition: 'The assembly of plebeian citizens that elected tribunes and could pass laws binding on all Romans.',
        context: 'The Gracchi used this assembly to bypass senatorial opposition. Since patricians were excluded, it was more democratic and responsive to popularis appeals.'
    },
    'lex-frumentaria': {
        term: 'Lex Frumentaria',
        definition: 'Gaius Gracchus\'s grain law that allowed Roman citizens to buy wheat at subsidised prices.',
        context: 'This was the first permanent welfare programme in Roman history, creating a loyal urban constituency for popularis politicians.'
    },
    'equites': {
        term: 'Equites',
        definition: 'The equestrian order - wealthy Romans below senatorial rank, often involved in business and tax collection.',
        context: 'Gaius transferred control of extortion courts to equites, gaining their political support while weakening senatorial solidarity.'
    },
    'quaestio-repetundarum': {
        term: 'Quaestio Repetundarum',
        definition: 'The permanent court that tried cases of provincial extortion by Roman magistrates.',
        context: 'Control of this court was politically crucial because it determined whether corrupt governors faced consequences.'
    },
    'senatus-consultum-ultimum': {
        term: 'Senatus Consultum Ultimum',
        definition: 'Emergency decree authorising consuls to use any means necessary to defend the state.',
        context: 'First used against Gaius Gracchus, the SCU became the Senate\'s standard response to popularis challenges.'
    },
    'carthage-colony': {
        term: 'Carthage Colony',
        definition: 'Gaius Gracchus\'s controversial proposal to establish a Roman settlement where Carthage had been destroyed.',
        context: 'This was politically disastrous because Carthage had been ritually cursed. Opponents used religious fears against Gaius.'
    },
    'latin-allies': {
        term: 'Latin Allies',
        definition: 'Italian peoples with limited rights who provided troops for Roman armies but lacked full Roman citizenship.',
        context: 'Gaius\'s proposal to grant them citizenship was morally just but politically catastrophic.'
    }
};

const figures = {
    'tiberius-gracchus': {
        name: 'Tiberius Sempronius Gracchus',
        dates: '168-133 BC',
        role: 'Tribune and land reformer',
        significance: 'Pioneered popularis politics by bypassing the Senate. His assassination established the precedent for political violence.'
    },
    'gaius-gracchus': {
        name: 'Gaius Sempronius Gracchus',
        dates: '154-121 BC',
        role: 'Tribune and popularis politician',
        significance: 'Created the first comprehensive popularis programme, targeting multiple constituencies with systematic reforms.'
    },
    'gracchi-brothers': {
        name: 'The Gracchi Brothers',
        dates: 'Tiberius (168-133 BC), Gaius (154-121 BC)',
        role: 'Popularis reformers',
        significance: 'Transformed Roman politics by creating popularis methods and establishing precedents for political violence.'
    },
    'cornelia': {
        name: 'Cornelia',
        dates: 'c. 190-100 BC',
        role: 'Mother of the Gracchi',
        significance: 'Daughter of Scipio Africanus who raised the Gracchi brothers. Famous for calling her sons "my jewels".'
    },
    'scipio-africanus': {
        name: 'Publius Cornelius Scipio Africanus',
        dates: '236-183 BC',
        role: 'General and consul',
        significance: 'Victor over Hannibal at Zama, grandfather of the Gracchi through their mother Cornelia.'
    },
    'marcus-octavius': {
        name: 'Marcus Octavius',
        dates: 'fl. 133 BC',
        role: 'Tribune',
        significance: 'His veto of Tiberius\'s land bill led to his unprecedented deposition, shocking conservatives.'
    }
};

const concepts = {
    'popularis-methods': {
        concept: 'Popularis Methods',
        explanation: 'Political techniques pioneered by the Gracchi: using tribunes to bypass the Senate, appealing directly to popular assemblies.',
        importance: 'These methods became the standard approach for challenging senatorial authority throughout the Late Republic.'
    },
    'popularis-politics': {
        concept: 'Popularis Politics',
        explanation: 'A political approach that claimed to represent "the people" against elite interests, using popular assemblies and tribunician power.',
        importance: 'Created by the Gracchi, this became one of the two main political traditions in the Late Republic.'
    },
    'tribunician-sacrosanctity': {
        concept: 'Tribunician Sacrosanctity',
        explanation: 'The religious protection that made tribunes physically inviolable - anyone who harmed them was cursed.',
        importance: 'The murder of Tiberius Gracchus shattered this fundamental constitutional principle.'
    }
};

// Exit Questions
const exitQuestions = [
    {
        question: 'What was the main economic problem that Tiberius Gracchus attempted to address?',
        answer: 'The displacement of small farmers and illegal occupation of public land (ager publicus) by wealthy aristocrats, leaving citizens landless and impoverished.'
    },
    {
        question: 'How did Tiberius bypass senatorial opposition to his land reform?',
        answer: 'He took his proposal directly to the Plebeian Assembly, bypassing the Senate entirely and establishing the popularis method.'
    },
    {
        question: 'What made Gaius Gracchus\'s reform programme more sophisticated than his brother\'s?',
        answer: 'Gaius targeted multiple constituencies simultaneously (urban poor, equites, soldiers, allies) rather than focusing on a single issue, building a broader coalition.'
    },
    {
        question: 'Why was Gaius\'s proposal to grant citizenship to Italian allies politically disastrous?',
        answer: 'Existing Roman citizens feared dilution of their privileges and benefits, causing Gaius to lose support from his urban base.'
    },
    {
        question: 'What long-term precedent did the deaths of the Gracchi establish?',
        answer: 'That political violence was an acceptable tool in Roman politics, and that constitutional limits could be broken through organised force.'
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTimeline();
    initializeBrothers();
    initializeReforms();
    initializeExitQuestions();
    
    setTimeout(() => {
        setupInteractiveContent();
    }, 100);
});

// Navigation
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            showSection(this.getAttribute('data-section'));
        });
    });

    const navButtons = document.querySelectorAll('.nav-btn[data-goto]');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            showSection(this.getAttribute('data-goto'));
        });
    });
}

function showSection(sectionId) {
    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.remove('active');
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === sectionId) {
            item.classList.add('active');
        }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setupInteractiveContent();
}

// Timeline
function initializeTimeline() {
    const eventsContainer = document.getElementById('timeline-events');
    const detailsContainer = document.getElementById('timeline-details');
    
    if (!eventsContainer || !detailsContainer) return;
    
    timelineEventsData.forEach(event => {
        const eventEl = document.createElement('div');
        eventEl.className = 'timeline-event';
        eventEl.onclick = () => showTimelineEvent(event.id);
        eventEl.innerHTML = `
            <div class="timeline-date">${event.date}</div>
            <div class="timeline-title">${event.title}</div>
            <div class="timeline-description">${event.description}</div>
        `;
        eventsContainer.appendChild(eventEl);
    });
    
    const defaultContent = document.createElement('div');
    defaultContent.className = 'timeline-content active';
    defaultContent.id = 'timeline-default';
    defaultContent.innerHTML = `
        <h4>The Gracchan Revolution</h4>
        <p>Click on any event above to explore the dramatic sequence that transformed Roman politics.</p>
    `;
    detailsContainer.appendChild(defaultContent);
    
    timelineEventsData.forEach(event => {
        const contentEl = document.createElement('div');
        contentEl.className = 'timeline-content';
        contentEl.id = `timeline-${event.id}`;
        contentEl.innerHTML = `<h4>${event.title}</h4>${event.content}`;
        detailsContainer.appendChild(contentEl);
    });
}

function showTimelineEvent(eventId) {
    document.querySelectorAll('#timeline-details .timeline-content').forEach(content => {
        content.classList.remove('active');
    });
    const content = document.getElementById(`timeline-${eventId}`);
    if (content) {
        content.classList.add('active');
        setupInteractiveContent();
    }
}

// Brothers
function initializeBrothers() {
    const gridContainer = document.getElementById('comparison-grid');
    if (!gridContainer) return;
    
    brothersData.forEach(brother => {
        const sectionEl = document.createElement('div');
        sectionEl.className = `brother-section ${brother.id}`;
        sectionEl.innerHTML = `
            <h4>${brother.name}</h4>
            ${brother.content.map(p => `<p>${p}</p>`).join('')}
        `;
        gridContainer.appendChild(sectionEl);
    });
}

// Reforms
function initializeReforms() {
    const cardsContainer = document.getElementById('reform-cards');
    const detailsContainer = document.getElementById('reform-details');
    
    if (!cardsContainer || !detailsContainer) return;
    
    reformsData.forEach(reform => {
        const cardEl = document.createElement('div');
        cardEl.className = 'reform-card';
        cardEl.onclick = () => showReformDetails(reform.id);
        cardEl.innerHTML = `
            <div class="reform-icon">${reform.icon}</div>
            <div class="reform-title">${reform.title}</div>
            <div class="reform-subtitle">${reform.subtitle}</div>
        `;
        cardsContainer.appendChild(cardEl);
    });
    
    const defaultContent = document.createElement('div');
    defaultContent.className = 'timeline-content active';
    defaultContent.id = 'reform-default';
    defaultContent.innerHTML = `
        <h4>Systematic Popularis Politics</h4>
        <p>Click on any reform above to explore Gaius's comprehensive programme.</p>
    `;
    detailsContainer.appendChild(defaultContent);
    
    reformsData.forEach(reform => {
        const contentEl = document.createElement('div');
        contentEl.className = 'timeline-content';
        contentEl.id = `reform-${reform.id}`;
        contentEl.innerHTML = `<h4>${reform.title}</h4>${reform.content}`;
        detailsContainer.appendChild(contentEl);
    });
}

function showReformDetails(reformId) {
    document.querySelectorAll('.reform-card').forEach(card => card.classList.remove('active'));
    event.target.closest('.reform-card').classList.add('active');
    
    document.querySelectorAll('#reform-details .timeline-content').forEach(content => {
        content.classList.remove('active');
    });
    const content = document.getElementById(`reform-${reformId}`);
    if (content) {
        content.classList.add('active');
        setupInteractiveContent();
    }
}

// Interactive Content
function setupInteractiveContent() {
    document.querySelectorAll('.key-term').forEach(term => {
        const newTerm = term.cloneNode(true);
        term.parentNode.replaceChild(newTerm, term);
        newTerm.addEventListener('click', function(e) {
            e.stopPropagation();
            showDefinition(this.dataset.definition);
        });
    });

    document.querySelectorAll('.key-figure').forEach(figure => {
        const newFigure = figure.cloneNode(true);
        figure.parentNode.replaceChild(newFigure, figure);
        newFigure.addEventListener('click', function(e) {
            e.stopPropagation();
            showFigureInfo(this.dataset.info);
        });
    });

    document.querySelectorAll('.key-concept').forEach(concept => {
        const newConcept = concept.cloneNode(true);
        concept.parentNode.replaceChild(newConcept, concept);
        newConcept.addEventListener('click', function(e) {
            e.stopPropagation();
            showConceptExplanation(this.dataset.concept);
        });
    });
}

function showDefinition(termId) {
    if (definitions[termId]) {
        const def = definitions[termId];
        showInfoPanel('Key Term', `
            <h4>${def.term}</h4>
            <p><strong>Definition:</strong> ${def.definition}</p>
            <p><strong>Context:</strong> ${def.context}</p>
        `);
    }
}

function showFigureInfo(figureId) {
    if (figures[figureId]) {
        const fig = figures[figureId];
        showInfoPanel('Historical Figure', `
            <h4>${fig.name}</h4>
            <p><strong>Dates:</strong> ${fig.dates}</p>
            <p><strong>Role:</strong> ${fig.role}</p>
            <p><strong>Significance:</strong> ${fig.significance}</p>
        `);
    }
}

function showConceptExplanation(conceptId) {
    if (concepts[conceptId]) {
        const concept = concepts[conceptId];
        showInfoPanel('Key Concept', `
            <h4>${concept.concept}</h4>
            <p><strong>Explanation:</strong> ${concept.explanation}</p>
            <p><strong>Importance:</strong> ${concept.importance}</p>
        `);
    }
}

function showInfoPanel(title, content) {
    const panel = document.getElementById('info-panel');
    const titleEl = document.getElementById('info-panel-title');
    const contentEl = document.getElementById('info-panel-content');
    
    titleEl.textContent = title;
    contentEl.innerHTML = content;
    panel.classList.add('active');
    
    setTimeout(() => {
        panel.classList.remove('active');
    }, 15000);
}

function closeInfoPanel() {
    document.getElementById('info-panel').classList.remove('active');
}

// Exit Questions
let currentQuestion = 0;

function initializeExitQuestions() {
    loadExitQuestion();
    
    const prevBtn = document.getElementById('prevQuestion');
    const nextBtn = document.getElementById('nextQuestion');
    const revealBtn = document.getElementById('revealAnswer');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentQuestion > 0) {
                currentQuestion--;
                loadExitQuestion();
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (currentQuestion < exitQuestions.length - 1) {
                currentQuestion++;
                loadExitQuestion();
            }
        });
    }
    
    if (revealBtn) {
        revealBtn.addEventListener('click', function() {
            const answerEl = document.getElementById('questionAnswer');
            if (answerEl && !answerEl.classList.contains('visible')) {
                answerEl.classList.add('visible');
                this.textContent = '✓ Answer Revealed';
                this.classList.add('revealed');
            }
        });
    }
}

function loadExitQuestion() {
    const question = exitQuestions[currentQuestion];
    const questionNumberEl = document.getElementById('questionNumber');
    const questionTextEl = document.getElementById('questionText');
    const questionAnswerEl = document.getElementById('questionAnswer');
    const prevBtn = document.getElementById('prevQuestion');
    const nextBtn = document.getElementById('nextQuestion');
    const revealBtn = document.getElementById('revealAnswer');
    
    if (questionNumberEl) questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${exitQuestions.length}`;
    if (questionTextEl) questionTextEl.textContent = question.question;
    if (questionAnswerEl) {
        questionAnswerEl.textContent = question.answer;
        questionAnswerEl.classList.remove('visible');
    }
    
    if (prevBtn) prevBtn.disabled = currentQuestion === 0;
    if (nextBtn) nextBtn.disabled = currentQuestion === exitQuestions.length - 1;
    
    if (revealBtn) {
        revealBtn.textContent = 'Reveal Answer';
        revealBtn.classList.remove('revealed');
    }
}
