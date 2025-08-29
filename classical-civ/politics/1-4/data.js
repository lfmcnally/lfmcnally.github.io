// Ideals Data
const idealsData = {
    ideals: [
        {
            id: 'dignitas',
            icon: '🏆',
            latin: 'Dignitas',
            english: 'Personal Worth & Honour',
            content: {
                title: 'Dignitas: The Currency of Roman Politics',
                html: `
                    <p><span class="key-term" data-definition="dignitas">Dignitas</span> meant personal worth, honour, and reputation. It was earned through military victories, public service, oratory, and the visible support of the people. For Roman aristocrats, dignitas was more precious than life itself.</p>
                    
                    <div class="primary-source">
                        Dignity is preserved by honourable deeds and public service.
                        <div class="source-citation">— Cicero, <em>De Officiis</em> 1.106</div>
                    </div>
                    
                    <p><strong>How it was gained:</strong></p>
                    <ul>
                        <li>Military commands and victories (<span class="key-term" data-definition="imperium">imperium</span>)</li>
                        <li>Successful prosecution or defence in court</li>
                        <li>Holding high magistracies, especially the consulship</li>
                        <li>Giving magnificent games or public works</li>
                        <li>Impressive oratory in the Senate or Forum</li>
                    </ul>

                    <p><strong>Political consequences:</strong> A man's dignitas was central to his public image. Losing it—through exile, humiliation, or defeat—was a source of deep shame. Protecting or increasing it often justified ambitious or even illegal acts. <span class="key-figure" data-info="caesar">Caesar</span> famously claimed he crossed the Rubicon to preserve his dignitas against his enemies' attacks.</p>

                    <p><strong>The dark side:</strong> The pursuit of dignitas could lead to reckless ambition, corruption, and violence. Politicians might start unnecessary wars, prosecute innocent rivals, or break constitutional norms—all in the name of maintaining their honour.</p>
                `
            }
        },
        {
            id: 'auctoritas',
            icon: '⚖️',
            latin: 'Auctoritas',
            english: 'Moral Authority & Influence',
            content: {
                title: 'Auctoritas: Influence Beyond Legal Power',
                html: `
                    <p><span class="key-term" data-definition="auctoritas">Auctoritas</span> referred to influence and prestige—a kind of moral weight that went beyond formal legal authority. It was not the same as <span class="key-term" data-definition="imperium">imperium</span>, but could often achieve more through persuasion and respect.</p>

                    <p><strong>Sources of auctoritas:</strong></p>
                    <ul>
                        <li>Age, experience, and wisdom (especially for senior senators)</li>
                        <li>Past achievements and distinguished service</li>
                        <li>Reputation for integrity and good judgement</li>
                        <li>Skill in oratory and debate</li>
                        <li>Family lineage and ancestral honours</li>
                    </ul>

                    <p><strong>How it worked:</strong> A senator or statesman with great auctoritas could persuade others, sway debates, and dominate decisions without holding formal office. The Senate as a body claimed collective auctoritas over Roman policy, though it had no legal power to enforce its will.</p>

                    <p><strong>Cicero's auctoritas:</strong> <span class="key-figure" data-info="cicero">Cicero</span> built his auctoritas on his reputation as Rome's greatest orator, his successful consulship (defeating the Catiline conspiracy), and his defence of Republican traditions. Even as a <span class="key-term" data-definition="novus-homo">novus homo</span> without noble ancestry, his auctoritas rivalled that of ancient patrician families.</p>

                    <p><strong>Its limits:</strong> Auctoritas depended on others' willingness to listen and be persuaded. When politicians like <span class="key-figure" data-info="caesar">Caesar</span> and <span class="key-figure" data-info="pompey">Pompey</span> commanded armies and vast resources, traditional auctoritas often proved powerless against force.</p>
                `
            }
        },
        {
            id: 'libertas',
            icon: '🗽',
            latin: 'Libertas',
            english: 'Freedom from Tyranny',
            content: {
                title: 'Libertas: Freedom and Its Contradictions',
                html: `
                    <p><span class="key-term" data-definition="libertas">Libertas</span> (freedom) was a central Republican value, often defined in opposition to <span class="key-concept" data-concept="tyranny">tyranny</span>. For Romans, liberty meant freedom from domination by one man—especially a king or dictator—and the ability of citizens to participate in public life.</p>

                    <p><strong>What libertas meant:</strong></p>
                    <ul>
                        <li>Freedom from arbitrary rule by kings or tyrants</li>
                        <li>The right to vote in assemblies and courts</li>
                        <li>Protection under law rather than personal whim</li>
                        <li>Opportunity for political participation and advancement</li>
                        <li>Economic freedom and property rights</li>
                    </ul>

                    <p><strong>Political weapon:</strong> Libertas was used as a justification for opposing figures like <span class="key-figure" data-info="sulla">Sulla</span> and <span class="key-figure" data-info="caesar">Caesar</span>. However, its meaning could be twisted. Caesar claimed to defend the libertas of the people against senatorial oppression; the conspirators who killed him claimed to be restoring libertas from his dictatorship.</p>

                    <div class="primary-source">
                        We prefer liberty with danger to peace with slavery.
                        <div class="source-citation">— Sallust, <em>Bellum Catilinae</em> 20</div>
                    </div>

                    <p><strong>Contradictions:</strong> Roman "freedom" was compatible with slavery, imperial rule over other peoples, and the exclusion of women and non-citizens from political life. Libertas was essentially the freedom of Roman male citizens to compete for power and status—not universal human freedom.</p>

                    <p><strong>The assassins' claim:</strong> <span class="key-figure" data-info="brutus">Brutus</span> and his fellow conspirators killed Caesar on the Ides of March claiming to restore libertas to Rome. Yet their action triggered civil wars that ultimately destroyed the Republic they claimed to defend.</p>
                `
            }
        },
        {
            id: 'concordia',
            icon: '🤝',
            latin: 'Concordia Ordinum',
            english: 'Harmony of the Orders',
            content: {
                title: 'Concordia Ordinum: Cicero\'s Impossible Dream',
                html: `
                    <p>This phrase, coined by <span class="key-figure" data-info="cicero">Cicero</span>, means "harmony of the orders"—the idea that the <span class="key-term" data-definition="senatores">senatorial</span> and <span class="key-term" data-definition="equites">equestrian</span> classes should cooperate to govern Rome. Cicero saw this alliance as the best hope for preserving Republican order.</p>

                    <p><strong>Cicero's vision:</strong></p>
                    <ul>
                        <li>Senators would provide political leadership and wisdom</li>
                        <li>Equites would supply financial expertise and business acumen</li>
                        <li>Together they would resist popularis demagogues and military strongmen</li>
                        <li>Shared interests would create stability and good governance</li>
                        <li>Traditional values would be preserved against revolutionary change</li>
                    </ul>

                    <p><strong>Why it appealed:</strong> As a novus homo, Cicero had experienced both worlds—rising from equestrian rank to the consulship. He understood both groups' perspectives and genuinely believed they could work together for Rome's benefit.</p>

                    <p><strong>Why it failed:</strong> In reality, tensions between these orders often led to political conflict and violence. The equites wanted profitable tax contracts and business opportunities; senators often saw them as greedy and short-sighted. Economic interests frequently clashed with political principles.</p>

                    <p><strong>Historical irony:</strong> Cicero's own fate illustrated the failure of concordia ordinum. Despite his efforts to unite the elite, he was eventually proscribed and murdered by <span class="key-figure" data-info="antony">Mark Antony</span>—with the acquiescence of senators who should have been his natural allies.</p>
                `
            }
        },
        {
            id: 'otium',
            icon: '🏛️',
            latin: 'Otium cum Dignitate',
            english: 'Leisure with Dignity',
            content: {
                title: 'Otium cum Dignitate: The Peaceful Republic',
                html: `
                    <p>Literally "leisure with dignity," this phrase expressed the ideal state of peace where the elite could live a quiet life of reflection, culture, and political stability—with dignity intact. <span class="key-figure" data-info="cicero">Cicero</span> used it to describe his vision of a peaceful, hierarchical Republic.</p>

                    <p><strong>What it envisioned:</strong></p>
                    <ul>
                        <li>Internal peace with no civil wars or street violence</li>
                        <li>Stable constitutional government respecting tradition</li>
                        <li>Time for intellectual pursuits, literature, and philosophy</li>
                        <li>Dignified retirement for elder statesmen</li>
                        <li>Prosperity allowing cultural flourishing</li>
                    </ul>

                    <div class="primary-source">
                        The happiest life is lived in tranquillity, free from the storms of public affairs.
                        <div class="source-citation">— Cicero, <em>Letters to Atticus</em> 1.17</div>
                    </div>

                    <p><strong>Personal longing:</strong> Cicero's letters often show a yearning for this state of affairs, especially in later life as political violence escalated. Torn between duty to the Republic and desire for safety, he frequently expressed nostalgia for peaceful times.</p>

                    <p><strong>Class privilege:</strong> This ideal essentially assumed that the upper classes could enjoy cultured leisure while others did the work of governing and defending the state. It reflected aristocratic values rather than democratic ideals.</p>

                    <p><strong>Historical impossibility:</strong> The Late Republic never achieved otium cum dignitate. Instead, it was characterised by constant political struggle, violence, and civil war. Peace would only come under Augustus—but at the price of Republican freedom.</p>
                `
            }
        },
        {
            id: 'virtus',
            icon: '⚔️',
            latin: 'Virtus',
            english: 'Courage & Excellence',
            content: {
                title: 'Virtus: The Warrior\'s Excellence',
                html: `
                    <p><span class="key-term" data-definition="virtus">Virtus</span> originally meant "manliness" (from <em>vir</em>, man) but came to encompass courage, excellence, and moral strength. It was the fundamental quality expected of Roman leaders, especially in military contexts.</p>

                    <p><strong>Military virtus:</strong></p>
                    <ul>
                        <li>Courage in battle and willingness to face death</li>
                        <li>Leadership ability and tactical skill</li>
                        <li>Loyalty to comrades and dedication to victory</li>
                        <li>Endurance under hardship and discipline</li>
                        <li>Protection of Roman honour and territory</li>
                    </ul>

                    <p><strong>Civic virtus:</strong> The concept expanded to include moral excellence in political life—honesty, integrity, putting public good above private gain, and devotion to Republican traditions.</p>

                    <p><strong>Competing claims:</strong> All major Late Republican figures claimed virtus. <span class="key-figure" data-info="caesar">Caesar</span> demonstrated it through military genius; <span class="key-figure" data-info="pompey">Pompey</span> through his victories in the East; <span class="key-figure" data-info="cato-younger">Cato</span> through moral inflexibility; <span class="key-figure" data-info="cicero">Cicero</span> through oratorical defence of the state.</p>

                    <p><strong>Gender implications:</strong> Virtus was explicitly masculine—women were excluded from this ideal. This reinforced male dominance in politics and warfare while limiting concepts of civic excellence to half the population.</p>

                    <p><strong>Paradox:</strong> The pursuit of virtus could lead to its opposite. Politicians seeking to demonstrate their excellence might engage in unnecessary wars, corrupt practices, or violent competition—destroying the very values they claimed to embody.</p>
                `
            }
        }
    ],
    defaultContent: {
        title: 'Roman Political Values',
        html: `
            <p>Click on any ideal above to explore its meaning, historical significance, and how it was used in Late Republican politics. These concepts were not merely abstract principles—they were powerful tools of political rhetoric that could justify actions, attack enemies, and rally support.</p>
            <p><strong>Key insight:</strong> The same ideal could be interpreted differently by different politicians. Understanding how these values were manipulated is essential for grasping the complexity of Republican political discourse.</p>
        `
    }
};

// Stoic Details Content
const stoicDetailsContent = `
    <h4>Cato's Political Career: Principle in Practice</h4>
    
    <p><strong>As Quaestor (64 BC):</strong> Refused all bribes and investigated corruption in the treasury, recovering vast sums stolen by previous magistrates. He insisted on written receipts for all transactions, revolutionising financial administration.</p>

    <div class="primary-source">
        Cato considered the treasury not as his own property, but as a sacred trust of the Roman people.
        <div class="source-citation">— Plutarch, <em>Life of Cato</em> 16</div>
    </div>

    <p><strong>Opposition to the Triumvirate:</strong> Alone among major politicians, Cato consistently opposed the <span class="key-concept" data-concept="first-triumvirate">First Triumvirate</span>. When <span class="key-figure" data-info="caesar">Caesar</span> offered to make him son-in-law and partner, Cato refused, seeing it as corruption of the Republican system.</p>

    <p><strong>Filibustering Caesar's Land Bill:</strong> Used constitutional procedures to block legislation he saw as unconstitutional, speaking until nightfall to prevent votes. When Caesar had him physically removed from the Senate, Cato became a martyr for Republican traditions.</p>

    <p><strong>The Utica Suicide (46 BC):</strong> Rather than accept Caesar's clemency after Thapsus, Cato killed himself. His suicide became the ultimate symbol of Republican resistance—dying free rather than living under a tyrant.</p>

    <p><strong>Contemporary reactions:</strong> <span class="key-figure" data-info="caesar">Caesar</span> was reportedly furious at being denied the opportunity to show mercy. <span class="key-figure" data-info="cicero">Cicero</span> wrote a eulogy praising Cato's virtue. The suicide inspired both admiration and criticism—was it noble principle or stubborn pride?</p>

    <p><strong>Stoic legacy:</strong> Cato showed both the power and limitations of philosophical principles in politics. His unwillingness to compromise may have hastened the Republic's collapse, but it also preserved the ideal of virtue against overwhelming corruption.</p>
`;

// Definitions Data
const definitions = {
    'dignitas': {
        term: 'Dignitas',
        definition: 'Personal worth, honour, and reputation earned through public service, military success, and visible achievement.',
        context: 'For Roman aristocrats, dignitas was more precious than life itself. It could be increased through glory or destroyed through humiliation. Politicians often justified extreme actions by claiming to defend their dignitas.'
    },
    'auctoritas': {
        term: 'Auctoritas',
        definition: 'Moral authority and influence based on prestige, wisdom, and past achievement rather than legal power.',
        context: 'Auctoritas allowed senior statesmen to persuade and lead through respect rather than force. The Senate claimed collective auctoritas over Roman policy, though it had no legal power to enforce decisions.'
    },
    'libertas': {
        term: 'Libertas',
        definition: 'Political freedom, specifically freedom from domination by kings or tyrants and the right to participate in civic life.',
        context: 'A central Republican value that was often manipulated by competing politicians. Both Caesar and his assassins claimed to defend libertas, showing how the same ideal could justify opposing actions.'
    },
    'imperium': {
        term: 'Imperium',
        definition: 'Supreme executive power held by consuls, praetors, and provincial governors, including military command and judicial authority.',
        context: 'Unlike auctoritas, imperium was legal power that could be enforced. The tension between formal imperium and moral auctoritas was central to Republican politics.'
    },
    'virtus': {
        term: 'Virtus',
        definition: 'Courage, excellence, and moral strength, originally meaning "manliness" but extended to encompass all admirable qualities.',
        context: 'Expected of all Roman leaders, virtus combined military bravery with civic virtue. All major politicians claimed to possess it, making it a contested and sometimes meaningless concept.'
    },
    'novus-homo': {
        term: 'Novus Homo',
        definition: 'A "new man" - the first in his family to reach the Senate, lacking noble ancestry but rising through merit.',
        context: 'Men like Cicero and Marius faced prejudice from established families but could build auctoritas through exceptional achievement. Their success challenged traditional aristocratic dominance.'
    },
    'senatores': {
        term: 'Senatores',
        definition: 'Members of the Roman Senate, the highest social and political order, traditionally providing leadership and guidance.',
        context: 'Senators were expected to possess auctoritas and provide wisdom to guide the Republic. In reality, they often pursued personal interests and factional advantage.'
    },
    'equites': {
        term: 'Equites',
        definition: 'The equestrian order - wealthy Romans below senatorial rank, often involved in business, banking, and tax collection.',
        context: 'Cicero hoped to unite equites with senators in concordia ordinum, but economic interests often clashed with political principles, making lasting cooperation difficult.'
    }
};

// Figures Data
const figures = {
    'cicero': {
        name: 'Marcus Tullius Cicero',
        dates: '106-43 BC',
        role: 'Orator, philosopher, politician',
        significance: 'Greatest advocate for traditional Republican values, coining concepts like concordia ordinum. His letters and speeches provide our best insight into Late Republican ideals, though his career showed the difficulty of translating ideals into political success.'
    },
    'cato-younger': {
        name: 'Marcus Porcius Cato (the Younger)',
        dates: '95-46 BC',
        role: 'Stoic philosopher and politician',
        significance: 'Embodied Stoic principles in politics, refusing all compromise with corruption or tyranny. His suicide rather than live under Caesar made him a symbol of Republican virtue, though his inflexibility may have hastened the Republic\'s collapse.'
    },
    'caesar': {
        name: 'Gaius Julius Caesar',
        dates: '100-44 BC',
        role: 'General, politician, dictator',
        significance: 'Master of using traditional rhetoric to justify revolutionary actions. His claim to defend his dignitas whilst crossing the Rubicon showed how Republican ideals could be manipulated to destroy the Republic itself.'
    },
    'brutus': {
        name: 'Marcus Junius Brutus',
        dates: 'c. 85-42 BC',
        role: 'Politician and assassin',
        significance: 'Led the conspiracy against Caesar claiming to restore libertas to Rome. His ancestor had expelled the last king, making him a symbol of Republican tradition—though his actions triggered civil wars that destroyed the Republic.'
    },
    'pompey': {
        name: 'Gnaeus Pompeius Magnus',
        dates: '106-48 BC',
        role: 'General and politician',
        significance: 'Claimed to defend traditional Republican values whilst accumulating unprecedented personal power. His career showed the tension between maintaining Republican forms and exercising monarchical authority.'
    },
    'sulla': {
        name: 'Lucius Cornelius Sulla',
        dates: '138-78 BC',
        role: 'General and dictator',
        significance: 'Used traditional ideals to justify dictatorship and terror. His proscription lists and constitutional reforms showed how libertas could be destroyed in the name of preserving it.'
    },
    'antony': {
        name: 'Marcus Antonius',
        dates: '83-30 BC',
        role: 'General and politician',
        significance: 'One of Caesar\'s lieutenants who became his political heir. His rivalry with Octavian and relationship with Cleopatra were portrayed as threats to Roman values and traditions.'
    },
    'sallust': {
        name: 'Gaius Sallustius Crispus',
        dates: 'c. 86-35 BC',
        role: 'Historian and politician',
        significance: 'Former politician turned historian who wrote critically about the corruption of Republican ideals. His works provide insight into how contemporaries viewed the gap between rhetoric and reality.'
    },
    'clodius': {
        name: 'Publius Clodius Pulcher',
        dates: 'c. 93-52 BC',
        role: 'Tribune and popularis politician',
        significance: 'Exemplified the manipulation of Republican institutions for personal advantage. His use of violence and demagoguery showed how traditional ideals could be perverted to serve private ambition.'
    }
};

// Concepts Data
const concepts = {
    'political-ideals': {
        concept: 'Political Ideals',
        explanation: 'The values and principles that guided (or claimed to guide) Republican political behaviour and rhetoric.',
        importance: 'These ideals provided a shared vocabulary for political discourse but could be manipulated to justify almost any action. Understanding them is essential for interpreting Republican political rhetoric and propaganda.'
    },
    'tyranny': {
        concept: 'Tyranny',
        explanation: 'Rule by a single person who had gained power illegally or used it arbitrarily, especially kings or dictators.',
        importance: 'The fundamental enemy of Republican libertas. Romans defined their freedom in opposition to tyranny, though they often disagreed about what constituted tyrannical behaviour.'
    },
    'stoicism': {
        concept: 'Stoicism',
        explanation: 'Greek philosophical school emphasising virtue, reason, and duty over personal desires and emotions.',
        importance: 'Provided intellectual framework for Republican virtue. Stoic politicians like Cato claimed to put principles above personal advantage, though this could lead to political inflexibility.'
    },
    'first-triumvirate': {
        concept: 'First Triumvirate',
        explanation: 'Secret alliance between Caesar, Pompey, and Crassus (60 BC) that divided the Roman world between them outside normal constitutional channels.',
        importance: 'Demonstrated how personal relationships could override formal institutions. The triumvirs used their combined influence to control elections, legislation, and provincial commands.'
    }
};

// Initialize Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    initializeIdeals();
    initializeStoicDetails();
    
    // Delay to ensure all content is rendered before setting up listeners
    setTimeout(() => {
        setupInteractiveContent();
    }, 100);
});

// Ideals Functions
function initializeIdeals() {
    const gridContainer = document.getElementById('ideals-grid');
    const detailsContainer = document.getElementById('ideal-details');
    
    if (!gridContainer || !detailsContainer) return;
    
    // Create ideal cards
    idealsData.ideals.forEach(ideal => {
        const cardEl = document.createElement('div');
        cardEl.className = 'ideal-card';
        cardEl.onclick = () => showIdealContent(ideal.id);
        cardEl.innerHTML = `
            <span class="ideal-icon">${ideal.icon}</span>
            <div class="ideal-latin">${ideal.latin}</div>
            <div class="ideal-english">${ideal.english}</div>
        `;
        gridContainer.appendChild(cardEl);
    });
    
    // Create default content
    const defaultContent = document.createElement('div');
    defaultContent.className = 'ideal-content active';
    defaultContent.id = 'ideal-default';
    defaultContent.innerHTML = `
        <h3>${idealsData.defaultContent.title}</h3>
        ${idealsData.defaultContent.html}
    `;
    detailsContainer.appendChild(defaultContent);
    
    // Create content for each ideal
    idealsData.ideals.forEach(ideal => {
        const contentEl = document.createElement('div');
        contentEl.className = 'ideal-content';
        contentEl.id = `ideal-${ideal.id}`;
        contentEl.innerHTML = `
            <h3>${ideal.content.title}</h3>
            ${ideal.content.html}
        `;
        detailsContainer.appendChild(contentEl);
    });
}

function showIdealContent(idealId) {
    // Remove active class from all cards and content
    document.querySelectorAll('.ideal-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelectorAll('.ideal-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to clicked card
    event.target.closest('.ideal-card').classList.add('active');
    
    // Show corresponding content
    const contentId = 'ideal-' + idealId;
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.add('active');
    }
    
    // Re-setup interactive content for new content
    setupInteractiveContent();
}

// Initialize Stoic Details
function initializeStoicDetails() {
    const stoicDetailsContainer = document.getElementById('stoic-details');
    
    if (!stoicDetailsContainer) return;
    
    stoicDetailsContainer.innerHTML = stoicDetailsContent;
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
    
    // Remove after delay to prevent accumulation
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
