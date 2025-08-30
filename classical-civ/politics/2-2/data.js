// Reform Cards Data
const reformsData = {
    reforms: [
        {
            id: 'recruitment',
            icon: '👥',
            title: 'Recruitment Revolution',
            subtitle: 'Enlisting the landless poor',
            content: {
                title: 'The End of the Citizen-Militia',
                html: `
                    <p>Traditional Roman armies were composed of <span class="key-term" data-definition="assidui">assidui</span>—landowning citizens who could afford their own equipment. This system worked well for local wars but created severe manpower shortages during prolonged overseas campaigns.</p>
                    
                    <p>Marius abolished property qualifications entirely, allowing the <span class="key-term" data-definition="capite-censi">capite censi</span> (landless poor) to enlist for the first time. These men, previously excluded from military service, eagerly joined for regular pay and the promise of land grants upon retirement.</p>
                    
                    <p>The change was immediately practical—Rome could now field much larger armies from the growing urban population. Men who had lost their farms to debt or warfare could rebuild their lives through military service.</p>
                    
                    <p>However, this created a fundamental shift in loyalty. Citizen-soldiers had fought to protect their own property and communities. Professional soldiers fought for pay and rewards that only their generals could provide.</p>
                    
                    <div class="primary-source">
                        He enrolled not only those who met the property requirements, but summoned even those who owned nothing.
                        <div class="source-citation">— Sallust, <em>Jugurthine War</em> 86.2</div>
                    </div>
                `
            }
        },
        {
            id: 'standardisation',
            icon: '⚔️',
            title: 'Equipment Standards',
            subtitle: 'Uniform weapons and training',
            content: {
                title: 'Uniform Equipment and Training',
                html: `
                    <p>Before Marius, soldiers provided their own equipment, leading to inconsistent quality and capabilities. Wealthy soldiers had better armour and weapons, whilst poor citizens made do with basic gear.</p>
                    
                    <p>Marius standardised equipment across the legions, with the state providing uniform weapons, armour, and training. Every soldier received the same <span class="key-term" data-definition="gladius">gladius</span>, <span class="key-term" data-definition="scutum">scutum</span>, and <span class="key-term" data-definition="pilum">pilum</span>.</p>
                    
                    <p>He also introduced rigorous, systematic training programmes that transformed farmers and labourers into professional soldiers. Veterans became trainers for new recruits, creating institutional knowledge that persisted across campaigns.</p>
                    
                    <p>The famous <span class="key-term" data-definition="marian-mule">Marian mule</span> reform required soldiers to carry their own equipment on marches, increasing army mobility and reducing dependence on supply trains.</p>
                    
                    <p>These changes created more effective, disciplined armies that could sustain longer campaigns and adapt to different enemies across the Mediterranean world.</p>
                `
            }
        },
        {
            id: 'professionalism',
            icon: '🏛️',
            title: 'Professional Army',
            subtitle: 'Long-term service careers',
            content: {
                title: 'From Seasonal Service to Career Soldiers',
                html: `
                    <p>Traditional Roman service was seasonal—farmers served during campaign season then returned to their land. Marius created the first truly professional Roman army with soldiers serving for decades rather than years.</p>
                    
                    <p>Professional soldiers developed skills and experience impossible under the old system. They learned engineering, siege warfare, logistics, and tactics that made Roman armies increasingly formidable.</p>
                    
                    <p>Long service also created strong bonds between soldiers and their commanders. Officers who led men through multiple campaigns earned intense personal loyalty that transcended institutional allegiance.</p>
                    
                    <p>The army became a career path for ambitious men from humble backgrounds, offering social mobility previously available only through politics or trade.</p>
                    
                    <p>However, professional soldiers had no civilian lives to return to between campaigns. They depended entirely on their generals for pay, promotion, and eventually retirement provision.</p>
                `
            }
        },
        {
            id: 'rewards',
            icon: '🏞️',
            title: 'Land Promises',
            subtitle: 'Retirement settlements',
            content: {
                title: 'Land Grants and Veteran Settlement',
                html: `
                    <p>Since professional soldiers served for 16-20 years, they needed provision for retirement. Marius promised land grants to veterans, creating colonies throughout the Roman world.</p>
                    
                    <p>These settlements served multiple purposes: they provided for veteran welfare, spread Roman culture to frontier regions, and created strategic reserves of experienced soldiers.</p>
                    
                    <p>However, land grants required Senate approval and funding, which conservative senators often refused. This forced generals to seek alternative sources—conquered territory, confiscated estates, or political alliances.</p>
                    
                    <p>Veterans became a powerful political constituency, supporting politicians who promised them land and opposing those who threatened their settlements.</p>
                    
                    <p>The promise of land also attracted recruits who saw military service as their only path to property ownership and social advancement.</p>
                    
                    <p>When the Senate refused veteran rewards, generals had strong incentives to use military force against the state itself—as Marius, Sulla, Pompey, and Caesar would all eventually do.</p>
                `
            }
        },
        {
            id: 'consequences',
            icon: '⚠️',
            title: 'Political Impact',
            subtitle: 'Armies loyal to generals',
            content: {
                title: 'The Price of Military Efficiency',
                html: `
                    <p>Marius's reforms created the most effective military machine in the ancient world, but at enormous political cost. Soldiers now served generals rather than the state, fundamentally altering the balance of Republican power.</p>
                    
                    <p>Generals who could promise land, booty, and advancement commanded intense personal loyalty. Veterans would follow successful commanders anywhere—including against Rome itself.</p>
                    
                    <p>The <span class="key-concept" data-concept="client-armies">client army</span> system gave ambitious politicians military power independent of traditional institutions. The Senate could no longer control generals who commanded devoted professional forces.</p>
                    
                    <p>Every subsequent crisis—Sulla's march on Rome, Pompey's eastern commands, Caesar's Gallic Wars—stemmed from generals using Marian-style armies for political purposes.</p>
                    
                    <p>The reforms also created a cycle of violence. Veterans needed land, which required conquest or confiscation, which created new enemies and necessitated larger armies, which needed more land for their veterans.</p>
                    
                    <p>Marius solved Rome's immediate military problems but created the conditions for civil war and eventual autocracy.</p>
                `
            }
        }
    ],
    defaultContent: {
        title: 'Revolutionary Military Changes',
        html: `
            <p>Click on any reform above to explore how Marius transformed the Roman army. These changes solved immediate military problems but created long-term political crises that would ultimately destroy the Republic.</p>
            <p>Marius didn't just reform the army—he revolutionised the relationship between soldiers, generals, and the state.</p>
        `
    }
};

// Timeline Events Data
const timelineEvents = [
    {
        id: 'threat-emerges',
        date: '113-105 BC',
        title: 'Barbarian Victories',
        description: 'Cimbri and Teutones defeat multiple Roman armies',
        content: {
            title: 'The Northern Threat Materialises',
            html: `
                <p>From 113 BC onwards, migrating <span class="key-figure" data-info="cimbri-teutones">Germanic and Celtic tribes</span> began devastating Roman territories in Gaul and threatening Italy itself. The <span class="key-term" data-definition="cimbri">Cimbri</span> and <span class="key-term" data-definition="teutones">Teutones</span> had already defeated several Roman armies, exposing the weaknesses of traditional recruitment.</p>
                
                <p>These weren't typical barbarian raids but massive population movements—entire tribes with families, livestock, and possessions seeking new lands. Their sheer numbers overwhelmed conventional Roman tactics.</p>
                
                <p>Traditional Roman armies, composed of seasonal citizen-soldiers, proved inadequate against an enemy that could fight year-round and had nothing to lose.</p>
                
                <p>The defeats revealed that Rome's military system, designed for Italian warfare, was poorly suited to defending vast frontiers against determined migrating peoples.</p>
                
                <p>Senatorial generals, appointed through political connections rather than military competence, repeatedly failed against enemies who had spent years perfecting their war-making skills.</p>
            `
        }
    },
    {
        id: 'arausio-disaster',
        date: '105 BC',
        title: 'Arausio Disaster',
        description: '80,000 Romans killed in worst defeat since Cannae',
        content: {
            title: 'The Arausio Catastrophe (105 BC)',
            html: `
                <p>At <span class="key-term" data-definition="arausio">Arausio</span> (modern Orange), two Roman armies under <span class="key-figure" data-info="mallius-maximus">Gnaeus Mallius Maximus</span> and <span class="key-figure" data-info="servilius-caepio">Quintus Servilius Caepio</span> suffered Rome's worst defeat since Cannae. Approximately 80,000 Romans and allies were killed.</p>
                
                <p>The disaster stemmed from aristocratic rivalry—Caepio refused to cooperate with Mallius because of class prejudice, allowing the barbarians to defeat divided Roman forces separately.</p>
                
                <p>The scale of losses was staggering. Entire legions were annihilated, leaving northern Italy virtually defenceless. Panic gripped Rome as barbarian victory seemed to open the path to the city itself.</p>
                
                <p>The defeat discredited traditional military leadership and demonstrated that aristocratic birth was no guarantee of military competence.</p>
                
                <p>Popular opinion turned decisively against the <span class="key-term" data-definition="nobiles">nobiles</span> who had led these disasters, creating demand for proven military talent regardless of social origin.</p>
                
                <div class="primary-source">
                    It is said that 80,000 Romans and allies perished, and 40,000 servants and camp followers.
                    <div class="source-citation">— Livy, <em>Epitome</em> 67</div>
                </div>
            `
        }
    },
    {
        id: 'marius-recalled',
        date: '104 BC',
        title: 'Marius Recalled',
        description: 'Elected consul in absentia whilst fighting in Africa',
        content: {
            title: 'Emergency Election in Absentia (104 BC)',
            html: `
                <p>Facing potential annihilation, Rome took the unprecedented step of electing Marius consul whilst he was still completing his campaign against <span class="key-figure" data-info="jugurtha">Jugurtha</span> in Africa. This violated the principle that candidates must be present in Rome for elections.</p>
                
                <p>The emergency election demonstrated how crisis could override constitutional norms. Popular fear of the barbarians was so intense that traditional procedures seemed irrelevant.</p>
                
                <p>Marius was granted extraordinary authority to recruit and train new armies using his reformed system. The traditional property qualifications were formally abandoned as Rome mobilised every available man.</p>
                
                <p>This marked the beginning of his five consecutive consulships (104-100 BC), shattering the Republican principle of annual magistrates and shared power.</p>
                
                <p>The precedent established that exceptional circumstances could justify exceptional commands—a principle later exploited by Pompey, Caesar, and other ambitious generals.</p>
            `
        }
    },
    {
        id: 'aquae-sextiae',
        date: '102 BC',
        title: 'Victory at Aquae Sextiae',
        description: 'Marius crushes the Teutones in southern Gaul',
        content: {
            title: 'Victory at Aquae Sextiae (102 BC)',
            html: `
                <p>Marius first confronted the <span class="key-figure" data-info="teutones">Teutones</span> at <span class="key-term" data-definition="aquae-sextiae">Aquae Sextiae</span> (modern Aix-en-Provence). His reformed legions, professional and disciplined, proved devastatingly effective against barbarian mass attacks.</p>
                
                <p>The battle demonstrated the superiority of professional soldiers over both citizen-militia and barbarian warriors. Marius's men maintained formation under pressure and executed complex tactical manoeuvres that would have been impossible for traditional forces.</p>
                
                <p>Reportedly, 100,000 Teutones were killed and 90,000 captured, with their king <span class="key-figure" data-info="teutobod">Teutobod</span> taken prisoner. The victory was so complete that the Teutones effectively ceased to exist as a tribal entity.</p>
                
                <p>Marius distributed booty generously among his soldiers, strengthening their personal loyalty and demonstrating the rewards of following a successful general.</p>
                
                <p>The victory validated both Marius's military reforms and his personal command, making him indispensable for the continuing barbarian threat.</p>
            `
        }
    },
    {
        id: 'vercellae',
        date: '101 BC',
        title: 'Triumph at Vercellae',
        description: 'Combined armies destroy the Cimbri in northern Italy',
        content: {
            title: 'The Final Victory at Vercellae (101 BC)',
            html: `
                <p>The <span class="key-figure" data-info="cimbri">Cimbri</span> had meanwhile invaded northern Italy, but Marius, joined by his colleague <span class="key-figure" data-info="catulus">Quintus Lutatius Catulus</span>, met them at <span class="key-term" data-definition="vercellae">Vercellae</span> in the Po valley.</p>
                
                <p>The combined Roman armies utterly destroyed the Cimbri. According to sources, 140,000 barbarians were killed and 60,000 captured, including women and children who had accompanied the migration.</p>
                
                <p>The battle showcased Roman tactical superiority and Marius's ability to coordinate multiple armies. Professional soldiers proved they could execute sophisticated battle plans that defeated even numerically superior enemies.</p>
                
                <p>Marius cleverly shared credit with Catulus, maintaining the fiction of collegiate command whilst ensuring his political position remained secure.</p>
                
                <p>The victory ended the Cimbric threat permanently and secured Rome's northern frontiers for generations. Italy was safe, and Marius was the undisputed architect of salvation.</p>
            `
        }
    },
    {
        id: 'third-founder',
        date: '100 BC',
        title: 'Third Founder of Rome',
        description: 'Marius celebrated as saviour of the Republic',
        content: {
            title: '"Third Founder of Rome" (100 BC)',
            html: `
                <p>Marius returned to Rome as the greatest military hero since <span class="key-figure" data-info="scipio-africanus">Scipio Africanus</span>. Popular acclaim hailed him as the "third founder of Rome," after <span class="key-figure" data-info="romulus">Romulus</span> and <span class="key-figure" data-info="camillus">Camillus</span>.</p>
                
                <p>His five consecutive consulships had saved the Republic, but they also established dangerous precedents. Annual magistrates and term limits—fundamental Republican principles—had been abandoned when crisis demanded exceptional leadership.</p>
                
                <p>Marius's success demonstrated that military competence could override traditional qualifications for high office. Birth, connections, and rhetorical skill mattered less than proven ability to win battles.</p>
                
                <p>However, his extended command had created the first truly personal army in Roman history. Veterans loyal to Marius personally now expected rewards that only he could provide.</p>
                
                <p>The constitutional crisis was postponed, not resolved. Marius had saved Rome from barbarians, but his methods had weakened the very institutions he sought to protect.</p>
            `
        }
    }
];

const timelineDefaultContent = {
    title: 'Constitutional Crisis and Military Triumph',
    html: `
        <p>Click on any event above to explore how the Cimbric crisis transformed Marius from a controversial reformer into Rome's greatest military hero—whilst simultaneously undermining Republican institutions.</p>
        <p>The threat was real, but the constitutional cost was enormous.</p>
    `
};

// Rival Profiles Data
const rivalProfilesData = [
    {
        id: 'marius',
        name: 'Gaius Marius',
        title: 'The Popularis General',
        image: '../images/marius.jpg',
        points: [
            'Novus homo from Arpinum',
            'Seven-time consul',
            'Victor over Jugurtha and the Cimbri',
            'Creator of professional armies',
            'Supported by urban masses and veterans'
        ]
    },
    {
        id: 'sulla',
        name: 'Lucius Cornelius Sulla',
        title: 'The Optimate Champion',
        image: '../images/sulla.jpg',
        points: [
            'Patrician aristocrat',
            'Brilliant military tactician',
            'Defender of senatorial privilege',
            'First to march on Rome',
            'Backed by conservative elite'
        ]
    }
];

// Conflict Stages Data
const conflictStages = [
    {
        id: 'partnership',
        title: 'Early Partnership (107-104 BC)',
        description: 'Sulla serves as Marius\'s quaestor in Numidia',
        content: {
            title: 'Early Partnership: Master and Student (107-104 BC)',
            html: `
                <p>The relationship between Marius and <span class="key-figure" data-info="sulla">Sulla</span> began as a traditional mentor-protégé dynamic during the <span class="key-term" data-definition="jugurthine-war">Jugurthine War</span>. Sulla served as Marius's quaestor in 107 BC, learning military command whilst supporting his superior's campaigns against King Jugurtha.</p>
                
                <p>Sulla demonstrated exceptional diplomatic and military skills during this period. His most notable achievement was negotiating Jugurtha's surrender through diplomatic contacts with the Mauretanian king <span class="key-figure" data-info="bocchus">Bocchus</span>, who betrayed his son-in-law to Roman custody.</p>
                
                <p>However, even during this partnership, tensions emerged over credit for the war's successful conclusion. Sulla commissioned a signet ring depicting himself receiving Jugurtha's surrender from Bocchus, subtly claiming primary responsibility for the victory that had made Marius famous.</p>
                
                <p>The partnership worked because both men benefited: Marius gained a capable subordinate who could handle delicate negotiations, whilst Sulla learned command skills and built his reputation under Rome's most successful general.</p>
                
                <p>This period established the pattern of their relationship—Sulla's aristocratic connections and diplomatic finesse complementing Marius's military reforms and popular appeal, but with underlying competition for recognition and glory.</p>
                
                <div class="primary-source">
                    Sulla was always eager for glory and ready to act, though he preferred to receive commands rather than seek them.
                    <div class="source-citation">— Plutarch, <em>Life of Sulla</em> 3.1</div>
                </div>
            `
        }
    },
    {
        id: 'tension',
        title: 'Growing Tension (104-91 BC)',
        description: 'Competition for glory and political advancement',
        content: {
            title: 'Growing Rivalry: Competition for Glory (104-91 BC)',
            html: `
                <p>As both men advanced their careers, professional cooperation gave way to personal rivalry. Sulla's aristocratic background and growing military reputation made him less willing to serve in subordinate roles, whilst Marius's consecutive consulships during the Cimbric Wars established him as Rome's premier general.</p>
                
                <p>During the Cimbric campaigns, Sulla served under various commands but increasingly sought independent opportunities to demonstrate his own tactical brilliance. His service with <span class="key-figure" data-info="catulus">Catulus</span> at Vercellae allowed him to share credit for the victory whilst maintaining distance from Marius's direct authority.</p>
                
                <p>The fundamental conflict emerged from their different political philosophies and social positions. Marius represented popularis politics—appealing to masses and veterans whilst challenging traditional elite privilege. Sulla embodied optimate values—defending senatorial authority and aristocratic prerogatives against popular movements.</p>
                
                <p>Their rivalry intensified during the 90s BC as both sought prestigious commands in new wars. Sulla's election to the praetorship in 93 BC and successful campaigns in Asia demonstrated that he no longer needed Marius's patronage to advance his career.</p>
                
                <p>Personal animosity was compounded by factional politics. Marius's alliance with popularis politicians like <span class="key-figure" data-info="saturninus">Saturninus</span> alienated conservative senators, whilst Sulla's optimate connections made him their natural champion against Marian influence.</p>
                
                <p>By 91 BC, both men commanded independent power bases—Marius through veteran loyalty and popular support, Sulla through aristocratic networks and proven military competence. The stage was set for direct confrontation.</p>
            `
        }
    },
    {
        id: 'command-dispute',
        title: 'Command Dispute (88 BC)',
        description: 'Sulpicius transfers Mithridatic command to Marius',
        content: {
            title: 'The Mithridatic Command Crisis (88 BC)',
            html: `
                <p>The immediate crisis that sparked civil war arose from competition for the lucrative command against <span class="key-figure" data-info="mithridates">King Mithridates VI of Pontus</span>, who had massacred thousands of Romans in Asia and invaded Roman territories. This promised to be the most prestigious and profitable military assignment in a generation.</p>
                
                <p>Sulla, as consul in 88 BC, received the Mithridatic command through normal constitutional processes. The Senate, dominated by optimates, naturally favoured their aristocratic champion over the popularis Marius, who was now 69 years old and seemed past his military prime.</p>
                
                <p>However, Marius was unwilling to retire quietly. He allied with the radical tribune <span class="key-figure" data-info="sulpicius">Publius Sulpicius Rufus</span>, who proposed legislation transferring the eastern command from Sulla to Marius. This violated constitutional precedent but had popular support from Marius's veterans and urban masses.</p>
                
                <p>Sulpicius's proposal also included controversial measures to enfranchise Italian allies and recall political exiles, creating a comprehensive popularis programme that threatened optimate interests. When the Senate declared a public holiday to prevent voting, Sulpicius's supporters used violence to force the measure through.</p>
                
                <p>The transfer of commands by popular legislation rather than senatorial assignment represented a constitutional revolution. It established the precedent that assemblies could override traditional senatorial prerogatives in military appointments, fundamentally altering the balance of Republican power.</p>
                
                <p>Faced with the loss of his command and the humiliation of being superseded by his former commander, Sulla made the unprecedented decision to march on Rome with his legions—crossing the Rubicon of Republican politics fifty years before Caesar's more famous transgression.</p>
            `
        }
    },
    {
        id: 'march-on-rome',
        title: 'March on Rome (88 BC)',
        description: 'Sulla leads legions against the capital',
        content: {
            title: 'The Unthinkable: Roman Legions Against Rome (88 BC)',
            html: `
                <p>Sulla's march on Rome with six legions shattered the most fundamental taboo of Republican politics—the principle that Roman armies existed to protect the state, not to threaten it. His soldiers, recruited through Marius's reforms and loyal to their commander, followed him despite the constitutional crisis.</p>
                
                <p>The march revealed how Marius's military reforms had created new dangers. Professional soldiers, dependent on their generals for rewards and advancement, would follow successful commanders even against Rome itself. The client-army system made civil war not just possible but inevitable.</p>
                
                <p>Sulla's justification was constitutional—he claimed to be defending legitimate senatorial authority against illegal popular legislation and tribunician violence. His propaganda portrayed Marius and Sulpicius as revolutionaries destroying traditional Republican government through mob rule and intimidation.</p>
                
                <p>The march succeeded because resistance collapsed. Most senators had fled the city, Marius lacked military forces in Rome, and the urban population could not oppose disciplined legions. Sulla occupied the capital and immediately reversed Sulpicius's legislation whilst declaring his enemies public enemies.</p>
                
                <p>Marius and Sulpicius were forced to flee into exile, with Sulpicius killed during his escape. Sulla restored the constitutional order but at enormous cost—he had demonstrated that military force could override civilian authority and established precedents that would be repeatedly exploited by future generals.</p>
                
                <p>However, Sulla's position remained precarious. He controlled Rome but needed to depart for the Mithridatic campaign, leaving his enemies free to return and reverse his measures. The crisis was postponed, not resolved.</p>
                
                <div class="primary-source">
                    No one before Sulla had ever led an army against his own country; this was the first and most serious of the transgressions which later destroyed the Republic.
                    <div class="source-citation">— Velleius Paterculus, <em>Roman History</em> 2.19</div>
                </div>
            `
        }
    },
    {
        id: 'marian-terror',
        title: 'Marian Terror (87-86 BC)',
        description: 'Marius returns and massacres enemies',
        content: {
            title: 'Marius\'s Revenge: The Terror of 87-86 BC',
            html: `
                <p>As soon as Sulla departed for the east, Marius began plotting his return. Allied with the consul <span class="key-figure" data-info="cinna">Lucius Cornelius Cinna</span>, who had promised to restore him from exile, Marius recruited forces from his veterans and Italian allies who had supported Sulpicius's citizenship legislation.</p>
                
                <p>Marius's return in 87 BC triggered the first extended period of civil warfare in Roman history. His forces, combining veteran loyalty with desperation born of proscription, fought with savage intensity against Sulla's supporters who had remained in Rome.</p>
                
                <p>The siege of Rome revealed new horrors of internal conflict. Marius's army included slaves promised freedom and foreigners seeking Roman citizenship, creating a coalition that terrified traditional Romans. When the city fell, systematic massacres targeted Sulla's supporters and conservative senators.</p>
                
                <p>Marius's seventh consulship in 86 BC was brief but traumatic for the Roman elite. His reign of terror eliminated many of Sulla's key allies through proscription lists—systematic executions of political enemies whose property was confiscated for the state and loyal followers.</p>
                
                <p>The violence established precedents that would characterise all subsequent civil wars. Political opponents were not merely defeated but eliminated, their families threatened, and their property redistributed. Compromise became impossible when defeat meant death.</p>
                
                <p>Marius died in January 86 BC, just days into his seventh consulship, but his legacy of violence continued under Cinna's dominance. Rome remained under popularis control until Sulla's eventual return from the east, but the Republic's constitutional traditions had been irreparably damaged.</p>
                
                <p>The Marian terror demonstrated that the new military system made traditional Republican competition impossible. When armies served generals rather than the state, political rivalry inevitably became military conflict, and military conflict necessarily involved the destruction of opponents.</p>
            `
        }
    }
];

const conflictDefaultContent = {
    title: 'The Path to Civil War',
    html: `
        <p>Click on any stage above to explore how the relationship between Marius and Sulla evolved from partnership to deadly rivalry, establishing the pattern of personal conflicts that would ultimately destroy the Republic.</p>
        <p>This was the first time Roman armies had been used against the Roman state itself.</p>
    `
};

// Consequence Grid Data
const consequenceData = [
    {
        title: 'Military Innovation',
        content: 'Created the most effective military force in the ancient world, enabling Roman expansion and frontier defence that would have been impossible under the old system.'
    },
    {
        title: 'Client Armies',
        content: 'Professional soldiers loyal to commanders rather than the state gave ambitious generals independent power bases that could challenge traditional institutions.'
    },
    {
        title: 'Constitutional Precedents',
        content: 'Multiple consulships and emergency commands established that exceptional circumstances could override fundamental Republican principles of shared power and term limits.'
    },
    {
        title: 'Social Mobility',
        content: 'Military service offered unprecedented opportunities for advancement, but also created expectations for rewards that the state struggled to fulfil.'
    }
];

// Definitions Data
const definitions = {
    'arpinum': {
        term: 'Arpinum',
        definition: 'Municipal town in Latium, birthplace of both Marius and later Cicero.',
        context: 'Arpinum represented the Italian countryside outside traditional Roman elite circles. Its citizens had full Roman rights but lacked the social connections essential for political advancement in Rome.'
    },
    'novus-homo': {
        term: 'Novus Homo',
        definition: 'A "new man" - the first in his family to reach the Senate and achieve high office.',
        context: 'Novus homo faced enormous disadvantages in Roman politics, lacking the family networks, client relationships, and inherited prestige that facilitated traditional careers. Success required exceptional ability or popular support.'
    },
    'nobiles': {
        term: 'Nobiles',
        definition: 'The hereditary nobility composed of families who had held the consulship.',
        context: 'The nobiles dominated Republican politics through inherited advantages: wealth, client networks, political expertise, and social prestige. They viewed novi homines like Marius as dangerous upstarts threatening traditional order.'
    },
    'assidui': {
        term: 'Assidui',
        definition: 'Landowning citizens wealthy enough to afford military equipment and eligible for army service.',
        context: 'The traditional Roman military system depended on assidui who had property to defend and could afford weapons. As warfare became more prolonged and distant, this limited pool proved inadequate.'
    },
    'capite-censi': {
        term: 'Capite Censi',
        definition: 'The "head count" - landless poor citizens previously excluded from military service.',
        context: 'Marius\'s recruitment of capite censi revolutionised Roman armies but created soldiers dependent on their generals for livelihood and retirement provision, fundamentally altering military loyalty.'
    },
    'gladius': {
        term: 'Gladius',
        definition: 'The standard Roman short sword, designed for close-quarters stabbing combat.',
        context: 'Standardised equipment like the gladius made Roman legions more effective and disciplined, but also more expensive to equip, increasing state military expenditure.'
    },
    'scutum': {
        term: 'Scutum',
        definition: 'The large rectangular shield carried by Roman legionaries.',
        context: 'The scutum was part of Marius\'s standardised equipment programme that created uniform capabilities across legions, improving tactical coordination.'
    },
    'pilum': {
        term: 'Pilum',
        definition: 'The Roman javelin designed to bend on impact and disable enemy shields.',
        context: 'The pilum exemplified Roman military engineering - a specialized weapon that neutralised barbarian shield walls and demonstrated superior Roman tactical thinking.'
    },
    'marian-mule': {
        term: 'Marian Mule',
        definition: 'Nickname for soldiers who carried their own equipment, reducing dependence on supply trains.',
        context: 'The "mules" reform increased army mobility and self-sufficiency, enabling longer campaigns in remote territories but also increasing the physical demands on individual soldiers.'
    },
    'cimbri': {
        term: 'Cimbri',
        definition: 'Germanic tribe that threatened Roman territories and invaded northern Italy.',
        context: 'The Cimbri represented a new type of enemy - migrating peoples rather than territorial states. Their threat required different military responses and justified exceptional commands.'
    },
    'teutones': {
        term: 'Teutones',
        definition: 'Celtic/Germanic tribe allied with the Cimbri in devastating Roman territories.',
        context: 'The Teutones, like the Cimbri, were migrating populations seeking new lands. Their mobility and desperation made them formidable enemies requiring professional armies to defeat.'
    },
    'arausio': {
        term: 'Battle of Arausio',
        definition: 'Catastrophic Roman defeat in 105 BC where 80,000 Romans died due to aristocratic rivalry.',
        context: 'Arausio demonstrated how aristocratic incompetence and class prejudice could lead to military disaster, justifying the elevation of competent novi homines like Marius.'
    },
    'aquae-sextiae': {
        term: 'Battle of Aquae Sextiae',
        definition: 'Marius\'s decisive victory over the Teutones in 102 BC.',
        context: 'Aquae Sextiae showcased the effectiveness of Marius\'s reformed legions and established his reputation as Rome\'s greatest living general.'
    },
    'vercellae': {
        term: 'Battle of Vercellae',
        definition: 'Final defeat of the Cimbri in 101 BC, ending the barbarian threat to Italy.',
        context: 'Vercellae completed Marius\'s salvation of Rome and earned him comparison with the Republic\'s greatest heroes, but also demonstrated his indispensability.'
    },
    'senatus-consultum-ultimum': {
        term: 'Senatus Consultum Ultimum',
        definition: 'Emergency decree authorising consuls to use any means necessary to defend the state.',
        context: 'The SCU became the Senate\'s standard response to domestic crises, but its use against Saturninus showed how easily constitutional mechanisms could be weaponised for factional purposes.'
    },
    'jugurthine-war': {
        term: 'Jugurthine War',
        definition: 'Roman conflict against Jugurtha of Numidia (112-105 BC) that revealed senatorial corruption.',
        context: 'The war\'s prolongation due to bribery and incompetence created the crisis that brought Marius to power and demonstrated the need for military reform.'
    },
    'numantine-war': {
        term: 'Numantine War',
        definition: 'Roman siege of the Spanish city of Numantia (143-133 BC).',
        context: 'The lengthy siege demonstrated problems with traditional Roman recruitment and tactics, providing early experience for future reformers like Marius.'
    }
};

// Figures Data
const figures = {
    'gaius-marius': {
        name: 'Gaius Marius',
        dates: '157-86 BC',
        role: 'General, consul, military reformer',
        significance: 'Transformed Roman military recruitment and created professional armies. His reforms enabled Roman expansion but made civil war more likely by creating armies loyal to generals rather than the state.'
    },
    'sulla': {
        name: 'Lucius Cornelius Sulla',
        dates: '138-78 BC',
        role: 'General, dictator, conservative reformer',
        significance: 'First Roman to march on Rome with an army. His rivalry with Marius began the age of civil wars and demonstrated how military power could override civilian authority.'
    },
    'scipio-aemilianus': {
        name: 'Scipio Aemilianus',
        dates: '185-129 BC',
        role: 'General and patron of Marius',
        significance: 'Destroyer of Carthage and Numantia who gave Marius early military experience. His patronage helped launch Marius\'s career but also showed the importance of elite connections.'
    },
    'jugurtha': {
        name: 'Jugurtha',
        dates: 'c. 160-104 BC',
        role: 'King of Numidia',
        significance: 'His war with Rome revealed senatorial corruption and incompetence, creating the crisis that brought Marius to power as a reforming outsider.'
    },
    'cimbri-teutones': {
        name: 'Cimbri and Teutones',
        dates: 'Active 113-101 BC',
        role: 'Migrating Germanic and Celtic tribes',
        significance: 'Their invasion of Roman territories created the greatest external threat since Hannibal, justifying Marius\'s extraordinary commands and military reforms.'
    },
    'saturninus': {
        name: 'Lucius Appuleius Saturninus',
        dates: 'c. 138-100 BC',
        role: 'Tribune and popularis politician',
        significance: 'Allied with Marius to secure land for veterans but turned to violence when opposed. His death at Marius\'s hands damaged Marius\'s popularis credentials.'
    },
    'mallius-maximus': {
        name: 'Gnaeus Mallius Maximus',
        dates: 'fl. 105 BC',
        role: 'Consul and general',
        significance: 'Co-commander at the Arausio disaster whose rivalry with Caepio led to catastrophic defeat, discrediting traditional aristocratic leadership.'
    },
    'servilius-caepio': {
        name: 'Quintus Servilius Caepio',
        dates: 'fl. 105 BC',
        role: 'Proconsul and general',
        significance: 'His refusal to cooperate with Mallius at Arausio due to class prejudice led to Rome\'s worst military disaster since Cannae.'
    },
    'teutones': {
        name: 'The Teutones',
        dates: 'Defeated 102 BC',
        role: 'Migrating Celtic/Germanic tribe',
        significance: 'Their defeat at Aquae Sextiae was Marius\'s first great victory in the Cimbric Wars, establishing his reputation as Rome\'s saviour.'
    },
    'cimbri': {
        name: 'The Cimbri',
        dates: 'Defeated 101 BC',
        role: 'Migrating Germanic tribe',
        significance: 'Their destruction at Vercellae completed Marius\'s salvation of Rome and earned him the title "third founder of Rome."'
    },
    'teutobod': {
        name: 'Teutobod',
        dates: 'Captured 102 BC',
        role: 'King of the Teutones',
        significance: 'His capture at Aquae Sextiae symbolised the complete defeat of the Teutonic threat and Marius\'s tactical brilliance.'
    },
    'catulus': {
        name: 'Quintus Lutatius Catulus',
        dates: 'c. 150-87 BC',
        role: 'Consul and general',
        significance: 'Shared command with Marius at Vercellae, representing traditional elite participation in Marius\'s reforms whilst maintaining aristocratic dignity.'
    },
    'romulus': {
        name: 'Romulus',
        dates: 'Legendary, 8th century BC',
        role: 'Legendary founder of Rome',
        significance: 'First founder of Rome, to whom Marius was compared after saving the city from barbarian destruction.'
    },
    'camillus': {
        name: 'Marcus Furius Camillus',
        dates: 'c. 446-365 BC',
        role: 'General and dictator',
        significance: 'Second founder of Rome who saved the city from the Gauls, establishing the precedent for Marius\'s later title as third founder.'
    },
    'bocchus': {
        name: 'Bocchus I',
        dates: 'fl. 107 BC',
        role: 'King of Mauretania',
        significance: 'Betrayed his son-in-law Jugurtha to Sulla, ending the Jugurthine War and beginning the rivalry between Marius and Sulla over credit for the victory.'
    },
    'mithridates': {
        name: 'Mithridates VI Eupator',
        dates: 'c. 135-63 BC',
        role: 'King of Pontus',
        significance: 'His wars against Rome created the prestigious eastern command that sparked the final conflict between Marius and Sulla in 88 BC.'
    },
    'sulpicius': {
        name: 'Publius Sulpicius Rufus',
        dates: 'c. 124-88 BC',
        role: 'Tribune and popularis politician',
        significance: 'Transferred the Mithridatic command from Sulla to Marius, triggering Sulla\'s march on Rome and the first Roman civil war.'
    },
    'cinna': {
        name: 'Lucius Cornelius Cinna',
        dates: 'c. 130-84 BC',
        role: 'Consul and popularis leader',
        significance: 'Allied with Marius to seize control of Rome during Sulla\'s absence, continuing the civil war and establishing popularis dominance until Sulla\'s return.'
    },
    'scipio-africanus': {
        name: 'Publius Cornelius Scipio Africanus',
        dates: '236-183 BC',
        role: 'General who defeated Hannibal',
        significance: 'Rome\'s greatest military hero before Marius, to whom Marius was compared after his victories over the Cimbri and Teutones.'
    }
};

// Concepts Data
const concepts = {
    'client-armies': {
        concept: 'Client Armies',
        explanation: 'Professional armies loyal to their commanders rather than the state, created by Marius\'s military reforms.',
        importance: 'Client armies gave ambitious generals independent power bases that could challenge traditional institutions. Every subsequent civil war stemmed from generals using personal armies for political purposes.'
    },
    'exceptional-commands': {
        concept: 'Exceptional Commands',
        explanation: 'Extraordinary military appointments that violated normal Republican procedures, such as Marius\'s consecutive consulships.',
        importance: 'Exceptional commands established precedents for overriding constitutional limits during crises. Later generals like Pompey and Caesar used similar justifications to accumulate unprecedented power.'
    }
};

// Initialize Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    initializeReforms();
    initializeTimeline();
    initializeRivalry();
    initializeConsequences();
    
    setTimeout(() => {
        setupInteractiveContent();
    }, 100);
});

// Initialize Reform Showcase
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

// Initialize Timeline
function initializeTimeline() {
    const eventsContainer = document.getElementById('timeline-events');
    const detailsContainer = document.getElementById('timeline-details');
    
    if (!eventsContainer || !detailsContainer) return;
    
    // Create timeline events
    timelineEvents.forEach(event => {
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
        <h4>${timelineDefaultContent.title}</h4>
        ${timelineDefaultContent.html}
    `;
    detailsContainer.appendChild(defaultContent);
    
    // Create content for each event
    timelineEvents.forEach(event => {
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

// Initialize Rivalry Showcase
function initializeRivalry() {
    const profilesContainer = document.getElementById('rival-profiles');
    const stagesContainer = document.getElementById('conflict-stages');
    const detailsContainer = document.getElementById('conflict-details');
    
    if (!profilesContainer || !stagesContainer || !detailsContainer) return;
    
    // Create first rival profile (Marius)
    const mariusProfile = document.createElement('div');
    mariusProfile.className = 'rival-profile marius';
    mariusProfile.innerHTML = `
        <img src="${rivalProfilesData[0].image}" alt="${rivalProfilesData[0].name}" class="rival-portrait" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="rival-portrait-fallback" style="display: none;">👨‍⚔️</div>
        <h4>${rivalProfilesData[0].name}</h4>
        <p><strong>${rivalProfilesData[0].title}</strong></p>
        ${rivalProfilesData[0].points.map(point => `<p>• ${point}</p>`).join('')}
    `;
    profilesContainer.appendChild(mariusProfile);
    
    // Add versus symbol
    const versusEl = document.createElement('div');
    versusEl.className = 'versus-symbol';
    versusEl.textContent = 'VS';
    profilesContainer.appendChild(versusEl);
    
    // Create second rival profile (Sulla)
    const sullaProfile = document.createElement('div');
    sullaProfile.className = 'rival-profile sulla';
    sullaProfile.innerHTML = `
        <img src="${rivalProfilesData[1].image}" alt="${rivalProfilesData[1].name}" class="rival-portrait" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="rival-portrait-fallback" style="display: none;">👨‍💼</div>
        <h4>${rivalProfilesData[1].name}</h4>
        <p><strong>${rivalProfilesData[1].title}</strong></p>
        ${rivalProfilesData[1].points.map(point => `<p>• ${point}</p>`).join('')}
    `;
    profilesContainer.appendChild(sullaProfile);
    
    // Create conflict stages
    conflictStages.forEach(stage => {
        const stageEl = document.createElement('div');
        stageEl.className = 'conflict-stage';
        stageEl.onclick = () => showConflictStage(stage.id);
        stageEl.innerHTML = `
            <div class="stage-title">${stage.title}</div>
            <div class="stage-description">${stage.description}</div>
        `;
        stagesContainer.appendChild(stageEl);
    });
    
    // Create default content
    const defaultContent = document.createElement('div');
    defaultContent.className = 'conflict-content active';
    defaultContent.id = 'conflict-default';
    defaultContent.innerHTML = `
        <h4>${conflictDefaultContent.title}</h4>
        ${conflictDefaultContent.html}
    `;
    detailsContainer.appendChild(defaultContent);
    
    // Create content for each stage
    conflictStages.forEach(stage => {
        const contentEl = document.createElement('div');
        contentEl.className = 'conflict-content';
        contentEl.id = `conflict-${stage.id}`;
        contentEl.innerHTML = `
            <h4>${stage.content.title}</h4>
            ${stage.content.html}
        `;
        detailsContainer.appendChild(contentEl);
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

// Show Timeline Event Function
function showTimelineEvent(eventId) {
    document.querySelectorAll('.timeline-event').forEach(event => {
        event.classList.remove('active');
    });
    document.querySelectorAll('.timeline-content').forEach(content => {
        content.classList.remove('active');
    });
    
    event.target.closest('.timeline-event').classList.add('active');
    
    const contentId = 'timeline-' + eventId;
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.add('active');
    }
    
    setupInteractiveContent();
}

// Show Conflict Stage Function
function showConflictStage(stageId) {
    document.querySelectorAll('.conflict-stage').forEach(stage => {
        stage.classList.remove('active');
    });
    document.querySelectorAll('.conflict-content').forEach(content => {
        content.classList.remove('active');
    });
    
    event.target.closest('.conflict-stage').classList.add('active');
    
    const contentId = 'conflict-' + stageId;
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
