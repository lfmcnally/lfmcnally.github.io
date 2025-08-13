// Temple of Zeus at Olympia Data
const zeusTempleData = {
    name: "Temple of Zeus at Olympia",
    location: "Olympia, Elis, Greece",
    date: "470-456 BCE",
    architect: "Libon of Elis",
    style: "Doric",
    dedication: "Zeus Olympios",
    
    overview: {
        description: "The Temple of Zeus at Olympia was one of the most important temples in ancient Greece, housing the colossal chryselephantine statue of Zeus by Phidias - one of the Seven Wonders of the Ancient World. Built to commemorate Elis' victory over Pisa, it became the religious heart of the Olympic Games.",
        
        dimensions: {
            length: "64.12 meters",
            width: "27.68 meters",
            height: "20 meters (to pediment peak)",
            columns: "6 x 13 columns",
            columnHeight: "10.43 meters",
            columnDiameter: "2.25 meters (base)"
        },
        
        materials: "Local shell limestone (covered with white stucco), Parian marble (sculptures), Pentelic marble (roof tiles)",
        
        significance: [
            "Housed Phidias' 13-meter tall gold and ivory statue of Zeus",
            "Perfect example of mature Doric style",
            "Religious center of the Olympic Games",
            "Displayed Heracles' twelve labours in its metopes"
        ]
    },
    
    // Unique and interesting elements (streamlined version)
    uniqueFeatures: {
        title: "Unique & Interesting Elements",
        features: [
            {
                category: "Accessibility Innovation",
                detail: "First major temple to use ramps instead of steps - possibly for bringing sacrificial animals or wheeled offerings"
            },
            {
                category: "Optical Illusions",
                detail: "Columns lean inward by 6.5cm and the stylobate curves upward to correct visual distortion"
            },
            {
                category: "Hidden Workshop",
                detail: "Phidias' workshop discovered nearby - same dimensions as temple cella to test the statue's fit"
            },
            {
                category: "Athletic Connection",
                detail: "Olympic victors took oaths here and bit the statue's knee for good luck"
            },
            {
                category: "Political Statement",
                detail: "Built from war spoils to legitimize Elis' control over the Olympic Games"
            },
            {
                category: "Scale Wonder",
                detail: "The cult statue was so tall that if Zeus stood up, he would have broken through the roof"
            }
        ]
    },
    
    // Detailed information for each architectural element
    decorations: {
        "east-pediment": {
            title: "East Pediment - The Chariot Race",
            date: "470-456 BCE",
            dimensions: "26m wide x 3.3m high (center)",
            
            description: "The east pediment, facing the altar and rising sun, depicts the tense moment before the fateful chariot race between Pelops and King Oinomaos for the hand of Hippodameia.",
            
            composition: {
                center: "Zeus stands as divine arbiter between the two competitors",
                left: "Pelops with Hippodameia",
                right: "Oinomaos with his wife Sterope",
                corners: "Chariots, servants, and reclining river gods (Alpheios and Kladeos)"
            },
            
            narrative: "This scene captures the moment of divine intervention in human affairs. Pelops would win through trickery (bribing Oinomaos' charioteer to replace the lynch pins with wax), founding the dynasty that would rule the Peloponnese. The static composition creates psychological tension.",
            
            style: "Severe Style (Early Classical) - rigid, formal poses with psychological intensity rather than physical action",
            
            significance: [
                "Legitimized Elis' control over Olympia through mythological precedent",
                "Emphasized Zeus's role as overseer of oaths and justice",
                "Connected the Olympic Games to heroic mythology",
                "Showed consequences of hubris (Oinomaos had killed 13 previous suitors)"
            ]
        },
        
        "west-pediment": {
            title: "West Pediment - Centauromachy",
            date: "470-456 BCE",
            dimensions: "26m wide x 3.3m high (center)",
            
            description: "The west pediment shows the battle between the Lapiths and Centaurs at the wedding of Peirithoos, with Apollo as the central figure bringing divine order to chaos.",
            
            composition: {
                center: "Apollo stands with outstretched arm, commanding peace",
                sides: "Violent struggle between civilized Lapiths and wild Centaurs",
                action: "Centaurs attempting to abduct Lapith women",
                arrangement: "Symmetrical groups of intertwined figures"
            },
            
            narrative: "At the wedding feast of Peirithoos, the centaurs became drunk and attempted to carry off the Lapith women, including the bride. This violation of xenia (guest-friendship) prompted immediate retaliation. Apollo's presence ensures civilization's victory.",
            
            style: "More dynamic than east pediment - twisted poses, emotional expressions, and violent movement within the triangular frame",
            
            significance: [
                "Civilization (Lapiths/Greeks) versus Barbarism (Centaurs)",
                "Divine support for Greek values",
                "Consequence of violating sacred hospitality",
                "Apollo as bringer of order and justice"
            ]
        },
        
        "metopes": {
            title: "The Twelve Metopes - Labours of Heracles",
            date: "470-456 BCE",
            dimensions: "1.60m high x 1.50m wide each",
            totalNumber: 12,
            
            description: "The twelve metopes over the front and rear porches depicted all twelve labours of Heracles, the mythical founder of the Olympic Games. This was the only sculptural decoration on the exterior of the cella building.",
            
            arrangement: {
                eastPorch: [
                    "Nemean Lion",
                    "Lernaean Hydra", 
                    "Ceryneian Hind",
                    "Erymanthian Boar",
                    "Augean Stables",
                    "Stymphalian Birds"
                ],
                westPorch: [
                    "Cretan Bull",
                    "Mares of Diomedes",
                    "Belt of Hippolyta",
                    "Cattle of Geryon",
                    "Apples of the Hesperides",
                    "Cerberus"
                ]
            },
            
            artisticProgram: "The metopes showed Heracles' progression from local Peloponnesian labours to the edges of the world, matching the athlete's journey from local to panhellenic glory.",
            
            survivalStatus: "Most metopes are now in the Olympia Archaeological Museum, though many are fragmentary. The Augean Stables and Apples of the Hesperides are best preserved.",
            
            iconography: {
                heracles: "Shown beardless in early labours, bearded in later ones - showing maturation",
                athena: "Appears in several metopes as divine helper",
                composition: "Each metope is self-contained but part of larger narrative sequence"
            },
            
            significance: [
                "Heracles as founder of Olympic Games made him perfect for this temple",
                "Twelve labours = purification through effort (relevant to athletes)",
                "Geographic scope matches panhellenic nature of Olympics",
                "Shows that excellence requires divine support and human effort"
            ]
        },
        
        "cult-statue": {
            title: "Chryselephantine Statue of Zeus",
            artist: "Phidias",
            date: "435 BCE",
            height: "13 meters (43 feet)",
            materials: "Gold, ivory, ebony, precious stones",
            
            description: "The colossal seated figure of Zeus was one of the Seven Wonders of the Ancient World. Phidias created it in his workshop at Olympia using the chryselephantine technique - gold drapery over a wooden core with ivory for flesh parts.",
            
            appearance: {
                pose: "Seated on elaborate throne",
                rightHand: "Held Nike (Victory) figure",
                leftHand: "Held scepter topped with eagle",
                head: "Olive wreath crown",
                throne: "Decorated with mythological scenes, ebony, gold, and precious stones"
            },
            
            construction: "Built in sections in Phidias' workshop (archaeologically confirmed), then assembled inside temple",
            
            impact: "Pausanias wrote that the statue added something to traditional religion - those who saw it could no longer imagine Zeus in any other way",
            
            fate: "Removed to Constantinople in 394 CE, destroyed by fire in 462 CE",
            
            significance: [
                "Defined the visual conception of Zeus for centuries",
                "Demonstrated Greek ability to create the divine in material form",
                "Made Olympia a major pilgrimage destination",
                "Showed Zeus as both powerful ruler and benevolent father"
            ]
        }
    }
};

// Function to generate the Zeus temple content for the main HTML
function generateZeusContent() {
    return `
        <div class="temple-content-wrapper">
            <!-- Overview Section -->
            <div class="content-section">
                <h3>Overview</h3>
                <p>${zeusTempleData.overview.description}</p>
                
                <div class="info-grid">
                    <div class="info-card">
                        <h4>Dimensions</h4>
                        <ul>
                            <li><strong>Size:</strong> ${zeusTempleData.overview.dimensions.length} × ${zeusTempleData.overview.dimensions.width}</li>
                            <li><strong>Height:</strong> ${zeusTempleData.overview.dimensions.height}</li>
                            <li><strong>Columns:</strong> ${zeusTempleData.overview.dimensions.columns} (Doric)</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Construction</h4>
                        <ul>
                            <li><strong>Date:</strong> ${zeusTempleData.date}</li>
                            <li><strong>Architect:</strong> ${zeusTempleData.architect}</li>
                            <li><strong>Materials:</strong> ${zeusTempleData.overview.materials}</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- Interactive Temple Visualization -->
            <div class="content-section">
                <h3>Sculptural Decorations</h3>
                <p style="text-align: center; color: #6c757d; font-style: italic;">
                    Click on the colored dots to explore the temple's decoration
                </p>
                
                ${createZeusTempleInteractive()}
            </div>
            
            <!-- Unique Features Section (Streamlined) -->
            <div class="content-section">
                <h3>${zeusTempleData.uniqueFeatures.title}</h3>
                <div class="unique-features-grid">
                    ${zeusTempleData.uniqueFeatures.features.map(feature => `
                        <div class="unique-feature-card">
                            <div class="feature-category">${feature.category}</div>
                            <div class="feature-detail">${feature.detail}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Function to create the interactive temple visualization
function createZeusTempleInteractive() {
    return `
        <div class="temple-interactive-container">
            <div class="temple-diagram-wrapper">
                <img src="images/zeus-temple-reconstruction.jpg" alt="Temple of Zeus at Olympia reconstruction" class="temple-base-image">
                
                <!-- Interactive Hotspots -->
                <div class="hotspot pediment-spot" 
                     style="left: 20%; top: 25%; background: #dc3545;" 
                     onclick="showZeusDecoration('west-pediment')"
                     data-tooltip="West Pediment - Centauromachy">
                    <div class="hotspot-pulse"></div>
                </div>
                
                <div class="hotspot pediment-spot" 
                     style="left: 80%; top: 25%; background: #dc3545;" 
                     onclick="showZeusDecoration('east-pediment')"
                     data-tooltip="East Pediment - Chariot Race">
                    <div class="hotspot-pulse"></div>
                </div>
                
                <div class="hotspot metopes-spot" 
                     style="left: 50%; top: 35%; background: #28a745;" 
                     onclick="showZeusDecoration('metopes')"
                     data-tooltip="Metopes - Twelve Labours">
                    <div class="hotspot-pulse"></div>
                </div>
                
                <div class="hotspot statue-spot" 
                     style="left: 50%; top: 50%; background: #ffd700;" 
                     onclick="showZeusDecoration('cult-statue')"
                     data-tooltip="Cult Statue of Zeus">
                    <div class="hotspot-pulse"></div>
                </div>
            </div>
            
            <div class="temple-legend">
                <div class="legend-item">
                    <span class="legend-dot" style="background: #dc3545;"></span>
                    <span>Pediments - Mythological Scenes</span>
                </div>
                <div class="legend-item">
                    <span class="legend-dot" style="background: #28a745;"></span>
                    <span>Metopes - Labours of Heracles</span>
                </div>
                <div class="legend-item">
                    <span class="legend-dot" style="background: #ffd700;"></span>
                    <span>Interior - Cult Statue</span>
                </div>
            </div>
        </div>
        
        <div id="zeus-decoration-detail" class="decoration-detail">
            <!-- Details will be loaded here when hotspots are clicked -->
        </div>
    `;
}

// Function to show decoration details when hotspots are clicked
function showZeusDecoration(decorationId) {
    const detailDiv = document.getElementById('zeus-decoration-detail');
    const data = zeusTempleData.decorations[decorationId];
    
    if (!data) return;
    
    let detailHTML = ``;
    
    if (decorationId === 'east-pediment' || decorationId === 'west-pediment') {
        detailHTML = `
            <div class="decoration-detail-content">
                <h4>${data.title}</h4>
                <div class="detail-meta">
                    <span><strong>Date:</strong> ${data.date}</span> | 
                    <span><strong>Dimensions:</strong> ${data.dimensions}</span>
                </div>
                <p>${data.description}</p>
                
                <div class="detail-grid">
                    <div class="detail-section">
                        <h5>Composition</h5>
                        <ul>
                            ${Object.entries(data.composition).map(([key, value]) => 
                                `<li><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</li>`
                            ).join('')}
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h5>Significance</h5>
                        <ul>
                            ${data.significance.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="narrative-box">
                    <h5>Narrative</h5>
                    <p>${data.narrative}</p>
                </div>
                
                <p class="style-note"><strong>Artistic Style:</strong> ${data.style}</p>
            </div>
        `;
    } else if (decorationId === 'metopes') {
        detailHTML = `
            <div class="decoration-detail-content">
                <h4>${data.title}</h4>
                <div class="detail-meta">
                    <span><strong>Date:</strong> ${data.date}</span> | 
                    <span><strong>Size:</strong> ${data.dimensions} each</span> | 
                    <span><strong>Total:</strong> ${data.totalNumber} metopes</span>
                </div>
                <p>${data.description}</p>
                
                <div class="metopes-arrangement">
                    <div class="metope-group">
                        <h5>East Porch (Labours 1-6)</h5>
                        <ol>
                            ${data.arrangement.eastPorch.map(labour => `<li>${labour}</li>`).join('')}
                        </ol>
                    </div>
                    <div class="metope-group">
                        <h5>West Porch (Labours 7-12)</h5>
                        <ol start="7">
                            ${data.arrangement.westPorch.map(labour => `<li>${labour}</li>`).join('')}
                        </ol>
                    </div>
                </div>
                
                <div class="detail-highlight">
                    <h5>Artistic Program</h5>
                    <p>${data.artisticProgram}</p>
                </div>
                
                <div class="detail-grid">
                    <div class="detail-section">
                        <h5>Iconography</h5>
                        <ul>
                            ${Object.entries(data.iconography).map(([key, value]) => 
                                `<li><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</li>`
                            ).join('')}
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h5>Significance</h5>
                        <ul>
                            ${data.significance.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <p class="museum-note"><strong>Current Status:</strong> ${data.survivalStatus}</p>
            </div>
        `;
    } else if (decorationId === 'cult-statue') {
        detailHTML = `
            <div class="decoration-detail-content">
                <h4>${data.title}</h4>
                <div class="detail-meta">
                    <span><strong>Artist:</strong> ${data.artist}</span> | 
                    <span><strong>Date:</strong> ${data.date}</span> | 
                    <span><strong>Height:</strong> ${data.height}</span>
                </div>
                <p><strong>Materials:</strong> ${data.materials}</p>
                <p>${data.description}</p>
                
                <div class="detail-grid">
                    <div class="detail-section">
                        <h5>Appearance</h5>
                        <ul>
                            ${Object.entries(data.appearance).map(([key, value]) => 
                                `<li><strong>${key.replace(/([A-Z])/g, ' $1').trim()}:</strong> ${value}</li>`
                            ).join('')}
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h5>Significance</h5>
                        <ul>
                            ${data.significance.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="detail-highlight">
                    <h5>Impact on Ancient Religion</h5>
                    <p>${data.impact}</p>
                </div>
                
                <div class="construction-note">
                    <p><strong>Construction Method:</strong> ${data.construction}</p>
                    <p><strong>Historical Fate:</strong> ${data.fate}</p>
                </div>
            </div>
        `;
    }
    
    detailDiv.innerHTML = detailHTML;
    detailDiv.classList.add('active');
    detailDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
