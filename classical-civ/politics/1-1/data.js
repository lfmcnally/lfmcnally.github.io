// Timeline Data
const timelineData = {
    events: [
        {
            id: 'aeneas',
            icon: '⚔️',
            date: 'c. 1180 BC',
            title: 'Aeneas Flees Troy',
            subtitle: 'Trojan hero\'s journey',
            content: {
                title: 'Aeneas: The Trojan Hero (c. 1180 BC)',
                html: `
                    <p><span class="key-figure" data-info="aeneas">Aeneas</span>, son of the goddess <span class="key-figure" data-info="venus">Venus</span> and the mortal Anchises, flees the burning city of Troy carrying his father and leading his son <span class="key-figure" data-info="ascanius">Ascanius</span>. This divine ancestry would later legitimise Roman claims to greatness.</p>
                    <div class="primary-source">
                        "I sing of arms and the man, who first from the shores of Troy, exiled by fate, came to Italy and Lavinian shores."
                        <div class="source-citation">— Virgil, <em>Aeneid</em> Book 1.1-3</div>
                    </div>
                    <p>Aeneas's journey represents the <span class="key-concept" data-concept="pietas">pietas</span> (duty) that would become central to Roman values—duty to gods, family, and destined mission.</p>
                `
            }
        },
        {
            id: 'ascanius',
            icon: '🏛️',
            date: 'c. 1152 BC',
            title: 'Ascanius founds Alba Longa',
            subtitle: 'First Latin city',
            content: {
                title: 'Ascanius and Alba Longa (c. 1152 BC)',
                html: `
                    <p><span class="key-figure" data-info="ascanius">Ascanius</span> (also called Iulus) founds Alba Longa, the mother city of Rome. This establishes the Julian line that would later be claimed by <span class="key-figure" data-info="julius-caesar">Julius Caesar</span> and <span class="key-figure" data-info="augustus">Augustus</span>.</p>
                    <p>For over 400 years, Aeneas's descendants rule Alba Longa as kings, establishing the precedent for legitimate royal authority that would influence Roman political thought.</p>
                    <p><strong>Historical significance:</strong> This genealogy provided Romans with both Trojan nobility and Italian roots, justifying their rule over both Greeks and Italians.</p>
                `
            }
        },
        {
            id: 'descendants',
            icon: '👥',
            date: 'c. 800-753 BC',
            title: 'Amulius & the Twins',
            subtitle: 'Romulus & Remus born',
            content: {
                title: 'Amulius and the Birth of the Twins (c. 800-753 BC)',
                html: `
                    <p><span class="key-figure" data-info="amulius">Amulius</span> usurps the throne of Alba Longa from his brother <span class="key-figure" data-info="numitor">Numitor</span>. To prevent rivals, he forces Numitor's daughter <span class="key-figure" data-info="rhea-silvia">Rhea Silvia</span> to become a Vestal Virgin.</p>
                    <p>However, the god <span class="key-figure" data-info="mars">Mars</span> fathers twins on her: <span class="key-figure" data-info="romulus">Romulus</span> and <span class="key-figure" data-info="remus">Remus</span>. When discovered, Amulius orders the infants drowned in the Tiber, but they survive—saved by divine intervention and raised by a wolf.</p>
                    <p><strong>Key themes:</strong> Tyrannical rule breeds resistance; divine protection ensures Rome's destiny; humble origins can lead to greatness.</p>
                `
            }
        },
        {
            id: 'romulus',
            icon: '🐺',
            date: '753 BC',
            title: 'Romulus founds Rome',
            subtitle: 'First king of Rome',
            content: {
                title: 'Romulus Founds Rome (753 BC)',
                html: `
                    <p>After discovering their royal heritage, <span class="key-figure" data-info="romulus">Romulus</span> and <span class="key-figure" data-info="remus">Remus</span> decide to found a city. When they quarrel over its location and leadership, Romulus kills Remus and becomes Rome's first king.</p>
                    <div class="primary-source">
                        "So perish every one who shall hereafter leap over my walls!"
                        <div class="source-citation">— Romulus, as quoted by Livy, <em>Ab Urbe Condita</em> 1.7</div>
                    </div>
                    <p>Romulus establishes Rome's first institutions: the Senate (from <em>senex</em>, meaning elder), the citizen assemblies, and the ritual boundaries (<span class="key-term" data-definition="pomerium">pomerium</span>) that would define Roman sacred and civic space.</p>
                `
            }
        },
        {
            id: 'monarchy',
            icon: '👑',
            date: '753-509 BC',
            title: 'Roman Monarchy',
            subtitle: 'Seven kings rule',
            content: {
                title: 'The Roman Monarchy (753-509 BC)',
                html: `
                    <p>Rome is ruled by seven kings, from <span class="key-figure" data-info="romulus">Romulus</span> to <span class="key-figure" data-info="tarquin-superbus">Tarquinius Superbus</span>. Each contributes to Rome's development:</p>
                    <ul>
                        <li><strong><span class="key-figure" data-info="numa">Numa Pompilius</span>:</strong> Establishes religious law and calendar</li>
                        <li><strong><span class="key-figure" data-info="servius">Servius Tullius</span>:</strong> Creates the census and constitutional reforms</li>
                        <li><strong><span class="key-figure" data-info="tarquin-superbus">Tarquinius Superbus</span>:</strong> The proud tyrant whose overthrow leads to the Republic</li>
                    </ul>
                    <p>The monarchy provides stability and growth, but its final phase demonstrates the dangers of unchecked power that the Republic will attempt to prevent.</p>
                `
            }
        },
        {
            id: 'republic',
            icon: '🦅',
            date: '509 BC',
            title: 'Republic Founded',
            subtitle: 'Tarquins expelled',
            content: {
                title: 'The Foundation of the Republic (509 BC)',
                html: `
                    <p>The monarchy ends with the revolt led by <span class="key-figure" data-info="brutus">Lucius Junius Brutus</span> after <span class="key-figure" data-info="lucretia">Lucretia's</span> rape and suicide. The Romans swear never again to tolerate a king.</p>
                    <p>The <span class="key-concept" data-concept="res-publica">res publica</span> ("public thing") is established with shared leadership, checks and balances, and the principle that power belongs to the people and Senate together—<span class="key-term" data-definition="spqr">SPQR</span>.</p>
                    <p><strong>Republican innovations:</strong> Annual magistrates, collegiality, right of appeal, tribunes of the plebs.</p>
                `
            }
        }
    ],
    defaultContent: {
        title: 'Explore Rome\'s Mythical Origins',
        html: `
            <p>Click on any event in the timeline above to learn about Rome's legendary transition from the fall of Troy to the establishment of the Republic. This mythical narrative shaped Roman identity and Republican values for centuries.</p>
            <p><strong>Key themes to explore:</strong> Divine ancestry, heroic leadership, destined greatness, resistance to tyranny</p>
        `
    }
};

// Family Tree Data
const familyTreeData = {
    nodes: [
        {
            id: 'gods',
            level: 1,
            icon: '⚡',
            name: 'Venus & Anchises',
            title: 'Divine & Mortal Parents',
            content: {
                title: 'Divine Parents: Venus and Mars',
                html: `
                    <p><span class="key-figure" data-info="venus">Venus</span>, goddess of love and beauty, was the divine mother of <span class="key-figure" data-info="aeneas">Aeneas</span>. <span class="key-figure" data-info="mars">Mars</span>, god of war, fathered <span class="key-figure" data-info="romulus">Romulus</span> and <span class="key-figure" data-info="remus">Remus</span> on <span class="key-figure" data-info="rhea-silvia">Rhea Silvia</span>.</p>
                    <p><strong>Political significance:</strong> This dual divine parentage gave Romans both military prowess (Mars) and diplomatic charm (Venus). Later, <span class="key-figure" data-info="julius-caesar">Julius Caesar</span> claimed descent from Venus through the Julian line, whilst all Romans shared Mars as their patron deity.</p>
                    <p><strong>Religious importance:</strong> Divine ancestry explained Roman success as divinely ordained and provided protection in times of crisis.</p>
                `
            }
        },
        {
            id: 'aeneas-family',
            level: 2,
            icon: '⚔️',
            name: 'Aeneas',
            title: 'Trojan Hero',
            content: {
                title: 'Aeneas: The Pious Hero',
                html: `
                    <p><span class="key-figure" data-info="aeneas">Aeneas</span> embodied the Roman virtue of <span class="key-concept" data-concept="pietas">pietas</span> through his devotion to gods, family, and mission. His journey from Troy to Italy provided Romans with a noble origin story.</p>
                    <p><strong>Family connections:</strong> Son of Venus and Anchises, father of Ascanius, ancestor of the Julian line. His marriage to Lavinia linked Trojan nobility with Italian royalty.</p>
                    <div class="primary-source">
                        "Aeneas the good, renowned in war and piety."
                        <div class="source-citation">— Virgil, <em>Aeneid</em> Book 1.378</div>
                    </div>
                    <p><strong>Legacy:</strong> Aeneas established the moral framework for Roman leadership—duty before personal desire, collective mission before individual glory.</p>
                `
            }
        },
        {
            id: 'ascanius-line',
            level: 3,
            icon: '🏛️',
            name: 'Ascanius/Iulus',
            title: 'Founder of Alba Longa',
            content: {
                title: 'Ascanius/Iulus: Founder of the Royal Line',
                html: `
                    <p><span class="key-figure" data-info="ascanius">Ascanius</span>, also called Iulus, founded Alba Longa and established the royal dynasty that would eventually produce Rome's founders. His alternative name Iulus provided the Julian family with their mythical ancestry.</p>
                    <p><strong>Historical importance:</strong> Alba Longa served as the mother city of Rome, providing legitimacy for Roman rule over other Latin cities. The city's destruction by Rome in the 7th century BC symbolically transferred authority from the old royal line to the new Republic.</p>
                    <p><strong>Political exploitation:</strong> Centuries later, <span class="key-figure" data-info="julius-caesar">Caesar</span> and <span class="key-figure" data-info="augustus">Augustus</span> claimed descent from Iulus to justify their extraordinary positions and divine honours.</p>
                `
            }
        },
        {
            id: 'royal-line',
            level: 4,
            icon: '👑',
            name: 'Kings of Alba Longa',
            title: '400 Years of Rule',
            content: {
                title: 'Kings of Alba Longa: Four Centuries of Rule',
                html: `
                    <p>For over 400 years, Aeneas's descendants ruled Alba Longa as kings, maintaining the traditions of leadership and governance that would influence Roman political culture.</p>
                    <p><strong>Significance of royal continuity:</strong> This long period of stable monarchy provided a model for legitimate authority based on ancestral virtue rather than mere conquest. It established precedents for:</p>
                    <ul>
                        <li>Hereditary leadership based on merit and divine favour</li>
                        <li>Responsibility to maintain religious traditions</li>
                        <li>Protection of subject peoples and allied cities</li>
                        <li>Expansion through alliance rather than simple conquest</li>
                    </ul>
                    <p><strong>Transition to tyranny:</strong> The final generations saw this noble tradition corrupted by ambition and family conflict, setting the stage for Amulius's usurpation.</p>
                `
            }
        },
        {
            id: 'brothers',
            level: 5,
            icon: '⚖️',
            name: 'Numitor & Amulius',
            title: 'Rightful King & Usurper',
            content: {
                title: 'Numitor and Amulius: Legitimate Authority vs. Tyranny',
                html: `
                    <p><span class="key-figure" data-info="numitor">Numitor</span> represented legitimate royal authority, whilst his brother <span class="key-figure" data-info="amulius">Amulius</span> embodied the corruption of power through ambition and violence.</p>
                    <p><strong>The usurpation:</strong> Amulius's seizure of power from his elder brother violated both divine law and family obligation. His attempt to eliminate potential rivals through forcing <span class="key-figure" data-info="rhea-silvia">Rhea Silvia</span> into religious celibacy showed the lengths tyrants would go to preserve power.</p>
                    <p><strong>Republican lessons:</strong> This story taught Romans that:</p>
                    <ul>
                        <li>Illegitimate power always seeks to destroy legitimate succession</li>
                        <li>Tyranny corrupts family bonds and religious obligations</li>
                        <li>Divine justice will ultimately restore rightful authority</li>
                        <li>Resistance to usurpation is both justified and necessary</li>
                    </ul>
                `
            }
        },
        {
            id: 'twins',
            level: 6,
            icon: '🐺',
            name: 'Romulus & Remus',
            title: 'Founders of Rome',
            content: {
                title: 'Romulus and Remus: Foundation Through Conflict',
                html: `
                    <p><span class="key-figure" data-info="romulus">Romulus</span> and <span class="key-figure" data-info="remus">Remus</span> represented both the restoration of legitimate authority and the tragic necessity of choosing between competing claims to leadership.</p>
                    <p><strong>Divine protection:</strong> Their survival despite Amulius's attempts to kill them demonstrated that divine will could overcome human tyranny. The wolf that suckled them became a symbol of Roman resilience and divine favour.</p>
                    <p><strong>The fraternal conflict:</strong> Romulus's killing of Remus established a troubling precedent—that Rome's greatness might require terrible choices and the sacrifice of personal bonds for political necessity.</p>
                    <div class="primary-source">
                        "Rome's foundations were laid in blood, and blood would mark its history."
                        <div class="source-citation">— Modern interpretation of Livy's account</div>
                    </div>
                    <p><strong>Republican relevance:</strong> This myth warned that even justified authority could become corrupted by ambition, foreshadowing the conflicts that would eventually destroy the Republic itself.</p>
                `
            }
        }
    ],
    defaultContent: {
        title: 'Explore Rome\'s Divine Lineage',
        html: `
            <p>Click on any figure in the family tree to learn about their role in Rome's foundation myth. This genealogy connected Rome to both divine power and heroic tradition.</p>
            <p><strong>Key significance:</strong> Divine ancestry legitimised Roman power whilst heroic examples provided moral guidance for Republican leaders.</p>
        `
    }
};

// SPQR Data
const spqrData = {
    letters: [
        {
            id: 'senatus',
            letter: 'S',
            word: 'Senatus',
            meaning: 'The Senate',
            content: {
                title: 'Senatus: The Senate\'s Role in SPQR',
                html: `
                    <p>The <span class="key-term" data-definition="senate">Senate</span> represented accumulated wisdom and experience. Composed of former magistrates, it provided continuity in an otherwise annual system of government.</p>
                    <p><strong>Powers and influence:</strong></p>
                    <ul>
                        <li>Control of public finances and treasury</li>
                        <li>Management of foreign policy and diplomacy</li>
                        <li>Assignment of provincial commands</li>
                        <li>Religious oversight and interpretation of omens</li>
                        <li>Emergency powers through <em>senatus consultum ultimum</em></li>
                    </ul>
                    <div class="primary-source">
                        "The Senate's authority rests not on law but on the dignity of its members and the respect for their wisdom."
                        <div class="source-citation">— Cicero, <em>De Legibus</em> 3.28</div>
                    </div>
                    <p><strong>Limitations:</strong> Despite its prestige, the Senate technically held only advisory power. Its influence depended on voluntary respect for tradition and <span class="key-concept" data-concept="auctoritas">auctoritas</span>.</p>
                `
            }
        },
        {
            id: 'populus',
            letter: 'P',
            word: 'Populus',
            meaning: 'The People',
            content: {
                title: 'Populus: The Roman People\'s Authority',
                html: `
                    <p>The <em>populus</em> included all Roman citizens, though political participation was structured to favour wealth and property. Different assemblies gave citizens various ways to exercise sovereignty.</p>
                    <p><strong>Popular sovereignty in practice:</strong></p>
                    <ul>
                        <li>Election of all magistrates through popular vote</li>
                        <li>Passage of laws through assembly approval</li>
                        <li>Judicial decisions in major criminal cases</li>
                        <li>Ratification of treaties and declarations of war</li>
                        <li>Appeal against magisterial decisions</li>
                    </ul>
                    <p><strong>Structural limitations:</strong> Whilst all citizens could vote, the system favoured:</p>
                    <ul>
                        <li>Wealthy citizens who controlled more voting units</li>
                        <li>Rural landowners over urban workers</li>
                        <li>Those who could attend assemblies in person</li>
                        <li>Clients following their patrons' preferences</li>
                    </ul>
                    <p><strong>Revolutionary potential:</strong> Despite these limitations, popularis politicians could mobilise genuine popular support to challenge senatorial authority.</p>
                `
            }
        },
        {
            id: 'que',
            letter: 'Q',
            word: '-que',
            meaning: 'And',
            content: {
                title: '-que: The Partnership of Governance',
                html: `
                    <p>The simple conjunction "-que" (and) represented one of the most important political principles in Roman history—that legitimate authority required partnership between Senate and People.</p>
                    <p><strong>Theoretical equality:</strong> SPQR suggested that both Senate and People were essential partners in governance, neither sufficient alone. This ideal of shared authority distinguished the Republic from both monarchy and democracy.</p>
                    <p><strong>Practical tensions:</strong> In reality, the partnership was often unequal:</p>
                    <ul>
                        <li>The Senate usually led, the People usually followed</li>
                        <li>Elite manipulation of popular assemblies was common</li>
                        <li>Popularis politicians exploited the partnership against senatorial wishes</li>
                        <li>Constitutional crises arose when partnership broke down</li>
                    </ul>
                    <div class="primary-source">
                        "The greatest glory of the Republic lies in the harmony of Senate and People."
                        <div class="source-citation">— Cicero, <em>Pro Sestio</em> 137</div>
                    </div>
                    <p><strong>Legacy:</strong> Even when the Republic failed, the ideal of shared governance influenced Roman political thought and later constitutional development.</p>
                `
            }
        },
        {
            id: 'romanus',
            letter: 'R',
            word: 'Romanus',
            meaning: 'Roman',
            content: {
                title: 'Romanus: Roman Identity and Citizenship',
                html: `
                    <p><em>Romanus</em> defined who belonged to this political partnership. Roman citizenship was both exclusive and expandable, creating a unique form of imperial governance.</p>
                    <p><strong>Citizenship privileges:</strong></p>
                    <ul>
                        <li>Right to vote in assemblies</li>
                        <li>Right to hold magistracies (if wealthy enough)</li>
                        <li>Legal protection and right of appeal</li>
                        <li>Marriage rights and property ownership</li>
                        <li>Military service obligations and honours</li>
                    </ul>
                    <p><strong>Expansion of citizenship:</strong> Unlike other ancient states, Rome gradually extended citizenship to conquered peoples, transforming subjects into partners in the SPQR system.</p>
                    <p><strong>Republican values:</strong> Being <em>Romanus</em> meant embracing certain values:</p>
                    <ul>
                        <li><span class="key-concept" data-concept="libertas">Libertas</span>: Freedom from tyrannical domination</li>
                        <li><span class="key-concept" data-concept="virtus">Virtus</span>: Masculine courage and civic excellence</li>
                        <li><span class="key-concept" data-concept="pietas">Pietas</span>: Duty to gods, family, and state</li>
                        <li><span class="key-concept" data-concept="gravitas">Gravitas</span>: Serious-minded responsibility</li>
                    </ul>
                    <p><strong>Crisis of identity:</strong> By the Late Republic, questions about who was truly <em>Romanus</em> and what Roman values meant became central to political conflict.</p>
                `
            }
        }
    ],
    defaultContent: {
        title: 'SPQR: The Heart of Republican Government',
        html: `
            <p>Click on any letter above to explore what SPQR meant in practice. This phrase appeared on standards, buildings, and official documents, representing the ideal of shared governance between elite and citizens.</p>
            <p><strong>Key principle:</strong> Authority came from the collective institutions of Senate and People, not from any individual ruler.</p>
        `
    }
};

// Definitions Data
const definitions = {
    'spqr': {
        term: 'SPQR',
        definition: 'Senatus Populusque Romanus - "The Senate and the Roman People". The official motto of the Roman Republic.',
        context: 'This phrase appeared on standards, buildings, and official documents, representing the ideal of shared governance between the elite Senate and Roman citizens. Whilst often more theoretical than practical, SPQR embodied the Republican rejection of monarchy and the principle that authority came from collective institutions rather than individual rulers.'
    },
    'pomerium': {
        term: 'Pomerium',
        definition: 'The sacred boundary of Rome, marked by stones and ritually established by Romulus.',
        context: 'The pomerium defined the limits of Rome proper and had important religious and legal significance. Weapons could not be carried within it, and certain religious rituals could only be performed outside it. Extending the pomerium required a formal triumph and marked territorial expansion.'
    },
    'res-publica': {
        term: 'Res Publica',
        definition: 'Literally "the public thing" - the Roman state belonging to all citizens, not a single ruler.',
        context: 'This concept embodied the Republican ideal that the state belonged to the people collectively, not to any individual. It contrasted sharply with monarchy, where the state was essentially the king\'s property. The res publica required active citizen participation and shared responsibility.'
    },
    'senate': {
        term: 'Senate',
        definition: 'Advisory body comprised of former magistrates, providing continuity and expertise in governance.',
        context: 'Though technically advisory, the Senate\'s auctoritas made its guidance nearly binding. It controlled finances, managed foreign policy, and represented accumulated wisdom and experience. Senators held their positions for life unless removed by censors.'
    }
};

// Figures Data
const figures = {
    'aeneas': {
        name: 'Aeneas',
        dates: 'Mythical (c. 1180 BC)',
        role: 'Trojan hero, son of Venus',
        significance: 'The legendary founder of the Roman race. His journey from Troy to Italy, told in Virgil\'s Aeneid, provided Romans with a noble origin story connecting them to the heroes of Homer whilst establishing their destined rule over the Mediterranean.'
    },
    'brutus': {
        name: 'Lucius Junius Brutus',
        dates: 'Traditional dates: c. 545-509 BC',
        role: 'Founder of the Roman Republic',
        significance: 'Led the revolt against Tarquinius Superbus and became one of the first two consuls. His oath over Lucretia\'s body established the foundational principle of Republican libertas. His descendants, including Marcus Brutus, would later claim to inherit his legacy.'
    },
    'lucretia': {
        name: 'Lucretia',
        dates: '6th century BC (traditional)',
        role: 'Roman noblewoman',
        significance: 'Her rape by Sextus Tarquinius and subsequent suicide became the catalyst for the Roman Republic. She embodied the ideal of pudicitia (chastity) and her sacrifice represented the rejection of tyrannical abuse of power.'
    },
    'livy': {
        name: 'Titus Livius (Livy)',
        dates: '59 BC - AD 17',
        role: 'Roman historian',
        significance: 'Author of Ab Urbe Condita, a monumental history of Rome from its foundation. His work preserves much of the traditional narrative of early Rome, though written centuries after the events described.'
    },
    'tarquin-superbus': {
        name: 'Lucius Tarquinius Superbus',
        dates: 'Traditional dates: ruled 535-509 BC',
        role: 'Last King of Rome',
        significance: 'His tyrannical rule and the crimes of his family led to the overthrow of the monarchy. He became the archetypal tyrant in Roman memory, and fear of his return shaped Republican institutions.'
    }
};

// Concepts Data
const concepts = {
    'libertas': {
        concept: 'Libertas',
        explanation: 'Roman freedom - specifically freedom from domination by a single individual (king or tyrant). Unlike modern liberty, it focused on collective political freedom rather than individual rights.',
        importance: 'Central to Republican identity. Politicians across the spectrum claimed to defend libertas, though they defined it differently. Caesar claimed to defend the people\'s libertas from senatorial oppression; his assassins claimed to restore libertas from his dictatorship.'
    },
    'pietas': {
        concept: 'Pietas',
        explanation: 'Duty and devotion to gods, family, and state. Aeneas was famous for his pietas, carrying his father from burning Troy and obeying divine commands.',
        importance: 'Fundamental Roman virtue that balanced individual achievement with social obligation. It justified Roman rule as divinely sanctioned and created expectations of leaders to serve the common good, not just personal ambition.'
    },
    'auctoritas': {
        concept: 'Auctoritas',
        explanation: 'Authority based on prestige, respect, and moral weight rather than legal power. The Senate\'s influence rested primarily on its auctoritas.',
        importance: 'This concept distinguished Roman governance from pure democracy or autocracy. It created a system where tradition and respect mattered as much as formal law, allowing flexibility but also creating tensions when auctoritas and legal power conflicted.'
    },
    'virtus': {
        concept: 'Virtus',
        explanation: 'Masculine courage and excellence, especially in military and civic contexts. Originally meant "manliness" but evolved to encompass broader moral excellence.',
        importance: 'Virtus was the quality that justified political advancement and social status. Competition for recognition of virtus drove Roman expansion but also internal conflict as generals sought opportunities to display their excellence.'
    },
    'gravitas': {
        concept: 'Gravitas',
        explanation: 'Serious-minded dignity and sense of responsibility. The weight of character expected of Roman leaders.',
        importance: 'Gravitas distinguished proper Roman behaviour from Greek "levity" or Eastern "luxury". It was essential for political credibility and helped maintain the Republic\'s conservative character even as it expanded.'
    }
};

// Initialize Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    initializeTimeline();
    initializeFamilyTree();
    initializeSPQR();
    setupInteractiveContent();
});

// Timeline Functions
function initializeTimeline() {
    const container = document.getElementById('timeline-events');
    const detailsContainer = document.getElementById('timeline-details');
    
    if (!container || !detailsContainer) return;
    
    // Create timeline events
    timelineData.events.forEach(event => {
        const eventEl = document.createElement('div');
        eventEl.className = 'timeline-event';
        eventEl.onclick = () => showTimelineContent(event.id);
        eventEl.innerHTML = `
            <span class="timeline-icon">${event.icon}</span>
            <div class="timeline-dot"></div>
            <div class="timeline-date">${event.date}</div>
            <div class="timeline-title">${event.title}</div>
            <div class="timeline-subtitle">${event.subtitle}</div>
        `;
        container.appendChild(eventEl);
    });
    
    // Create default content
    const defaultContent = document.createElement('div');
    defaultContent.className = 'timeline-content active';
    defaultContent.id = 'timeline-default';
    defaultContent.innerHTML = `
        <h4>${timelineData.defaultContent.title}</h4>
        ${timelineData.defaultContent.html}
    `;
    detailsContainer.appendChild(defaultContent);
    
    // Create content for each event
    timelineData.events.forEach(event => {
        const contentEl = document.createElement('div');
        contentEl.className = 'timeline-content';
        contentEl.id = `timeline-${event.id}`;
        contentEl.innerHTML = `
            <h4>${event.content.title}</h4>
            ${event.content.html}
        `;
        detailsContainer.appendChild(contentEl);
    });
}

function showTimelineContent(eventId) {
    // Remove active class from all events and content
    document.querySelectorAll('.timeline-event').forEach(event => {
        event.classList.remove('active');
    });
    document.querySelectorAll('.timeline-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to clicked event
    event.target.closest('.timeline-event').classList.add('active');
    
    // Show corresponding content
    const contentId = 'timeline-' + eventId;
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.add('active');
    }
    
    // Re-setup interactive content for new content
    setupInteractiveContent();
}

// Family Tree Functions
function initializeFamilyTree() {
    const treeContainer = document.getElementById('family-tree');
    const detailsContainer = document.getElementById('family-details');
    
    if (!treeContainer || !detailsContainer) return;
    
    // Group nodes by level
    const levels = {};
    familyTreeData.nodes.forEach(node => {
        if (!levels[node.level]) levels[node.level] = [];
        levels[node.level].push(node);
    });
    
    // Create tree levels
    Object.keys(levels).sort().forEach(level => {
        const levelEl = document.createElement('div');
        levelEl.className = 'tree-level';
        
        if (level > 1) {
            const connector = document.createElement('div');
            connector.className = 'tree-connector';
            levelEl.appendChild(connector);
        }
        
        levels[level].forEach(node => {
            const nodeEl = document.createElement('div');
            nodeEl.className = 'tree-node';
            nodeEl.onclick = () => showFamilyContent(node.id);
            nodeEl.innerHTML = `
                <span class="node-icon">${node.icon}</span>
                <div class="node-name">${node.name}</div>
                <div class="node-title">${node.title}</div>
            `;
            levelEl.appendChild(nodeEl);
        });
        
        treeContainer.appendChild(levelEl);
    });
    
    // Create default content
    const defaultContent = document.createElement('div');
    defaultContent.className = 'family-content active';
    defaultContent.id = 'family-default';
    defaultContent.innerHTML = `
        <h4>${familyTreeData.defaultContent.title}</h4>
        ${familyTreeData.defaultContent.html}
    `;
    detailsContainer.appendChild(defaultContent);
    
    // Create content for each node
    familyTreeData.nodes.forEach(node => {
        const contentEl = document.createElement('div');
        contentEl.className = 'family-content';
        contentEl.id = `family-${node.id}`;
        contentEl.innerHTML = `
            <h4>${node.content.title}</h4>
            ${node.content.html}
        `;
        detailsContainer.appendChild(contentEl);
    });
}

function showFamilyContent(nodeId) {
    // Remove active class from all nodes and content
    document.querySelectorAll('.tree-node').forEach(node => {
        node.classList.remove('active');
    });
    document.querySelectorAll('.family-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to clicked node
    event.target.closest('.tree-node').classList.add('active');
    
    // Show corresponding content
    const contentId = 'family-' + nodeId;
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.add('active');
    }
    
    // Re-setup interactive content for new content
    setupInteractiveContent();
}

// SPQR Functions
function initializeSPQR() {
    const breakdownContainer = document.getElementById('spqr-breakdown');
    const detailsContainer = document.getElementById('spqr-details');
    
    if (!breakdownContainer || !detailsContainer) return;
    
    // Create SPQR letters
    spqrData.letters.forEach(letter => {
        const letterEl = document.createElement('div');
        letterEl.className = 'spqr-letter';
        letterEl.onclick = () => showSPQRContent(letter.id);
        letterEl.innerHTML = `
            <div class="letter-display">${letter.letter}</div>
            <div class="letter-word">${letter.word}</div>
            <div class="letter-meaning">${letter.meaning}</div>
        `;
        breakdownContainer.appendChild(letterEl);
    });
    
    // Create default content
    const defaultContent = document.createElement('div');
    defaultContent.className = 'spqr-content active';
    defaultContent.id = 'spqr-default';
    defaultContent.innerHTML = `
        <h4>${spqrData.defaultContent.title}</h4>
        ${spqrData.defaultContent.html}
    `;
    detailsContainer.appendChild(defaultContent);
    
    // Create content for each letter
    spqrData.letters.forEach(letter => {
        const contentEl = document.createElement('div');
        contentEl.className = 'spqr-content';
        contentEl.id = `spqr-${letter.id}`;
        contentEl.innerHTML = `
            <h4>${letter.content.title}</h4>
            ${letter.content.html}
        `;
        detailsContainer.appendChild(contentEl);
    });
}

function showSPQRContent(letterId) {
    // Remove active class from all letters and content
    document.querySelectorAll('.spqr-letter').forEach(letter => {
        letter.classList.remove('active');
    });
    document.querySelectorAll('.spqr-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to clicked letter
    event.target.closest('.spqr-letter').classList.add('active');
    
    // Show corresponding content
    const contentId = 'spqr-' + letterId;
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.add('active');
    }
    
    // Re-setup interactive content for new content
    setupInteractiveContent();
}

// Interactive Content Functions
function setupInteractiveContent() {
    // Key terms
    document.querySelectorAll('.key-term').forEach(term => {
        term.addEventListener('click', function() {
            const definition = this.dataset.definition;
            showDefinition(definition);
        });
    });

    // Historical figures
    document.querySelectorAll('.key-figure').forEach(figure => {
        figure.addEventListener('click', function() {
            const info = this.dataset.info;
            showFigureInfo(info);
        });
    });

    // Key concepts
    document.querySelectorAll('.key-concept').forEach(concept => {
        concept.addEventListener('click', function() {
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
