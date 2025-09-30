// Lesson 2.2: Birth and Early Life - Data File

const lessonData = {
    // Learning Objectives
    learningObjectives: {
        intro: "By the end of this section, you will be able to:",
        objectives: [
            "Explain Heracles' divine origins and the deceptive conception by Zeus",
            "Understand Hera's jealousy and her persecution of Heracles from birth",
            "Analyse the significance of the infant serpents episode in establishing Heracles' heroic nature",
            "Describe Heracles' comprehensive education and early signs of his violent temper",
            "Explain the tragic madness that led to the murder of his family",
            "Understand how the Oracle at Delphi set him on the path to redemption through the Twelve Labours"
        ]
    },

    // Family Tree Data - Showing dual parentage
    familyTree: {
        parents: [
            {
                id: 'zeus',
                name: 'Zeus',
                title: 'King of Gods',
                icon: '⚡',
                type: 'divine'
            },
            {
                id: 'alcmene',
                name: 'Alcmene',
                title: 'Mortal Woman',
                icon: '👸',
                type: 'mortal'
            },
            {
                id: 'amphitryon',
                name: 'Amphitryon',
                title: 'Mortal Husband',
                icon: '⚔️',
                type: 'mortal'
            }
        ],
        children: [
            {
                id: 'heracles',
                name: 'HERACLES',
                title: 'Son of Zeus & Alcmene',
                icon: '🦁',
                type: 'hero',
                parents: ['zeus', 'alcmene']
            },
            {
                id: 'iphicles',
                name: 'Iphicles',
                title: 'Son of Amphitryon & Alcmene',
                icon: '🛡️',
                type: 'mortal',
                parents: ['amphitryon', 'alcmene']
            }
        ]
    },

    // Family Member Details
    familyMembers: {
        'zeus': {
            name: 'Zeus - The Divine Father',
            description: 'King of the gods and father of many heroes through affairs with mortal women.',
            context: 'Zeus\'s union with Alcmene produced his greatest son, Heracles. His divine seed ensured Heracles would possess godlike strength. Zeus manipulated time itself to conceive this exceptional hero.'
        },
        'alcmene': {
            name: 'Alcmene - The Virtuous Mother',
            description: 'Descendant of Perseus, renowned for beauty and virtue.',
            context: 'She unknowingly lay with Zeus, thinking him her husband. Her purity and noble lineage (great-granddaughter of Perseus) made her worthy to bear the greatest hero. An innocent victim of divine deception.'
        },
        'amphitryon': {
            name: 'Amphitryon - The Mortal Father',
            description: 'A Theban general who raised Heracles as his own son.',
            context: 'Rather than rage at Zeus\'s deception, he accepted the honour and ensured Heracles received the finest education. He showed that true fatherhood is about nurture, not just nature.'
        },
        'heracles': {
            name: 'Heracles - The Divine Hero',
            description: 'Son of Zeus and Alcmene, born to be the greatest hero.',
            context: 'Inherited divine strength and mortal vulnerability. His birth was delayed by Hera\'s jealousy, and his life would be defined by suffering and redemption. The serpent incident proved his divine nature from infancy.'
        },
        'iphicles': {
            name: 'Iphicles - The Mortal Twin',
            description: 'Son of Amphitryon and Alcmene, fully mortal.',
            context: 'His terror at the serpents contrasted with baby Heracles\' strength, highlighting his brother\'s divine nature. He later became a capable warrior but always lived in Heracles\' shadow.'
        }
    },

    // Birth Timeline Events
    birthTimeline: [
        {
            id: 'night1',
            icon: '🌙',
            title: 'First Night - Zeus Arrives',
            description: 'Zeus takes the form of Amphitryon and arrives at Alcmene\'s house, claiming victory in battle. She welcomes her "husband" home with joy, unaware of the deception.',
            primarySource: {
                text: 'Zeus made the night threefold for the begetting of Heracles, commanding Helios not to rise... for he could not in one night accomplish the conception of so great a hero.',
                citation: 'Pseudo-Apollodorus, Library 2.4.8'
            }
        },
        {
            id: 'extended',
            icon: '⏰',
            title: 'The Extended Night',
            description: 'Zeus commands Helios to halt his chariot, making one night last as long as three. This divine manipulation of time ensures the conception of a mighty hero.',
            details: 'The length of the night reflected the greatness of the hero to be born. Zeus\'s power over natural order showed the importance of Heracles to divine plans.'
        },
        {
            id: 'conception',
            icon: '⚡',
            title: 'Heracles Conceived',
            description: 'During this extended night, Zeus and Alcmene conceive Heracles. The triple-length night symbolises the extraordinary nature of the child.',
            details: 'This deceptive conception would have profound consequences, earning Hera\'s eternal hatred and setting Heracles on his heroic path.'
        },
        {
            id: 'dawn',
            icon: '☀️',
            title: 'Dawn Finally Comes',
            description: 'Zeus departs as dawn finally breaks. Alcmene remains unaware that she has been visited by a god rather than her husband.',
            details: 'The deception was complete. Only later would the truth be revealed by the prophet Tiresias.'
        },
        {
            id: 'return',
            icon: '⚔️',
            title: 'Amphitryon Returns',
            description: 'The real Amphitryon arrives home, confused by his wife\'s lack of enthusiasm. Tiresias reveals Zeus\'s deception.',
            details: 'Rather than being angry, Amphitryon was relieved and even honoured that Zeus had chosen his wife. This acceptance was crucial for Heracles\' upbringing.'
        },
        {
            id: 'twins',
            icon: '👶',
            title: 'Twin Conception',
            description: 'That same night, Amphitryon sleeps with Alcmene. She now carries twins: Heracles (son of Zeus) and Iphicles (son of Amphitryon).',
            details: 'The twin pregnancy would later prove Heracles\' divine nature when the serpents attacked.'
        }
    ],

    // Serpent Battle
    serpentBattle: {
        title: 'The First Heroic Deed: Strangling the Serpents',
        setup: 'When Heracles was eight months old, Hera sent two enormous serpents to kill him in his cradle.',
        outcome: 'The eight-month-old Heracles grabbed a serpent in each tiny hand and strangled them both, laughing with delight. When Amphitryon rushed in with his sword drawn, he found the baby playing with the dead snakes like toys. This was the first sign of his divine strength and heroic destiny.',
        significance: 'This incident proved beyond doubt that Heracles was no ordinary child. The prophet Tiresias prophesied he would become the greatest of heroes, performing mighty labours and achieving immortality.',
        primarySource: {
            text: 'The child seized the serpents by their throats with both hands and strangled them, though they were of enormous size.',
            citation: 'Pindar, Nemean 1.39-43'
        }
    },

    // Education Data
    education: [
        {
            id: 'warfare',
            icon: '⚔️',
            title: 'Warfare & Weapons',
            teacher: 'Amphitryon & Eurytus',
            shortDesc: 'Sword fighting, archery, and military tactics',
            details: 'Amphitryon himself taught Heracles swordsmanship and tactics, whilst Eurytus of Oechalia, the finest archer in Greece, taught him to use the bow. Heracles would later surpass his teacher and win Eurytus\' daughter in an archery contest.'
        },
        {
            id: 'wrestling',
            icon: '🤼',
            title: 'Wrestling',
            teacher: 'Autolycus',
            shortDesc: 'Combat techniques and physical training',
            details: 'Autolycus, son of Hermes and a master thief, taught Heracles wrestling techniques. These skills would prove essential in his labours, especially when facing the Nemean Lion and Antaeus.'
        },
        {
            id: 'chariot',
            icon: '🐎',
            title: 'Chariot Driving',
            teacher: 'Amphitryon',
            shortDesc: 'Horsemanship and chariot warfare',
            details: 'Amphitryon ensured Heracles mastered chariot warfare, essential for any noble warrior. This training would help him in his travels across Greece and beyond during his labours.'
        },
        {
            id: 'music',
            icon: '🎵',
            title: 'Music & Poetry',
            teacher: 'Linus',
            shortDesc: 'Lyre playing and cultural refinement',
            details: 'Linus, brother of Orpheus, attempted to teach Heracles the lyre. When Linus struck Heracles for poor playing, the young hero killed him with the instrument in his first fit of rage. This incident revealed his dangerous temper.',
            tragic: true
        },
        {
            id: 'wisdom',
            icon: '📚',
            title: 'Wisdom & Letters',
            teacher: 'Chiron',
            shortDesc: 'Philosophy, medicine, and prophecy',
            details: 'Some sources say Heracles studied with Chiron, the wisest of centaurs, who taught him medicine, prophecy, and ethics. Chiron taught many heroes including Achilles and Jason.'
        },
        {
            id: 'hunting',
            icon: '🏹',
            title: 'Hunting',
            teacher: 'Rhadamanthus',
            shortDesc: 'Tracking, survival, and archery',
            details: 'Rhadamanthus taught Heracles hunting and survival skills. These would prove invaluable during his labours, especially when tracking the Ceryneian Hind and Erymanthian Boar.'
        }
    ],

    // Madness Stages
    madnessStages: [
        {
            stage: 1,
            title: 'Normal State',
            description: 'Heracles returns home from a journey, greeted joyfully by his wife Megara and their children. He embraces them lovingly, a proud father and husband at the height of his happiness.'
        },
        {
            stage: 2,
            title: 'Confusion',
            description: 'Suddenly, Heracles\' vision blurs. Hera has sent Lyssa, the goddess of madness. His eyes glaze over, and he no longer recognises his surroundings. His family notices something is wrong as he stares through them.'
        },
        {
            stage: 3,
            title: 'Hallucination',
            description: 'In his madness, Heracles sees enemies everywhere. His own children appear to him as the sons of his hated cousin Eurystheus. Megara seems to transform into an enemy warrior. His home becomes a battlefield.'
        },
        {
            stage: 4,
            title: 'Violence',
            description: 'Believing he is defending himself against enemies, Heracles attacks. Using his incredible strength and his bow - the gift from Apollo - he strikes down his own children. In some versions, Megara dies too; in others, she escapes but is forever traumatised.'
        },
        {
            stage: 5,
            title: 'Awakening',
            description: 'The madness lifts as suddenly as it came. Heracles sees the blood, the small bodies, the destruction he has wrought. The realisation breaks him. His anguished cries echo through Thebes. He contemplates suicide but is convinced that he must live and atone.'
        }
    ],

    // Key Figures
    figures: {
        'hera': {
            name: 'Hera/Juno',
            description: 'Queen of the gods, Zeus\'s wife, persecutor of Heracles.',
            context: 'Her jealousy drove the entire narrative of Heracles\' life. From sending serpents to causing his madness, her persecution paradoxically led to his greatness through the labours. Her hatred was so intense that even the name "Heracles" (Glory of Hera) couldn\'t appease her.'
        },
        'eileithyia': {
            name: 'Eileithyia',
            description: 'Goddess of childbirth.',
            context: 'Sent by Hera to prevent Heracles\' birth by sitting with crossed legs and clasped hands - a magical gesture that halted labour for seven days. Her deception by Galanthis shows Hera\'s determination to stop Heracles at any cost.'
        },
        'linus': {
            name: 'Linus',
            description: 'Music teacher, son of Apollo, brother of Orpheus.',
            context: 'Killed by young Heracles in a rage during music lessons. This first murder revealed Heracles\' dangerous temper that would later lead to greater tragedy. Though acquitted, the incident worried Amphitryon enough to send Heracles away.'
        },
        'megara': {
            name: 'Megara',
            description: 'First wife of Heracles, princess of Thebes.',
            context: 'Given to Heracles by her father King Creon as reward for freeing Thebes. Mother of his children, she was the innocent victim of Heracles\' madness. Her death (or survival but inability to forgive) represents the tragic cost of divine cruelty.'
        },
        'tiresias': {
            name: 'Tiresias',
            description: 'Blind prophet of Thebes.',
            context: 'The greatest seer in Greek mythology. He revealed Zeus\'s deception to Amphitryon and prophesied Heracles\' future greatness after the serpent incident. His prophecies shaped understanding of Heracles\' destiny.'
        }
    },

    // Definitions
    definitions: {
        'lyssa': {
            term: 'Lyssa (Λύσσα)',
            definition: 'The goddess of mad rage and frenzy, particularly rabid madness.',
            context: 'Lyssa was used by the gods as a weapon against mortals. Her possession caused uncontrollable violence. In Euripides\' play, Lyssa herself is reluctant to attack Heracles, showing even divine forces recognised the injustice of Hera\'s persecution.'
        },
        'kleos': {
            term: 'Kleos (κλέος)',
            definition: 'Eternal glory or fame achieved through great deeds.',
            context: 'Kleos was the driving motivation for all Greek heroes. Unlike Christian salvation, ancient heroes sought immortality through reputation. Heracles would achieve the greatest kleos through his labours.'
        }
    },

    // Places
    places: {
        'thebes': {
            name: 'Thebes',
            description: 'Major city in Boeotia, central Greece.',
            context: 'Where Heracles grew up and lived with Megara. He freed the city from tribute to Orchomenus, earning the king\'s gratitude. The site of his greatest tragedy when he killed his family in the madness sent by Hera.'
        },
        'delphi': {
            name: 'Oracle at Delphi',
            description: 'The most important oracle in ancient Greece, sacred to Apollo.',
            context: 'Where Heracles sought purification after killing his family. The Pythia commanded him to serve Eurystheus for twelve years, setting the twelve labours in motion. Delphi was considered the omphalos (navel) of the world.'
        },
        'cithaeron': {
            name: 'Mount Cithaeron',
            description: 'Mountain range between Boeotia and Attica.',
            context: 'Where young Heracles was sent to tend cattle after killing Linus. Here he killed his first lion, wearing its skin as a cloak and foreshadowing his first labour with the Nemean Lion.'
        }
    },

    // Primary Sources
    primarySources: [
        {
            text: 'Zeus made the night threefold for the begetting of Heracles, commanding Helios not to rise... for he could not in one night accomplish the conception of so great a hero.',
            citation: 'Pseudo-Apollodorus, Library 2.4.8'
        },
        {
            text: 'The child seized the serpents by their throats with both hands and strangled them, though they were of enormous size.',
            citation: 'Pindar, Nemean 1.39-43'
        },
        {
            text: 'The Pythia told him to dwell in Tiryns, serving Eurystheus for twelve years and to perform the ten labours imposed upon him, and in this way, she said, after the labours were accomplished, he would be immortal.',
            citation: 'Pseudo-Apollodorus, Library 2.4.12'
        }
    ]
};

// Load functions
function loadLessonData() {
    loadLearningObjectives();
    loadFamilyTree();
    loadBirthTimeline();
    loadEducationCards();
    loadMadnessStages();
}

function loadLearningObjectives() {
    const container = document.getElementById('learning-objectives');
    if (container) {
        let html = `<p>${lessonData.learningObjectives.intro}</p><ul>`;
        lessonData.learningObjectives.objectives.forEach(obj => {
            html += `<li>${obj}</li>`;
        });
        html += '</ul>';
        container.innerHTML = html;
    }
}

function loadFamilyTree() {
    const container = document.getElementById('family-tree-diagram');
    if (container) {
        // Create parent row
        let html = '<div class="tree-parent-row">';
        lessonData.familyTree.parents.forEach(parent => {
            const typeClass = parent.type === 'divine' ? ' divine' : ' mortal';
            html += `
                <div class="tree-node${typeClass}" onclick="showFamilyDetails('${parent.id}')">
                    <span class="node-icon">${parent.icon}</span>
                    <div class="node-name">${parent.name}</div>
                    <div class="node-title">${parent.title}</div>
                </div>
            `;
        });
        html += '</div>';
        
        // Add connector lines
        html += '<div class="tree-connectors">';
        html += '<svg class="connector-svg" viewBox="0 0 600 100" xmlns="http://www.w3.org/2000/svg">';
        // Line from Zeus down
        html += '<line x1="100" y1="0" x2="100" y2="40" stroke="#dc3545" stroke-width="3"/>';
        // Line from Zeus to Alcmene
        html += '<line x1="100" y1="40" x2="300" y2="40" stroke="#dc3545" stroke-width="3"/>';
        // Line from Alcmene down
        html += '<line x1="300" y1="40" x2="300" y2="80" stroke="#dc3545" stroke-width="3"/>';
        // Line from Alcmene to Amphitryon
        html += '<line x1="300" y1="40" x2="500" y2="40" stroke="#dc3545" stroke-width="3"/>';
        // Line from Amphitryon down
        html += '<line x1="500" y1="40" x2="500" y2="80" stroke="#dc3545" stroke-width="3"/>';
        // Line from left child position to right child position
        html += '<line x1="200" y1="80" x2="400" y2="80" stroke="#dc3545" stroke-width="3"/>';
        html += '</svg>';
        html += '</div>';
        
        // Create children row
        html += '<div class="tree-children-row">';
        lessonData.familyTree.children.forEach(child => {
            const typeClass = child.type === 'hero' ? ' hero' : ' mortal';
            html += `
                <div class="tree-node${typeClass}" onclick="showFamilyDetails('${child.id}')">
                    <span class="node-icon">${child.icon}</span>
                    <div class="node-name">${child.name}</div>
                    <div class="node-title">${child.title}</div>
                </div>
            `;
        });
        html += '</div>';
        
        container.innerHTML = html;
    }
}

function loadBirthTimeline() {
    const container = document.getElementById('timeline-events');
    if (container) {
        container.innerHTML = lessonData.birthTimeline.map(event => `
            <div class="timeline-event" onclick="toggleTimelineEvent(this, '${event.id}')">
                <div class="event-marker">${event.icon}</div>
                <div class="event-content">
                    <div class="event-title">${event.title}</div>
                    <div class="event-description">
                        ${event.description}
                        ${event.details ? `<br><br><em>${event.details}</em>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function loadEducationCards() {
    const container = document.getElementById('education-grid');
    if (container) {
        container.innerHTML = lessonData.education.map(edu => `
            <div class="education-card${edu.tragic ? ' tragic' : ''}" onclick="showEducationDetails('${edu.id}')">
                <div class="education-icon">${edu.icon}</div>
                <div class="education-title">${edu.title}</div>
                <div class="education-teacher">${edu.teacher}</div>
                <div class="education-description">${edu.shortDesc}</div>
            </div>
        `).join('');
    }
}

function loadMadnessStages() {
    const container = document.getElementById('madness-stages');
    if (container) {
        container.innerHTML = lessonData.madnessStages.map(stage => `
            <div class="madness-stage" onclick="showMadnessStage(${stage.stage}, this)">
                <div>${stage.title}</div>
            </div>
        `).join('');
    }
}

// Interactive Functions
function showFamilyDetails(memberId) {
    const member = lessonData.familyMembers[memberId];
    const detailsDiv = document.getElementById('family-details');
    
    if (member && detailsDiv) {
        document.querySelectorAll('.tree-node').forEach(n => n.classList.remove('active'));
        event.currentTarget.classList.add('active');
        
        detailsDiv.innerHTML = `
            <h4>${member.name}</h4>
            <p><strong>Description:</strong> ${member.description}</p>
            <p><strong>Significance:</strong> ${member.context}</p>
        `;
        detailsDiv.style.display = 'block';
    }
}

function toggleTimelineEvent(element, eventId) {
    document.querySelectorAll('.timeline-event').forEach(e => {
        if (e !== element) e.classList.remove('active');
    });
    element.classList.toggle('active');
}

function showEducationDetails(eduId) {
    const edu = lessonData.education.find(e => e.id === eduId);
    const detailsDiv = document.getElementById('education-details');
    
    if (edu && detailsDiv) {
        document.querySelectorAll('.education-card').forEach(c => c.classList.remove('active'));
        event.currentTarget.classList.add('active');
        
        detailsDiv.innerHTML = `
            <h4>${edu.icon} ${edu.title}</h4>
            <p><strong>Teacher:</strong> ${edu.teacher}</p>
            <p>${edu.details}</p>
        `;
        detailsDiv.style.display = 'block';
    }
}

function showMadnessStage(stageNum, element) {
    document.querySelectorAll('.madness-stage').forEach(s => s.classList.remove('active'));
    element.classList.add('active');
    
    const stage = lessonData.madnessStages.find(s => s.stage === stageNum);
    if (stage) {
        document.getElementById('madness-description').innerHTML = `
            <strong>${stage.title}:</strong> ${stage.description}
        `;
    }
}

// Serpent Battle
let serpentsDefeated = false;

function strangleserpents() {
    const serpent1 = document.getElementById('serpent1');
    const serpent2 = document.getElementById('serpent2');
    const result = document.getElementById('battle-result');
    const button = event.currentTarget;
    
    if (!serpentsDefeated) {
        serpent1.classList.add('defeated');
        serpent2.classList.add('defeated');
        setTimeout(() => result.classList.add('show'), 500);
        button.textContent = 'Reset the Battle';
        serpentsDefeated = true;
    } else {
        serpent1.classList.remove('defeated');
        serpent2.classList.remove('defeated');
        result.classList.remove('show');
        button.textContent = 'Watch Baby Heracles in Action!';
        serpentsDefeated = false;
    }
}

// Definition/Figure/Place Functions
function showDefinition(termId) {
    const def = lessonData.definitions[termId];
    if (def) {
        showInfoPanel('Key Term', `
            <h4>${def.term}</h4>
            <p><strong>Definition:</strong> ${def.definition}</p>
            <p><strong>Context:</strong> ${def.context}</p>
        `);
    }
}

function showFigureInfo(figureId) {
    const figure = lessonData.figures[figureId];
    if (figure) {
        showInfoPanel('Key Figure', `
            <h4>${figure.name}</h4>
            <p><strong>Description:</strong> ${figure.description}</p>
            <p><strong>Significance:</strong> ${figure.context}</p>
        `);
    }
}

function showPlaceInfo(placeId) {
    const place = lessonData.places[placeId];
    if (place) {
        showInfoPanel('Key Place', `
            <h4>${place.name}</h4>
            <p><strong>Description:</strong> ${place.description}</p>
            <p><strong>Significance:</strong> ${place.context}</p>
        `);
    }
}

function showInfoPanel(title, content) {
    const infoContent = document.getElementById('info-content');
    if (infoContent) {
        infoContent.innerHTML = `
            <h4 style="color: #dc3545; margin-bottom: 0.5rem;">${title}</h4>
            ${content}
        `;
    }
}

// Navigation
function navigateToLesson(path) {
    window.location.href = path + '.html';
}
