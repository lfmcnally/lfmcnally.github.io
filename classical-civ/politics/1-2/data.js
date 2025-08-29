// Cursus Honorum Data
const cursusData = {
    steps: [
        {
            id: 'quaestor',
            title: 'Quaestor',
            age: 'Age 30',
            description: 'Entry-level post managing finances - gateway to the Senate',
            content: {
                title: 'Quaestor: Gateway to Political Power',
                html: `
                    <p>The <span class="key-term" data-definition="quaestor">quaestorship</span> was the essential first step in a senatorial career. Twenty quaestors were elected annually to manage Rome's finances and support senior magistrates.</p>
                    <p><strong>Responsibilities:</strong></p>
                    <ul>
                        <li>Treasury management in Rome (<em>quaestores urbani</em>)</li>
                        <li>Financial support for generals on campaign</li>
                        <li>Provincial administration under governors</li>
                        <li>Supervision of public expenditure</li>
                    </ul>
                    <p><strong>Significance:</strong> Automatic Senate membership followed the quaestorship, making it the gateway to aristocratic political life. This created a clear distinction between those who had "entered the Senate" and ordinary citizens.</p>
                `
            }
        },
        {
            id: 'aedile',
            title: 'Aedile',
            age: 'Age 36',
            description: 'Public works, games, and food supply (optional but popular)',
            content: {
                title: 'Aedile: Building Popular Support',
                html: `
                    <p>The <span class="key-term" data-definition="aedile">aedileship</span> was technically optional but politically crucial. Four aediles managed Rome's urban infrastructure and public entertainment, offering opportunities to win popular favour through generous spending.</p>
                    <p><strong>Responsibilities:</strong></p>
                    <ul>
                        <li>Maintenance of temples, streets, and public buildings</li>
                        <li>Regulation of markets and food supply</li>
                        <li>Organisation of public games and festivals</li>
                        <li>Public health and safety measures</li>
                    </ul>
                    <p><strong>Political significance:</strong> Ambitious politicians spent vast personal fortunes on games and public works during their aedileship to build name recognition. <span class="key-figure" data-info="caesar">Caesar</span> bankrupted himself with spectacular games that helped launch his later career.</p>
                `
            }
        },
        {
            id: 'praetor',
            title: 'Praetor',
            age: 'Age 39',
            description: 'Senior magistracy with imperium - courts and provinces',
            content: {
                title: 'Praetor: Judicial and Military Command',
                html: `
                    <p>The <span class="key-term" data-definition="praetor">praetorship</span> marked entry into the senior magistracies with <span class="key-concept" data-concept="imperium">imperium</span>. Eight praetors combined judicial duties in Rome with provincial commands.</p>
                    <p><strong>Judicial functions:</strong></p>
                    <ul>
                        <li><em>Praetor urbanus</em>: lawsuits between Roman citizens</li>
                        <li><em>Praetor peregrinus</em>: cases involving foreigners</li>
                        <li>Specialised courts for specific crimes</li>
                        <li>Development of legal precedents</li>
                    </ul>
                    <p><strong>Military and provincial role:</strong> After their year in Rome, praetors typically governed provinces as <span class="key-term" data-definition="propraetor">propraetors</span>, commanding armies and administering justice. This system extended Roman rule while providing career advancement.</p>
                `
            }
        },
        {
            id: 'consul',
            title: 'Consul',
            age: 'Age 42',
            description: 'Pinnacle of career - supreme executive power',
            content: {
                title: 'Consul: Supreme Executive Power',
                html: `
                    <p>The <span class="key-term" data-definition="consul">consulship</span> represented the pinnacle of Republican ambition. Two consuls shared supreme executive authority, embodying the rejection of monarchy through dual leadership.</p>
                    <p><strong>Powers and responsibilities:</strong></p>
                    <ul>
                        <li>Supreme military command (<em>imperium militiae</em>)</li>
                        <li>Convening and presiding over Senate meetings</li>
                        <li>Conducting popular assemblies and elections</li>
                        <li>Enforcing laws and senatorial decrees</li>
                        <li>Representing Rome in foreign affairs</li>
                    </ul>
                    <div class="primary-source">
                        "The consulship is the light of the Roman people, the harbour of all nations."
                        <div class="source-citation">— Cicero, <em>In Pisonem</em> 6</div>
                    </div>
                    <p><strong>Collegiality and conflict:</strong> Each consul could veto his colleague's actions, preventing hasty decisions but sometimes creating paralysis. Years were named after the consuls, immortalising their names in Roman historical memory.</p>
                `
            }
        },
        {
            id: 'censor',
            title: 'Censor',
            age: 'Ex-consul',
            description: 'Prestigious capstone - census and moral regulation',
            content: {
                title: 'Censor: Guardian of Public Morality',
                html: `
                    <p>The <span class="key-term" data-definition="censor">censorship</span> was technically outside the cursus honorum but represented its moral summit. Two censors, elected every five years from ex-consuls, shaped Roman society through their census and moral oversight.</p>
                    <p><strong>Powers:</strong></p>
                    <ul>
                        <li>Conducting the census of citizens and property</li>
                        <li>Reviewing and revising Senate membership</li>
                        <li>Regulating public morals (<em>regimen morum</em>)</li>
                        <li>Awarding public contracts</li>
                        <li>Maintaining public buildings and infrastructure</li>
                    </ul>
                    <p><strong>Moral authority:</strong> Censors could remove senators for misconduct, downgrade citizens' status, or publicly mark moral failings. <span class="key-figure" data-info="cato-elder">Cato the Elder</span> used censorial power to enforce traditional values and resist Greek cultural influence.</p>
                `
            }
        }
    ],
    extraordinary: [
        {
            id: 'dictator',
            title: 'Dictator',
            description: 'Emergency appointment with absolute power (6 months maximum)',
            content: {
                title: 'Dictator: Emergency Autocracy',
                html: `
                    <p>The <span class="key-term" data-definition="dictator">dictatorship</span> suspended normal Republican government during extreme crises. One consul appointed a dictator who held absolute power for six months maximum.</p>
                    <p><strong>Purpose and powers:</strong></p>
                    <ul>
                        <li>Military crises requiring unified command</li>
                        <li>Internal emergencies threatening public order</li>
                        <li>Religious duties requiring special authority</li>
                        <li>Complete immunity from legal challenge</li>
                    </ul>
                    <p><strong>Republican safeguards:</strong> The six-month limit and specific purpose (dictated in the appointment) were meant to prevent permanent autocracy. However, <span class="key-figure" data-info="sulla">Sulla</span> and <span class="key-figure" data-info="caesar">Caesar</span> manipulated the office to establish long-term dominance, ultimately destroying its constitutional role.</p>
                `
            }
        },
        {
            id: 'tribune',
            title: 'Tribune of the Plebs',
            description: 'Plebeian representative with veto power (separate career track)',
            content: {
                title: 'Tribune of the Plebs: Popular Champion',
                html: `
                    <p>The <span class="key-term" data-definition="tribune">tribunate</span> developed outside the traditional cursus as plebeian protection against patrician dominance. Ten tribunes represented plebeian interests with extraordinary powers.</p>
                    <p><strong>Unique powers:</strong></p>
                    <ul>
                        <li><em>Intercessio</em>: veto any magistrate's action</li>
                        <li><em>Auxilium</em>: personal protection for citizens</li>
                        <li>Convening plebeian assemblies</li>
                        <li>Physical inviolability (<em>sacrosanctitas</em>)</li>
                    </ul>
                    <p><strong>Political weapon:</strong> Ambitious politicians like <span class="key-figure" data-info="tiberius-gracchus">Tiberius Gracchus</span> and <span class="key-figure" data-info="clodius">Clodius</span> used the tribunate to bypass senatorial opposition and appeal directly to popular support, often destabilising the entire system.</p>
                `
            }
        }
    ],
    defaultContent: {
        title: 'Explore the Cursus Honorum',
        html: `
            <p>Click on any office above to learn about its responsibilities, powers, and significance in Roman political life. The cursus honorum provided a structured career path for ambitious aristocrats while distributing power across multiple officials.</p>
            <p><strong>Key principles:</strong> <span class="key-concept" data-concept="collegiality">Collegiality</span> (shared offices) and <span class="key-concept" data-concept="annual-tenure">annual tenure</span> (one-year terms) prevented concentration of power.</p>
        `
    }
};

// Assemblies Data
const assembliesData = {
    assemblies: [
        {
            id: 'senate',
            subtitle: 'Advisory Body',
            title: 'Senate',
            description: 'Comprised of ex-magistrates, the Senate provided continuity and expertise in governance, though technically it could only advise.',
            content: {
                title: 'The Senate: Auctoritas and Collective Wisdom',
                html: `
                    <p>The <span class="key-term" data-definition="senate">Senate</span> was the most prestigious institution in the Republic, though it lacked formal legislative power. Comprised of former magistrates, it represented accumulated experience and provided continuity in an otherwise annual system.</p>
                    
                    <p><strong>Composition and membership:</strong> Senators held their positions for life (unless removed by censors) and were arranged by precedence based on the highest office held. Ex-consuls (<span class="key-term" data-definition="consulares">consulares</span>) spoke first and carried greatest weight.</p>
                    
                    <div class="primary-source">
                        "The Senate's role is to give advice; the magistrates' to command; the people's to choose and approve."
                        <div class="source-citation">— Cicero, <em>De Legibus</em> 3.28</div>
                    </div>
                    
                    <p><strong>Powers and influence:</strong> While technically advisory, the Senate's <span class="key-concept" data-concept="auctoritas">auctoritas</span> (moral authority) made its guidance nearly binding. It controlled public finances, managed foreign policy, and could declare emergencies through the <span class="key-term" data-definition="senatus-consultum-ultimum">senatus consultum ultimum</span>.</p>
                `
            }
        },
        {
            id: 'centuriate',
            subtitle: 'Electoral Assembly',
            title: 'Centuriate Assembly',
            description: 'Based on military centuries and wealth, this assembly elected senior magistrates and declared war.',
            content: {
                title: 'Centuriate Assembly: Military Organisation and Elite Influence',
                html: `
                    <p>The <span class="key-term" data-definition="centuriate-assembly">Centuriate Assembly</span> was based on the military organisation of the Roman army, with citizens divided into centuries according to wealth and age. This assembly held the most important electoral and judicial functions.</p>
                    
                    <p><strong>Organisation and voting:</strong> Citizens were arranged in 193 centuries, with the wealthiest (<span class="key-term" data-definition="equites">equites</span> and first class) controlling 98 centuries—a majority. The poor (<span class="key-term" data-definition="proletarii">proletarii</span>) were crowded into just one century, making their voice negligible.</p>
                    
                    <p><strong>Powers:</strong></p>
                    <ul>
                        <li>Election of consuls, praetors, and censors</li>
                        <li>Declaration of war and ratification of peace treaties</li>
                        <li>Trials for high crimes (perduellio, parricidium)</li>
                        <li>Passing laws, though this was rare</li>
                    </ul>
                    
                    <p><strong>Elite bias:</strong> The system ensured that Rome's wealthiest citizens, who had most at stake in policy decisions, controlled the most important votes. <span class="key-figure" data-info="polybius">Polybius</span> praised this as combining democratic participation with responsible leadership.</p>
                `
            }
        },
        {
            id: 'tribal',
            subtitle: 'Legislative Assembly',
            title: 'Tribal Assembly',
            description: 'Organised by geographical tribes, this assembly passed most laws and elected junior magistrates.',
            content: {
                title: 'Tribal Assembly: Legislative Workhorse',
                html: `
                    <p>The <span class="key-term" data-definition="tribal-assembly">Tribal Assembly</span> organised citizens by geographical tribes (four urban, thirty-one rural) and became the most active legislative body in the Republic.</p>
                    
                    <p><strong>Democratic advantages:</strong> Unlike the Centuriate Assembly, all citizens voted equally regardless of wealth. However, the geographical organisation still favoured rural landowners over urban workers, since most citizens were registered in rural tribes regardless of where they lived.</p>
                    
                    <p><strong>Powers and procedures:</strong></p>
                    <ul>
                        <li>Election of quaestors, aediles, and minor magistrates</li>
                        <li>Passage of most legislation (<em>leges</em>)</li>
                        <li>Trials for lesser offences</li>
                        <li>Ratification of certain treaties and agreements</li>
                    </ul>
                    
                    <p><strong>Magistrate control:</strong> Only magistrates could call assemblies and propose legislation. Citizens could only vote yes or no—there was no open debate or amendment process. This meant that aristocratic magistrates retained control over the agenda even in "democratic" assemblies.</p>
                `
            }
        },
        {
            id: 'plebeian',
            subtitle: 'Plebeian Assembly',
            title: 'Concilium Plebis',
            description: 'Excluded patricians entirely, this assembly passed plebiscites that became binding on all citizens.',
            content: {
                title: 'Plebeian Assembly: Tribune Power and Popular Legislation',
                html: `
                    <p>The <span class="key-term" data-definition="concilium-plebis">Concilium Plebis</span> (Plebeian Assembly) excluded patricians entirely and became the primary vehicle for popularis politicians to bypass senatorial opposition.</p>
                    
                    <p><strong>Unique character:</strong> Only plebeians could participate, making it the only truly "popular" assembly. Organised by tribes like the Tribal Assembly, but with an explicitly class-based membership that excluded the old aristocracy.</p>
                    
                    <div class="primary-source">
                        "The tribunician power is the fortress of liberty."
                        <div class="source-citation">— Tacitus, <em>Annals</em> 3.27</div>
                    </div>
                    
                    <p><strong>Powers and significance:</strong></p>
                    <ul>
                        <li>Election of tribunes of the plebs</li>
                        <li>Passage of plebiscites (binding on all citizens after 287 BC)</li>
                        <li>Trials under tribunician jurisdiction</li>
                        <li>Popular legislation often blocked by the Senate</li>
                    </ul>
                    
                    <p><strong>Political weapon:</strong> The <span class="key-term" data-definition="tribune">tribunes of the plebs</span> used this assembly to challenge senatorial authority through their power of <span class="key-concept" data-concept="intercessio">intercessio</span> (veto). However, tribunes could also be co-opted by aristocratic interests through <span class="key-concept" data-concept="clientela">clientela</span> or personal ambition, as seen with figures like <span class="key-figure" data-info="bibulus">Bibulus</span> who blocked <span class="key-figure" data-info="caesar">Caesar's</span> legislation in 59 BC.</p>
                `
            }
        }
    ],
    defaultContent: {
        title: 'Explore Roman Assemblies',
        html: `
            <p>Click on any assembly above to learn about its composition, powers, and role in Republican government. Each assembly represented different aspects of Roman society and provided various ways for citizens to participate in governance.</p>
            <p><strong>Key principle:</strong> All assemblies voted by groups rather than individual heads, meaning wealthy minorities could often outvote poorer majorities.</p>
        `
    }
};

// Definitions Data
const definitions = {
    'quaestor': {
        term: 'Quaestor',
        definition: 'Entry-level magistracy responsible for financial administration. Twenty quaestors were elected annually.',
        context: 'Holding the quaestorship automatically enrolled a man in the Senate, making it the gateway to a senatorial career. Quaestors either served in Rome managing the treasury or accompanied senior magistrates on military campaigns to handle finances.'
    },
    'aedile': {
        term: 'Aedile',
        definition: 'Magistrates responsible for public buildings, markets, games, and urban administration.',
        context: 'Though technically optional in the cursus honorum, the aedileship offered ambitious politicians the chance to win popular favour through generous spending on games and public works. Many future leaders, including Caesar, spent vast sums during their aedileship.'
    },
    'praetor': {
        term: 'Praetor',
        definition: 'Senior magistracy with imperium, responsible for courts and provincial government.',
        context: 'Praetors developed much of Roman civil law through their judicial decisions. After their year in Rome, they typically governed provinces as propraetors, extending Roman administration and providing career advancement.'
    },
    'propraetor': {
        term: 'Propraetor',
        definition: 'Ex-praetor governing a province with extended imperium.',
        context: 'The propraetorian system allowed Rome to govern its expanding territories without creating more magistracies. It also provided opportunities for enrichment that became increasingly controversial.'
    },
    'consul': {
        term: 'Consul',
        definition: 'The highest regular magistracy. Two consuls were elected annually to lead the Roman state.',
        context: 'Consuls embodied the rejection of monarchy through shared leadership. They commanded armies, presided over the Senate, and conducted elections. Years were named after the consuls, immortalising their service.'
    },
    'censor': {
        term: 'Censor',
        definition: 'Magistrates elected every five years to conduct the census and regulate public morality.',
        context: 'Censors could remove senators, downgrade citizens, and mark moral failings. The office represented the moral summit of a political career and was often the final appointment for distinguished ex-consuls.'
    },
    'dictator': {
        term: 'Dictator',
        definition: 'Emergency magistrate appointed for six months maximum with absolute power to resolve crises.',
        context: 'The dictatorship suspended normal checks and balances during extreme emergencies. Sulla and Caesar manipulated this office to establish long-term dominance, ultimately destroying its constitutional function.'
    },
    'tribune': {
        term: 'Tribune of the Plebs',
        definition: 'Plebeian representatives with extraordinary powers including veto authority over all magistrates.',
        context: 'Tribunes could halt any official action and were physically inviolable. Ambitious politicians used the tribunate to bypass senatorial opposition, often destabilising the entire political system.'
    },
    'senate': {
        term: 'Senate',
        definition: 'Advisory body comprised of ex-magistrates, providing continuity and expertise in governance.',
        context: 'Though technically advisory, the Senate\'s auctoritas made its guidance nearly binding. It controlled finances, managed foreign policy, and represented accumulated wisdom and experience.'
    },
    'lictors': {
        term: 'Lictors',
        definition: 'Official attendants who accompanied magistrates with imperium, carrying fasces as symbols of authority.',
        context: 'The number of lictors indicated the magistrate\'s rank: consuls had twelve, praetors six. Within Rome, the axes were removed from their fasces, symbolising citizens\' right of appeal.'
    },
    'fasces': {
        term: 'Fasces',
        definition: 'Bundles of rods tied around an axe, symbolising the magistrate\'s power to punish and execute.',
        context: 'The fasces became the ultimate symbol of Roman authority. Outside Rome, they included axes representing the power of life and death; within the city, axes were removed to respect citizens\' rights.'
    },
    'consulares': {
        term: 'Consulares',
        definition: 'Ex-consuls who had reached the pinnacle of the cursus honorum and held the highest precedence in the Senate.',
        context: 'Consulares spoke first in Senate debates and carried the greatest auctoritas. Their opinions often determined the course of senatorial decisions and policy.'
    },
    'senatus-consultum-ultimum': {
        term: 'Senatus Consultum Ultimum',
        definition: 'The Senate\'s "ultimate decree" declaring a state of emergency and authorising consuls to take any necessary action.',
        context: 'Used in extreme crises, this decree suspended normal legal protections and gave consuls dictatorial powers. It was controversial and often challenged by popularis politicians.'
    },
    'centuriate-assembly': {
        term: 'Centuriate Assembly',
        definition: 'Assembly organised by military centuries and wealth classes, responsible for electing senior magistrates and declaring war.',
        context: 'The most aristocratic assembly, where wealthy citizens controlled a majority of centuries. This ensured that important decisions remained in the hands of those with the greatest stake in their outcomes.'
    },
    'equites': {
        term: 'Equites',
        definition: 'The wealthy cavalry class, ranking just below senators in Roman society.',
        context: 'Originally those rich enough to provide their own horses for military service, the equites became a powerful business class. They often clashed with senators over economic policy and provincial administration.'
    },
    'proletarii': {
        term: 'Proletarii',
        definition: 'The poorest Roman citizens, owning little property and crowded into a single century in the Centuriate Assembly.',
        context: 'Their name meant "those who contribute only children to the state." Despite their numbers, they had virtually no voice in the Centuriate Assembly, illustrating the system\'s bias toward wealth.'
    },
    'tribal-assembly': {
        term: 'Tribal Assembly',
        definition: 'Assembly organised by geographical tribes, serving as the main legislative body for passing laws.',
        context: 'More democratic than the Centuriate Assembly but still controlled by magistrates who set agendas. Rural tribes were often dominated by wealthy landowners despite including urban poor.'
    },
    'concilium-plebis': {
        term: 'Concilium Plebis',
        definition: 'The Plebeian Assembly that excluded patricians and passed plebiscites binding on all citizens.',
        context: 'The only truly popular assembly, it became the primary tool for popularis politicians to bypass senatorial opposition. After 287 BC, its decisions had the force of law for all Romans.'
    }
};

// Figures Data
const figures = {
    'caesar': {
        name: 'Gaius Julius Caesar',
        dates: '100-44 BC',
        role: 'General, politician, dictator',
        significance: 'Used popularis tactics and military success to gain unprecedented power. His manipulation of Republican institutions and eventual dictatorship destroyed the constitutional system and paved the way for the Empire.'
    },
    'marius': {
        name: 'Gaius Marius',
        dates: 'c. 157-86 BC',
        role: 'General and politician',
        significance: 'Held seven consulships, breaking all precedent for annual tenure. His military reforms and political methods set dangerous precedents for later strongmen like Sulla and Caesar.'
    },
    'sulla': {
        name: 'Lucius Cornelius Sulla',
        dates: '138-78 BC',
        role: 'General and dictator',
        significance: 'Used dictatorship to restructure the Roman constitution in favour of the Senate. His proscriptions and constitutional changes demonstrated how Republican institutions could be manipulated by ambitious individuals.'
    },
    'pompey': {
        name: 'Gnaeus Pompeius Magnus',
        dates: '106-48 BC',
        role: 'General and politician',
        significance: 'Received extraordinary commands that bypassed normal constitutional limits. His career showed how military success could override traditional political constraints, setting precedents exploited by Caesar.'
    },
    'polybius': {
        name: 'Polybius',
        dates: 'c. 200-118 BC',
        role: 'Greek historian and political theorist',
        significance: 'Provided the most detailed ancient analysis of the Roman constitution. His theory of "mixed government" influenced later political thought and helps modern understanding of Republican institutions.'
    },
    'cato-elder': {
        name: 'Marcus Porcius Cato (the Elder)',
        dates: '234-149 BC',
        role: 'Politician and moralist',
        significance: 'As censor, enforced traditional Roman values and resisted Greek cultural influence. His rigid morality and famous phrase "Carthage must be destroyed" embodied conservative Republican ideals.'
    },
    'tiberius-gracchus': {
        name: 'Tiberius Sempronius Gracchus',
        dates: '168-133 BC',
        role: 'Tribune and reformer',
        significance: 'Used tribunician power to push land redistribution against senatorial opposition. His assassination marked the beginning of political violence in the Late Republic and demonstrated how reform could destabilise the system.'
    },
    'clodius': {
        name: 'Publius Clodius Pulcher',
        dates: 'c. 93-52 BC',
        role: 'Tribune and popularis politician',
        significance: 'Used tribunician power and organised violence to dominate Roman politics. His methods showed how Republican institutions could be weaponised for personal advantage and political disruption.'
    },
    'bibulus': {
        name: 'Marcus Calpurnius Bibulus',
        dates: 'c. 102-48 BC',
        role: 'Consul and optimate politician',
        significance: 'As Caesar\'s consular colleague in 59 BC, attempted to block Caesar\'s legislation through constitutional means. His failure demonstrated the inadequacy of traditional checks against determined opposition.'
    }
};

// Concepts Data
const concepts = {
    'collegiality': {
        concept: 'Collegiality',
        explanation: 'The principle that most Roman magistracies were shared between two or more individuals, preventing concentration of power.',
        importance: 'Fundamental safeguard against autocracy. Each magistrate could veto his colleague\'s actions, ensuring deliberation and preventing hasty decisions. However, it could also create paralysis when colleagues disagreed.'
    },
    'annual-tenure': {
        concept: 'Annual Tenure',
        explanation: 'Most Roman magistracies lasted only one year, preventing the entrenchment of power and ensuring regular turnover.',
        importance: 'Prevented individuals from building permanent power bases in office. Combined with collegiality, it distributed authority across many people over time. Ambitious politicians like Marius and Caesar violated this principle to devastating effect.'
    },
    'imperium': {
        concept: 'Imperium',
        explanation: 'Supreme command authority held by senior magistrates, including military command and judicial power.',
        importance: 'Distinguished senior magistrates (consuls, praetors) from junior ones. Imperium provided the authority necessary for military leadership and crisis management, but its concentration made it dangerous if misused.'
    },
    'auctoritas': {
        concept: 'Auctoritas',
        explanation: 'Moral authority and influence based on experience, wisdom, and past service rather than formal legal power.',
        importance: 'The Senate\'s influence depended on auctoritas rather than legal authority. This informal power could be very effective but was vulnerable to challenge by those willing to ignore tradition and precedent.'
    },
    'intercessio': {
        concept: 'Intercessio',
        explanation: 'The power of veto held by tribunes and other magistrates, allowing them to halt official actions.',
        importance: 'Key check on magisterial power. Tribunes could veto any action, while magistrates of equal rank could block colleagues. This power could protect citizens but also paralyse government if misused.'
    },
    'sacrosanctitas': {
        concept: 'Sacrosanctitas',
        explanation: 'The physical inviolability of tribunes, making it a religious crime to harm them.',
        importance: 'Protected tribunes from retaliation for using their veto power. This religious protection was essential for their role as popular champions, but it also made them untouchable when they abused their position.'
    },
    'provocatio': {
        concept: 'Provocatio',
        explanation: 'The right of Roman citizens to appeal magistrates\' decisions to the popular assemblies.',
        importance: 'Fundamental protection against arbitrary punishment. Citizens within Rome could appeal death sentences or severe punishment, limiting magisterial power and ensuring some measure of due process.'
    },
    'mos-maiorum': {
        concept: 'Mos Maiorum',
        explanation: 'The "customs of the ancestors" - traditional practices that guided Roman behaviour despite lacking legal force.',
        importance: 'Much of the Roman constitution depended on voluntary adherence to tradition rather than written law. When ambitious politicians abandoned mos maiorum, the informal constraints on power collapsed.'
    },
    'clientela': {
        concept: 'Clientela',
        explanation: 'The system of patron-client relationships that created networks of obligation throughout Roman society.',
        importance: 'Influenced voting patterns and political alliances. Wealthy patrons could mobilise clients\' votes, while ambitious politicians built clientelae through favours and benefits. This undermined genuine democratic participation.'
    }
};

// Initialize Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    initializeCursus();
    initializeAssemblies();
    
    // Delay to ensure all content is rendered before setting up listeners
    setTimeout(() => {
        setupInteractiveContent();
    }, 100);
});

// Cursus Honorum Functions
function initializeCursus() {
    const ladderContainer = document.getElementById('cursus-ladder');
    const extraordinaryContainer = document.getElementById('extraordinary-offices');
    const detailsContainer = document.getElementById('cursus-details');
    
    if (!ladderContainer || !extraordinaryContainer || !detailsContainer) return;
    
    // Create ladder steps
    cursusData.steps.forEach((step, index) => {
        const stepEl = document.createElement('div');
        stepEl.className = 'cursus-step';
        stepEl.onclick = () => showCursusContent(step.id);
        stepEl.innerHTML = `
            <div class="step-card">
                <div class="step-header">
                    <div class="step-title">${step.title}</div>
                    <div class="step-age">${step.age}</div>
                </div>
                <div class="step-description">${step.description}</div>
            </div>
            ${index < cursusData.steps.length - 1 ? '<div class="step-arrow">↓</div>' : ''}
        `;
        ladderContainer.appendChild(stepEl);
    });
    
    // Create extraordinary offices
    cursusData.extraordinary.forEach(office => {
        const officeEl = document.createElement('div');
        officeEl.className = 'extraordinary-card';
        officeEl.onclick = () => showCursusContent(office.id);
        officeEl.innerHTML = `
            <div class="extraordinary-title">${office.title}</div>
            <div>${office.description}</div>
        `;
        extraordinaryContainer.appendChild(officeEl);
    });
    
    // Create default content
    const defaultContent = document.createElement('div');
    defaultContent.className = 'cursus-content active';
    defaultContent.id = 'cursus-default';
    defaultContent.innerHTML = `
        <h4>${cursusData.defaultContent.title}</h4>
        ${cursusData.defaultContent.html}
    `;
    detailsContainer.appendChild(defaultContent);
    
    // Create content for each office
    [...cursusData.steps, ...cursusData.extraordinary].forEach(office => {
        const contentEl = document.createElement('div');
        contentEl.className = 'cursus-content';
        contentEl.id = `cursus-${office.id}`;
        contentEl.innerHTML = `
            <h4>${office.content.title}</h4>
            ${office.content.html}
        `;
        detailsContainer.appendChild(contentEl);
    });
}

function showCursusContent(officeId) {
    // Remove active class from all steps and content
    document.querySelectorAll('.cursus-step, .extraordinary-card').forEach(element => {
        element.classList.remove('active');
    });
    document.querySelectorAll('.cursus-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to clicked element
    event.target.closest('.cursus-step, .extraordinary-card').classList.add('active');
    
    // Show corresponding content
    const contentId = 'cursus-' + officeId;
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.add('active');
    }
    
    // Re-setup interactive content for new content
    setupInteractiveContent();
}

// Assemblies Functions
function initializeAssemblies() {
    const gridContainer = document.getElementById('assembly-grid');
    const detailsContainer = document.getElementById('assembly-details');
    
    if (!gridContainer || !detailsContainer) return;
    
    // Create assembly cards
    assembliesData.assemblies.forEach(assembly => {
        const cardEl = document.createElement('div');
        cardEl.className = 'assembly-card';
        cardEl.onclick = () => showAssemblyContent(assembly.id);
        cardEl.innerHTML = `
            <div class="assembly-subtitle">${assembly.subtitle}</div>
            <div class="assembly-title">${assembly.title}</div>
            <div class="assembly-description">${assembly.description}</div>
        `;
        gridContainer.appendChild(cardEl);
    });
    
    // Create default content
    const defaultContent = document.createElement('div');
    defaultContent.className = 'assembly-content active';
    defaultContent.id = 'assembly-default';
    defaultContent.innerHTML = `
        <h4>${assembliesData.defaultContent.title}</h4>
        ${assembliesData.defaultContent.html}
    `;
    detailsContainer.appendChild(defaultContent);
    
    // Create content for each assembly
    assembliesData.assemblies.forEach(assembly => {
        const contentEl = document.createElement('div');
        contentEl.className = 'assembly-content';
        contentEl.id = `assembly-${assembly.id}`;
        contentEl.innerHTML = `
            <h4>${assembly.content.title}</h4>
            ${assembly.content.html}
        `;
        detailsContainer.appendChild(contentEl);
    });
}

function showAssemblyContent(assemblyId) {
    // Remove active class from all cards and content
    document.querySelectorAll('.assembly-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelectorAll('.assembly-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to clicked card
    event.target.closest('.assembly-card').classList.add('active');
    
    // Show corresponding content
    const contentId = 'assembly-' + assemblyId;
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.add('active');
    }
    
    // Re-setup interactive content for new content
    setupInteractiveContent();
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
