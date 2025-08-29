// Relationship Types Data
const relationshipData = {
    types: [
        {
            id: 'patronage',
            icon: '⬇️',
            title: 'Patronage',
            subtitle: 'Vertical relationships of protection and loyalty',
            className: 'patronage',
            content: {
                title: 'Patronage: The Foundation of Roman Society',
                html: `
                    <p>The relationship between <span class="key-term" data-definition="patronus">patronus</span> (patron) and <span class="key-term" data-definition="cliens">cliens</span> (client) was the basic building block of Roman social and political life. These vertical relationships created webs of obligation that extended throughout society.</p>
                    
                    <div class="primary-source">
                        "The loyalty of clients is the measure of a man's standing."
                        <div class="source-citation">— Cicero, <em>De Officiis</em> 2.69</div>
                    </div>
                    
                    <p><strong>What patrons provided:</strong></p>
                    <ul>
                        <li>Legal protection and representation in court</li>
                        <li>Financial assistance and business opportunities</li>
                        <li>Political influence and access to magistrates</li>
                        <li>Social status and protection from enemies</li>
                        <li>Food distributions (<span class="key-term" data-definition="sportula">sportula</span>) and housing</li>
                    </ul>

                    <p><strong>What clients provided:</strong></p>
                    <ul>
                        <li>Political support in elections and assemblies</li>
                        <li>Public demonstrations of the patron's importance</li>
                        <li>Morning attendance (<span class="key-term" data-definition="salutatio">salutatio</span>) at the patron's house</li>
                        <li>Loyalty in political and legal disputes</li>
                        <li>Military service under the patron's command</li>
                    </ul>

                    <p><strong>Political impact:</strong> Successful politicians could mobilise hundreds or thousands of clients to vote, demonstrate, or even fight. <span class="key-figure" data-info="clodius">Clodius</span> used organised gangs of clients to control the streets of Rome, while <span class="key-figure" data-info="pompey">Pompey</span> settled military veterans as clients throughout Italy.</p>

                    <p><strong>Key principles:</strong> Based on <span class="key-concept" data-concept="fides">fides</span> (trust), <span class="key-concept" data-concept="obligatio">obligatio</span> (mutual obligation), and <span class="key-concept" data-concept="honestas">honestas</span> (reputation). These relationships were not formal contracts but carried powerful social and religious sanctions.</p>
                `
            },
            visualization: 'patronage'
        },
        {
            id: 'amicitia',
            icon: '🤝',
            title: 'Amicitia',
            subtitle: 'Horizontal alliances between equals',
            className: 'amicitia',
            content: {
                title: 'Amicitia: Political Friendship and Alliance',
                html: `
                    <p><span class="key-term" data-definition="amicitia">Amicitia</span> ("friendship") described political alliances between social equals or near-equals. Unlike emotional friendships, these were calculated partnerships designed for mutual political advantage.</p>

                    <p><strong>Forms of amicitia:</strong></p>
                    <ul>
                        <li>Electoral coalitions supporting each other's candidacies</li>
                        <li>Legislative partnerships to pass mutual priorities</li>
                        <li>Marriage alliances between powerful families</li>
                        <li>Business partnerships and financial cooperation</li>
                        <li>Military alliances and shared commands</li>
                        <li>Judicial support and legal representation</li>
                    </ul>

                    <p><strong>Famous amicitiae:</strong></p>
                    <ul>
                        <li><strong>The <span class="key-concept" data-concept="first-triumvirate">First Triumvirate</span>:</strong> <span class="key-figure" data-info="caesar">Caesar</span>, <span class="key-figure" data-info="pompey">Pompey</span>, and <span class="key-figure" data-info="crassus">Crassus</span> divided the Roman world between them</li>
                        <li><strong><span class="key-figure" data-info="cicero">Cicero</span> and <span class="key-figure" data-info="atticus">Atticus</span>:</strong> Lifelong friendship combining politics, literature, and finance</li>
                        <li><strong><span class="key-figure" data-info="scipio-aemilianus">Scipio Aemilianus</span> circle:</strong> Intellectual and political salon including <span class="key-figure" data-info="polybius">Polybius</span> and <span class="key-figure" data-info="laelius">Laelius</span></li>
                    </ul>

                    <div class="primary-source">
                        "In friendship, nothing is feigned, nothing pretended; whatever is, is genuine and voluntary."
                        <div class="source-citation">— Cicero, <em>De Amicitia</em> 26</div>
                    </div>

                    <p><strong>The dark side:</strong> While <span class="key-figure" data-info="cicero">Cicero</span> idealized friendship, political amicitia often involved backroom deals, corruption, and the subordination of public interest to private advantage. The culture of private agreements undermined the transparency essential to Republican government.</p>

                    <p><strong>Breaking amicitia:</strong> When political friendships ended, they often became bitter <span class="key-concept" data-concept="inimicitia">inimicitia</span>. The collapse of the First Triumvirate led directly to civil war between former friends.</p>
                `
            },
            visualization: 'amicitia'
        },
        {
            id: 'inimicitia',
            icon: '⚔️',
            title: 'Inimicitia',
            subtitle: 'Political rivalries and feuds',
            className: 'inimicitia',
            content: {
                title: 'Inimicitia: Political Rivalry and Feuding',
                html: `
                    <p><span class="key-term" data-definition="inimicitia">Inimicitia</span> was the opposite of amicitia—deep-seated personal and political hostility that could drive Roman politics for generations. These rivalries were often more important than ideological differences in shaping political events.</p>

                    <p><strong>Sources of inimicitia:</strong></p>
                    <ul>
                        <li>Competition for the same offices or honours</li>
                        <li>Personal insults or public humiliation</li>
                        <li>Legal prosecutions and court cases</li>
                        <li>Family feuds inherited across generations</li>
                        <li>Ideological disagreements over policy</li>
                        <li>Business disputes or financial conflicts</li>
                    </ul>

                    <p><strong>Famous rivalries:</strong></p>
                    <ul>
                        <li><strong><span class="key-figure" data-info="cicero">Cicero</span> vs. <span class="key-figure" data-info="clodius">Clodius</span>:</strong> Personal vendetta involving exile, violence, and murder</li>
                        <li><strong><span class="key-figure" data-info="cato-younger">Cato</span> vs. <span class="key-figure" data-info="caesar">Caesar</span>:</strong> Ideological opposition between tradition and innovation</li>
                        <li><strong><span class="key-figure" data-info="pompey">Pompey</span> vs. <span class="key-figure" data-info="crassus">Crassus</span>:</strong> Competition for military glory and political dominance</li>
                        <li><strong><span class="key-figure" data-info="marius">Marius</span> vs. <span class="key-figure" data-info="sulla">Sulla</span>:</strong> Personal and factional hatred leading to civil war</li>
                    </ul>

                    <div class="primary-source">
                        "I will pursue you with hatred and enmity; I will be your personal enemy."
                        <div class="source-citation">— Cicero to Clodius, as reported by Dio Cassius</div>
                    </div>

                    <p><strong>Political weapons:</strong> Rivals used legal prosecution, public invective, physical violence, and legislative obstruction to destroy each other. <span class="key-figure" data-info="clodius">Clodius</span> organised gangs to attack enemies, while <span class="key-figure" data-info="cicero">Cicero</span> weaponised his oratory to destroy reputations.</p>

                    <p><strong>Escalation and violence:</strong> As the Republic weakened, inimicitia increasingly involved physical violence and even assassination. The murders of <span class="key-figure" data-info="tiberius-gracchus">Tiberius Gracchus</span>, <span class="key-figure" data-info="saturninus">Saturninus</span>, and eventually <span class="key-figure" data-info="caesar">Caesar</span> himself showed how personal rivalries could destroy the state.</p>
                `
            },
            visualization: 'inimicitia'
        }
    ],
    defaultContent: {
        title: 'The Personal Nature of Roman Politics',
        html: `
            <p>Click on any relationship type above to explore how personal connections dominated Roman political life. In theory, the <span class="key-concept" data-concept="res-publica">res publica</span> was governed by laws and institutions. In practice, it was controlled by networks of personal loyalty, alliance, and rivalry.</p>
            <p><strong>Key insight:</strong> Understanding these relationships is essential for grasping why the Republic ultimately collapsed—formal institutions couldn't withstand the pressure of personal ambition and private loyalties.</p>
        `
    }
};

// Case Studies Data
const caseStudiesData = [
    {
        id: 'triumvirate',
        title: 'The First Triumvirate',
        participants: 'Caesar, Pompey, Crassus (60-53 BC)',
        description: 'How three ambitious politicians used personal amicitia to bypass the Senate and divide the Roman world between them.',
        content: `
            <h4 style="color: #007bff; margin-bottom: 1.5rem;">🤝 Secret Alliance for Power</h4>
            
            <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #007bff; margin-bottom: 1.5rem;">
                <p><strong>Formation (60 BC):</strong> Three ambitious politicians combined their resources to control the Roman state:</p>
                <ul style="margin: 1rem 0; padding-left: 2rem;">
                    <li style="margin-bottom: 0.5rem;"><strong>Caesar:</strong> Needed consulship and Gallic command for military glory</li>
                    <li style="margin-bottom: 0.5rem;"><strong>Pompey:</strong> Wanted land for his Eastern veterans and ratification of his settlements</li>
                    <li style="margin-bottom: 0.5rem;"><strong>Crassus:</strong> Sought tax relief for his business associates and political influence</li>
                </ul>
            </div>
            
            <p><strong>How it worked:</strong> They pooled their clients, wealth, and influence to control elections, legislation, and provincial assignments. Caesar got Gaul, Pompey got his veterans settled, Crassus got his tax deals.</p>
            
            <p><strong>Impact on the Republic:</strong> The triumvirate showed that informal personal alliances could override formal institutions. The Senate became irrelevant as three men divided the Roman world between themselves in private.</p>
            
            <p><strong>Breakdown:</strong> Julia's death (54 BC) and Crassus's death at Carrhae (53 BC) destroyed the alliance, leading to civil war between Caesar and Pompey. Personal relationships proved unstable foundations for government.</p>
            
            <div style="background: white; padding: 1.5rem; margin-top: 1.5rem; border-radius: 8px; border-left: 4px solid #6c757d; font-style: italic;">
                "They divided the whole world among themselves as if it were their private property."
                <div style="font-size: 0.9rem; color: #666; margin-top: 0.75rem; font-style: normal; font-weight: 600;">— Plutarch, Life of Pompey 47</div>
            </div>
        `
    },
    {
        id: 'cicero-clodius',
        title: 'Cicero vs Clodius',
        participants: 'Personal vendetta (58-52 BC)',
        description: 'A bitter personal feud that involved exile, street violence, and murder, showing how inimicitia could destabilise the entire state.',
        content: `
            <h4 style="color: #dc3545; margin-bottom: 1.5rem;">⚔️ When Personal Hatred Destroys the State</h4>
            
            <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #dc3545; margin-bottom: 1.5rem;">
                <p><strong>Origins:</strong> The feud began when Cicero, as consul, executed the Catiline conspirators without trial. Clodius, as tribune, passed a law retrospectively making this illegal.</p>
            </div>
            
            <p><strong>Escalation:</strong></p>
            <ul style="margin: 1rem 0; padding-left: 2rem;">
                <li style="margin-bottom: 0.5rem;"><strong>58 BC:</strong> Clodius forces Cicero into exile</li>
                <li style="margin-bottom: 0.5rem;"><strong>57 BC:</strong> Pompey orchestrates Cicero's recall</li>
                <li style="margin-bottom: 0.5rem;"><strong>56-52 BC:</strong> Ongoing street violence between their supporters</li>
                <li style="margin-bottom: 0.5rem;"><strong>52 BC:</strong> Clodius murdered by Milo's gang on the Appian Way</li>
            </ul>
            
            <p><strong>Methods used:</strong></p>
            <ul style="margin: 1rem 0; padding-left: 2rem;">
                <li style="margin-bottom: 0.5rem;"><strong>Clodius:</strong> Organised street gangs, legislative manipulation, physical intimidation</li>
                <li style="margin-bottom: 0.5rem;"><strong>Cicero:</strong> Oratorical attacks, legal prosecution, appeals to traditional values</li>
                <li style="margin-bottom: 0.5rem;"><strong>Both:</strong> Mobilised clients and allies in a personal war</li>
            </ul>
            
            <p><strong>Impact on Rome:</strong> Normal government became impossible. Public assemblies were disrupted by violence, courts couldn't function safely, and the streets became battlegrounds between rival gangs.</p>
            
            <p><strong>Historical significance:</strong> Showed how personal inimicitia could destabilize the entire state. When powerful individuals put private revenge above public order, Republican institutions couldn't cope.</p>
            
            <div style="background: white; padding: 1.5rem; margin-top: 1.5rem; border-radius: 8px; border-left: 4px solid #6c757d; font-style: italic;">
                "The forum ran with blood, the Tiber was filled with the bodies of citizens."
                <div style="font-size: 0.9rem; color: #666; margin-top: 0.75rem; font-style: normal; font-weight: 600;">— Cicero, Pro Milone 90</div>
            </div>
        `
    },
    {
        id: 'pompey-clients',
        title: 'Pompey\'s Client Network',
        participants: 'Veterans and Eastern Kings',
        description: 'How Pompey built a vast patronage network spanning the Mediterranean that gave him power rivalling the state itself.',
        content: `
            <h4 style="color: #28a745; margin-bottom: 1.5rem;">🏆 Building a Personal Empire</h4>
            
            <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #28a745; margin-bottom: 1.5rem;">
                <p><strong>Military Veterans:</strong> Pompey settled thousands of soldiers in colonies across Italy and the provinces, creating a vast network of grateful clients who owed him their land and livelihood.</p>
            </div>
            
            <p><strong>Eastern Monarchs:</strong> His reorganization of the East (66-62 BC) created client kingdoms whose rulers owed their thrones to him personally:</p>
            <ul style="margin: 1rem 0; padding-left: 2rem;">
                <li style="margin-bottom: 0.5rem;">Restored Ariobarzanes to Cappadocia</li>
                <li style="margin-bottom: 0.5rem;">Confirmed Deiotarus in Galatia</li>
                <li style="margin-bottom: 0.5rem;">Created new principalities in Syria and Judaea</li>
                <li style="margin-bottom: 0.5rem;">Established personal relationships with dozens of local dynasts</li>
            </ul>
            
            <p><strong>Provincial Cities:</strong> Granted citizenship, tax relief, and autonomy to cities that supported him, creating municipal clients throughout the Mediterranean.</p>
            
            <p><strong>Scale of Power:</strong> By 60 BC, Pompey commanded personal loyalty from:</p>
            <ul style="margin: 1rem 0; padding-left: 2rem;">
                <li style="margin-bottom: 0.5rem;">200,000+ veteran colonists and their families</li>
                <li style="margin-bottom: 0.5rem;">Dozens of Eastern kings and princes</li>
                <li style="margin-bottom: 0.5rem;">Hundreds of cities across the Mediterranean</li>
                <li style="margin-bottom: 0.5rem;">Massive financial resources from grateful beneficiaries</li>
            </ul>
            
            <p><strong>Constitutional Crisis:</strong> This network gave Pompey power that rivalled the Roman state itself. He could mobilise resources and manpower independently of official institutions.</p>
            
            <p><strong>Ultimate Failure:</strong> Despite this vast network, personal loyalty proved fragile. When civil war came (49 BC), many of his clients stayed neutral or even supported Caesar, showing the limits of patronage-based power.</p>
            
            <div style="background: white; padding: 1.5rem; margin-top: 1.5rem; border-radius: 8px; border-left: 4px solid #6c757d; font-style: italic;">
                "Pompey had only to stamp his foot in Italy and legions would spring from the soil."
                <div style="font-size: 0.9rem; color: #666; margin-top: 0.75rem; font-style: normal; font-weight: 600;">— Cicero, Letters to Atticus 9.10</div>
            </div>
        `
    }
];

// Network Visualizations
const networkVisualizations = {
    patronage: `
        <div style="position: relative; height: 450px; background: linear-gradient(135deg, #f8f9fa, #e9ecef); border-radius: 8px; padding: 2rem; overflow: hidden;">
            <!-- Patron Box -->
            <div style="position: absolute; top: 30px; left: 50%; transform: translateX(-50%); width: 130px; height: 80px; background: linear-gradient(135deg, #28a745, #20c997); border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; font-weight: 600; box-shadow: 0 6px 16px rgba(40,167,69,0.3); cursor: pointer; transition: transform 0.3s ease; z-index: 10;" onmouseover="this.style.transform='translateX(-50%) scale(1.05)'" onmouseout="this.style.transform='translateX(-50%) scale(1)'">
                <div style="font-size: 1.8rem; margin-bottom: 0.25rem;">🏛️</div>
                <div style="font-size: 0.9rem; text-align: center; line-height: 1.2;">Wealthy Patron</div>
            </div>
            
            <!-- Client Boxes -->
            <div style="position: absolute; top: 240px; left: 20%; transform: translateX(-50%); width: 110px; height: 80px; background: linear-gradient(135deg, #6c757d, #868e96); border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; font-weight: 600; box-shadow: 0 4px 12px rgba(108,117,125,0.3); cursor: pointer; transition: transform 0.3s ease; z-index: 10;" onmouseover="this.style.transform='translateX(-50%) scale(1.05)'" onmouseout="this.style.transform='translateX(-50%) scale(1)'">
                <div style="font-size: 1.5rem; margin-bottom: 0.3rem;">👥</div>
                <div style="font-size: 0.8rem; text-align: center; line-height: 1.2;">Client<br>Group 1</div>
            </div>
            
            <div style="position: absolute; top: 240px; left: 50%; transform: translateX(-50%); width: 110px; height: 80px; background: linear-gradient(135deg, #6c757d, #868e96); border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; font-weight: 600; box-shadow: 0 4px 12px rgba(108,117,125,0.3); cursor: pointer; transition: transform 0.3s ease; z-index: 10;" onmouseover="this.style.transform='translateX(-50%) scale(1.05)'" onmouseout="this.style.transform='translateX(-50%) scale(1)'">
                <div style="font-size: 1.5rem; margin-bottom: 0.3rem;">👥</div>
                <div style="font-size: 0.8rem; text-align: center; line-height: 1.2;">Client<br>Group 2</div>
            </div>
            
            <div style="position: absolute; top: 240px; left: 80%; transform: translateX(-50%); width: 110px; height: 80px; background: linear-gradient(135deg, #6c757d, #868e96); border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; font-weight: 600; box-shadow: 0 4px 12px rgba(108,117,125,0.3); cursor: pointer; transition: transform 0.3s ease; z-index: 10;" onmouseover="this.style.transform='translateX(-50%) scale(1.05)'" onmouseout="this.style.transform='translateX(-50%) scale(1)'">
                <div style="font-size: 1.5rem; margin-bottom: 0.3rem;">👥</div>
                <div style="font-size: 0.8rem; text-align: center; line-height: 1.2;">Client<br>Group 3</div>
            </div>
            
            <!-- Connection Lines -->
            <svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 5;">
                <line x1="45%" y1="110px" x2="20%" y2="240px" stroke="#28a745" stroke-width="4" stroke-linecap="round"/>
                <line x1="50%" y1="110px" x2="50%" y2="240px" stroke="#28a745" stroke-width="4" stroke-linecap="round"/>
                <line x1="55%" y1="110px" x2="80%" y2="240px" stroke="#28a745" stroke-width="4" stroke-linecap="round"/>
            </svg>
            
            <!-- Description -->
            <div style="position: absolute; top: 360px; left: 50%; transform: translateX(-50%); background: rgba(255,255,255,0.95); padding: 0.75rem 1.5rem; border-radius: 25px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 2px solid #28a745; z-index: 10;">
                <div style="text-align: center;">
                    <strong style="color: #28a745; font-size: 1rem;">⬇️ Vertical Relationships</strong><br>
                    <span style="color: #555; font-size: 0.85rem;">Patron provides protection, clients provide loyalty</span>
                </div>
            </div>
        </div>
    `,
    amicitia: `
        <div style="position: relative; height: 350px; background: linear-gradient(135deg, #f8f9fa, #e9ecef); border-radius: 8px; padding: 2rem; overflow: hidden;">
            <!-- Caesar Node -->
            <div style="position: absolute; top: 80px; left: 15%; transform: translateX(-50%); width: 120px; height: 80px; background: linear-gradient(135deg, #007bff, #0056b3); border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; font-weight: 600; box-shadow: 0 6px 16px rgba(0,123,255,0.3); cursor: pointer; transition: transform 0.3s ease;" onmouseover="this.style.transform='translateX(-50%) scale(1.05)'" onmouseout="this.style.transform='translateX(-50%) scale(1)'">
                <div style="font-size: 1.6rem; margin-bottom: 0.25rem;">⚔️</div>
                <div style="font-size: 0.9rem; text-align: center; line-height: 1.3;">Caesar</div>
                <div style="font-size: 0.7rem; opacity: 0.9;">Gaul</div>
            </div>
            
            <!-- Pompey Node -->
            <div style="position: absolute; top: 80px; left: 50%; transform: translateX(-50%); width: 120px; height: 80px; background: linear-gradient(135deg, #007bff, #0056b3); border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; font-weight: 600; box-shadow: 0 6px 16px rgba(0,123,255,0.3); cursor: pointer; transition: transform 0.3s ease;" onmouseover="this.style.transform='translateX(-50%) scale(1.05)'" onmouseout="this.style.transform='translateX(-50%) scale(1)'">
                <div style="font-size: 1.6rem; margin-bottom: 0.25rem;">🏆</div>
                <div style="font-size: 0.9rem; text-align: center; line-height: 1.3;">Pompey</div>
                <div style="font-size: 0.7rem; opacity: 0.9;">East</div>
            </div>
            
            <!-- Crassus Node -->
            <div style="position: absolute; top: 80px; left: 85%; transform: translateX(-50%); width: 120px; height: 80px; background: linear-gradient(135deg, #007bff, #0056b3); border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; font-weight: 600; box-shadow: 0 6px 16px rgba(0,123,255,0.3); cursor: pointer; transition: transform 0.3s ease;" onmouseover="this.style.transform='translateX(-50%) scale(1.05)'" onmouseout="this.style.transform='translateX(-50%) scale(1)'">
                <div style="font-size: 1.6rem; margin-bottom: 0.25rem;">💰</div>
                <div style="font-size: 0.9rem; text-align: center; line-height: 1.3;">Crassus</div>
                <div style="font-size: 0.7rem; opacity: 0.9;">Wealth</div>
            </div>
            
            <!-- Connection Lines -->
            <div style="position: absolute; top: 120px; left: 27%; width: 16%; height: 5px; background: #007bff; border-radius: 3px;"></div>
            <div style="position: absolute; top: 120px; left: 59%; width: 16%; height: 5px; background: #007bff; border-radius: 3px;"></div>
            
            <!-- Handshake Icons -->
            <div style="position: absolute; top: 100px; left: 32.5%; transform: translateX(-50%); font-size: 1.8rem; background: white; border-radius: 50%; padding: 0.25rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">🤝</div>
            <div style="position: absolute; top: 100px; left: 67.5%; transform: translateX(-50%); font-size: 1.8rem; background: white; border-radius: 50%; padding: 0.25rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">🤝</div>
            
            <!-- Description -->
            <div style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); background: rgba(255,255,255,0.95); padding: 0.75rem 1.5rem; border-radius: 25px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 2px solid #007bff;">
                <div style="text-align: center;">
                    <strong style="color: #007bff; font-size: 1rem;">🤝 Horizontal Alliances</strong><br>
                    <span style="color: #555; font-size: 0.85rem;">The First Triumvirate (60 BC)</span>
                </div>
            </div>
        </div>
    `,
    inimicitia: `
        <div style="position: relative; height: 350px; background: linear-gradient(135deg, #f8f9fa, #e9ecef); border-radius: 8px; padding: 2rem; overflow: hidden;">
            <!-- Cicero Node -->
            <div style="position: absolute; top: 80px; left: 25%; transform: translateX(-50%); width: 120px; height: 80px; background: linear-gradient(135deg, #dc3545, #c82333); border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; font-weight: 600; box-shadow: 0 6px 16px rgba(220,53,69,0.3); cursor: pointer; transition: transform 0.3s ease;" onmouseover="this.style.transform='translateX(-50%) scale(1.05)'" onmouseout="this.style.transform='translateX(-50%) scale(1)'">
                <div style="font-size: 1.6rem; margin-bottom: 0.25rem;">📜</div>
                <div style="font-size: 0.9rem; text-align: center; line-height: 1.3;">Cicero</div>
                <div style="font-size: 0.7rem; opacity: 0.9;">Consul</div>
            </div>
            
            <!-- Clodius Node -->
            <div style="position: absolute; top: 80px; left: 75%; transform: translateX(-50%); width: 120px; height: 80px; background: linear-gradient(135deg, #dc3545, #c82333); border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; font-weight: 600; box-shadow: 0 6px 16px rgba(220,53,69,0.3); cursor: pointer; transition: transform 0.3s ease;" onmouseover="this.style.transform='translateX(-50%) scale(1.05)'" onmouseout="this.style.transform='translateX(-50%) scale(1)'">
                <div style="font-size: 1.6rem; margin-bottom: 0.25rem;">⚡</div>
                <div style="font-size: 0.9rem; text-align: center; line-height: 1.3;">Clodius</div>
                <div style="font-size: 0.7rem; opacity: 0.9;">Tribune</div>
            </div>
            
            <!-- Dashed Connection Line -->
            <div style="position: absolute; top: 120px; left: 37%; width: 26%; height: 4px; background: repeating-linear-gradient(90deg, #dc3545 0px, #dc3545 10px, transparent 10px, transparent 20px); border-radius: 2px;"></div>
            
            <!-- Conflict Icon -->
            <div style="position: absolute; top: 100px; left: 50%; transform: translateX(-50%); font-size: 2rem; color: #dc3545; background: white; border-radius: 50%; padding: 0.25rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">⚔️</div>
            
            <!-- HATRED label -->
            <div style="position: absolute; top: 180px; left: 50%; transform: translateX(-50%); color: #dc3545; font-weight: 700; font-size: 1.2rem; text-shadow: 0 1px 2px rgba(0,0,0,0.1); background: rgba(255,255,255,0.9); padding: 0.5rem 1rem; border-radius: 15px;">HATRED</div>
            
            <!-- Description -->
            <div style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); background: rgba(255,255,255,0.95); padding: 0.75rem 1.5rem; border-radius: 25px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 2px solid #dc3545;">
                <div style="text-align: center;">
                    <strong style="color: #dc3545; font-size: 1rem;">⚔️ Personal Enmity</strong><br>
                    <span style="color: #555; font-size: 0.85rem;">Leading to exile, violence, and murder</span>
                </div>
            </div>
        </div>
    `,
    default: `
        <div style="text-align: center; padding: 2rem; color: #666;">
            <h4>Click on a relationship type above to see how it worked in practice</h4>
            <p>Interactive network diagrams will show the connections between Roman politicians and how personal relationships shaped political outcomes.</p>
        </div>
    `
};

// Definitions Data
const definitions = {
    'patronus': {
        term: 'Patronus',
        definition: 'A powerful Roman who provided protection, legal aid, and financial support to clients in exchange for political loyalty.',
        context: 'Patronage was the fundamental organizing principle of Roman society. Successful politicians could mobilize thousands of clients for elections, demonstrations, or even violence. The relationship was personal, lifelong, and often hereditary.'
    },
    'cliens': {
        term: 'Cliens',
        definition: 'A Roman citizen who received protection and support from a patron in exchange for loyalty and political backing.',
        context: 'Clients attended their patron\'s morning receptions, voted as directed, and demonstrated the patron\'s power through their numbers. The relationship created vertical bonds of loyalty that cross-cut formal political institutions.'
    },
    'amicitia': {
        term: 'Amicitia',
        definition: 'Political "friendship" - calculated alliances between elite Romans based on mutual advantage rather than emotional bonds.',
        context: 'These horizontal relationships between equals allowed politicians to pool resources, support each other\'s careers, and coordinate policy. However, they often undermined public institutions through private dealing.'
    },
    'inimicitia': {
        term: 'Inimicitia',
        definition: 'Political enmity - deep-seated personal and political hostility that could drive Roman politics for generations.',
        context: 'These feuds were often more important than ideological differences in shaping political events. Personal hatred could lead to prosecution, violence, and even civil war.'
    },
    'sportula': {
        term: 'Sportula',
        definition: 'Daily gift of food or money distributed by patrons to their clients, originally carried in a small basket.',
        context: 'The sportula institutionalized economic dependence and ensured daily contact between patron and client. It represented the material basis of political loyalty.'
    },
    'salutatio': {
        term: 'Salutatio',
        definition: 'The morning reception where clients paid their respects to their patron, demonstrating his importance and receiving instructions.',
        context: 'The size and quality of a politician\'s morning crowd (turba) was a visible measure of his power and influence. Important clients were received privately, lesser clients in groups.'
    }
};

// Figures Data
const figures = {
    'clodius': {
        name: 'Publius Clodius Pulcher',
        dates: 'c. 93-52 BC',
        role: 'Tribune and popularis politician',
        significance: 'Used tribunician power and organized violence to dominate Roman politics. His methods showed how Republican institutions could be weaponized for personal advantage. His feud with Cicero involved exile, street gangs, and ultimately his own murder.'
    },
    'pompey': {
        name: 'Gnaeus Pompeius Magnus',
        dates: '106-48 BC',
        role: 'General and politician',
        significance: 'Built vast client networks through military settlements and Eastern conquests. His patronage system rivaled the state itself, setting precedents for personal rule that would be exploited by Caesar and Augustus.'
    },
    'caesar': {
        name: 'Gaius Julius Caesar',
        dates: '100-44 BC',
        role: 'General, politician, dictator',
        significance: 'Master of political relationships who used the First Triumvirate to bypass constitutional limits. His ability to build and maintain alliances while destroying enemies ultimately made him dictator but also led to his assassination.'
    },
    'crassus': {
        name: 'Marcus Licinius Crassus',
        dates: 'c. 115-53 BC',
        role: 'Politician and financier',
        significance: 'Richest man in Rome who used his wealth to build extensive patronage networks. His rivalry with Pompey and alliance with Caesar in the First Triumvirate shaped Late Republican politics until his death at Carrhae.'
    },
    'cicero': {
        name: 'Marcus Tullius Cicero',
        dates: '106-43 BC',
        role: 'Orator, philosopher, politician',
        significance: 'Both theorist and practitioner of political relationships. His correspondence reveals the inner workings of Republican politics while his career showed how a "new man" could rise through cultivating the right connections.'
    },
    'atticus': {
        name: 'Titus Pomponius Atticus',
        dates: '110-32 BC',
        role: 'Financier and literary patron',
        significance: 'Cicero\'s closest friend who stayed above factional politics while maintaining relationships with all sides. His career showed how wealth and careful neutrality could preserve influence across political upheavals.'
    },
    'ronald-syme': {
        name: 'Sir Ronald Syme',
        dates: '1903-1989',
        role: 'New Zealand historian',
        significance: 'Revolutionized understanding of the Late Republic through prosopographical analysis in "The Roman Revolution." His focus on personal relationships rather than constitutional principles fundamentally changed how scholars approach Roman politics.'
    },
    'cato-younger': {
        name: 'Marcus Porcius Cato (the Younger)',
        dates: '95-46 BC',
        role: 'Stoic philosopher and politician',
        significance: 'Represented traditional Republican virtue and opposition to personal rule. His principled stance against Caesar and eventual suicide made him a symbol of Republican ideals, though his inflexibility may have hastened the Republic\'s collapse.'
    },
    'marius': {
        name: 'Gaius Marius',
        dates: 'c. 157-86 BC',
        role: 'General and politician',
        significance: 'Created the first professional army loyal to him personally rather than the state. His rivalry with Sulla demonstrated how personal relationships and private armies could override constitutional government.'
    },
    'sulla': {
        name: 'Lucius Cornelius Sulla',
        dates: '138-78 BC',
        role: 'General and dictator',
        significance: 'Used personal loyalty and terror to reshape the Republic in favor of the aristocracy. His proscription lists showed how inimicitia could become deadly when backed by absolute power.'
    },
    'tiberius-gracchus': {
        name: 'Tiberius Sempronius Gracchus',
        dates: '168-133 BC',
        role: 'Tribune and reformer',
        significance: 'His assassination marked the beginning of political violence in the Republic. His death showed how personal relationships and factional loyalty could override legal protections and constitutional norms.'
    },
    'scipio-aemilianus': {
        name: 'Publius Cornelius Scipio Aemilianus',
        dates: '185-129 BC',
        role: 'General and patron of intellectuals',
        significance: 'Led a famous intellectual circle that included Greek philosophers and Roman writers. His salon demonstrated how amicitia could extend beyond politics to literature and philosophy.'
    },
    'polybius': {
        name: 'Polybius',
        dates: 'c. 200-118 BC',
        role: 'Greek historian',
        significance: 'Member of Scipio\'s circle who wrote the definitive history of Rome\'s rise. His work shows how Greek intellectuals could gain influence through patronage relationships with Roman elites.'
    },
    'laelius': {
        name: 'Gaius Laelius',
        dates: 'c. 190-125 BC',
        role: 'Politician and philosopher',
        significance: 'Close friend of Scipio Aemilianus and speaker in Cicero\'s dialogue "De Amicitia." Represented the idealized version of political friendship based on virtue rather than mere advantage.'
    },
    'saturninus': {
        name: 'Lucius Appuleius Saturninus',
        dates: 'c. 138-100 BC',
        role: 'Tribune and popularis politician',
        significance: 'Allied with Marius but eventually killed in street violence. His death showed how political alliances could quickly turn deadly when personal interests conflicted.'
    }
};

// Concepts Data
const concepts = {
    'res-publica': {
        concept: 'Res Publica',
        explanation: 'The "public thing" - the ideal that the Roman state belonged to all citizens collectively, not to any individual ruler.',
        importance: 'This concept was increasingly undermined by personal relationships and private loyalties. The dominance of patronage and amicitia meant that public institutions served private interests rather than the common good.'
    },
    'first-triumvirate': {
        concept: 'First Triumvirate',
        explanation: 'Secret alliance between Caesar, Pompey, and Crassus (60 BC) that divided the Roman world between them outside normal constitutional channels.',
        importance: 'Demonstrated how personal relationships could override formal institutions. The triumvirs used their combined influence to control elections, legislation, and provincial commands, effectively privatizing the Roman state.'
    },
    'fides': {
        concept: 'Fides',
        explanation: 'Trust and good faith - the fundamental virtue that made personal relationships reliable in the absence of formal contracts.',
        importance: 'Essential for all Roman relationships, from patron-client bonds to international treaties. Breaking fides was both a practical and religious offense that could destroy a person\'s political career.'
    },
    'obligatio': {
        concept: 'Obligatio',
        explanation: 'Mutual obligation - the reciprocal duties that bound Romans together in personal and political relationships.',
        importance: 'Created webs of debt and obligation that often mattered more than formal law. Politicians built careers by accumulating obligations from others while carefully managing their own duties.'
    },
    'honestas': {
        concept: 'Honestas',
        explanation: 'Reputation for honor and integrity - essential for maintaining political relationships and public credibility.',
        importance: 'In a system based on personal trust, reputation was everything. Attacks on honestas through prosecution or public invective could destroy political careers and personal relationships.'
    },
    'inimicitia': {
        concept: 'Inimicitia',
        explanation: 'Political enmity and personal hostility that could drive Roman politics across generations.',
        importance: 'Often more significant than ideological differences in shaping political events. Personal hatreds could lead to prosecution, violence, civil war, and the destruction of the state itself.'
    }
};

// Initialize Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    initializeRelationships();
    initializeCaseStudies();
    
    // Delay to ensure all content is rendered before setting up listeners
    setTimeout(() => {
        setupInteractiveContent();
    }, 100);
});

// Relationship Network Functions
function initializeRelationships() {
    const typesContainer = document.getElementById('relationship-types');
    const detailsContainer = document.getElementById('relationship-details');
    const visualizationContainer = document.getElementById('network-visualization');
    
    if (!typesContainer || !detailsContainer || !visualizationContainer) return;
    
    // Create relationship cards
    relationshipData.types.forEach(type => {
        const cardEl = document.createElement('div');
        cardEl.className = `relationship-card ${type.className}`;
        cardEl.onclick = () => showRelationshipType(type.id);
        cardEl.innerHTML = `
            <span class="relationship-icon">${type.icon}</span>
            <div class="relationship-title">${type.title}</div>
            <div class="relationship-subtitle">${type.subtitle}</div>
        `;
        typesContainer.appendChild(cardEl);
    });
    
    // Create default content
    const defaultContent = document.createElement('div');
    defaultContent.className = 'relationship-content active';
    defaultContent.id = 'relationship-default';
    defaultContent.innerHTML = `
        <h4>${relationshipData.defaultContent.title}</h4>
        ${relationshipData.defaultContent.html}
    `;
    detailsContainer.appendChild(defaultContent);
    
    // Create content for each type
    relationshipData.types.forEach(type => {
        const contentEl = document.createElement('div');
        contentEl.className = 'relationship-content';
        contentEl.id = `relationship-${type.id}`;
        contentEl.innerHTML = `
            <h4>${type.content.title}</h4>
            ${type.content.html}
        `;
        detailsContainer.appendChild(contentEl);
    });
    
    // Set default visualization
    visualizationContainer.innerHTML = networkVisualizations.default;
}

function showRelationshipType(typeId) {
    // Remove active class from all cards and content
    document.querySelectorAll('.relationship-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelectorAll('.relationship-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to clicked card
    event.target.closest('.relationship-card').classList.add('active');
    
    // Show corresponding content
    const contentId = 'relationship-' + typeId;
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.add('active');
    }
    
    // Update visualization
    const visualizationContainer = document.getElementById('network-visualization');
    if (visualizationContainer && networkVisualizations[typeId]) {
        visualizationContainer.innerHTML = networkVisualizations[typeId];
    }
    
    // Re-setup interactive content for new content
    setupInteractiveContent();
}

// Case Studies Functions
function initializeCaseStudies() {
    const container = document.getElementById('case-studies');
    
    if (!container) return;
    
    caseStudiesData.forEach(study => {
        const cardEl = document.createElement('div');
        cardEl.className = 'case-study-card';
        cardEl.onclick = () => showCaseStudy(study.id);
        cardEl.innerHTML = `
            <div class="case-study-title">${study.title}</div>
            <div class="case-study-participants">${study.participants}</div>
            <div class="case-study-description">${study.description}</div>
        `;
        container.appendChild(cardEl);
    });
}

function showCaseStudy(studyId) {
    // Highlight the clicked card
    document.querySelectorAll('.case-study-card').forEach(card => {
        card.style.borderColor = '#e9ecef';
    });
    event.target.closest('.case-study-card').style.borderColor = '#007bff';
    
    const study = caseStudiesData.find(s => s.id === studyId);
    if (study) {
        const detailsDiv = document.getElementById('case-study-details');
        detailsDiv.innerHTML = study.content;
        detailsDiv.style.display = 'block';
        
        // Smooth scroll to the details
        detailsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
