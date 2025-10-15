// Battle Timeline Data - Escalation Format
const battleEvents = [
    {
        id: 'first-march',
        level: 1,
        escalationPercent: 20,
        levelLabel: 'LEVEL 1',
        date: '88 BC',
        icon: '⚔️',
        title: 'First March on Rome',
        preview: 'Sulla leads six legions against Rome—violating the sacred pomerium. Constitutional government ends.',
        content: {
            title: 'The Unthinkable Becomes Reality (88 BC)',
            html: `
                <p>When tribune <span class="key-figure" data-info="sulpicius">Sulpicius Rufus</span> transferred the <span class="key-term" data-definition="mithridatic-command">Mithridatic command</span> from Sulla to <span class="key-figure" data-info="marius">Marius</span>, Sulla made the unprecedented decision to march on Rome with six legions.</p>
                
                <p>This violated the most sacred principle of Republican government—that armies existed to defend the state, not threaten it. Sulla's violation of the <span class="key-term" data-definition="pomerium">pomerium</span> (the sacred boundary of Rome) with armed troops was both political revolution and religious sacrilege.</p>
                
                <p>The march succeeded because resistance collapsed. Most senators fled the city, Marius lacked military forces in Rome, and urban citizens could not oppose disciplined legions. Sulla's soldiers, recruited through Marius's reforms, followed their commander even against Rome itself—proving the danger of client armies.</p>
                
                <div class="casualty-box">
                    <span class="casualty-number">Minimal</span>
                    <div class="casualty-label">Military Casualties (resistance collapsed)</div>
                </div>
                
                <p><strong>Outcome:</strong> Sulla occupied Rome, reversed Sulpicius's legislation, and declared Marius and Sulpicius enemies of the state. Sulpicius was killed during his escape; Marius fled to Africa.</p>
                
                <div class="significance-box">
                    <strong>Why This Mattered:</strong>
                    <p>First time a Roman general led legions against Rome. Established precedent that military force could override civilian authority and constitutional process. The sacred boundary between military and civilian power had been crossed—it could never be restored.</p>
                </div>
            `
        }
    },
    {
        id: 'marian-return',
        level: 2,
        escalationPercent: 40,
        levelLabel: 'LEVEL 2',
        date: '87 BC',
        icon: '🔥',
        title: 'Marian Counter-Revolution',
        preview: 'Marius and Cinna seize Rome. Systematic massacres of Sulla\'s supporters begin. First proscription lists.',
        content: {
            title: 'Violence Begets Violence (87 BC)',
            html: `
                <p>As soon as Sulla departed for the east to fight Mithridates, <span class="key-figure" data-info="marius">Marius</span> allied with consul <span class="key-figure" data-info="cinna">Lucius Cornelius Cinna</span> to retake Rome. Their forces included veteran soldiers, freed slaves promised freedom, and Italian allies who had supported citizenship legislation.</p>
                
                <p>The siege of Rome revealed new horrors of civil conflict. Marius's army combined desperation with ruthless determination. When the city fell, systematic massacres targeted Sulla's supporters and conservative senators.</p>
                
                <p>Marius's brief seventh consulship (86 BC) was marked by the first proscription lists—systematic political murders where condemned individuals could be killed for reward. Though Marius died early in 86 BC (just weeks into his consulship), <span class="key-figure" data-info="cinna">Cinna</span> continued the popularis reign of terror.</p>
                
                <div class="casualty-box">
                    <span class="casualty-number">Hundreds</span>
                    <div class="casualty-label">Senators and equestrians executed without trial</div>
                </div>
                
                <div class="significance-box">
                    <strong>The Escalation:</strong>
                    <p>Violence moved from military occupation to systematic political murder. Established precedent for proscriptions and demonstrated that political defeat meant death rather than exile. Compromise became impossible—losing meant extermination.</p>
                </div>
            `
        }
    },
    {
        id: 'return',
        level: 3,
        escalationPercent: 60,
        levelLabel: 'LEVEL 3',
        date: '83 BC',
        icon: '⚡',
        title: 'Sulla Returns from the East',
        preview: 'Five veteran legions land at Brundisium. Pompey (age 23) raises three more. Italy prepares for total war.',
        content: {
            title: 'Return of the Avenger (83 BC)',
            html: `
                <p>Having concluded peace with Mithridates (though not complete victory), Sulla returned to Italy in spring 83 BC with five battle-hardened legions and burning desire for vengeance. His landing at <span class="key-term" data-definition="brundisium">Brundisium</span> marked the beginning of the final phase of civil war.</p>
                
                <p>Though outnumbered by Marian forces, Sulla's veterans were disciplined professionals who had campaigned together for years in the east. More importantly, prominent Romans began defecting to his cause, including the young <span class="key-figure" data-info="pompey">Pompey</span> (age 23) who raised three legions in Picenum to support Sulla.</p>
                
                <p>The psychological impact was enormous. Sulla represented legitimacy and order to those exhausted by years of Marian-Cinnan chaos. His propaganda promised constitutional restoration and attracted moderates who had initially opposed him.</p>
                
                <div class="casualty-box">
                    <span class="casualty-number">23 Legions</span>
                    <div class="casualty-label">Sulla's combined forces (5 initially + defectors)</div>
                </div>
                
                <div class="significance-box">
                    <strong>The Escalation:</strong>
                    <p>Civil war became professional military conflict. Entire legions fought legions. Mass defections showed traditional loyalties collapsing—personal allegiance to generals now trumped institutional loyalty to Rome. Young aristocrats like Pompey could raise private armies.</p>
                </div>
            `
        }
    },
    {
        id: 'sacriportus',
        level: 4,
        escalationPercent: 80,
        levelLabel: 'LEVEL 4',
        date: '82 BC',
        icon: '💥',
        title: 'Battle of Sacriportus',
        preview: 'Marius the Younger\'s army destroyed. Thousands killed. Marian cause collapses. Path to Rome opens.',
        content: {
            title: 'The End of Marian Dreams (82 BC)',
            html: `
                <p>At <span class="key-term" data-definition="sacriportus">Sacriportus</span>, near Signia, Sulla faced the army of <span class="key-figure" data-info="marius-the-younger">Gaius Marius the Younger</span> (son of the great Marius, now consul). The battle demonstrated the superior discipline and experience of Sulla's eastern veterans.</p>
                
                <p>The defeat was catastrophic for the Marian cause. Young Marius fled to Praeneste where he was besieged, and much of his army defected to Sulla. The victory opened the path to Rome and broke Marian morale across Italy.</p>
                
                <p>Sulla's relative clemency towards defeated enemies in this phase contrasted sharply with his later brutality, suggesting his eventual reign of terror was calculated policy rather than uncontrolled vengeance.</p>
                
                <div class="casualty-box">
                    <span class="casualty-number">Thousands</span>
                    <div class="casualty-label">Marian soldiers killed or captured; young Marius besieged</div>
                </div>
                
                <div class="significance-box">
                    <strong>The Escalation:</strong>
                    <p>Major field battles with professional armies fighting to the death. Mass casualties in single engagements. Marian resistance crumbling not through negotiation but through systematic military destruction. Victory through extermination becoming the only option.</p>
                </div>
            `
        }
    },
    {
        id: 'colline-gate',
        level: 5,
        escalationPercent: 100,
        levelLabel: 'LEVEL 5',
        date: '82 BC (November)',
        icon: '☠️',
        title: 'Battle of the Colline Gate',
        preview: '50,000+ killed in final battle. 6,000 prisoners massacred whilst Senate meets. Proscriptions begin. Republic dies.',
        content: {
            title: 'Democracy Dies at Rome\'s Gates (82 BC)',
            html: `
                <p>The decisive battle occurred just outside Rome at the <span class="key-term" data-definition="colline-gate">Colline Gate</span>, where Sulla faced the last desperate Marian army led by <span class="key-figure" data-info="pontius-telesinus">Pontius Telesinus</span> and the Samnites—Rome's ancient Italian enemies who saw this as their final chance to destroy the city.</p>
                
                <p>The battle was ferocious and nearly lost. Sulla's left wing collapsed, and he personally led charges to prevent complete defeat. Only the discipline of his veteran right wing, commanded by <span class="key-figure" data-info="crassus">Marcus Licinius Crassus</span>, secured victory as darkness fell.</p>
                
                <p>The aftermath was horrific. Sulla ordered the systematic massacre of 6,000+ prisoners in the Villa Publica whilst the Senate met nearby in the Temple of Bellona. When senators asked about the screams, Sulla replied: <em>"Pay no attention—it's just some criminals being punished."</em></p>
                
                <div class="casualty-box">
                    <span class="casualty-number">50,000+</span>
                    <div class="casualty-label">Killed in battle and subsequent massacres</div>
                </div>
                
                <p>Telesinus was killed; his head was displayed in the Forum as a warning. Young Marius committed suicide when Praeneste fell. Organised resistance ended.</p>
                
                <div class="significance-box">
                    <strong>Maximum Escalation Reached:</strong>
                    <p>Systematic massacre of prisoners whilst government met nearby. Brutal theatricality of violence. End of organised resistance meant beginning of proscriptions—2,000+ more would die. Political opposition eliminated through state-sanctioned murder. The Republic as a constitutional system was dead—only the name remained.</p>
                </div>
            `
        }
    }
];

// Proscription Victims Data
const proscriptionVictims = [
    {
        id: 'pontius-telesinus',
        name: 'Pontius Telesinus',
        title: 'Samnite General',
        fate: 'Killed at Colline Gate, head displayed in Forum as warning to Italian rebels',
        significance: 'Last hope of non-Roman Italy to destroy Rome; his death ended centuries of Italian resistance'
    },
    {
        id: 'marius-gratidianus',
        name: 'Marcus Marius Gratidianus',
        title: 'Marius\'s Nephew',
        fate: 'Tortured and mutilated by Catilina at tomb of Lutatius Catulus (whom Marius had killed)',
        significance: 'Demonstrated ritualistic nature of revenge; even family connections to enemies meant death'
    },
    {
        id: 'mucius-scaevola',
        name: 'Quintus Mucius Scaevola Pontifex',
        title: 'Pontifex Maximus (Chief Priest)',
        fate: 'Murdered whilst clinging to altar of Vesta—violation of sacred asylum',
        significance: 'Showed not even Rome\'s highest religious office provided protection; desecration of sacred law'
    },
    {
        id: 'carbo',
        name: 'Gnaeus Papirius Carbo',
        title: 'Three-time Consul, Marian Leader',
        fate: 'Fled to Africa, captured and executed by Pompey on Sulla\'s orders',
        significance: 'Proved exile provided no safety; Pompey\'s ruthless efficiency earned him nickname "teenage butcher"'
    },
    {
        id: 'marius-the-younger',
        name: 'Gaius Marius the Younger',
        title: 'Son of Marius, Consul',
        fate: 'Besieged at Praeneste after Sacriportus defeat; committed suicide when city fell',
        significance: 'End of Marian family\'s political aspirations; demonstrated no rank provided immunity'
    },
    {
        id: 'sertorius',
        name: 'Quintus Sertorius',
        title: 'Brilliant Marian General',
        fate: 'Escaped to Spain, established independent state, assassinated by own lieutenant (72 BC)',
        significance: 'Proved talented generals could create rival Roman states in provinces; required separate war to eliminate'
    },
    {
        id: 'random-wealthy',
        name: 'Numerous Wealthy Citizens',
        title: 'Equestrians and Landowners',
        fate: 'Added to lists simply for their property; estates sold to reward Sulla\'s supporters',
        significance: 'Proved wealth alone could be death sentence; proscriptions became method of economic redistribution'
    }
];

// Reform Categories Data
const reformsData = {
    reforms: [
        {
            id: 'senate',
            icon: '🏛️',
            title: 'Senate Enhancement',
            subtitle: 'Doubling membership, restoring control',
            content: {
                title: 'Creating a Sullan Senate',
                html: `
                    <p>Sulla expanded the Senate from approximately 300 to 600 members, primarily by appointing his own supporters and loyalists. This diluted traditional senatorial families whilst ensuring his faction dominated the expanded body.</p>
                    
                    <p><strong>Judicial Reforms:</strong> Returned exclusive jury service in the courts (<span class="key-term" data-definition="quaestiones">quaestiones</span>) to senators, reversing Gracchan legislation that had given equestrians judicial power. This restored senatorial control over prosecution of provincial governors and major crimes.</p>
                    
                    <p><strong>Provincial Commands:</strong> Required praetors and consuls to remain in Rome during their year of office, taking provincial commands only afterwards as promagistrates. This separated civil authority from military power.</p>
                    
                    <p><strong>Intention:</strong> Strengthen Senate as the governing institution of the Republic; restore aristocratic control over law courts and provincial administration.</p>
                    
                    <p><strong>Failure:</strong> Expansion with political appointees actually weakened traditional senatorial authority and prestige. New senators lacked the expertise and connections of old families. Within a generation, the Senate was widely seen as incompetent and corrupt.</p>
                `
            }
        },
        {
            id: 'tribunate',
            icon: '⚖️',
            title: 'Tribunate Restriction',
            subtitle: 'Neutering popularis power',
            content: {
                title: 'Destroying the Tribune\'s Teeth',
                html: `
                    <p>Sulla systematically dismantled tribunician authority—the office that had launched the careers of the Gracchi, Saturninus, and Sulpicius. His restrictions were designed to make the tribunate powerless and unattractive.</p>
                    
                    <p><strong>Legislative Ban:</strong> Tribunes were prohibited from proposing legislation to popular assemblies, eliminating their ability to bypass senatorial opposition through direct appeals to the people. This was the tribunes' most powerful weapon—now removed.</p>
                    
                    <p><strong>Career Dead-end:</strong> Tribunes were barred from seeking higher magistracies, making the office a terminal position that ambitious politicians would avoid. Previously, successful tribunes could leverage popularity into higher offices.</p>
                    
                    <p><strong>Veto Retained:</strong> Tribunes kept their traditional veto power, but the legislative ban made this largely irrelevant since they couldn't propose alternative measures.</p>
                    
                    <p><strong>Intention:</strong> Prevent future popularis politicians from using tribunician power to challenge senatorial authority.</p>
                    
                    <p><strong>Failure:</strong> These restrictions were gradually reversed. <span class="key-figure" data-info="pompey">Pompey</span> and <span class="key-figure" data-info="crassus">Crassus</span> restored full tribunician power in 70 BC (just nine years after Sulla\'s abdication). Later popularis politicians like Clodius and Caesar used the tribunate more effectively than ever.</p>
                `
            }
        },
        {
            id: 'cursus',
            icon: '🎯',
            title: 'Cursus Honorum',
            subtitle: 'Formalising career structure',
            content: {
                title: 'Bureaucratic Control of Political Advancement',
                html: `
                    <p>Sulla formalised the <span class="key-term" data-definition="cursus-honorum">cursus honorum</span> (course of offices) with strict regulations designed to prevent rapid political advancement and ensure experienced leadership.</p>
                    
                    <p><strong>Age Requirements:</strong> Set minimum ages for each office—30 for quaestor, 39 for praetor, 42 for consul. This prevented young firebrands from gaining power too quickly.</p>
                    
                    <p><strong>Mandatory Intervals:</strong> Required two-year gaps between holding consecutive magistracies, slowing political careers and giving the Senate time to assess candidates.</p>
                    
                    <p><strong>Office Sequence:</strong> Mandated strict progression—quaestorship before praetorship, praetorship before consulship. No skipping steps.</p>
                    
                    <p><strong>Numbers Increased:</strong> Raised annual praetors from 8 to 20, providing more administrative positions for the expanded Senate whilst maintaining only 2 consuls.</p>
                    
                    <p><strong>Intention:</strong> Slow political advancement; prevent young, inexperienced politicians from rapidly accumulating power; create predictable career progression.</p>
                    
                    <p><strong>Unintended Consequence:</strong> Created more competition for consulship (the only office that truly mattered for distinction), intensifying rather than reducing political rivalry. Pompey violated these rules repeatedly with Senate approval, proving they were unenforceable against successful generals.</p>
                `
            }
        },
        {
            id: 'military',
            icon: '⚔️',
            title: 'Military Limitations',
            subtitle: 'Preventing future marches on Rome',
            content: {
                title: 'Closing the Stable After the Horses Bolted',
                html: `
                    <p>Having used military force to seize power, Sulla attempted to prevent future generals from following his example—an effort doomed by its fundamental contradiction.</p>
                    
                    <p><strong>Provincial Boundaries:</strong> Strictly defined provincial commands and prohibited governors from leading armies outside assigned territories without Senate permission. Leaving your province with an army was now treason.</p>
                    
                    <p><strong>Treason Laws Expanded:</strong> Broadened definitions of <span class="key-term" data-definition="maiestas">maiestas</span> (treason) to include actions diminishing state authority, theoretically making it illegal to march on Rome.</p>
                    
                    <p><strong>Command Duration:</strong> Limited length of provincial commands and required Senate approval for extensions, preventing generals from building long-term client relationships with troops.</p>
                    
                    <p><strong>Intention:</strong> Prevent future Mariuses and Sullas from using armies for political purposes; keep military force subordinate to civilian authority.</p>
                    
                    <p><strong>Fundamental Flaw:</strong> Sulla's reforms could not address the root problem—professional armies loyal to commanders rather than the state (Marius's legacy). Constitutional law cannot constrain those who control military force.</p>
                    
                    <p><strong>Failure:</strong> Pompey, Caesar, and others repeatedly violated these restrictions. Caesar's crossing of the Rubicon (49 BC) was illegal under Sullan law, but his veterans followed him anyway. The reforms were unenforceable precisely when they mattered most.</p>
                `
            }
        }
    ],
    defaultContent: {
        title: 'Revolutionary Constitutional Changes',
        html: `
            <p>Click on any reform above to explore how Sulla attempted to prevent future civil wars through constitutional changes—whilst inadvertently creating conditions for greater conflicts.</p>
            <p>Sulla tried to prevent future Mariuses but created the conditions for future Caesars.</p>
        `
    }
};

// Definitions Data
const definitions = {
    'novus-homo': {
        term: 'Novus Homo',
        definition: 'A "new man"—first in his family to reach the Senate and achieve high office.',
        context: 'Marius was a novus homo; Sulla was not. Sulla came from impoverished patrician nobility, giving him aristocratic pride without wealth. This shaped his determination to restore aristocratic dominance.'
    },
    'jugurthine-war': {
        term: 'Jugurthine War',
        definition: 'Roman conflict against King Jugurtha of Numidia (112-105 BC) that revealed senatorial corruption.',
        context: 'Sulla served as Marius\'s quaestor and diplomatically secured Jugurtha\'s capture, creating lasting tension over credit for ending the war. This began their rivalry.'
    },
    'mithridatic-command': {
        term: 'Mithridatic Command',
        definition: 'Military appointment to fight King Mithridates VI of Pontus, who had invaded Roman Asia and massacred thousands of Romans.',
        context: 'This prestigious and potentially lucrative eastern command was the prize that sparked the final Marius-Sulla conflict, leading to the first march on Rome.'
    },
    'pomerium': {
        term: 'Pomerium',
        definition: 'Sacred boundary of Rome that generals could not cross with armed troops without relinquishing military command.',
        context: 'Crossing the pomerium with an army was both illegal and sacrilegious. Sulla\'s violation marked the first time a Roman general threatened the city itself with military force.'
    },
    'dictator-rei-publicae': {
        term: 'Dictator Rei Publicae Constituendae',
        definition: 'Dictator for the purpose of re-establishing the Republic—Sulla\'s unprecedented title with no time limit and unlimited power.',
        context: 'This transformed the traditional 6-month emergency dictatorship into a tool for constitutional revolution. Sulla held this office from 82-79 BC.'
    },
    'brundisium': {
        term: 'Brundisium',
        definition: 'Port city in southern Italy (modern Brindisi) where Sulla landed with his army in 83 BC.',
        context: 'The traditional landing point for armies returning from the east. Sulla\'s arrival here with five veteran legions marked the beginning of the final phase of civil war.'
    },
    'sacriportus': {
        term: 'Battle of Sacriportus',
        definition: 'Decisive Sullan victory over Marius the Younger in 82 BC near Signia.',
        context: 'This battle broke the main Marian army and demonstrated the superior discipline of Sulla\'s eastern veterans. Opened the path to Rome.'
    },
    'colline-gate': {
        term: 'Battle of the Colline Gate',
        definition: 'Final battle of the civil war (82 BC) where Sulla defeated Samnites and last Marian forces just outside Rome.',
        context: 'Nearly 50,000 killed in battle. The subsequent massacre of 6,000 prisoners whilst Senate met nearby marked beginning of Sulla\'s reign of terror.'
    },
    'cursus-honorum': {
        term: 'Cursus Honorum',
        definition: 'The formal sequence of public offices in a Roman political career (quaestor → aedile → praetor → consul).',
        context: 'Sulla formalised this system with strict age requirements and mandatory intervals, attempting to slow political advancement and prevent rapid power accumulation.'
    },
    'quaestiones': {
        term: 'Quaestiones',
        definition: 'Permanent criminal courts in Rome, particularly for extortion (repetundae) and treason (maiestas).',
        context: 'Control of these courts was politically crucial. Sulla returned jury service exclusively to senators, reversing Gracchan reforms that had given equestrians judicial power.'
    },
    'maiestas': {
        term: 'Maiestas',
        definition: 'Treason—crimes that diminished the majesty and authority of the Roman state.',
        context: 'Sulla expanded definitions of treason to include actions like leaving your province with an army. However, these laws proved unenforceable against successful generals.'
    }
};

// Historical Figures Data
const figures = {
    'sulla': {
        name: 'Lucius Cornelius Sulla',
        dates: '138-78 BC',
        role: 'General, dictator, constitutional reformer',
        significance: 'First Roman to march on Rome with an army. Established precedents for military seizure of power, systematic proscriptions, and unlimited dictatorship. His voluntary abdication paradoxically made his precedent more dangerous for future strongmen.'
    },
    'marius': {
        name: 'Gaius Marius',
        dates: '157-86 BC',
        role: 'General, consul, military reformer',
        significance: 'Sulla\'s former commander and later bitter enemy. Their rivalry defined Roman politics for two decades and led to the first sustained civil wars.'
    },
    'sulpicius': {
        name: 'Publius Sulpicius Rufus',
        dates: 'c. 124-88 BC',
        role: 'Tribune and popularis politician',
        significance: 'His proposal to transfer the Mithridatic command from Sulla to Marius triggered Sulla\'s first march on Rome. Killed during Sulla\'s occupation of the city.'
    },
    'cinna': {
        name: 'Lucius Cornelius Cinna',
        dates: 'c. 130-84 BC',
        role: 'Consul and popularis leader',
        significance: 'Allied with Marius to seize Rome during Sulla\'s absence. Ruled through terror until his assassination by his own troops in 84 BC whilst preparing to confront Sulla\'s return.'
    },
    'pompey': {
        name: 'Gnaeus Pompeius Magnus (Pompey)',
        dates: '106-48 BC',
        role: 'General and future triumvir',
        significance: 'Raised army at age 23 to support Sulla, earning nickname "teenage butcher" for ruthless efficiency. Later restored tribunician power (70 BC) and formed First Triumvirate with Caesar and Crassus.'
    },
    'crassus': {
        name: 'Marcus Licinius Crassus',
        dates: 'c. 115-53 BC',
        role: 'General and future triumvir',
        significance: 'Commanded Sulla\'s right wing at Colline Gate, securing victory. Became one of Rome\'s richest men through proscription purchases. Later formed First Triumvirate with Pompey and Caesar.'
    },
    'marius-the-younger': {
        name: 'Gaius Marius the Younger',
        dates: 'c. 109-82 BC',
        role: 'Son of Marius, consul 82 BC',
        significance: 'Led final Marian resistance but was decisively defeated at Sacriportus. Besieged at Praeneste and committed suicide when city fell, ending the Marian family\'s political aspirations.'
    },
    'pontius-telesinus': {
        name: 'Pontius Telesinus',
        dates: 'died 82 BC',
        role: 'Samnite general and Marian ally',
        significance: 'Led Samnites at Colline Gate in final attempt to destroy Rome. His defeat ended centuries of Italian resistance to Roman dominance.'
    },
    'caesar': {
        name: 'Gaius Julius Caesar',
        dates: '100-44 BC',
        role: 'General, dictator, conqueror of Gaul',
        significance: 'Nearly proscribed by Sulla as young man (family connections to Marius). Later repeated Sulla\'s march on Rome but refused to abdicate, becoming perpetual dictator until assassination.'
    }
};

// Concepts Data
const concepts = {
    'proscriptions': {
        concept: 'Proscriptions',
        explanation: 'Systematic political purges where lists of condemned individuals were posted publicly. Anyone could kill these "enemies of the state" for reward, with their property confiscated and sold.',
        importance: 'Proscriptions established the precedent that political defeat meant death rather than exile, making Republican competition impossible. Future civil wars became wars of extermination because compromise meant risking proscription. Approximately 2,000 senators and equestrians died in Sulla\'s proscriptions.'
    }
};

// Initialize Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    initializeEscalationTracker();
    initializeProscriptions();
    initializeReforms();
    
    setTimeout(() => {
        setupInteractiveContent();
    }, 100);
});

// Navigation
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
    
    // Re-initialize escalation tracker when navigating to civil-war section
    if (sectionId === 'civil-war') {
        setTimeout(() => {
            initializeEscalationTracker();
            setupInteractiveContent();
        }, 50);
    } else {
        setupInteractiveContent();
    }
}

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        showSection(this.getAttribute('data-section'));
    });
});

// Initialize Escalation Tracker
function initializeEscalationTracker() {
    const stagesContainer = document.getElementById('escalation-stages');
    const detailsContainer = document.getElementById('escalation-details');
    
    if (!stagesContainer || !detailsContainer) return;
    
    // Clear existing content
    stagesContainer.innerHTML = '';
    detailsContainer.innerHTML = '';
    
    // Create escalation stages
    battleEvents.forEach((event, index) => {
        const stageEl = document.createElement('div');
        stageEl.className = `escalation-stage level-${event.level}`;
        stageEl.setAttribute('data-level', event.levelLabel);
        stageEl.onclick = () => showEscalationStage(event.id);
        
        stageEl.innerHTML = `
            <div class="stage-header">
                <div class="stage-date">${event.date}</div>
                <div class="stage-icon">${event.icon}</div>
            </div>
            <div class="stage-title">${event.title}</div>
            <div class="stage-preview">${event.preview}</div>
        `;
        
        stagesContainer.appendChild(stageEl);
    });
}

function showEscalationStage(eventId) {
    const event = battleEvents.find(e => e.id === eventId);
    if (!event) return;
    
    // Update active state
    document.querySelectorAll('.escalation-stage').forEach(stage => {
        stage.classList.remove('active');
    });
    window.event.target.closest('.escalation-stage').classList.add('active');
    
    // Update meter
    const meterFill = document.getElementById('meter-fill');
    if (meterFill) {
        meterFill.style.width = event.escalationPercent + '%';
    }
    
    // Show details
    const detailsContainer = document.getElementById('escalation-details');
    if (detailsContainer) {
        detailsContainer.innerHTML = `
            <h4>${event.content.title}</h4>
            ${event.content.html}
        `;
        detailsContainer.classList.add('active');
        
        // Re-setup interactive content for the new details
        setupInteractiveContent();
    }
}

// Initialize Proscription List
function initializeProscriptions() {
    const listContainer = document.getElementById('proscription-list');
    if (!listContainer) return;
    
    listContainer.innerHTML = `
        <div class="proscription-header">
            <h4>PROSCRIPTI - ENEMIES OF THE PEOPLE</h4>
            <p style="font-style: italic; margin-top: 0.5rem;">"These men are condemned. Any citizen may kill them for reward. Their property is forfeit to the state."</p>
        </div>
    `;
    
    // Create victim entries
    proscriptionVictims.forEach(victim => {
        const victimEl = document.createElement('div');
        victimEl.className = 'proscribed-name';
        victimEl.onclick = () => toggleVictim(victim.id);
        victimEl.innerHTML = `
            <strong>${victim.name}</strong> - ${victim.title}
            <div class="victim-details" id="victim-${victim.id}">
                <p><strong>Fate:</strong> ${victim.fate}</p>
                <p><strong>Significance:</strong> ${victim.significance}</p>
            </div>
        `;
        listContainer.appendChild(victimEl);
    });
    
    // Add totals
    const totalsEl = document.createElement('div');
    totalsEl.style.cssText = 'text-align: center; margin-top: 2rem; padding-top: 1rem; border-top: 2px solid #dc3545; font-style: italic; color: #991b1b;';
    totalsEl.innerHTML = `
        <p style="font-weight: 600; font-size: 1.1rem;">Total Estimated Deaths</p>
        <p style="font-size: 1.3rem; font-weight: 700; margin: 0.5rem 0;">~2,000 Senators and Equestrians</p>
        <p>Plus thousands of other citizens, slaves, and supporters</p>
    `;
    listContainer.appendChild(totalsEl);
}

function toggleVictim(victimId) {
    const victimElement = window.event.target.closest('.proscribed-name');
    const detailsElement = document.getElementById('victim-' + victimId);
    
    if (victimElement && detailsElement) {
        const isActive = detailsElement.classList.contains('active');
        
        // Close all others
        document.querySelectorAll('.victim-details').forEach(details => {
            details.classList.remove('active');
        });
        
        // Toggle this one
        if (!isActive) {
            detailsElement.classList.add('active');
        }
    }
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
    document.querySelectorAll('.reform-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelectorAll('.reform-content').forEach(content => {
        content.classList.remove('active');
    });
    
    window.event.target.closest('.reform-card').classList.add('active');
    
    const contentId = 'reform-' + reformId;
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.add('active');
        setupInteractiveContent();
    }
}

// Interactive Content Setup
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
