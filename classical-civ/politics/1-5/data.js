// Factions Data
const factionsData = {
    factions: [
        {
            id: 'optimates',
            icon: '⚖️',
            name: 'Optimates',
            subtitle: '"The Best Men" - Traditionalists',
            borderColor: '#6c757d',
            content: {
                title: 'Optimates: The Self-Proclaimed "Best Men"',
                html: `
                    <p>The <span class="key-term" data-definition="optimates">optimates</span> (meaning "the best men") were the self-proclaimed defenders of traditional Republican values. They aimed to protect the authority of the <span class="key-term" data-definition="senate">Senate</span>, uphold the <span class="key-term" data-definition="mos-maiorum">mos maiorum</span> (customs of the ancestors), and resist threats to the existing order.</p>
                    
                    <div class="primary-source">
                        The good man defends the Republic by defending its traditions.
                        <div class="source-citation">— Cato the Younger, as quoted in Plutarch</div>
                    </div>
                    
                    <p><strong>Key beliefs and strategies:</strong></p>
                    <ul>
                        <li>Use of the Senate and traditional magistracies to exercise control</li>
                        <li>Resistance to reform movements, especially land redistribution</li>
                        <li>Preference for gradualism and legal procedure over revolutionary change</li>
                        <li>Opposition to popular assemblies bypassing senatorial authority</li>
                        <li>Defence of property rights and existing social hierarchies</li>
                    </ul>

                    <p><strong>Methods:</strong> Optimates preferred to work through established institutions—the Senate, consuls, and traditional magistrates. They used legal procedures, senatus consulta, and constitutional precedent to block reforms they saw as dangerous.</p>

                    <p><strong>Social base:</strong> Primarily drawn from established senatorial families, wealthy landowners, and those who benefited from the existing system. They claimed to represent Roman tradition against demagogic innovation.</p>

                    <p><strong>Famous optimates:</strong> <span class="key-figure" data-info="cato-younger">Cato the Younger</span> was unflinching in his defence of tradition and moral purity. <span class="key-figure" data-info="cicero">Cicero</span> (at times) promoted concordia ordinum but opposed demagogues like <span class="key-figure" data-info="clodius">Clodius</span>. <span class="key-figure" data-info="bibulus">Bibulus</span> attempted to block <span class="key-figure" data-info="caesar">Caesar's</span> legislation as consul.</p>

                    <p><strong>Contradictions:</strong> Despite claiming to defend the Republic, optimates sometimes supported extraordinary commands and even dictatorships when it served their interests. <span class="key-figure" data-info="sulla">Sulla's</span> dictatorship was backed by many optimates who benefited from his proscriptions and constitutional changes.</p>
                `
            }
        },
        {
            id: 'populares',
            icon: '🏛️',
            name: 'Populares',
            subtitle: '"Men of the People" - Reformers',
            borderColor: '#28a745',
            content: {
                title: 'Populares: Bypassing the Senate',
                html: `
                    <p>The <span class="key-term" data-definition="populares">populares</span> ("men of the people") used the <span class="key-term" data-definition="popular-assemblies">popular assemblies</span> and <span class="key-term" data-definition="tribunes">tribunes</span> of the plebs to bypass senatorial opposition and appeal directly to the <span class="key-concept" data-concept="populus-romanus">Roman people</span> (populus Romanus). Their policies often focused on land redistribution, grain supply, citizenship rights, and military rewards.</p>

                    <p><strong>Tactics and outlook:</strong></p>
                    <ul>
                        <li>Appeal to the urban poor and Italian allies seeking citizenship</li>
                        <li>Use of laws and plebiscites pushed through the Tribal Assembly</li>
                        <li>Rhetoric of libertas, justice, and reform against senatorial privilege</li>
                        <li>Public works and entertainment to gain popular support</li>
                        <li>Military settlements and veteran colonies for land distribution</li>
                        <li>Alliance with tribunes of the plebs for legislative power</li>
                    </ul>

                    <p><strong>Key populares:</strong> <span class="key-figure" data-info="tiberius-gracchus">Tiberius</span> and <span class="key-figure" data-info="gaius-gracchus">Gaius Gracchus</span> were pioneering land reformers who challenged senatorial privilege and paid with their lives. <span class="key-figure" data-info="caesar">Julius Caesar</span> used popular support and public generosity to gain power, combining popularis rhetoric with personal ambition. <span class="key-figure" data-info="clodius">Clodius Pulcher</span> was a tribune who used populism and violence to dominate politics.</p>

                    <p><strong>Important caution:</strong> "Popularis" does not mean left-wing or democratic in a modern sense. Populares could be wealthy aristocrats manipulating the crowd for personal advancement. <span class="key-figure" data-info="caesar">Caesar</span> was one of Rome's richest men, yet used popularis methods to achieve unprecedented power.</p>

                    <p><strong>Popular policies:</strong> Land redistribution for veterans and poor citizens, subsidised grain distributions (annona), public works providing employment, extension of citizenship to Italian allies, and debt relief measures.</p>

                    <p><strong>Opposition tactics:</strong> Optimates accused populares of being demagogues who corrupted the people with bribes and false promises. They claimed popularis policies would bankrupt the state and destroy traditional Roman values.</p>
                `
            }
        },
        {
            id: 'boni',
            icon: '🛡️',
            name: 'Boni',
            subtitle: '"The Good Men" - Moral Guardians',
            borderColor: '#007bff',
            content: {
                title: 'Boni: The Moral High Ground',
                html: `
                    <p>The <span class="key-term" data-definition="boni">boni</span> ("the good men") were a conservative label for those senators regarded as morally upright and politically reliable. The term often overlapped with the optimates, though it implied personal character as well as political alignment.</p>

                    <p><strong>Characteristics:</strong></p>
                    <ul>
                        <li>Emphasis on personal virtue and moral integrity</li>
                        <li>Opposition to corruption, bribery, and political violence</li>
                        <li>Support for traditional Roman values and customs</li>
                        <li>Resistance to revolutionary change and radical reform</li>
                        <li>Preference for consensus and constitutional procedure</li>
                    </ul>

                    <p><strong>Cicero's vision:</strong> Promoted by <span class="key-figure" data-info="cicero">Cicero</span> to refer to men of virtus, auctoritas, and fides. He envisioned the boni as a moral coalition transcending class divisions—senators and equites united by shared values rather than economic interests.</p>

                    <p><strong>Rhetorical function:</strong> The term was used rhetorically to exclude political opponents as dangerous or corrupt. By definition, anyone opposing the boni was among the "bad men" (mali) who threatened the Republic's moral foundations.</p>

                    <p><strong>Key figures:</strong> <span class="key-figure" data-info="cicero">Cicero</span> saw himself as the leading bonus, defending the Republic through oratory and moral authority. <span class="key-figure" data-info="cato-younger">Cato the Younger</span> embodied the boni ideal through his inflexible virtue and resistance to corruption.</p>

                    <p><strong>Practical limitations:</strong> The boni ideal was often more rhetorical than real. Many "good men" engaged in the same corrupt practices they condemned in others. The moral high ground was frequently claimed by politicians whose actions contradicted their principles.</p>

                    <p><strong>Historical irony:</strong> The boni failed to prevent the Republic's collapse despite their claims to moral superiority. Their inflexibility and inability to compromise may have contributed to the political breakdown they sought to prevent.</p>
                `
            }
        }
    ],
    defaultContent: {
        title: 'Political Labels and Reality',
        html: `
            <p>Click on any faction above to explore its characteristics, methods, and key figures. These labels provided a vocabulary for Republican politics, but politicians often moved between them as circumstances changed.</p>
            <p><strong>Key insight:</strong> Modern historians increasingly question whether these were genuine ideological movements or simply convenient labels used to justify actions and attack enemies. The same policies might be called "traditional" or "revolutionary" depending on who was describing them.</p>
        `
    }
};

// Beard Analysis Content - Updated with image HTML
const beardAnalysisContent = `
    <div class="scholar-profile">
        <img src="../images/beard.jpg" alt="Mary Beard" class="scholar-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="scholar-image-fallback" style="display: none;">📚</div>
        <div class="scholar-info">
            <div class="scholar-name">Professor Mary Beard</div>
            <div class="scholar-description">Cambridge University classicist and popular historian, author of <em>SPQR: A History of Ancient Rome</em> (2015)</div>
        </div>
    </div>
    
    <p>Historian <strong><span class="key-figure" data-info="mary-beard">Mary Beard</span></strong> in <em>SPQR</em> (2015) argues that Roman political labels like "popularis" and "optimate" functioned primarily as <strong>weapons of political discourse</strong> rather than meaningful ideological categories.</p>
    
    <p><strong>Beard's key argument:</strong> These terms were "political insults and rallying cries" designed to discredit opponents and justify actions. Calling someone a "demagogue" or "enemy of the people" was more important than actual policy differences.</p>
    
    <div class="evidence-section">
        <h4>Evidence that supports Beard's view:</h4>
        <ul>
            <li><strong>Cicero's rhetoric:</strong> He called the same policies "traditional" when he supported them and "revolutionary" when opponents proposed them</li>
            <li><strong>Caesar's flexibility:</strong> Used popularis methods while accumulating unprecedented personal power</li>
            <li><strong>Pompey's changes:</strong> Moved from popularis to optimate based on convenience, not conviction</li>
            <li><strong>Contemporary confusion:</strong> Ancient sources often disagree about which faction politicians belonged to</li>
        </ul>
    </div>

    <div class="challenge-section">
        <h4>Evidence that challenges Beard's view:</h4>
        <ul>
            <li><strong>Policy consistency:</strong> Populares consistently supported land redistribution, grain subsidies, and citizenship extension</li>
            <li><strong>Cato's principles:</strong> Some politicians like Cato never changed their factional alignment despite personal cost</li>
            <li><strong>Social bases:</strong> Different factions appealed to different constituencies (urban poor vs. landed elite)</li>
            <li><strong>Gracchi legacy:</strong> The popularis "tradition" inspired later politicians like Saturninus and Sulpicius</li>
        </ul>
    </div>

    <div class="assessment-prompt">
        <p><strong>Critical thinking question:</strong> Does the evidence from Late Republican politics support Beard's view that factional labels were primarily rhetorical weapons, or do you think there were genuine ideological differences between optimates and populares? Consider both the consistency of policies and the flexibility of politicians in your answer.</p>
    </div>
    
    <p><strong>Modern relevance:</strong> Beard's analysis helps us understand how political language works in any system—labels can be used to attack opponents even when the underlying policies are similar. This insight applies to both ancient Rome and contemporary politics.</p>
`;

// Timeline Events Data
const timelineEvents = [
    {
        date: '133 BC',
        title: 'Tiberius Gracchus Killed',
        description: 'First major factional violence. Optimates kill popularis tribune, establishing precedent for political murder.'
    },
    {
        date: '121 BC',
        title: 'Gaius Gracchus Dies',
        description: 'Second Gracchus brother killed after popularis reforms. Senate passes first senatus consultum ultimum.'
    },
    {
        date: '88-82 BC',
        title: 'Marius vs Sulla Civil Wars',
        description: 'Factional conflict becomes full civil war. Sulla\'s victory leads to optimates-dominated constitution.'
    },
    {
        date: '70 BC',
        title: 'Pompey-Crassus Consulship',
        description: 'Popularis politicians dismantle Sulla\'s constitution, restoring tribunician power.'
    },
    {
        date: '60 BC',
        title: 'First Triumvirate',
        description: 'Caesar, Pompey, and Crassus bypass factional politics through private alliance.'
    },
    {
        date: '58-52 BC',
        title: 'Clodius\'s Tribunate and Violence',
        description: 'Popularis tribune uses organized gangs, making normal government impossible.'
    },
    {
        date: '49-44 BC',
        title: 'Caesar\'s Dictatorship',
        description: 'Popularis general becomes dictator, ending Republican government.'
    },
    {
        date: '44-31 BC',
        title: 'Final Civil Wars',
        description: 'Factional labels become meaningless as warlords fight for personal supremacy.'
    }
];

// Politicians Data
const politicians = [
    {
        id: 'caesar',
        name: 'Julius Caesar',
        icon: '👑',
        label: 'Popularis',
        description: 'Used popular assemblies and public generosity to bypass the Senate and gain unprecedented power.'
    },
    {
        id: 'cicero',
        name: 'Marcus Tullius Cicero',
        icon: '📜',
        label: 'Boni / Optimates',
        description: 'Claimed leadership of the "good men" but allied with different factions when convenient.'
    },
    {
        id: 'clodius',
        name: 'Publius Clodius',
        icon: '⚡',
        label: 'Popularis',
        description: 'Used tribunician power and street violence to pursue personal vendettas and political dominance.'
    },
    {
        id: 'cato',
        name: 'Cato the Younger',
        icon: '👤',
        label: 'Optimates / Boni',
        description: 'Embodied traditional Republican virtue and inflexible opposition to reform and corruption.'
    },
    {
        id: 'pompey',
        name: 'Pompey the Great',
        icon: '🏆',
        label: 'Variable',
        description: 'Cooperated with both optimates and populares at different stages of his career.'
    },
    {
        id: 'gracchi',
        name: 'The Gracchi',
        icon: '⚖️',
        label: 'Populares',
        description: 'Pioneered popularis methods with land reform and appeals to popular assemblies.'
    }
];

// Definitions Data
const definitions = {
    'optimates': {
        term: 'Optimates',
        definition: 'The "best men" - Roman politicians who claimed to defend traditional Republican values and senatorial authority.',
        context: 'Self-proclaimed defenders of tradition who opposed popular reforms and preferred to work through established institutions. However, they sometimes supported extraordinary commands when it served their interests.'
    },
    'populares': {
        term: 'Populares',
        definition: 'Politicians who used popular assemblies and tribunician power to bypass the Senate and appeal directly to the Roman people.',
        context: 'Not democratic in a modern sense—populares could be wealthy aristocrats using popular methods for personal advantage. Their policies often focused on land reform, grain distribution, and citizenship extension.'
    },
    'boni': {
        term: 'Boni',
        definition: 'The "good men" - a moral rather than political label for senators regarded as upright and reliable.',
        context: 'Promoted by Cicero to refer to men of virtue, authority, and good faith. Used rhetorically to exclude political opponents as corrupt or dangerous.'
    },
    'senate': {
        term: 'Senate',
        definition: 'The advisory council of former magistrates that claimed supreme authority over Roman policy and administration.',
        context: 'The Senate had no formal legislative power but wielded enormous influence through auctoritas. Optimates sought to preserve senatorial dominance, while populares often bypassed it through popular assemblies.'
    },
    'mos-maiorum': {
        term: 'Mos Maiorum',
        definition: 'The "customs of the ancestors" - traditional Roman practices and values passed down through generations.',
        context: 'Optimates claimed to defend mos maiorum against dangerous innovations, though they sometimes ignored tradition when convenient. The concept was used to legitimize existing power structures.'
    },
    'popular-assemblies': {
        term: 'Popular Assemblies',
        definition: 'The Tribal Assembly and Centuriate Assembly where Roman citizens voted on legislation and elected magistrates.',
        context: 'Populares preferred these assemblies because they could appeal directly to voters, bypassing senatorial opposition. However, assemblies could be manipulated through bribery, intimidation, and procedural tricks.'
    },
    'tribunes': {
        term: 'Tribunes of the Plebs',
        definition: 'Magistrates elected to protect plebeian interests, with power to veto legislation and prosecute officials.',
        context: 'Essential to popularis strategy because they could propose legislation directly to assemblies and veto senatorial actions. Optimates often tried to neutralize tribunician power.'
    }
};

// Figures Data
const figures = {
    'mary-beard': {
        name: 'Professor Mary Beard',
        dates: 'b. 1955',
        role: 'Cambridge classicist and popular historian',
        significance: 'Author of SPQR (2015) who argues that Roman political labels functioned as weapons of discourse rather than meaningful ideological categories. Her accessible scholarship brings ancient history to modern audiences.'
    },
    'caesar': {
        name: 'Gaius Julius Caesar',
        dates: '100-44 BC',
        role: 'General, politician, dictator',
        significance: 'Master popularis politician who used popular assemblies and public generosity to bypass the Senate. His career showed how popularis methods could serve autocratic rather than democratic ends.'
    },
    'cicero': {
        name: 'Marcus Tullius Cicero',
        dates: '106-43 BC',
        role: 'Orator, philosopher, politician',
        significance: 'Claimed leadership of the boni and promoted concordia ordinum, but his factional alignments shifted based on political necessity. His career exemplified the gap between principled rhetoric and pragmatic politics.'
    },
    'cato-younger': {
        name: 'Marcus Porcius Cato (the Younger)',
        dates: '95-46 BC',
        role: 'Stoic philosopher and optimate politician',
        significance: 'The most consistent factional politician of his era, never deviating from optimates principles despite personal cost. His inflexibility made him both admirable and politically ineffective.'
    },
    'clodius': {
        name: 'Publius Clodius Pulcher',
        dates: 'c. 93-52 BC',
        role: 'Tribune and popularis politician',
        significance: 'Used popularis methods for personal vendettas rather than genuine reform. His career questioned whether popularis tactics necessarily served popularis goals.'
    },
    'tiberius-gracchus': {
        name: 'Tiberius Sempronius Gracchus',
        dates: '168-133 BC',
        role: 'Tribune and land reformer',
        significance: 'Pioneered popularis methods by bypassing the Senate through tribunician power and popular assemblies. His assassination established violent precedent for factional conflict.'
    },
    'gaius-gracchus': {
        name: 'Gaius Sempronius Gracchus',
        dates: '154-121 BC',
        role: 'Tribune and popularis politician',
        significance: 'Expanded popularis methods with grain subsidies, public works, and judicial reforms. His death in factional violence showed how political competition could become deadly.'
    },
    'bibulus': {
        name: 'Marcus Calpurnius Bibulus',
        dates: 'c. 102-48 BC',
        role: 'Consul and optimate politician',
        significance: 'Caesar\'s optimate colleague as consul (59 BC) who tried unsuccessfully to block popularis legislation. His ineffectiveness showed the weakness of traditional methods against popularis innovation.'
    },
    'sulla': {
        name: 'Lucius Cornelius Sulla',
        dates: '138-78 BC',
        role: 'General and dictator',
        significance: 'Optimate champion who used civil war and dictatorship to impose conservative constitution. His career showed how optimates could abandon Republican principles when expedient.'
    },
    'pompey': {
        name: 'Gnaeus Pompeius Magnus',
        dates: '106-48 BC',
        role: 'General and politician',
        significance: 'Changed factional alignments throughout his career based on political advantage. His flexibility demonstrated how successful politicians transcended factional boundaries.'
    },
    'antony': {
        name: 'Marcus Antonius',
        dates: '83-30 BC',
        role: 'General and politician',
        significance: 'Caesar\'s popularis lieutenant who became an Eastern monarch. His transformation showed how factional labels became meaningless in the final civil wars.'
    },
    'octavian': {
        name: 'Gaius Octavius (Later Augustus)',
        dates: '63 BC-14 AD',
        role: 'Caesar\'s heir and first emperor',
        significance: 'Claimed to restore the Republic while systematically destroying Republican institutions. His propaganda showed how factional rhetoric could mask autocratic reality.'
    }
};

// Concepts Data
const concepts = {
    'political-factions': {
        concept: 'Political Factions',
        explanation: 'Informal groupings of Roman politicians sharing similar methods, goals, or mutual interests rather than formal party structures.',
        importance: 'Understanding factions is essential for Republican politics, but modern historians question whether they were genuine ideological movements or convenient rhetorical labels used to justify actions and attack enemies.'
    },
    'populus-romanus': {
        concept: 'Populus Romanus',
        explanation: 'The Roman people - all male citizens who could vote in assemblies and serve in the army.',
        importance: 'Populares claimed to represent the populus against senatorial oppression, though "the people" excluded women, slaves, and non-citizens. The concept was often manipulated for political advantage.'
    },
    'military-commanders': {
        concept: 'Military Commanders with Personal Armies',
        explanation: 'Generals like Marius, Sulla, Pompey, and Caesar who commanded troops loyal to them personally rather than the state.',
        importance: 'These commanders could use military force to override factional politics and constitutional restraints. Their rise marked the transition from Republican to autocratic government.'
    }
};

// Initialize Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    initializeFactions();
    initializeBeardAnalysis();
    initializeTimeline();
    initializePoliticians();
    
    // Delay to ensure all content is rendered
    setTimeout(() => {
        setupInteractiveContent();
    }, 100);
});

// Initialize Factions
function initializeFactions() {
    const gridContainer = document.getElementById('factions-grid');
    const detailsContainer = document.getElementById('faction-details');
    
    if (!gridContainer || !detailsContainer) return;
    
    // Create faction cards
    factionsData.factions.forEach(faction => {
        const cardEl = document.createElement('div');
        cardEl.className = `faction-card ${faction.id}`;
        cardEl.style.borderLeftColor = faction.borderColor;
        cardEl.onclick = () => showFactionContent(faction.id);
        cardEl.innerHTML = `
            <span class="faction-icon">${faction.icon}</span>
            <div class="faction-name">${faction.name}</div>
            <div class="faction-subtitle">${faction.subtitle}</div>
        `;
        gridContainer.appendChild(cardEl);
    });
    
    // Create default content
    const defaultContent = document.createElement('div');
    defaultContent.className = 'faction-content active';
    defaultContent.id = 'faction-default';
    defaultContent.innerHTML = `
        <h3>${factionsData.defaultContent.title}</h3>
        ${factionsData.defaultContent.html}
    `;
    detailsContainer.appendChild(defaultContent);
    
    // Create content for each faction
    factionsData.factions.forEach(faction => {
        const contentEl = document.createElement('div');
        contentEl.className = 'faction-content';
        contentEl.id = `faction-${faction.id}`;
        contentEl.innerHTML = `
            <h3>${faction.content.title}</h3>
            ${faction.content.html}
        `;
        detailsContainer.appendChild(contentEl);
    });
}

function showFactionContent(factionId) {
    // Remove active class from all cards and content
    document.querySelectorAll('.faction-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelectorAll('.faction-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to clicked card
    event.target.closest('.faction-card').classList.add('active');
    
    // Show corresponding content
    const contentId = 'faction-' + factionId;
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.add('active');
    }
    
    // Re-setup interactive content
    setupInteractiveContent();
}

// Initialize Beard Analysis
function initializeBeardAnalysis() {
    const beardContainer = document.getElementById('beard-content');
    if (beardContainer) {
        beardContainer.innerHTML = beardAnalysisContent;
    }
}

// Initialize Timeline
function initializeTimeline() {
    const timelineContainer = document.getElementById('timeline-events');
    if (!timelineContainer) return;
    
    timelineEvents.forEach(event => {
        const eventEl = document.createElement('div');
        eventEl.className = 'timeline-event';
        eventEl.innerHTML = `
            <div class="timeline-date">${event.date}</div>
            <div class="timeline-title">${event.title}</div>
            <div class="timeline-description">${event.description}</div>
        `;
        timelineContainer.appendChild(eventEl);
    });
}

// Initialize Politicians - UPDATED WITH IMAGES
function initializePoliticians() {
    const cardsContainer = document.getElementById('politician-cards');
    if (!cardsContainer) return;
    
    politicians.forEach(politician => {
        const cardEl = document.createElement('div');
        cardEl.className = 'politician-card';
        cardEl.onclick = () => showPoliticianInfo(politician.id);
        cardEl.innerHTML = `
            <img src="../images/${politician.id}.jpg" alt="${politician.name}" class="politician-portrait" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="politician-portrait-fallback" style="display: none;">${politician.icon}</div>
            <div class="politician-name">${politician.name}</div>
            <div class="politician-label">${politician.label}</div>
            <div class="politician-description">${politician.description}</div>
        `;
        cardsContainer.appendChild(cardEl);
    });
}

function showPoliticianInfo(politicianId) {
    // Highlight the clicked card
    document.querySelectorAll('.politician-card').forEach(card => {
        card.style.borderColor = '#e9ecef';
    });
    event.target.closest('.politician-card').style.borderColor = '#0066ff';
    
    const politician = politicians.find(p => p.id === politicianId);
    if (politician) {
        showSidebar('Politician Selected', `
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 6px; border-left: 3px solid #0066ff;">
                <h4>${politician.name}</h4>
                <p><strong>Faction:</strong> ${politician.label}</p>
                <p>Click on highlighted terms and figures in the text to learn more about this politician's role in factional politics.</p>
            </div>
        `);
    }
}

// Interactive Content Functions
function setupInteractiveContent() {
    // Key terms - remove old listeners first
    document.querySelectorAll('.key-term').forEach(term => {
        const newTerm = term.cloneNode(true);
        term.parentNode.replaceChild(newTerm, term);
        
        newTerm.addEventListener('click', function(e) {
            e.stopPropagation();
            const definition = this.dataset.definition;
            showDefinition(definition);
        });
    });

    // Historical figures
    document.querySelectorAll('.key-figure').forEach(figure => {
        const newFigure = figure.cloneNode(true);
        figure.parentNode.replaceChild(newFigure, figure);
        
        newFigure.addEventListener('click', function(e) {
            e.stopPropagation();
            const info = this.dataset.info;
            showFigureInfo(info);
        });
    });

    // Key concepts
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
        showSidebar('Key Term', `
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 6px; border-left: 3px solid #0066ff;">
                <h4>${def.term}</h4>
                <p><strong>Definition:</strong> ${def.definition}</p>
                <p><strong>Historical Context:</strong> ${def.context}</p>
            </div>
        `);
    }
}

function showFigureInfo(figureId) {
    if (figures[figureId]) {
        const fig = figures[figureId];
        showSidebar('Historical Figure', `
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 6px; border-left: 3px solid #0066ff;">
                <h4>${fig.name}</h4>
                <p><strong>Dates:</strong> ${fig.dates}</p>
                <p><strong>Role:</strong> ${fig.role}</p>
                <p><strong>Historical Significance:</strong> ${fig.significance}</p>
            </div>
        `);
    }
}

function showConceptExplanation(conceptId) {
    if (concepts[conceptId]) {
        const concept = concepts[conceptId];
        showSidebar('Key Concept', `
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 6px; border-left: 3px solid #0066ff;">
                <h4>${concept.concept}</h4>
                <p><strong>Explanation:</strong> ${concept.explanation}</p>
                <p><strong>Historical Importance:</strong> ${concept.importance}</p>
            </div>
        `);
    }
}

function showSidebar(title, content) {
    const sidebar = document.getElementById('info-panel');
    
    // Clear existing content
    document.querySelectorAll('.sidebar-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Create new content
    const newContent = document.createElement('div');
    newContent.className = 'sidebar-content active';
    newContent.innerHTML = `
        <div class="sidebar-title">${title}</div>
        ${content}
    `;
    
    sidebar.appendChild(newContent);
    
    // Remove after delay
    setTimeout(() => {
        if (newContent.parentNode) {
            newContent.remove();
        }
    }, 30000);
}

// Modal Functions
function showInfoModal() {
    document.getElementById('infoModal').style.display = 'block';
}

function closeInfoModal() {
    document.getElementById('infoModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        closeInfoModal();
    }
}
