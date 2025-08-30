// Battle Timeline Data
const battleEvents = [
    {
        id: 'first-march',
        title: 'First March on Rome (88 BC)',
        subtitle: 'Sulla breaks the ultimate taboo',
        description: 'First time a Roman general leads legions against Rome itself',
        content: {
            title: 'The Unthinkable Becomes Reality',
            html: `
                <p>Sulla's march on Rome with six legions shattered the most sacred principle of Republican government—that armies existed to defend the state, not threaten it. His violation of the <span class="key-term" data-definition="pomerium">pomerium</span> (the sacred boundary of Rome) with armed troops was an act of religious sacrilege as well as political revolution.</p>
                
                <p>The march succeeded because resistance collapsed. Most senators fled the city, Marius lacked military forces in Rome, and urban citizens could not oppose disciplined legions. Sulla's propaganda portrayed him as defending legitimate senatorial authority against illegal popular legislation.</p>
                
                <p><strong>Casualties:</strong> Minimal military resistance, but enormous constitutional damage</p>
                <p><strong>Consequences:</strong> Established precedent that military force could override civilian authority; Marius and Sulpicius declared enemies of the state</p>
            `
        }
    },
    {
        id: 'marian-return',
        title: 'Marian Counter-Revolution (87 BC)',
        subtitle: 'Violence begets violence',
        description: 'Marius and Cinna seize Rome in Sulla\'s absence',
        content: {
            title: 'Terror Comes to Rome',
            html: `
                <p>While Sulla campaigned against Mithridates, <span class="key-figure" data-info="marius">Marius</span> allied with consul <span class="key-figure" data-info="cinna">Lucius Cornelius Cinna</span> to retake Rome. Their forces included veteran soldiers, freed slaves, and Italian allies who had supported Sulpicius's citizenship legislation.</p>
                
                <p>The siege of Rome revealed new horrors of civil conflict. Marius's army combined desperation with ruthless determination, and when the city fell, systematic massacres targeted Sulla's supporters and conservative senators.</p>
                
                <p>Marius's brief seventh consulship (86 BC) was marked by proscription lists—the first systematic political murders in Roman history. Though Marius died early in 86 BC, <span class="key-figure" data-info="cinna">Cinna</span> continued the reign of terror.</p>
                
                <p><strong>Casualties:</strong> Hundreds of senators and equestrians executed</p>
                <p><strong>Consequences:</strong> Established precedent for proscriptions; demonstrated that political defeat meant death</p>
            `
        }
    },
    {
        id: 'brundisium',
        title: 'Landing at Brundisium (83 BC)',
        subtitle: 'Sulla returns for revenge',
        description: 'Five veteran legions land in southern Italy',
        content: {
            title: 'The Avenger Returns',
            html: `
                <p>Having concluded peace with Mithridates (though not a complete victory), Sulla returned to Italy with five battle-hardened legions and a burning desire for vengeance. His landing at <span class="key-term" data-definition="brundisium">Brundisium</span> in spring 83 BC marked the beginning of the final phase of civil war.</p>
                
                <p>Sulla's army was smaller than the forces opposing him, but his veterans were disciplined professionals who had campaigned together for years. More importantly, prominent Romans began joining his cause, including the young <span class="key-figure" data-info="pompey">Pompey</span> who raised three legions in Picenum.</p>
                
                <p>The psychological impact was enormous. Sulla represented legitimacy and order to those exhausted by years of Marian-Cinnan chaos. His promise of constitutional restoration attracted moderates who had initially opposed him.</p>
                
                <p><strong>Forces:</strong> 5 legions initially, growing to 23 legions with allied support</p>
                <p><strong>Consequences:</strong> Triggered mass defections from Marian forces; restored Sullan faction's credibility</p>
            `
        }
    },
    {
        id: 'sacriportus',
        title: 'Battle of Sacriportus (82 BC)',
        subtitle: 'Marian resistance crumbles',
        description: 'Decisive defeat of consul Marius the Younger',
        content: {
            title: 'The End of Marian Dreams',
            html: `
                <p>At <span class="key-term" data-definition="sacriportus">Sacriportus</span>, near Signia, Sulla faced the army of <span class="key-figure" data-info="marius-the-younger">Gaius Marius the Younger</span> (son of the great Marius). The battle demonstrated the superior discipline and experience of Sulla's eastern veterans.</p>
                
                <p>The defeat was catastrophic for the Marian cause. Young Marius fled to Praeneste where he was besieged, and much of his army defected to Sulla. The victory opened the path to Rome and broke Marian morale across Italy.</p>
                
                <p>Sulla's clemency toward defeated enemies in this phase contrasted sharply with his later brutality, suggesting his reign of terror was calculated policy rather than uncontrolled vengeance.</p>
                
                <p><strong>Casualties:</strong> Thousands of Marian soldiers killed or captured</p>
                <p><strong>Consequences:</strong> Collapse of main Marian army; siege of Praeneste begins</p>
            `
        }
    },
    {
        id: 'colline-gate',
        title: 'Battle of the Colline Gate (82 BC)',
        subtitle: 'The final reckoning',
        description: 'Sulla\'s ultimate victory outside Rome\'s walls',
        content: {
            title: 'Democracy Dies at Rome\'s Gates',
            html: `
                <p>The decisive battle occurred just outside Rome at the <span class="key-term" data-definition="colline-gate">Colline Gate</span>, where Sulla faced the last desperate Marian army led by <span class="key-figure" data-info="pontius-telesinus">Pontius Telesinus</span> and the Samnites—Rome's ancient Italian enemies who saw this as their final chance to destroy the city.</p>
                
                <p>The battle was ferocious and nearly lost. Sulla's left wing collapsed, and he personally led charges to prevent complete defeat. Only the discipline of his veteran right wing, commanded by <span class="key-figure" data-info="crassus">Marcus Licinius Crassus</span>, secured victory as darkness fell.</p>
                
                <p>The aftermath was horrific. Sulla ordered the systematic massacre of prisoners, and the sounds of mass execution in the nearby Villa Publica were audible to senators meeting in the Temple of Bellona. When senators asked about the noise, Sulla replied: "Pay no attention—it's just some criminals being punished."</p>
                
                <p><strong>Casualties:</strong> 50,000+ killed in battle and subsequent massacres</p>
                <p><strong>Consequences:</strong> End of organised resistance; beginning of Sulla's reign of terror</p>
            `
        }
    }
];

const battleDefaultContent = {
    title: 'Civil War Escalation',
    html: `
        <p>Click on any battle above to explore the escalating violence that destroyed Republican traditions and established military force as the arbiter of political power.</p>
        <p>Each battle made the next one more brutal, culminating in Sulla's reign of terror.</p>
    `
};

// Proscription Victims Data
const proscriptionVictims = [
    {
        id: 'pontius-telesinus',
        name: 'Pontius Telesinus',
        title: 'Samnite General',
        crime: 'Leading Samnite forces against Rome at Colline Gate',
        fate: 'Killed in battle, head displayed in Forum as warning to other Italian rebels',
        significance: 'Represented last hope of non-Roman Italy to destroy Rome; his death ended centuries of Italian resistance'
    },
    {
        id: 'sertorius',
        name: 'Quintus Sertorius',
        title: 'Marian General',
        crime: 'Continuing resistance to Sulla in Spain',
        fate: 'Escaped to Spain, established independent state, assassinated by his own lieutenant in 72 BC',
        significance: 'Proved that talented generals could create rival Roman states in the provinces'
    },
    {
        id: 'marius-gratidianus',
        name: 'Marcus Marius Gratidianus',
        title: 'Marius\'s Nephew',
        crime: 'Kinship with Marius and popular economic policies',
        fate: 'Tortured and mutilated by Catilina at the tomb of Lutatius Catulus, whom Marius had killed',
        significance: 'Demonstrated that even family connections to enemies meant death; showed ritualistic nature of revenge'
    },
    {
        id: 'mucius-scaevola',
        name: 'Quintus Mucius Scaevola Pontifex',
        title: 'Pontifex Maximus',
        crime: 'Supporting Marian cause and opposing Sulla\'s return',
        fate: 'Murdered while clinging to altar of Vesta—violation of sacred asylum',
        significance: 'Showed that not even Rome\'s highest religious office provided protection; desecration of sacred law'
    },
    {
        id: 'caesars-uncle',
        name: 'Gaius Julius Caesar Strabo',
        title: 'Uncle of Julius Caesar',
        crime: 'Association with Marian faction through family connections',
        fate: 'Executed, leaving young Julius Caesar vulnerable as a marked man',
        significance: 'Nearly included Julius Caesar himself on proscription lists; showed how civil war could destroy entire family lines'
    },
    {
        id: 'carbo',
        name: 'Gnaeus Papirius Carbo',
        title: 'Three-time Consul',
        crime: 'Leading Marian resistance as consul and general',
        fate: 'Fled to Africa, captured and executed by Pompey on Sulla\'s orders',
        significance: 'Showed that exile provided no safety; Pompey\'s ruthless efficiency earned him the nickname "teenage butcher"'
    },
    {
        id: 'random-rich',
        name: 'Marcus Aufidius',
        title: 'Wealthy Equestrian',
        crime: 'Possessing valuable estates coveted by Sulla\'s supporters',
        fate: 'Murdered for his property; estates sold at fraction of value to reward loyalty',
        significance: 'Proved that wealth alone could be a death sentence; proscriptions became method of economic redistribution'
    }
];

// Reform Categories Data
const reformsData = {
    reforms: [
        {
            id: 'senate',
            icon: '🏛️',
            title: 'Senate Enhancement',
            subtitle: 'Doubling senatorial membership and restoring aristocratic control',
            content: {
                title: 'Creating a Sullan Senate',
                html: `
                    <p>Sulla expanded the Senate from approximately 300 to 600 members, primarily through appointing his own supporters and loyalists. This diluted traditional senatorial families whilst ensuring his faction dominated the expanded body.</p>
                    
                    <p><strong>Judicial Reforms:</strong> Returned jury service in the courts (quaestiones) exclusively to senators, reversing Gracchan legislation that had given equestrians judicial power. This restored senatorial control over prosecution of provincial governors and other major crimes.</p>
                    
                    <p><strong>Provincial Commands:</strong> Required praetors and consuls to remain in Rome during their year of office, taking provincial commands only afterward as promagistrates. This separated civil and military authority.</p>
                    
                    <p><strong>Long-term Impact:</strong> Created a more compliant Senate in the short term, but the expansion with political appointees actually weakened traditional senatorial authority and prestige.</p>
                `
            }
        },
        {
            id: 'tribunate',
            icon: '⚖️',
            title: 'Tribunate Restriction',
            subtitle: 'Neutering the tribunes of the plebs as a source of popularis power',
            content: {
                title: 'Destroying Popular Power',
                html: `
                    <p>Sulla systematically dismantled tribunician authority, the office that had launched the careers of the Gracchi, Saturninus, and Sulpicius. His restrictions were designed to make the tribunate powerless and unattractive.</p>
                    
                    <p><strong>Legislative Ban:</strong> Tribunes were prohibited from proposing legislation to the popular assemblies, eliminating their ability to bypass senatorial opposition through direct appeals to the people.</p>
                    
                    <p><strong>Career Dead-end:</strong> Tribunes were barred from seeking higher magistracies, making the office a terminal position that ambitious politicians would avoid.</p>
                    
                    <p><strong>Veto Limitations:</strong> Though tribunes retained their traditional veto power, the legislative ban made this largely irrelevant since they couldn't propose alternative measures.</p>
                    
                    <p><strong>Long-term Failure:</strong> These restrictions were gradually reversed. Pompey and Crassus restored tribunician power in 70 BC, and later popularis politicians like Caesar used the tribunate more effectively than ever.</p>
                `
            }
        },
        {
            id: 'cursus',
            icon: '🎯',
            title: 'Career Structure',
            subtitle: 'Formalising the cursus honorum with strict age requirements',
            content: {
                title: 'Bureaucratic Control',
                html: `
                    <p>Sulla formalised the <span class="key-term" data-definition="cursus-honorum">cursus honorum</span> (course of offices) with strict regulations designed to prevent rapid political advancement and ensure experienced leadership.</p>
                    
                    <p><strong>Age Requirements:</strong> Set minimum ages for each office—30 for quaestor, 39 for praetor, 42 for consul—preventing young firebrands from gaining power too quickly.</p>
                    
                    <p><strong>Mandatory Intervals:</strong> Required two-year gaps between holding consecutive magistracies, slowing political careers and giving the Senate more time to assess candidates.</p>
                    
                    <p><strong>Office Sequence:</strong> Mandated that candidates hold quaestorship before praetorship, and praetorship before consulship, creating a predictable career ladder.</p>
                    
                    <p><strong>Numbers Increase:</strong> Raised annual magistrates from 8 to 20 praetors and maintained 2 consuls, providing more administrative positions for the expanded Senate.</p>
                    
                    <p><strong>Unintended Consequences:</strong> Created more competition for the consulship, the only office that mattered for true distinction, intensifying rather than reducing political rivalry.</p>
                `
            }
        },
        {
            id: 'military',
            icon: '⚔️',
            title: 'Military Limitations',
            subtitle: 'Attempting to prevent generals from using armies against the state',
            content: {
                title: 'Closing the Stable After the Horses Bolted',
                html: `
                    <p>Having used military force to seize power, Sulla attempted to prevent future generals from following his example—an effort doomed by its own contradictions.</p>
                    
                    <p><strong>Provincial Boundaries:</strong> Strictly defined provincial commands and prohibited governors from leading armies outside their assigned territories without Senate permission.</p>
                    
                    <p><strong>Treason Laws:</strong> Expanded definitions of treason (maiestas) to include actions that diminished state authority, theoretically making it illegal to march on Rome.</p>
                    
                    <p><strong>Command Restrictions:</strong> Limited the duration of provincial commands and required Senate approval for extensions, preventing generals from building long-term client relationships with troops.</p>
                    
                    <p><strong>Fundamental Flaw:</strong> Sulla's reforms could not address the root problem—professional armies loyal to their commanders rather than the state. The very system Marius had created made these restrictions unenforceable.</p>
                    
                    <p><strong>Future Violations:</strong> Pompey, Caesar, and others would repeatedly violate these restrictions, proving that constitutional law cannot constrain those who control military force.</p>
                `
            }
        }
    ],
    defaultContent: {
        title: 'Revolutionary Constitutional Changes',
        html: `
            <p>Click on any reform above to explore how Sulla's constitutional changes attempted to prevent future civil wars while inadvertently creating conditions for greater conflicts.</p>
            <p>Sulla's reforms attempted to prevent future Mariuses whilst inadvertently creating the conditions for future Caesars.</p>
        `
    }
};

// Dictator Profiles Data
const dictatorProfiles = [
    {
        id: 'traditional',
        title: 'Traditional Dictator',
        icon: '⚖️',
        image: null,
        characteristics: [
            'Appointed for 6-month maximum',
            'Specific military emergency',
            'Limited to assigned task',
            'Appointed by consul with Senate approval',
            'Resigned when task completed',
            'Subject to later accountability'
        ],
        note: 'Last used: 202 BC (Hannibalic War)'
    },
    {
        id: 'sulla',
        title: 'Sulla\'s Dictatorship',
        icon: null,
        image: '../images/sulla.jpg',
        characteristics: [
            'No time limit specified',
            'Constitutional reform mandate',
            'Unlimited power scope',
            'Self-appointed through military force',
            'Voluntarily abdicated (unprecedented)',
            'Immunity from prosecution'
        ],
        note: 'Duration: 82-79 BC (3+ years)'
    }
];

// Legacy Consequences Data
const consequenceData = [
    {
        title: 'Military Supremacy',
        content: 'Proved that disciplined armies could overcome constitutional opposition and popular resistance. Future generals learned that military victory translated into political authority.'
    },
    {
        title: 'Systematic Terror',
        content: 'Established proscriptions as an effective method for eliminating political opposition and redistributing wealth to supporters. The precedent made future civil wars more brutal.'
    },
    {
        title: 'Constitutional Manipulation',
        content: 'Showed how ancient offices could be transformed for unprecedented purposes. Later strongmen would similarly manipulate Republican institutions to legitimise autocratic power.'
    },
    {
        title: 'The Abdication Model',
        content: 'His voluntary retirement suggested that temporary dictatorship could be legitimate and limited, making the precedent more attractive to future ambitious politicians.'
    }
];

// Definitions Data
const definitions = {
    'jugurthine-war': {
        term: 'Jugurthine War',
        definition: 'Roman conflict against Jugurtha of Numidia (112-105 BC) that revealed senatorial corruption.',
        context: 'The war\'s prolongation due to bribery and incompetence created the crisis that brought Marius to power and launched Sulla\'s career through his diplomatic capture of Jugurtha.'
    },
    'social-war': {
        term: 'Social War',
        definition: 'Rebellion of Italian allies (91-88 BC) demanding Roman citizenship.',
        context: 'Also called the Italian War, this conflict arose when Rome\'s allies, who had fought alongside Romans for centuries, demanded equal citizenship rights. Sulla distinguished himself as a commander in this war.'
    },
    'mithridatic-command': {
        term: 'Mithridatic Command',
        definition: 'Military appointment to fight King Mithridates VI of Pontus in the east.',
        context: 'This prestigious and potentially lucrative command was the prize that sparked the final conflict between Marius and Sulla, leading to the first march on Rome.'
    },
    'pomerium': {
        term: 'Pomerium',
        definition: 'Sacred boundary of Rome that generals could not cross with armed troops.',
        context: 'Crossing the pomerium with an army was both illegal and sacrilegious. Sulla\'s violation of this boundary marked the first time a Roman general had threatened the city itself.'
    },
    'dictator-rei-publicae': {
        term: 'Dictator Rei Publicae Constituendae',
        definition: 'Dictator for the purpose of re-establishing the Republic—Sulla\'s unprecedented title.',
        context: 'This office had no time limit and unlimited power, transforming the traditional emergency dictatorship into a tool for constitutional revolution.'
    },
    'brundisium': {
        term: 'Brundisium',
        definition: 'Port city in southern Italy where Sulla landed with his army in 83 BC.',
        context: 'Modern Brindisi, this was the traditional landing point for armies returning from the east. Sulla\'s arrival here marked the beginning of the final phase of civil war.'
    },
    'sacriportus': {
        term: 'Sacriportus',
        definition: 'Site of Sulla\'s decisive victory over Marius the Younger in 82 BC.',
        context: 'This battle near Signia broke the main Marian army and opened the path to Rome, demonstrating the superior discipline of Sulla\'s eastern veterans.'
    },
    'colline-gate': {
        term: 'Colline Gate',
        definition: 'Northern gate of Rome where Sulla won his final victory in 82 BC.',
        context: 'The battle here was nearly lost but secured Sulla\'s ultimate triumph. The subsequent massacre of prisoners marked the beginning of his reign of terror.'
    },
    'cursus-honorum': {
        term: 'Cursus Honorum',
        definition: 'The formal sequence of public offices in a Roman political career.',
        context: 'Sulla formalised this system with strict age requirements and mandatory intervals between offices, attempting to prevent rapid political advancement by ambitious individuals.'
    }
};

// Historical Figures Data
const figures = {
    'sulla': {
        name: 'Lucius Cornelius Sulla',
        dates: '138-78 BC',
        role: 'General, dictator, constitutional reformer',
        significance: 'First Roman to march on Rome with an army. His career established the precedent that military force could override civilian authority and that constitutional government could be suspended for political reform.'
    },
    'marius': {
        name: 'Gaius Marius',
        dates: '157-86 BC',
        role: 'General, consul, military reformer',
        significance: 'Sulla\'s former commander and later bitter enemy. Their rivalry defined Roman politics for two decades and led to the first civil wars.'
    },
    'jugurtha': {
        name: 'Jugurtha',
        dates: 'c. 160-104 BC',
        role: 'King of Numidia',
        significance: 'His capture by Sulla\'s diplomatic efforts created the first tension between Sulla and Marius over credit for ending the Jugurthine War.'
    },
    'mithridates': {
        name: 'Mithridates VI Eupator',
        dates: 'c. 135-63 BC',
        role: 'King of Pontus',
        significance: 'His invasion of Roman Asia and massacre of Romans created the prestigious eastern command that sparked the final Marius-Sulla conflict.'
    },
    'sulpicius': {
        name: 'Publius Sulpicius Rufus',
        dates: 'c. 124-88 BC',
        role: 'Tribune and popularis politician',
        significance: 'His proposal to transfer the Mithridatic command from Sulla to Marius triggered Sulla\'s first march on Rome and was killed during Sulla\'s occupation of the city.'
    },
    'cinna': {
        name: 'Lucius Cornelius Cinna',
        dates: 'c. 130-84 BC',
        role: 'Consul and popularis leader',
        significance: 'Allied with Marius to seize Rome during Sulla\'s absence, ruling through terror until his assassination by his own troops in 84 BC.'
    },
    'pompey': {
        name: 'Gnaeus Pompeius Magnus',
        dates: '106-48 BC',
        role: 'General and political leader',
        significance: 'Raised an army at age 23 to support Sulla\'s return, earning the nickname "teenage butcher" for his ruthless efficiency in eliminating enemies.'
    },
    'marius-the-younger': {
        name: 'Gaius Marius the Younger',
        dates: 'c. 109-82 BC',
        role: 'Son of Gaius Marius and consul',
        significance: 'Led the final Marian resistance against Sulla but was decisively defeated at Sacriportus and later died during the siege of Praeneste.'
    },
    'pontius-telesinus': {
        name: 'Pontius Telesinus',
        dates: 'died 82 BC',
        role: 'Samnite general and Marian ally',
        significance: 'Led the Samnites at the Battle of the Colline Gate in a final attempt to destroy Rome. His defeat ended centuries of Italian resistance to Roman dominance.'
    },
    'crassus': {
        name: 'Marcus Licinius Crassus',
        dates: 'c. 115-53 BC',
        role: 'General and future triumvir',
        significance: 'Commanded Sulla\'s right wing at the Colline Gate, securing victory when the battle seemed lost. Later became one of Rome\'s richest men and formed the First Triumvirate with Pompey and Caesar.'
    }
};

// Concepts Data
const concepts = {
    'proscriptions': {
        concept: 'Proscriptions',
        explanation: 'Systematic political purges where condemned individuals could be killed by anyone for reward, with their property confiscated.',
        importance: 'Proscriptions established the precedent that political defeat meant death rather than exile, making Republican competition impossible and civil wars inevitable.'
    }
};

// Initialize Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    initializeBattles();
    initializeProscriptions();
    initializeReforms();
    initializeDictatorProfiles();
    initializeConsequences();
    
    setTimeout(() => {
        setupInteractiveContent();
    }, 100);
});

// Initialize Battle Timeline
function initializeBattles() {
    const battlesContainer = document.getElementById('timeline-battles');
    const detailsContainer = document.getElementById('battle-details');
    
    if (!battlesContainer || !detailsContainer) return;
    
    // Create timeline battles
    battleEvents.forEach(battle => {
        const battleEl = document.createElement('div');
        battleEl.className = 'timeline-battle';
        battleEl.onclick = () => showBattle(battle.id);
        battleEl.innerHTML = `
            <h4>${battle.title}</h4>
            <p><strong>${battle.subtitle}</strong></p>
            <p>${battle.description}</p>
        `;
        battlesContainer.appendChild(battleEl);
    });
    
    // Create default content
    const defaultContent = document.createElement('div');
    defaultContent.className = 'battle-content active';
    defaultContent.id = 'battle-default';
    defaultContent.innerHTML = `
        <h4>${battleDefaultContent.title}</h4>
        ${battleDefaultContent.html}
    `;
    detailsContainer.appendChild(defaultContent);
    
    // Create content for each battle
    battleEvents.forEach(battle => {
        const contentEl = document.createElement('div');
        contentEl.className = 'battle-content';
        contentEl.id = `battle-${battle.id}`;
        contentEl.innerHTML = `
            <h4>${battle.content.title}</h4>
            ${battle.content.html}
        `;
        detailsContainer.appendChild(contentEl);
    });
}

// Initialize Proscription Lists
function initializeProscriptions() {
    const scrollContainer = document.getElementById('proscription-scroll');
    if (!scrollContainer) return;
    
    scrollContainer.innerHTML = `
        <h4 style="text-align: center; margin-bottom: 1rem;">PROSCRIPTI - ENEMIES OF THE PEOPLE</h4>
        <p style="text-align: center; font-style: italic; margin-bottom: 1.5rem;">"These men are condemned. Any citizen may kill them for reward. Their property is forfeit to the state."</p>
    `;
    
    // Create victim entries
    proscriptionVictims.forEach(victim => {
        const victimEl = document.createElement('div');
        victimEl.className = 'proscribed-name';
        victimEl.onclick = () => revealVictim(victim.id);
        victimEl.innerHTML = `
            <strong>${victim.name}</strong> - ${victim.title}
            <div class="victim-details" id="victim-${victim.id}">
                <p><strong>Crime:</strong> ${victim.crime}</p>
                <p><strong>Fate:</strong> ${victim.fate}</p>
                <p><strong>Significance:</strong> ${victim.significance}</p>
            </div>
        `;
        scrollContainer.appendChild(victimEl);
    });
    
    // Add totals
    const totalsEl = document.createElement('div');
    totalsEl.style.cssText = 'text-align: center; margin-top: 2rem; font-style: italic; color: #c0392b;';
    totalsEl.innerHTML = `
        <p><strong>Total Estimated Deaths: 2,000+ Senators and Equestrians</strong></p>
        <p>Plus thousands of other citizens, slaves, and supporters</p>
    `;
    scrollContainer.appendChild(totalsEl);
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

// Initialize Dictator Profiles
function initializeDictatorProfiles() {
    const profilesContainer = document.getElementById('dictator-profiles');
    if (!profilesContainer) return;
    
    profilesContainer.className = 'dictator-grid';
    
    dictatorProfiles.forEach(profile => {
        const profileEl = document.createElement('div');
        profileEl.className = 'dictator-profile';
        
        const imageContent = profile.image 
            ? `<img src="${profile.image}" alt="${profile.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
               <div class="profile-image-fallback" style="display: none;">${profile.icon}</div>`
            : `<div class="profile-image-fallback">${profile.icon}</div>`;
        
        profileEl.innerHTML = `
            <div class="profile-image">
                ${imageContent}
            </div>
            <h4>${profile.title}</h4>
            <ul>
                ${profile.characteristics.map(char => `<li>${char}</li>`).join('')}
            </ul>
            <p><strong>${profile.note}</strong></p>
        `;
        profilesContainer.appendChild(profileEl);
    });
}

// Initialize Consequences Grid
function initializeConsequences() {
    const gridContainer = document.getElementById('consequence-grid');
    if (!gridContainer) return;
    
    consequenceData.forEach(consequence => {
        const itemEl = document.createElement('div');
        itemEl.className = 'consequence-item';
        itemEl.innerHTML = `
            <h4>${consequence.title}</h4>
            <p>${consequence.content}</p>
        `;
        gridContainer.appendChild(itemEl);
    });
}

// Show Battle Function
function showBattle(battleId) {
    document.querySelectorAll('.timeline-battle').forEach(battle => {
        battle.classList.remove('active');
    });
    document.querySelectorAll('.battle-content').forEach(content => {
        content.classList.remove('active');
    });
    
    event.target.closest('.timeline-battle').classList.add('active');
    
    const contentId = 'battle-' + battleId;
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.add('active');
    }
    
    setupInteractiveContent();
}

// Reveal Victim Function
function revealVictim(victimId) {
    const victimElement = document.querySelector(`[onclick*="${victimId}"]`);
    const detailsElement = document.getElementById('victim-' + victimId);
    
    if (victimElement && detailsElement) {
        victimElement.classList.toggle('revealed');
        detailsElement.classList.toggle('active');
    }
}

// Show Reform Function
function showReform(reformId) {
    document.querySelectorAll('.reform-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelectorAll('.reform-content').forEach(content => {
        content.classList.remove('active');
    });
    
    event.target.closest('.reform-card').classList.add('active');
    
    const contentId = 'reform-' + reformId;
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.add('active');
    }
    
    setupInteractiveContent();
}

// Interactive Content Functions
function setupInteractiveContent() {
    document.querySelectorAll('.key-term').forEach(term => {
        const newTerm = term.cloneNode(true);
        term.parentNode.replaceChild(newTerm, term);
        
        newTerm.addEventListener('click', function(e) {
            e.stopPropagation();
            const definition = this.dataset.definition;
            showDefinition(definition);
        });
    });

    document.querySelectorAll('.key-figure').forEach(figure => {
        const newFigure = figure.cloneNode(true);
        figure.parentNode.replaceChild(newFigure, figure);
        
        newFigure.addEventListener('click', function(e) {
            e.stopPropagation();
            const info = this.dataset.info;
            showFigureInfo(info);
        });
    });

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
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 6px; border-left: 3px solid #dc3545;">
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
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 6px; border-left: 3px solid #17a2b8;">
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
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 6px; border-left: 3px solid #28a745;">
                <h4>${concept.concept}</h4>
                <p><strong>Explanation:</strong> ${concept.explanation}</p>
                <p><strong>Historical Importance:</strong> ${concept.importance}</p>
            </div>
        `);
    }
}

function showSidebar(title, content) {
    const sidebar = document.getElementById('info-panel');
    
    document.querySelectorAll('.sidebar-content').forEach(content => {
        content.classList.remove('active');
    });
    
    const newContent = document.createElement('div');
    newContent.className = 'sidebar-content active';
    newContent.innerHTML = `
        <div class="sidebar-title">${title}</div>
        ${content}
    `;
    
    sidebar.appendChild(newContent);
    
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
