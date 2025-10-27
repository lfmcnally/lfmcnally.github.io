// Timeline Events Data
const timelineEventsData = [
    {
        id: 'birth-arpinum',
        date: '106 BC',
        title: 'Birth in Arpinum',
        description: 'Cicero born to equestrian family outside Rome\'s traditional elite',
        content: `
            <p>Marcus Tullius Cicero was born in <span class="key-term" data-definition="arpinum">Arpinum</span>, a small town about 70 miles southeast of Rome. His family belonged to the <span class="key-term" data-definition="equites">equestrian order</span>—wealthy but without senatorial ancestors.</p>
            
            <p>This background would define Cicero's entire career. As a <span class="key-term" data-definition="novus-homo">novus homo</span> (new man), he lacked the automatic advantages of noble birth—family networks, inherited clients, and prestige. Everything he achieved would come through talent, hard work, and strategic alliances.</p>
            
            <p>Arpinum had produced one previous consul: <span class="key-figure" data-info="marius">Gaius Marius</span>, the great general who had died just a year before Cicero's birth. This connection gave Cicero both inspiration and a model—though he would choose oratory over military command as his path to glory.</p>
        `
    },
    {
        id: 'education-rome',
        date: '90s BC',
        title: 'Education in Rome',
        description: 'Studies rhetoric, law, and philosophy under leading teachers',
        content: `
            <p>Cicero's father recognised his son's intellectual gifts and ensured he received the finest education available. The young Cicero studied under Rome's leading teachers of rhetoric and law.</p>
            
            <p>His rhetorical training focused on the art of persuasion—how to construct arguments, appeal to emotions, and command an audience. These skills would become his greatest weapons in the Forum and the courts.</p>
            
            <p>Equally important was his legal training. Roman law was complex and technical, and mastery of it gave Cicero credibility and practical tools for his career. Law and oratory were inseparable in Roman public life—the best speakers were also skilled jurists.</p>
            
            <div class="key-point">
                <div class="key-point-title">The Power of Words</div>
                <div class="key-point-text">
                    For Cicero, oratory was not merely a skill but a form of power equal to military command. He believed eloquence could shape politics, defend justice, and preserve the Republic.
                </div>
            </div>
        `
    },
    {
        id: 'greek-studies',
        date: '79-77 BC',
        title: 'Study Tour in Greece',
        description: 'Travels to Athens and Rhodes to study philosophy and rhetoric',
        content: `
            <p>After his first courtroom successes, Cicero travelled to Greece and Asia Minor—ostensibly for health reasons, but primarily to deepen his philosophical education and refine his oratorical technique.</p>
            
            <p>In Athens, he studied philosophy under leading Academic and Stoic teachers. He was particularly drawn to <span class="key-concept" data-concept="academic-scepticism">Academic scepticism</span>, which taught that absolute certainty was impossible but that probable truth could be pursued through reason and debate.</p>
            
            <p>In Rhodes, he studied under <span class="key-figure" data-info="apollonius-molon">Apollonius Molon</span>, who helped him develop a more restrained and sophisticated speaking style—less bombastic than the Asian style popular at Rome, more elegant and controlled.</p>
            
            <div class="primary-source">
                Let arms yield to the toga, the laurel of the triumph to the tongue of the orator.
                <div class="source-citation">— Cicero, In Pisonem</div>
            </div>
            
            <p>This period of study transformed Cicero. He returned to Rome not just as a talented speaker but as an intellectual—someone who could claim philosophical authority alongside his rhetorical skill.</p>
        `
    },
    {
        id: 'quaestor',
        date: '75 BC',
        title: 'Quaestor in Sicily',
        description: 'First step on cursus honorum builds reputation for integrity',
        content: `
            <p>Cicero's first magistracy was as <span class="key-term" data-definition="quaestor">quaestor</span> in western Sicily. This was a relatively junior position—managing financial administration and grain supply—but Cicero approached it with characteristic energy and integrity.</p>
            
            <p>Unlike many Romans who viewed provincial posts as opportunities for enrichment, Cicero governed honestly and efficiently. The Sicilians remembered his fairness—a fact that would prove crucial years later when they sought him out to prosecute the corrupt governor Verres.</p>
            
            <p>The quaestorship also gave Cicero automatic entry to the Senate. He was now part of Rome's governing class, though still near its bottom ranks without the prestige of noble ancestry.</p>
            
            <p>Upon returning to Rome, Cicero was disappointed to discover that his provincial service had gone largely unnoticed. He realised that to truly make his mark, he needed high-profile courtroom victories and political controversies that would keep his name in the public eye.</p>
        `
    },
    {
        id: 'verres-trial',
        date: '70 BC',
        title: 'Prosecution of Verres',
        description: 'Landmark trial establishes Cicero as Rome\'s leading orator',
        content: `
            <p>The Sicilians approached Cicero to prosecute <span class="key-figure" data-info="verres">Gaius Verres</span>, the former governor who had systematically plundered the province for three years. It was a dangerous case—Verres was defended by <span class="key-figure" data-info="hortensius">Hortensius Hortalus</span>, Rome's leading advocate, and backed by powerful senatorial allies.</p>
            
            <p>Cicero spent months gathering evidence in Sicily, building an overwhelming case. His strategy was brilliant: rather than delivering elaborate speeches (which would allow delays and bribery), he presented devastating documentation and testimony in rapid succession.</p>
            
            <p>Hortensius and Verres were overwhelmed. Before Cicero could deliver his full prosecution speeches, Verres fled into exile. It was an admission of guilt—and a spectacular victory for Cicero.</p>
            
            <div class="key-point">
                <div class="key-point-title">Political Impact</div>
                <div class="key-point-text">
                    The Verres trial established Cicero as the greatest orator of his generation. It also demonstrated his commitment to justice and his willingness to challenge senatorial corruption—qualities that enhanced his reputation among both equites and the people.
                </div>
            </div>
            
            <p>Cicero published his prepared speeches anyway—the <em>Verrines</em> became models of forensic oratory and cemented his literary reputation alongside his courtroom fame.</p>
        `
    },
    {
        id: 'aedile',
        date: '69 BC',
        title: 'Aedileship',
        description: 'Manages public games and urban administration',
        content: `
            <p>As <span class="key-term" data-definition="aedile">aedile</span>, Cicero was responsible for public games, temple maintenance, and market regulation. It was largely a ceremonial office—an opportunity to build popularity through entertainment rather than policy.</p>
            
            <p>Aediles typically spent lavishly on games to win public favour, often going into debt for future political advantage. Cicero, lacking the vast wealth of noble families, had to be more modest in his expenditures—but he used his growing oratorical fame to maintain visibility.</p>
            
            <p>The aedileship was a necessary step on the <span class="key-term" data-definition="cursus-honorum">cursus honorum</span>, but for Cicero it was mainly a holding pattern between more significant offices. His real work continued in the courts, where each case enhanced his reputation.</p>
        `
    },
    {
        id: 'praetor',
        date: '66 BC',
        title: 'Praetor',
        description: 'Senior magistracy with judicial authority',
        content: `
            <p>Cicero was elected <span class="key-term" data-definition="praetor">praetor</span> in 66 BC—a senior magistracy that gave him significant judicial authority and brought him closer to the consulship.</p>
            
            <p>During his praetorship, Cicero delivered a crucial speech supporting the <span class="key-term" data-definition="lex-manilia">Lex Manilia</span>, which gave Pompey sweeping powers to fight Mithridates in the East. This was a carefully calculated political move—aligning himself with Pompey, the Republic's most powerful general, while appearing to support popular sovereignty.</p>
            
            <div class="primary-source">
                If Pompey had not undertaken this war, would any other general have been competent to end it? Would any man have been willing to accept it?
                <div class="source-citation">— Cicero, Pro Lege Manilia</div>
            </div>
            
            <p>The speech demonstrated Cicero's political sophistication. He was neither a rigid optimate defending senatorial prerogatives at all costs, nor a radical popularis challenging traditional authority. Instead, he positioned himself as a pragmatic statesman who could bridge different factions.</p>
        `
    },
    {
        id: 'consular-campaign',
        date: '64 BC',
        title: 'Campaign for Consulship',
        description: 'Unprecedented: a novus homo stands for highest office',
        content: `
            <p>By 64 BC, Cicero was ready to stand for the consulship—the Republic's highest office. No <span class="key-term" data-definition="novus-homo">novus homo</span> had been elected consul in over thirty years.</p>
            
            <p>His campaign faced enormous obstacles. Noble families closed ranks to protect their monopoly on the consulship. His competitors included <span class="key-figure" data-info="catiline">Lucius Sergius Catilina</span>, an impoverished patrician with military glory and aristocratic connections.</p>
            
            <p>Cicero's strategy relied on several pillars:</p>
            <ul>
                <li>His oratorical fame and courtroom victories</li>
                <li>Support from equites, who saw him as one of their own</li>
                <li>Backing from moderate senators who feared Catiline's radicalism</li>
                <li>Popular appeal built through his reputation for integrity</li>
            </ul>
            
            <p>He also had his brother Quintus, who wrote him a campaign handbook (<em>Commentariolum Petitionis</em>) advising how a new man could overcome aristocratic prejudice through tireless networking and careful positioning.</p>
            
            <div class="key-point">
                <div class="key-point-title">The New Man's Triumph</div>
                <div class="key-point-text">
                    In 63 BC, Cicero won the consulship with the highest vote total—a stunning achievement for someone without noble ancestry. He had reached the summit of Roman politics through talent alone.
                </div>
            </div>
        `
    }
];

// Key Themes Data
const themesData = [
    {
        id: 'novus-homo',
        icon: '🎯',
        title: 'The New Man',
        subtitle: 'Rise without noble birth',
        content: `
            <p>Cicero's status as a <span class="key-term" data-definition="novus-homo">novus homo</span> was both his defining challenge and his proudest achievement. Roman politics was dominated by a small circle of noble families who passed the consulship between themselves like a hereditary privilege.</p>
            
            <p>For a man without consular ancestors to reach the top required exceptional ability, relentless networking, and strategic alliances. Cicero had to work harder, speak better, and prove himself more capable than his aristocratic rivals simply to be considered their equal.</p>
            
            <p>His success was vindication of the Republican ideal that merit should triumph over birth. But it also made him defensive—throughout his career, Cicero was acutely sensitive to aristocratic condescension and fiercely protective of his hard-won status.</p>
            
            <div class="primary-source">
                I am a new man. The road to honours has been opened for me not by the imagines of my ancestors but by my own efforts.
                <div class="source-citation">— Cicero, Pro Plancio</div>
            </div>
        `
    },
    {
        id: 'oratory',
        icon: '🗣️',
        title: 'Oratory as Power',
        subtitle: 'Words equal to swords',
        content: `
            <p>In a Republic without professional politicians or mass media, oratory was the primary means of political influence. Public speeches in the Forum, Senate debates, and courtroom advocacy determined reputations and shaped policy.</p>
            
            <p>Cicero mastered every aspect of rhetoric: logical argumentation, emotional appeal, character assassination, and stylistic elegance. His speeches could sway juries, move assemblies, and destroy political careers.</p>
            
            <p>But Cicero saw oratory as more than a tool—it was a form of leadership equal to military command. While generals like Caesar and Pompey won glory through conquest, Cicero believed eloquence could defend justice, preserve law, and protect the Republic.</p>
            
            <p>His famous claim that "the tongue of the orator" deserved equal honour to "the laurel of the triumph" was not mere self-aggrandisement—it was a philosophical assertion about the nature of power in a free state.</p>
        `
    },
    {
        id: 'philosophy',
        icon: '📚',
        title: 'Philosophical Foundations',
        subtitle: 'Theory meets practice',
        content: `
            <p>Unlike most Roman politicians, Cicero was a serious philosopher. His Greek education gave him command of Stoicism, Platonism, and <span class="key-concept" data-concept="academic-scepticism">Academic scepticism</span>, and he genuinely believed philosophical principles should guide political action.</p>
            
            <p>From Stoicism, he absorbed ideas about natural law, duty, and virtue. From the Academics, he learned to question dogmatism and seek probable truth through reason. From Plato, he inherited the ideal of the philosopher-statesman who governs through wisdom rather than force.</p>
            
            <p>These influences shaped Cicero's political vision: he believed in the <em>res publica</em> as a commonwealth governed by law and tradition, in <span class="key-concept" data-concept="concordia-ordinum">concordia ordinum</span> (harmony between social classes), and in the Senate as a council of wise men guiding the state.</p>
            
            <p>However, Cicero was not naive. He understood that philosophy must accommodate political reality. His career shows constant tension between his ideals and his pragmatic compromises—between the statesman he wanted to be and the politician he often had to be.</p>
        `
    },
    {
        id: 'ambition',
        icon: '⚡',
        title: 'Ambition and Self-Promotion',
        subtitle: 'The drive for glory',
        content: `
            <p>Cicero was intensely ambitious. He craved recognition, honour, and fame—not just for their own sake, but as validation of his merit in a society that valued noble birth above talent.</p>
            
            <p>This ambition drove his relentless work ethic: he prepared cases more thoroughly than his rivals, studied philosophy more deeply, and cultivated relationships more strategically. He was always networking, always visible, always reminding Romans of his achievements.</p>
            
            <p>His self-promotion could be excessive. His speeches praised his own accomplishments so frequently that it became a source of mockery. His poetry about his consulship was so self-congratulatory that even friendly critics winced.</p>
            
            <p>Yet this vanity was inseparable from his success. Without family prestige to fall back on, Cicero had to constantly assert his worth. His boasting was partly insecurity—the new man's need to prove he belonged among the nobles.</p>
        `
    }
];

// Philosophical Influences Data
const philosophyData = [
    {
        id: 'stoicism',
        school: 'Stoicism',
        content: [
            'Taught that virtue is the only true good and that wise men should fulfil their duties regardless of personal cost.',
            'Influenced Cicero\'s concept of natural law—universal principles accessible to reason that should govern human society.',
            'Provided philosophical foundation for his belief in duty to the state (<em>officium</em>) and the importance of moral integrity in public life.',
            'Cicero drew on Stoic ideas in defending the execution of the Catilinarian conspirators as a necessary duty.'
        ]
    },
    {
        id: 'academic-scepticism',
        school: 'Academic Scepticism',
        content: [
            'Argued that absolute certainty is impossible but probable truth can be pursued through reasoned debate and consideration of all sides.',
            'Shaped Cicero\'s rhetorical method: presenting the strongest arguments for every position before reaching a conclusion.',
            'Made him suspicious of dogmatism and extremism—whether from radical populares or rigid optimates.',
            'This philosophical flexibility helped him navigate political compromises without abandoning his principles entirely.'
        ]
    },
    {
        id: 'platonism',
        school: 'Platonism',
        content: [
            'Plato\'s <em>Republic</em> presented the ideal of the philosopher-king—the wise statesman who governs through reason and virtue.',
            'Cicero adapted this into his concept of the ideal orator-statesman: someone who combines eloquence, philosophical wisdom, and practical political skill.',
            'Plato\'s emphasis on justice, the common good, and the proper ordering of the state deeply influenced Cicero\'s political ideals.',
            'However, Cicero rejected Plato\'s radical restructuring of society, preferring to work within Roman tradition and constitutional forms.'
        ]
    }
];

// Definitions, Figures, and Concepts
const definitions = {
    'arpinum': {
        term: 'Arpinum',
        definition: 'A small town in Latium about 70 miles southeast of Rome, birthplace of both Marius and Cicero.',
        context: 'Though technically Roman territory, Arpinum was outside the traditional aristocratic circles of Rome. Its most famous sons both had to overcome provincial origins to reach the consulship.'
    },
    'novus-homo': {
        term: 'Novus Homo (New Man)',
        definition: 'Someone who was the first in his family to reach the Senate, especially the consulship—lacking noble ancestry.',
        context: 'New men faced enormous prejudice from the aristocracy. Cicero\'s consular election in 63 BC was the first for a novus homo in over thirty years—a testament to his exceptional talent.'
    },
    'equites': {
        term: 'Equites (Knights)',
        definition: 'The equestrian order—wealthy Romans below senatorial rank, often involved in business, tax collection, and finance.',
        context: 'Cicero came from an equestrian family and always maintained strong ties to this class. His concept of concordia ordinum sought harmony between equites and senators.'
    },
    'cursus-honorum': {
        term: 'Cursus Honorum',
        definition: 'The "course of offices"—the sequential ladder of Roman magistracies leading from quaestor to consul.',
        context: 'Cicero climbed every step at the earliest legal age (suo anno), demonstrating both his political skill and the support he had built.'
    },
    'quaestor': {
        term: 'Quaestor',
        definition: 'Financial magistrate responsible for treasury management and provincial administration. First step on the cursus honorum.',
        context: 'Quaestors automatically became senators. Cicero\'s quaestorship in Sicily (75 BC) gave him his first taste of provincial government and set the stage for the Verres trial.'
    },
    'aedile': {
        term: 'Aedile',
        definition: 'Magistrate responsible for public games, markets, temples, and urban infrastructure.',
        context: 'The aedileship was often a vehicle for building popularity through lavish entertainment. Cicero\'s modest expenditures reflected his relative lack of wealth compared to noble rivals.'
    },
    'praetor': {
        term: 'Praetor',
        definition: 'Senior magistrate with judicial authority, ranking just below consul in the cursus honorum.',
        context: 'Praetors presided over law courts and could command armies in emergencies. The office gave Cicero significant authority and prepared him for the consulship.'
    },
    'lex-manilia': {
        term: 'Lex Manilia',
        definition: 'Law of 66 BC granting Pompey extraordinary command against Mithridates in the East.',
        context: 'Cicero\'s speech supporting this law (Pro Lege Manilia) was his first major political oration and aligned him with Pompey\'s powerful faction.'
    },
    'concordia-ordinum': {
        term: 'Concordia Ordinum',
        definition: 'Harmony of the orders—Cicero\'s ideal of cooperation between senators and equites for the good of the state.',
        context: 'This concept reflected Cicero\'s position between classes: elevated to the Senate but still connected to equestrian roots. He saw social harmony as essential for Republican stability.'
    }
};

const figures = {
    'marius': {
        name: 'Gaius Marius',
        dates: 'c. 157-86 BC',
        role: 'General and consul',
        significance: 'Previous novus homo from Arpinum who reached the consulship through military glory. His career inspired Cicero but also demonstrated the dangers of militarised politics.'
    },
    'apollonius-molon': {
        name: 'Apollonius Molon',
        dates: 'fl. 1st century BC',
        role: 'Greek rhetorician',
        significance: 'Taught Cicero on Rhodes, helping him develop a more restrained and sophisticated oratorical style that became his trademark.'
    },
    'verres': {
        name: 'Gaius Verres',
        dates: 'c. 120-43 BC',
        role: 'Governor of Sicily',
        significance: 'Corrupt provincial governor whose prosecution by Cicero in 70 BC established Cicero as Rome\'s leading orator and advocate.'
    },
    'hortensius': {
        name: 'Quintus Hortensius Hortalus',
        dates: '114-50 BC',
        role: 'Orator and advocate',
        significance: 'Leading advocate of his generation until eclipsed by Cicero in the Verres trial. Represented the old guard that Cicero challenged and surpassed.'
    },
    'catiline': {
        name: 'Lucius Sergius Catilina',
        dates: 'c. 108-62 BC',
        role: 'Patrician politician',
        significance: 'Cicero\'s rival for the consulship in 64-63 BC. His conspiracy would define Cicero\'s consular year and create his greatest political crisis.'
    }
};

const concepts = {
    'academic-scepticism': {
        concept: 'Academic Scepticism',
        explanation: 'Philosophical school teaching that absolute certainty is impossible but probable truth can be pursued through reason and debate.',
        importance: 'This influenced Cicero\'s rhetorical method and made him suspicious of dogmatism. It allowed him to be philosophically principled while remaining politically flexible.'
    },
    'concordia-ordinum': {
        concept: 'Concordia Ordinum',
        explanation: 'The harmony of the orders—Cicero\'s ideal of cooperation between senators and equites for the stability of the Republic.',
        importance: 'This concept reflected Cicero\'s political vision: a state governed by consensus among propertied classes rather than by populist demagogues or military strongmen.'
    },
    'philosopher-statesman': {
        concept: 'Philosopher-Statesman',
        explanation: 'Cicero\'s ideal combining Greek philosophical wisdom with Roman political practice—the orator-politician who leads through reason and eloquence.',
        importance: 'This was how Cicero understood his own role: not merely a politician but an intellectual leader who could guide Rome through philosophy, law, and oratory.'
    }
};

// Exit Questions
const exitQuestions = [
    {
        question: 'What made Cicero\'s rise to the consulship historically significant?',
        answer: 'He was a novus homo (new man) without noble ancestry—the first in over thirty years to reach the consulship through merit rather than family connections, demonstrating that talent could overcome aristocratic monopoly.'
    },
    {
        question: 'How did Cicero\'s Greek education shape his political philosophy?',
        answer: 'It gave him concepts of natural law, the ideal state, and the philosopher-statesman. He believed politics should be guided by reason and virtue, not merely by power and tradition.'
    },
    {
        question: 'Why was the Verres trial a turning point in Cicero\'s career?',
        answer: 'His prosecution of the corrupt governor established him as Rome\'s greatest orator, defeating the previous champion Hortensius and demonstrating his commitment to justice over senatorial solidarity.'
    },
    {
        question: 'What was Cicero\'s concept of concordia ordinum and why did he advocate it?',
        answer: 'Harmony between senators and equites—reflecting his own position between classes. He believed cooperation among propertied classes was essential for Republican stability against populist demagogues.'
    },
    {
        question: 'How did Cicero balance his philosophical ideals with political pragmatism?',
        answer: 'He held principled beliefs about justice and the res publica but was willing to compromise and form alliances when necessary. His support for Pompey\'s special command showed this pragmatic flexibility.'
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTimeline();
    initializeThemes();
    initializePhilosophy();
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
    const infoPanel = document.getElementById('timeline-info-panel');
    
    if (!eventsContainer || !infoPanel) return;
    
    // Reverse the array so earliest events are at bottom
    const reversedEvents = [...timelineEventsData].reverse();
    
    reversedEvents.forEach(event => {
        const eventEl = document.createElement('div');
        eventEl.className = 'timeline-event';
        eventEl.onclick = () => showTimelineDetails(event.id);
        eventEl.innerHTML = `
            <div class="timeline-date">${event.date}</div>
            <div class="timeline-title">${event.title}</div>
        `;
        eventsContainer.appendChild(eventEl);
    });
}

function showTimelineDetails(eventId) {
    const event = timelineEventsData.find(e => e.id === eventId);
    const infoPanel = document.getElementById('timeline-info-panel');
    
    if (!event || !infoPanel) return;
    
    // Update active state
    document.querySelectorAll('.timeline-event').forEach(el => {
        el.classList.remove('active');
    });
    event.target = window.event?.target;
    if (window.event?.target) {
        const clickedEvent = window.event.target.closest('.timeline-event');
        if (clickedEvent) clickedEvent.classList.add('active');
    }
    
    // Update info panel
    infoPanel.innerHTML = `
        <h4>${event.title}</h4>
        <div style="color: #0066ff; font-weight: 600; font-size: 0.9rem; margin-bottom: 1rem;">${event.date}</div>
        ${event.content}
    `;
    
    setupInteractiveContent();
}

function toggleTimelineEvent(eventId) {
    showTimelineDetails(eventId);
}

// Themes
function initializeThemes() {
    const cardsContainer = document.getElementById('theme-cards');
    const detailsContainer = document.getElementById('theme-details');
    
    if (!cardsContainer || !detailsContainer) return;
    
    themesData.forEach(theme => {
        const cardEl = document.createElement('div');
        cardEl.className = 'theme-card';
        cardEl.onclick = () => showThemeDetails(theme.id);
        cardEl.innerHTML = `
            <div class="theme-icon">${theme.icon}</div>
            <div class="theme-title">${theme.title}</div>
            <div class="theme-subtitle">${theme.subtitle}</div>
        `;
        cardsContainer.appendChild(cardEl);
    });
    
    const defaultContent = document.createElement('div');
    defaultContent.className = 'timeline-content active';
    defaultContent.id = 'theme-default';
    defaultContent.innerHTML = `
        <h4>Key Themes in Cicero's Early Career</h4>
        <p>Click on any theme above to explore its significance.</p>
    `;
    detailsContainer.appendChild(defaultContent);
    
    themesData.forEach(theme => {
        const contentEl = document.createElement('div');
        contentEl.className = 'timeline-content';
        contentEl.id = `theme-${theme.id}`;
        contentEl.innerHTML = `<h4>${theme.title}</h4>${theme.content}`;
        detailsContainer.appendChild(contentEl);
    });
}

function showThemeDetails(themeId) {
    document.querySelectorAll('.theme-card').forEach(card => card.classList.remove('active'));
    
    // Find and activate the clicked card
    const cards = document.querySelectorAll('.theme-card');
    cards.forEach(card => {
        if (card.onclick && card.onclick.toString().includes(themeId)) {
            card.classList.add('active');
        }
    });
    
    document.querySelectorAll('#theme-details .timeline-content').forEach(content => {
        content.classList.remove('active');
    });
    const content = document.getElementById(`theme-${themeId}`);
    if (content) {
        content.classList.add('active');
        setupInteractiveContent();
    }
}

// Philosophy
function initializePhilosophy() {
    const gridContainer = document.getElementById('philosophy-grid');
    if (!gridContainer) return;
    
    philosophyData.forEach(school => {
        const sectionEl = document.createElement('div');
        sectionEl.className = `philosophy-section ${school.id}`;
        sectionEl.innerHTML = `
            <h4>${school.school}</h4>
            ${school.content.map(p => `<p>${p}</p>`).join('')}
        `;
        gridContainer.appendChild(sectionEl);
    });
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
