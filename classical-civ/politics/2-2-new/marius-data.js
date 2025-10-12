// Reform Cards Data
const reformsData = {
    reforms: [
        {
            id: 'recruitment',
            icon: '👥',
            title: 'Open Recruitment',
            subtitle: 'Abolishing property qualifications',
            content: {
                title: 'The End of the Citizen-Militia',
                html: `
                    <p>The traditional Roman army was composed of <span class="key-term" data-definition="assidui">assidui</span>—landowning citizens who could afford their own equipment. This created severe manpower shortages during prolonged overseas campaigns.</p>
                    
                    <p>In 107 BC, Marius abolished property qualifications entirely, allowing the <span class="key-term" data-definition="capite-censi">capite censi</span> (landless poor, literally "head count") to enlist. These men, previously excluded from military service, eagerly joined for regular pay and the promise of land grants upon retirement.</p>
                    
                    <p>The change was immediately practical—Rome could now field much larger armies from the growing urban population. Men who had lost their farms to debt or warfare could rebuild their lives through military service.</p>
                    
                    <p>However, this fundamentally shifted military loyalty. Citizen-soldiers had fought to protect their own property and communities. Professional soldiers fought for pay and rewards that only their generals could provide—creating the conditions for <span class="key-concept" data-concept="client-armies">client armies</span>.</p>
                    
                    <div class="primary-source">
                        He enrolled not only those who met the property requirements, but summoned even those who owned nothing.
                        <div class="source-citation">— Sallust, <em>Jugurthine War</em> 86.2</div>
                    </div>
                `
            }
        },
        {
            id: 'equipment',
            icon: '⚔️',
            title: 'Standardised Equipment',
            subtitle: 'State provision and uniformity',
            content: {
                title: 'Uniform Weapons and Training',
                html: `
                    <p>Before Marius, soldiers provided their own equipment, leading to inconsistent quality and capabilities. Wealthy soldiers had superior armour and weapons, whilst poor citizens made do with basic gear.</p>
                    
                    <p>Marius standardised equipment across the legions, with the state providing uniform weapons, armour, and training. Every soldier received the same <span class="key-term" data-definition="gladius">gladius</span> (short sword), <span class="key-term" data-definition="scutum">scutum</span> (rectangular shield), and <span class="key-term" data-definition="pilum">pilum</span> (javelin).</p>
                    
                    <p>This created more effective, disciplined armies with consistent tactical capabilities. When every soldier was identically equipped and trained, legions could execute complex manoeuvres that would have been impossible with varied equipment levels.</p>
                    
                    <p>The famous <span class="key-term" data-definition="marian-mule">Marian mule</span> reform required soldiers to carry their own equipment on marches (about 30kg of gear), reducing dependence on supply trains and increasing army mobility.</p>
                    
                    <p>However, standardised state-provided equipment was expensive, significantly increasing Rome's military expenditure and creating financial pressures that contributed to later fiscal crises.</p>
                `
            }
        },
        {
            id: 'professionalism',
            icon: '🎖️',
            title: 'Professional Service',
            subtitle: 'Long-term military careers',
            content: {
                title: 'From Seasonal Service to Career Soldiers',
                html: `
                    <p>Traditional Roman service was seasonal—farmers served during campaign season, then returned to their land. Marius created the first truly professional Roman army, with soldiers serving for 16-20 years rather than a few months annually.</p>
                    
                    <p>Professional soldiers developed skills impossible under the old system. They learned engineering, siege warfare, logistics, and tactics through years of experience. Veterans became expert trainers for new recruits, creating institutional knowledge that persisted across generations.</p>
                    
                    <p>Long service also created powerful bonds between soldiers and their commanders. Officers who led men through multiple campaigns earned intense personal loyalty that transcended institutional allegiance to the Roman state.</p>
                    
                    <p>The army became a genuine career path for ambitious men from humble backgrounds, offering social mobility previously available only through politics or trade.</p>
                    
                    <p>However, professional soldiers had no civilian lives to return to between campaigns. They depended entirely on their generals for pay, promotion, and eventually retirement provision—making them willing to follow successful commanders anywhere, even against Rome itself.</p>
                `
            }
        },
        {
            id: 'rewards',
            icon: '🏞️',
            title: 'Land Grants',
            subtitle: 'Retirement settlements for veterans',
            content: {
                title: 'The Veteran Settlement System',
                html: `
                    <p>Professional soldiers serving 16-20 years needed provision for retirement. Marius promised land grants to veterans, creating colonies throughout the Roman world where ex-soldiers could settle and farm.</p>
                    
                    <p>These settlements served multiple purposes: they provided for veteran welfare, spread Roman culture to frontier regions, and created strategic reserves of experienced soldiers who could be recalled in emergencies.</p>
                    
                    <p>However, land grants required Senate approval and funding. Conservative senators often refused these grants, both from fiscal concerns and fear of empowering successful generals with grateful veteran constituencies.</p>
                    
                    <p>This Senate obstruction created a catastrophic political problem. Veterans became a powerful pressure group, supporting politicians who promised them land and opposing those who threatened their settlements. When the Senate blocked grants, generals were forced to seek alternative sources—conquered territory, confiscated estates, or political alliances with popularis tribunes.</p>
                    
                    <p>The promise of land attracted countless recruits who saw military service as their only path to property ownership and social advancement. But when these promises couldn't be fulfilled through constitutional means, generals had strong incentives to use military force against the state itself.</p>
                    
                    <p>Every major civil war of the Late Republic—Sulla's march on Rome, Pompey's eastern settlements, Caesar's Gallic conquests—stemmed partly from generals needing to reward veterans that the Senate wouldn't provide for.</p>
                `
            }
        },
        {
            id: 'training',
            icon: '🏋️',
            title: 'Systematic Training',
            subtitle: 'Rigorous drill and discipline',
            content: {
                title: 'Creating Elite Professional Soldiers',
                html: `
                    <p>Marius introduced rigorous, systematic training programmes that transformed farmers and urban poor into professional soldiers. Veterans trained new recruits, creating consistent standards across all legions.</p>
                    
                    <p>Training emphasised physical conditioning, weapon drill, formation discipline, and engineering skills. Soldiers learned to build fortified camps every night on campaign, construct siege equipment, and execute complex battlefield manoeuvres.</p>
                    
                    <p>This professionalism made Roman legions vastly superior to both citizen-militia armies and barbarian forces. Even numerically inferior Roman armies could defeat larger enemies through superior discipline, training, and tactical flexibility.</p>
                    
                    <p>The training system also created a distinct military culture—soldiers identified primarily as legionaries rather than civilians temporarily under arms. This professional identity strengthened unit cohesion but further separated soldiers from civilian society.</p>
                    
                    <p>However, highly trained professional soldiers were expensive to maintain and even more expensive to replace. The state's investment in each soldier made Rome increasingly dependent on maintaining stable military forces, creating pressure for continuous campaigning and conquest.</p>
                `
            }
        }
    ],
    defaultContent: {
        title: 'Revolutionary Military Changes',
        html: `
            <p>Click on any reform above to explore how Marius transformed the Roman army. These five interconnected changes solved immediate military problems but created long-term political crises that would ultimately destroy the Republic.</p>
            <p>Each reform made military sense but had unintended political consequences. Together, they revolutionised not just how Romans fought, but the entire relationship between soldiers, generals, and the state.</p>
        `
    }
};

// Definitions Data
const definitions = {
    'arpinum': {
        term: 'Arpinum',
        definition: 'Municipal town in Latium, about 100km southeast of Rome, birthplace of both Marius and later Cicero.',
        context: 'Arpinum represented the Italian countryside outside traditional Roman elite circles. Its citizens had full Roman rights but lacked the social connections essential for political advancement in Rome.'
    },
    'novus-homo': {
        term: 'Novus Homo',
        definition: 'A "new man"—the first in his family to reach the Senate and achieve high office, lacking noble ancestry.',
        context: 'Novi homines faced enormous disadvantages in Roman politics, lacking family networks, client relationships, and inherited prestige. Success required exceptional ability or popular support. Only a handful achieved the consulship.'
    },
    'nobiles': {
        term: 'Nobiles',
        definition: 'The hereditary nobility composed of families who had held the consulship.',
        context: 'The nobiles dominated Republican politics through inherited advantages: wealth, client networks, political expertise, and social prestige. They viewed novi homines like Marius as dangerous upstarts threatening traditional order.'
    },
    'assidui': {
        term: 'Assidui',
        definition: 'Landowning citizens wealthy enough to afford military equipment and therefore eligible for army service under the traditional system.',
        context: 'The traditional Roman military system depended on assidui who had property to defend. As warfare became more prolonged and distant, this limited recruitment pool proved inadequate for Rome\'s expanding empire.'
    },
    'capite-censi': {
        term: 'Capite Censi',
        definition: 'The "head count"—landless poor citizens counted only by their heads in the census, previously excluded from military service due to their inability to afford equipment.',
        context: 'Marius\'s recruitment of capite censi revolutionised Roman armies but created soldiers entirely dependent on their generals for livelihood and retirement provision, fundamentally altering military loyalty from state to commander.'
    },
    'gladius': {
        term: 'Gladius',
        definition: 'The standard Roman short sword (about 50-60cm blade), designed for close-quarters stabbing combat in formation.',
        context: 'The gladius was devastatingly effective in disciplined formation fighting. Its short length forced close engagement where Roman training and armour gave significant advantages over less-organised enemies.'
    },
    'scutum': {
        term: 'Scutum',
        definition: 'The large curved rectangular shield (about 120cm tall) carried by Roman legionaries, made of laminated wood covered with leather and canvas.',
        context: 'The scutum provided excellent protection and could be used offensively in shield-wall formations. Standardising this equipment across all soldiers enabled consistent tactical capabilities.'
    },
    'pilum': {
        term: 'Pilum',
        definition: 'The Roman javelin (about 2m long) with an iron shank designed to bend on impact, preventing enemies from throwing it back and disabling their shields.',
        context: 'The pilum was a sophisticated weapon demonstrating Roman engineering. Thrown just before close combat, it disrupted enemy formations and neutralised shield walls, creating openings for gladius attacks.'
    },
    'marian-mule': {
        term: 'Marian Mule',
        definition: 'Nickname for soldiers who carried their own equipment and supplies (about 30kg) on marches, reducing dependence on baggage trains.',
        context: 'The "mules" reform increased army mobility and self-sufficiency, enabling longer campaigns in remote territories. However, it also increased the physical demands on individual soldiers and required extensive conditioning.'
    },
    'cimbri': {
        term: 'Cimbri',
        definition: 'Germanic tribe that migrated south from their homeland (possibly modern Denmark/northern Germany) and invaded Roman territories, threatening Italy itself.',
        context: 'The Cimbri represented a new type of enemy—migrating peoples with families and possessions rather than territorial states. Their desperation and numbers made them formidable, requiring professional armies to defeat.'
    },
    'teutones': {
        term: 'Teutones',
        definition: 'Celtic or Germanic tribe allied with the Cimbri in their migration and attacks on Roman territories in Gaul.',
        context: 'The Teutones, like the Cimbri, were migrating populations seeking new lands. Their mobility and willingness to fight to the death required different military responses than conventional territorial warfare.'
    },
    'arausio': {
        term: 'Battle of Arausio',
        definition: 'Catastrophic Roman defeat in 105 BC where approximately 80,000 Romans and allies died, making it one of Rome\'s worst military disasters.',
        context: 'Arausio exposed how aristocratic incompetence and class prejudice endangered Rome. Two commanders refused to cooperate due to rivalry, allowing barbarians to defeat divided Roman forces separately.'
    },
    'jugurthine-war': {
        term: 'Jugurthine War',
        definition: 'Roman conflict against King Jugurtha of Numidia (112-105 BC) that exposed senatorial corruption and incompetence.',
        context: 'The war dragged on for years because Jugurtha bribed senatorial commanders to avoid decisive defeat. Popular anger at elite failures created the opportunity for Marius\'s consulship and reforms.'
    },
    'numantine-war': {
        term: 'Numantine War',
        definition: 'Roman siege of the Spanish city of Numantia (143-133 BC) that demonstrated problems with traditional recruitment and discipline.',
        context: 'The lengthy siege exposed weaknesses in citizen-militia armies and provided early experience for future reformers. Scipio Aemilianus eventually captured the city through superior discipline and organisation.'
    }
};

// Figures Data
const figures = {
    'gaius-marius': {
        name: 'Gaius Marius',
        dates: '157-86 BC',
        role: 'General, seven-time consul, military reformer',
        significance: 'Transformed Roman military recruitment, creating professional armies that saved Rome from barbarian invasion but made civil war almost inevitable by creating armies loyal to generals rather than the state.'
    },
    'scipio-aemilianus': {
        name: 'Scipio Aemilianus',
        dates: '185-129 BC',
        role: 'General and patron of Marius',
        significance: 'Destroyer of Carthage and Numantia who gave Marius early military experience and valuable patronage. His support helped launch Marius\'s career despite lacking elite family connections.'
    },
    'jugurtha': {
        name: 'Jugurtha',
        dates: 'c. 160-104 BC',
        role: 'King of Numidia',
        significance: 'His war with Rome (112-105 BC) revealed senatorial corruption and incompetence, creating the crisis that brought Marius to power as a reforming outsider promising swift victory through competence rather than connections.'
    },
    'saturninus': {
        name: 'Lucius Appuleius Saturninus',
        dates: 'c. 138-100 BC',
        role: 'Tribune and popularis politician',
        significance: 'Allied with Marius to secure land for veterans through controversial legislation. His violent methods and eventual suppression by Marius damaged Marius\'s popularis credentials and illustrated the impossible contradictions of Late Republican politics.'
    }
};

// Concepts Data
const concepts = {
    'client-armies': {
        concept: 'Client Armies',
        explanation: 'Professional armies loyal to their commanding generals rather than to the Roman state, created by Marius\'s recruitment of landless poor who depended entirely on their commanders for pay, advancement, and retirement rewards.',
        importance: 'Client armies gave ambitious generals independent power bases that could challenge traditional institutions. Soldiers dependent on generals for land grants would follow them anywhere—even against Rome itself. Every subsequent civil war stemmed from generals using personal armies for political purposes.'
    },
    'exceptional-commands': {
        concept: 'Exceptional Commands',
        explanation: 'Extraordinary military appointments that violated normal Republican procedures, such as Marius\'s five consecutive consulships (104-100 BC) or election in absentia whilst still campaigning abroad.',
        importance: 'Exceptional commands established precedents for overriding constitutional limits during crises. Once demonstrated that emergency could justify breaking fundamental rules (annual magistrates, term limits, shared power), later generals like Pompey and Caesar exploited similar justifications to accumulate unprecedented authority.'
    }
};

// Interactive Content Setup
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeReforms();
    
    setTimeout(() => {
        setupInteractiveContent();
    }, 100);
});

// Navigation Functions
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            showSection(this.getAttribute('data-section'));
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

// Initialize Reform Cards
function initializeReforms() {
    const cardsContainer = document.getElementById('reform-cards');
    const detailsContainer = document.getElementById('reform-details');
    
    if (!cardsContainer || !detailsContainer) return;
    
    // Create reform cards
    reformsData.reforms.forEach(reform => {
        const cardEl = document.createElement('div');
        cardEl.className = 'reform-card';
        cardEl.onclick = () => showReform(reform.id);
        cardEl.innerHTML = `
            <div class="reform-icon">${reform.icon}</div>
            <div class="reform-title">${reform.title}</div>
            <div class="reform-subtitle">${reform.subtitle}</div>
        `;
        cardsContainer.appendChild(cardEl);
    });
    
    // Create default content
    const defaultContent = document.createElement('div');
    defaultContent.className = 'reform-content active';
    defaultContent.id = 'reform-default';
    defaultContent.innerHTML = `
        <h4>${reformsData.defaultContent.title}</h4>
        ${reformsData.defaultContent.html}
    `;
    detailsContainer.appendChild(defaultContent);
    
    // Create content for each reform
    reformsData.reforms.forEach(reform => {
        const contentEl = document.createElement('div');
        contentEl.className = 'reform-content';
        contentEl.id = `reform-${reform.id}`;
        contentEl.innerHTML = `
            <h4>${reform.content.title}</h4>
            ${reform.content.html}
        `;
        detailsContainer.appendChild(contentEl);
    });
}

function showReform(reformId) {
    // Remove active class from all cards and content
    document.querySelectorAll('.reform-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelectorAll('.reform-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to clicked card
    event.target.closest('.reform-card').classList.add('active');
    
    // Show corresponding content
    const contentId = 'reform-' + reformId;
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.add('active');
        setupInteractiveContent();
    }
}

// Interactive Content Functions
function setupInteractiveContent() {
    // Setup key terms
    document.querySelectorAll('.key-term').forEach(term => {
        const newTerm = term.cloneNode(true);
        term.parentNode.replaceChild(newTerm, term);
        
        newTerm.addEventListener('click', function(e) {
            e.stopPropagation();
            const definition = this.dataset.definition;
            showDefinition(definition);
        });
    });

    // Setup key figures
    document.querySelectorAll('.key-figure').forEach(figure => {
        const newFigure = figure.cloneNode(true);
        figure.parentNode.replaceChild(newFigure, figure);
        
        newFigure.addEventListener('click', function(e) {
            e.stopPropagation();
            const info = this.dataset.info;
            showFigureInfo(info);
        });
    });

    // Setup key concepts
    document.querySelectorAll('.key-concept').forEach(concept => {
        const newConcept = concept.cloneNode(true);
        concept.parentNode.replaceChild(newConcept, concept);
        
        newConcept.addEventListener('click', function(e) {
            e.stopPropagation();
            const conceptId = this.dataset.concept;
            showConceptExplanation(conceptId);
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
    
    // Auto-hide after 15 seconds
    setTimeout(() => {
        panel.classList.remove('active');
    }, 15000);
}

function closeInfoPanel() {
    document.getElementById('info-panel').classList.remove('active');
}
