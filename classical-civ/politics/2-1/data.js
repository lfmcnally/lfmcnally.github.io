// Timeline Events Data
const timelineEventsData = [
    {
        id: 'tiberius-election',
        date: '133 BC',
        title: 'Tiberius Elected Tribune',
        description: 'Tiberius Gracchus becomes tribune and proposes radical land reform',
        content: {
            title: 'Tiberius Gracchus Elected Tribune (133 BC)',
            html: `
                <p><span class="key-figure" data-info="tiberius-gracchus">Tiberius Sempronius Gracchus</span> came from a distinguished family—his father had been consul and censor, his mother <span class="key-figure" data-info="cornelia">Cornelia</span> was daughter of <span class="key-figure" data-info="scipio-africanus">Scipio Africanus</span>. Yet he chose to champion the dispossessed against his own class.</p>
                
                <p>The <span class="key-term" data-definition="lex-sempronia-agraria">Lex Sempronia Agraria</span> proposed to enforce existing limits on public land occupation (500 <em>iugera</em> per person), redistribute excess to the poor, and create a three-man commission to oversee the process.</p>
                
                <p>Rather than working through the Senate, Tiberius planned to take the bill directly to the <span class="key-term" data-definition="plebeian-assembly">Plebeian Assembly</span>—bypassing senatorial authority entirely.</p>
                
                <div class="primary-source">
                    The wild beasts have their dens, but the men who fight for Italy have nothing but air and light.
                    <div class="source-citation">— Tiberius Gracchus, as quoted by Plutarch</div>
                </div>
                
                <p>This election marked the beginning of <span class="key-concept" data-concept="popularis-politics">popularis politics</span>—using tribunician power and popular assemblies to challenge senatorial dominance.</p>
            `
        }
    },
    {
        id: 'octavius-deposition',
        date: '133 BC (Mid-year)',
        title: 'Octavius Deposed',
        description: 'Unprecedented removal of a tribune from office shocks conservatives',
        content: {
            title: 'The Deposition of Marcus Octavius (133 BC)',
            html: `
                <p>When fellow tribune <span class="key-figure" data-info="marcus-octavius">Marcus Octavius</span> vetoed Tiberius's land bill, Tiberius took an unprecedented step—he convinced the Plebeian Assembly to remove Octavius from office entirely.</p>
                
                <p>No tribune had ever been deposed before. The <span class="key-concept" data-concept="tribunician-sacrosanctity">sacrosanctity of tribunes</span> was fundamental to the Roman constitution—they were protected by religious law and supposedly untouchable.</p>
                
                <p>Tiberius justified this by arguing that a tribune who opposed the people's will had forfeited his right to office. The people who elected him could remove him.</p>
                
                <p>Horrified senators saw this as the beginning of tyranny. If tribunes could be removed for opposing popular measures, what protection remained for minority rights or constitutional limits? This established that constitutional norms could be overridden by popular pressure—a precedent that would be used repeatedly by later popularis politicians.</p>
            `
        }
    },
    {
        id: 'tiberius-death',
        date: '133 BC (Late)',
        title: 'Tiberius Killed',
        description: 'First political murder in the Forum—300 supporters also die',
        content: {
            title: 'The Murder of Tiberius Gracchus (133 BC)',
            html: `
                <p>When Tiberius sought re-election as tribune (possibly illegal under Roman law), tensions reached breaking point. On election day, <span class="key-figure" data-info="pontifex-maximus-scaevola">Pontifex Maximus Scaevola</span> led a senatorial mob against Tiberius and his supporters.</p>
                
                <p>Armed with clubs and broken furniture, senators and their clients attacked unarmed citizens in the Forum. Tiberius was beaten to death with fragments of benches and chairs.</p>
                
                <p>A Roman tribune—supposedly <span class="key-concept" data-concept="tribunician-sacrosanctity">sacrosanct</span> and protected by the gods—had been murdered by his fellow senators. The violence shattered constitutional norms and religious taboos.</p>
                
                <p>Approximately 300 of Tiberius's supporters were killed alongside him. Their bodies were thrown into the Tiber River instead of receiving proper burial.</p>
                
                <p>The Senate accepted parts of Tiberius's land law to calm popular anger, but the precedent for political violence had been established. Constitutional competition had become deadly factional warfare.</p>
            `
        }
    },
    {
        id: 'gaius-election',
        date: '123 BC',
        title: 'Gaius Elected Tribune',
        description: 'Younger brother returns with broader, more systematic reforms',
        content: {
            title: 'Gaius Gracchus Returns (123 BC)',
            html: `
                <p>Ten years after his brother's death, <span class="key-figure" data-info="gaius-gracchus">Gaius Gracchus</span> was elected tribune with an even more ambitious reform programme. He had learned from Tiberius's mistakes and built a broader coalition for change.</p>
                
                <p>Rather than focusing solely on land reform, Gaius targeted multiple constituencies—urban poor, equites, Italian allies—creating a powerful reform coalition.</p>
                
                <p>His comprehensive programme included:</p>
                <ul>
                    <li><span class="key-term" data-definition="lex-frumentaria">Lex Frumentaria</span>: Subsidised grain for Roman citizens</li>
                    <li>Judicial reform: <span class="key-term" data-definition="equites">Equites</span> gained control of extortion courts</li>
                    <li>Military reform: State-funded equipment for soldiers</li>
                    <li>Colonial expansion: New settlements for landless citizens</li>
                    <li>Citizenship extension: Proposed citizenship for Latin allies</li>
                </ul>
                
                <p>Gaius created the first systematic popularis programme, showing how tribune power could be used for comprehensive reform rather than single issues.</p>
            `
        }
    },
    {
        id: 'scu',
        date: '121 BC',
        title: 'First Senatus Consultum Ultimum',
        description: 'Senate authorises use of force against citizens',
        content: {
            title: 'The First Senatus Consultum Ultimum (121 BC)',
            html: `
                <p>When violence erupted between Gaius's supporters and opponents, consul <span class="key-figure" data-info="lucius-opimius">Lucius Opimius</span> was granted the first <span class="key-term" data-definition="senatus-consultum-ultimum">Senatus Consultum Ultimum</span>—an emergency decree authorising the use of force.</p>
                
                <p>The SCU effectively declared martial law, suspending normal legal protections for Roman citizens. It represented the Senate's attempt to fight popularis methods with authoritarian measures.</p>
                
                <p>Once established, the SCU would be used repeatedly in later crises—against <span class="key-figure" data-info="saturninus">Saturninus</span> (100 BC), <span class="key-figure" data-info="sulpicius">Sulpicius</span> (88 BC), and eventually <span class="key-figure" data-info="caesar">Caesar</span> (49 BC).</p>
                
                <p>Ironically, whilst created to defend the Republic against popularis "tyranny," the SCU actually increased senatorial power at the expense of citizen rights—undermining the very libertas it claimed to protect.</p>
            `
        }
    },
    {
        id: 'gaius-death',
        date: '121 BC (Late)',
        title: 'Gaius Dies on Aventine',
        description: '3,000 supporters executed without trial',
        content: {
            title: 'Death on the Aventine Hill (121 BC)',
            html: `
                <p>Armed with the SCU, Opimius led troops against Gaius and his supporters who had fortified themselves on the Aventine Hill. The resulting battle was more like a military campaign than civil disorder.</p>
                
                <p>Gaius was hunted down in a grove sacred to the Furies and killed—either by a servant or by his own hand to avoid capture. His head was cut off and brought to Opimius, who had promised to pay its weight in gold.</p>
                
                <p>Approximately 3,000 of Gaius's supporters were executed without trial—a violation of fundamental citizen rights. Their property was confiscated and their families banned from public life.</p>
                
                <p>The Aventine had been the historic refuge of the plebs during their early struggles with the patricians. Gaius's death there symbolically ended the possibility of peaceful popularis reform.</p>
                
                <p>The violence was so extreme that it shocked even conservative senators. Yet the precedent was set—political opponents could be eliminated through organised violence if they threatened the established order.</p>
            `
        }
    }
];

// Brother Comparison Data
const brothersData = [
    {
        id: 'tiberius',
        name: 'Tiberius Gracchus',
        dates: '168-133 BC',
        color: '#dc3545',
        content: [
            'Military experience in Spain and his role as quaestor in 137 BC gave Tiberius firsthand exposure to the suffering of dispossessed farmers and Italian allies.',
            'He focused primarily on land reform, using constitutional methods initially but becoming increasingly radical when opposed.',
            'Tiberius pioneered bypassing the Senate through direct appeal to popular assemblies—establishing the popularis method.',
            'His fatal mistake was seeking re-election as tribune, which opponents claimed was illegal and tyrannical.',
            'Tiberius pioneered popularis politics but showed its dangers when taken to extremes.'
        ]
    },
    {
        id: 'gaius',
        name: 'Gaius Gracchus',
        dates: '154-121 BC',
        color: '#28a745',
        content: [
            'Learning from his brother\'s experience, Gaius built broader coalitions and developed more sophisticated political strategies.',
            'His systematic reform programme targeted multiple constituencies—urban poor, equites, soldiers, Italian allies.',
            'Gaius created the first comprehensive popularis programme, showing how tribunician power could achieve wide-ranging change.',
            'Proposing citizenship for Italian allies proved disastrous, as existing citizens feared dilution of their privileges.',
            'His reforms established the popularis template used by later politicians like Marius, Sulpicius, and Caesar.'
        ]
    }
];

// Reform Cards Data
const reformsData = [
    {
        id: 'grain',
        icon: '🌾',
        title: 'Lex Frumentaria',
        subtitle: 'Subsidised grain law',
        content: {
            title: 'Lex Frumentaria: Feeding the Urban Mob',
            html: `
                <p>Gaius's <span class="key-term" data-definition="lex-frumentaria">grain law</span> allowed Roman citizens to buy wheat at below-market prices from state supplies. This was revolutionary—the first permanent welfare programme in Roman history.</p>
                
                <p>The law secured the loyalty of Rome's urban poor, who became a permanent popularis constituency. Citizens dependent on cheap grain would support politicians who maintained the system.</p>
                
                <p>However, the programme created enormous financial pressure on the state treasury, which had to import grain and subsidise the difference between market and sale prices.</p>
                
                <p>More fundamentally, it established the principle that the state owed citizens material support, not just legal protection. Later politicians would expand this into free grain distribution (<em>annona</em>).</p>
                
                <div class="primary-source">
                    The people received this law with such enthusiasm that they followed Gaius like a guard.
                    <div class="source-citation">— Plutarch, <em>Life of Gaius Gracchus</em> 5</div>
                </div>
                
                <p>Like modern welfare systems, the grain dole created both benefits (reduced urban unrest) and problems (fiscal burden, political dependency).</p>
            `
        }
    },
    {
        id: 'judicial',
        icon: '⚖️',
        title: 'Judicial Reform',
        subtitle: 'Equites control courts',
        content: {
            title: 'Judicial Reform: Empowering the Equites',
            html: `
                <p>Gaius transferred control of the <span class="key-term" data-definition="quaestio-repetundarum">extortion courts</span> from senators to <span class="key-term" data-definition="equites">equites</span> (wealthy non-senators). This seemingly technical change had massive political implications.</p>
                
                <p>Senators regularly extorted money from provincial subjects, but senatorial juries rarely convicted their peers. Victims had no redress against corrupt governors.</p>
                
                <p>Gaius's solution was elegant: equestrian juries would be more willing to convict corrupt senators, since they had no class loyalty to protect senatorial interests.</p>
                
                <p>This reform gained equestrian support for Gaius while weakening senatorial solidarity. Senators now faced real consequences for provincial misconduct.</p>
                
                <p>Unfortunately, equites sometimes used their judicial power to pursue their own financial interests, convicting governors who opposed their business activities rather than focusing on justice.</p>
                
                <p>The reform showed how judicial power could be used as a political weapon—a lesson learned by later politicians who manipulated courts for factional advantage.</p>
            `
        }
    },
    {
        id: 'military',
        icon: '⚔️',
        title: 'Military Reform',
        subtitle: 'State-funded equipment',
        content: {
            title: 'Military Reform: Supporting the Soldiers',
            html: `
                <p>Gaius required the state to provide military equipment for soldiers, rather than expecting them to supply their own gear. This reform addressed a major grievance among Rome's citizen-soldiers.</p>
                
                <p>Roman soldiers traditionally bought their own weapons and armour, which could cost several years' income for poor citizens. Many families were impoverished by military service.</p>
                
                <p>Soldiers and their families became grateful supporters of popularis politicians who understood their economic struggles.</p>
                
                <p>The reform established the principle that the state owed material support to citizens who served it—extending beyond legal protection to economic welfare.</p>
                
                <p>It also made military service more accessible to poor citizens, potentially changing the social composition of Roman armies.</p>
                
                <p><span class="key-figure" data-info="marius">Marius</span> would build on this precedent, creating professional armies loyal to generals who promised land and booty rather than the state.</p>
            `
        }
    },
    {
        id: 'colonial',
        icon: '🏛️',
        title: 'Colonial Programme',
        subtitle: 'New settlements',
        content: {
            title: 'Colonial Programme: Land for the Landless',
            html: `
                <p>Gaius proposed establishing colonies throughout the Mediterranean, including a controversial settlement at <span class="key-term" data-definition="carthage-colony">Carthage</span>. These colonies would provide land for Rome's dispossessed citizens.</p>
                
                <p>Rather than just redistributing existing land (which angered current occupiers), colonies created new opportunities without directly threatening elite interests.</p>
                
                <p>The Carthage proposal proved symbolically explosive. To settle Romans on the site where their greatest enemy once stood was provocative enough, but the city had been ritually cursed and destroyed only 25 years earlier.</p>
                
                <p>Opposition politicians seized on religious fears about settling on cursed ground, portraying Gaius as reckless and impious. This allowed them to turn popular opinion against his entire colonial programme.</p>
                
                <p>The Carthage proposal undermined his support among traditionally religious citizens who had previously backed his reforms.</p>
                
                <p>Despite this failure, the colonial model would prove influential. <span class="key-figure" data-info="caesar">Caesar</span> would later use veteran settlements throughout the empire to great effect.</p>
            `
        }
    },
    {
        id: 'citizenship',
        icon: '🤝',
        title: 'Citizenship Extension',
        subtitle: 'Rights for Italian allies',
        content: {
            title: 'Citizenship Extension: The Fatal Mistake',
            html: `
                <p>Gaius proposed granting Roman citizenship to <span class="key-term" data-definition="latin-allies">Latin allies</span> and Latin rights to other Italian peoples. This reform, though just, proved politically disastrous.</p>
                
                <p>Italian allies provided troops for Roman armies and died in Roman wars, yet had no voice in Roman politics. They deserved citizenship as reward for their loyalty and sacrifice.</p>
                
                <p>However, existing Roman citizens feared that extending citizenship would dilute their own privileges—sharing voting power, grain distributions, and political opportunities with more people.</p>
                
                <p>The tribune <span class="key-figure" data-info="livius-drusus">Livius Drusus</span> (Elder) exploited these fears, turning popular opinion against Gaius by promising even more benefits exclusively for existing citizens.</p>
                
                <p>This issue cost Gaius crucial support among the urban poor, who had been his most reliable constituency.</p>
                
                <p>Ironically, the citizenship question would continue to destabilise Republican politics for another generation, eventually sparking the <span class="key-concept" data-concept="social-war">Social War</span> (91-87 BC) and contributing to the Republic's collapse.</p>
            `
        }
    }
];

// Impact Cards Data
const impactCardsData = [
    {
        icon: '📜',
        title: 'Tribunician Power',
        description: 'Showed how tribunes could be used to force through radical legislation against senatorial opposition'
    },
    {
        icon: '🏛️',
        title: 'Popular Assemblies',
        description: 'Demonstrated that assemblies could override Senate through direct democracy'
    },
    {
        icon: '🤝',
        title: 'Coalition Building',
        description: 'Created model for uniting different grievances into powerful reform movements'
    },
    {
        icon: '⚔️',
        title: 'Political Violence',
        description: 'Established that constitutional limits could be broken through organised force'
    }
];

// Definitions, Figures, and Concepts (same structure as 1.5)
const definitions = {
    'ager-publicus': {
        term: 'Ager Publicus',
        definition: 'Public land technically owned by the Roman state but often occupied informally by wealthy aristocrats.',
        context: 'The crisis over public land distribution was central to the Gracchan reforms. Wealthy elites had occupied far more than the legal limit of 500 iugera, displacing small farmers who needed land for subsistence.'
    },
    'lex-sempronia-agraria': {
        term: 'Lex Sempronia Agraria',
        definition: 'Tiberius Gracchus\'s land law that enforced existing limits on public land occupation and redistributed excess to the poor.',
        context: 'This law established a three-man commission to reclaim and redistribute public land. It was revolutionary not just in its scope but in bypassing the Senate to appeal directly to popular assemblies.'
    },
    'plebeian-assembly': {
        term: 'Plebeian Assembly',
        definition: 'The assembly of plebeian citizens that elected tribunes and could pass laws (plebiscites) binding on all Romans.',
        context: 'The Gracchi used this assembly to bypass senatorial opposition. Since patricians were excluded, it was more democratic than other assemblies and more responsive to popularis appeals.'
    },
    'lex-frumentaria': {
        term: 'Lex Frumentaria',
        definition: 'Gaius Gracchus\'s grain law that allowed Roman citizens to buy wheat at subsidised prices from state supplies.',
        context: 'This was the first permanent welfare programme in Roman history, creating a loyal urban constituency for popularis politicians while placing enormous financial pressure on the state treasury.'
    },
    'equites': {
        term: 'Equites',
        definition: 'The equestrian order - wealthy Romans below senatorial rank, often involved in business, banking, and tax collection.',
        context: 'Gaius transferred control of extortion courts from senators to equites, gaining their political support while weakening senatorial solidarity. This created new factional divisions within the elite.'
    },
    'quaestio-repetundarum': {
        term: 'Quaestio Repetundarum',
        definition: 'The permanent court that tried cases of provincial extortion by Roman magistrates.',
        context: 'Control of this court was politically crucial because it determined whether corrupt governors faced consequences. Transferring it from senators to equites was a major blow to senatorial power.'
    },
    'senatus-consultum-ultimum': {
        term: 'Senatus Consultum Ultimum',
        definition: 'Emergency decree authorising consuls to use any means necessary to defend the state, effectively declaring martial law.',
        context: 'First used against Gaius Gracchus, the SCU became the Senate\'s standard response to popularis challenges. It suspended normal legal protections and authorised violence against citizens.'
    },
    'carthage-colony': {
        term: 'Carthage Colony',
        definition: 'Gaius Gracchus\'s controversial proposal to establish a Roman settlement on the site where Carthage had been destroyed.',
        context: 'This proposal was politically disastrous because Carthage had been ritually cursed. Opponents used religious fears to turn popular opinion against Gaius\'s colonial programme.'
    },
    'latin-allies': {
        term: 'Latin Allies',
        definition: 'Italian peoples with limited rights who provided troops for Roman armies but lacked full Roman citizenship.',
        context: 'Gaius\'s proposal to grant them citizenship was morally just but politically catastrophic. Existing citizens feared dilution of their privileges, costing Gaius crucial support.'
    },
    'optimates': {
        term: 'Optimates',
        definition: 'The "best men" - conservative politicians who claimed to defend traditional Republican values and senatorial authority.',
        context: 'The Gracchan crisis helped define the optimates as opponents of popularis reform. They used constitutional arguments and eventually violence to preserve their dominance.'
    },
    'populares': {
        term: 'Populares',
        definition: 'Politicians who used popular assemblies and tribunician power to bypass the Senate and appeal directly to the people.',
        context: 'The Gracchi created this political tradition, showing how tribunes could challenge senatorial authority through direct democracy. All later popularis politicians followed their methods.'
    }
};

const figures = {
    'tiberius-gracchus': {
        name: 'Tiberius Sempronius Gracchus',
        dates: '168-133 BC',
        role: 'Tribune and land reformer',
        significance: 'Pioneered popularis politics by bypassing the Senate and appealing directly to popular assemblies. His assassination established the precedent for political violence in the Late Republic.'
    },
    'gaius-gracchus': {
        name: 'Gaius Sempronius Gracchus',
        dates: '154-121 BC',
        role: 'Tribune and popularis politician',
        significance: 'Created the first comprehensive popularis programme, targeting multiple constituencies with systematic reforms. His methods became the template for all later popularis politicians.'
    },
    'gracchi-brothers': {
        name: 'The Gracchi Brothers',
        dates: 'Tiberius (168-133 BC), Gaius (154-121 BC)',
        role: 'Popularis reformers and tribunes',
        significance: 'Transformed Roman politics by creating popularis methods, establishing precedents for political violence, and deepening factional divisions that would ultimately destroy the Republic.'
    },
    'cornelia': {
        name: 'Cornelia',
        dates: 'c. 190-100 BC',
        role: 'Mother of the Gracchi',
        significance: 'Daughter of Scipio Africanus who raised the Gracchi brothers and influenced their political development. Famous for calling her sons "my jewels" and supporting their reform efforts.'
    },
    'scipio-africanus': {
        name: 'Publius Cornelius Scipio Africanus',
        dates: '236-183 BC',
        role: 'General and consul',
        significance: 'Victor over Hannibal at Zama, grandfather of the Gracchi through their mother Cornelia. His military glory gave the family prestige that enabled their political ambitions.'
    },
    'marcus-octavius': {
        name: 'Marcus Octavius',
        dates: 'fl. 133 BC',
        role: 'Tribune and conservative',
        significance: 'Fellow tribune whose veto of Tiberius\'s land bill led to his unprecedented deposition. His removal shocked conservatives and established that constitutional norms could be overridden.'
    },
    'pontifex-maximus-scaevola': {
        name: 'Publius Mucius Scaevola',
        dates: 'c. 180-115 BC',
        role: 'Pontifex Maximus and consul',
        significance: 'Led the senatorial mob that killed Tiberius Gracchus, establishing the precedent for political violence. His involvement showed how religious authority could be used for political purposes.'
    },
    'lucius-opimius': {
        name: 'Lucius Opimius',
        dates: 'fl. 121 BC',
        role: 'Consul',
        significance: 'Granted the first Senatus Consultum Ultimum and led military forces against Gaius Gracchus. His actions established the precedent for using organised violence against popularis politicians.'
    },
    'livius-drusus': {
        name: 'Marcus Livius Drusus (Elder)',
        dates: 'fl. 122 BC',
        role: 'Tribune',
        significance: 'Used demagogic counter-proposals to undermine Gaius Gracchus\'s support, showing how popularis methods could be turned against popularis politicians.'
    },
    'marius': {
        name: 'Gaius Marius',
        dates: '157-86 BC',
        role: 'General and popularis politician',
        significance: 'Followed Gracchan precedents by using popular support to gain unprecedented commands. His military reforms created professional armies loyal to generals rather than the state.'
    },
    'caesar': {
        name: 'Gaius Julius Caesar',
        dates: '100-44 BC',
        role: 'General, politician, dictator',
        significance: 'The ultimate popularis politician who used Gracchan methods to destroy the Republic. His career showed the logical endpoint of the political revolution the Gracchi began.'
    },
    'saturninus': {
        name: 'Lucius Appuleius Saturninus',
        dates: 'c. 138-100 BC',
        role: 'Tribune and popularis politician',
        significance: 'Followed Gracchan precedents with land distributions and popular legislation. His violent death under another SCU showed the recurring pattern of popularis-optimate conflict.'
    },
    'sulpicius': {
        name: 'Publius Sulpicius Rufus',
        dates: 'c. 124-88 BC',
        role: 'Tribune and popularis politician',
        significance: 'Used Gracchan methods to transfer Mithridatic command from Sulla to Marius, triggering the first march on Rome and beginning the cycle of civil wars.'
    }
};

const concepts = {
    'popularis-methods': {
        concept: 'Popularis Methods',
        explanation: 'Political techniques pioneered by the Gracchi: using tribunes to bypass the Senate, appealing directly to popular assemblies, and building coalitions among dispossessed groups.',
        importance: 'These methods became the standard approach for challenging senatorial authority throughout the Late Republic. Every major popularis politician from Marius to Caesar followed the Gracchan template.'
    },
    'popularis-politics': {
        concept: 'Popularis Politics',
        explanation: 'A political approach that claimed to represent "the people" against elite interests, using popular assemblies and tribunician power to enact reforms.',
        importance: 'Created by the Gracchi, this became one of the two main political traditions in the Late Republic, opposed by the optimates who defended traditional senatorial authority.'
    },
    'tribunician-sacrosanctity': {
        concept: 'Tribunician Sacrosanctity',
        explanation: 'The religious protection that made tribunes of the plebs physically inviolable - anyone who harmed them was considered cursed by the gods.',
        importance: 'The murder of Tiberius Gracchus shattered this fundamental constitutional principle, showing that religious sanctions could not protect politicians from violence.'
    },
    'social-war': {
        concept: 'Social War',
        explanation: 'The war between Rome and its Italian allies (91-87 BC) fought over citizenship rights that Gaius Gracchus had tried to address peacefully.',
        importance: 'This conflict showed the long-term consequences of failing to resolve the citizenship question. The war devastated Italy and further weakened Republican institutions.'
    }
};

// Initialize Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    initializeTimeline();
    initializeBrotherComparison();
    initializeReformCards();
    initializeImpactCards();
    
    // Delay to ensure all content is rendered
    setTimeout(() => {
        setupInteractiveContent();
    }, 100);
});

// Initialize Timeline
function initializeTimeline() {
    const eventsContainer = document.getElementById('timeline-events');
    const detailsContainer = document.getElementById('timeline-details');
    
    if (!eventsContainer || !detailsContainer) return;
    
    // Create timeline events
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
    
    // Create default content
    const defaultContent = document.createElement('div');
    defaultContent.className = 'timeline-content active';
    defaultContent.id = 'timeline-default';
    defaultContent.innerHTML = `
        <h4>The Gracchan Revolution</h4>
        <p>Click on any event above to explore the dramatic sequence that transformed Roman politics. In just twelve years, two brothers introduced methods and precedents that would be used by every major popularis politician from <span class="key-figure" data-info="marius">Marius</span> to <span class="key-figure" data-info="caesar">Caesar</span>.</p>
        <p>The Gracchi didn't just propose reforms—they revolutionised how Roman politics worked, showing that tribunes could bypass the Senate and appeal directly to the people.</p>
    `;
    detailsContainer.appendChild(defaultContent);
    
    // Create content for each event
    timelineEventsData.forEach(event => {
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

function showTimelineEvent(eventId) {
    // Remove active class from all timeline content
    document.querySelectorAll('.timeline-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Show corresponding content
    const contentId = 'timeline-' + eventId;
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.add('active');
    }
    
    // Re-setup interactive content
    setupInteractiveContent();
}

// Initialize Brother Comparison
function initializeBrotherComparison() {
    const gridContainer = document.getElementById('comparison-grid');
    
    if (!gridContainer) return;
    
    brothersData.forEach(brother => {
        const sectionEl = document.createElement('div');
        sectionEl.className = `brother-section ${brother.id}`;
        sectionEl.innerHTML = `
            <img src="../images/${brother.id}.jpg" alt="${brother.name}" class="brother-portrait" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="brother-portrait-fallback" style="display: none;">${brother.id === 'tiberius' ? '👨' : '👤'}</div>
            <h4>${brother.name} (${brother.dates})</h4>
            ${brother.content.map(p => `<p>${p}</p>`).join('')}
        `;
        gridContainer.appendChild(sectionEl);
    });
}

// Initialize Reform Cards
function initializeReformCards() {
    const cardsContainer = document.getElementById('reform-cards');
    const detailsContainer = document.getElementById('reform-details');
    
    if (!cardsContainer || !detailsContainer) return;
    
    // Create reform cards
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
    
    // Create default content
    const defaultContent = document.createElement('div');
    defaultContent.className = 'timeline-content active';
    defaultContent.id = 'reform-default';
    defaultContent.innerHTML = `
        <h4>Systematic Popularis Politics</h4>
        <p>Click on any reform above to explore Gaius's comprehensive programme. Unlike his brother's single-issue focus, Gaius built a broad coalition by addressing multiple grievances simultaneously.</p>
        <p>Each reform targeted a different constituency while undermining senatorial power—creating the template for all future popularis politicians.</p>
    `;
    detailsContainer.appendChild(defaultContent);
    
    // Create content for each reform
    reformsData.forEach(reform => {
        const contentEl = document.createElement('div');
        contentEl.className = 'timeline-content';
        contentEl.id = `reform-${reform.id}`;
        contentEl.innerHTML = `
            <h4>${reform.content.title}</h4>
            ${reform.content.html}
        `;
        detailsContainer.appendChild(contentEl);
    });
}

function showReformDetails(reformId) {
    // Remove active class from all reform cards and content
    document.querySelectorAll('.reform-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelectorAll('.timeline-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to clicked card
    event.target.closest('.reform-card').classList.add('active');
    
    // Show corresponding content
    const contentId = 'reform-' + reformId;
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.add('active');
    }
    
    // Re-setup interactive content
    setupInteractiveContent();
}

// Initialize Impact Cards
function initializeImpactCards() {
    const cardsContainer = document.getElementById('impact-cards');
    
    if (!cardsContainer) return;
    
    impactCardsData.forEach(impact => {
        const cardEl = document.createElement('div');
        cardEl.className = 'impact-card';
        cardEl.innerHTML = `
            <span class="impact-icon">${impact.icon}</span>
            <div class="impact-title">${impact.title}</div>
            <div class="impact-description">${impact.description}</div>
        `;
        cardsContainer.appendChild(cardEl);
    });
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
