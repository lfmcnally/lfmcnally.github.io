// Hercules and Achelous Data File

const achelousData = {
    // Visual story timeline - what actually happens
    storyTimeline: [
        {
            number: '1',
            title: 'Two Suitors Compete',
            text: 'Both Hercules and Achelous seek to marry Deianira, the beautiful daughter of King Oeneus. They present their cases to her father. Hercules boasts of his divine parentage (Jupiter is his father), his famous twelve labours, and how he survived Juno\'s hatred. Achelous argues that he is an immortal god whilst Hercules is still mortal, and that he is native to the region whilst Hercules is a foreigner.'
        },
        {
            number: '2',
            title: 'Achelous Insults Hercules',
            text: 'Achelous makes a terrible mistake - he insults Hercules by questioning Jupiter\'s paternity and suggesting Hercules\' mother Alcmena committed adultery. He claims Hercules was either born from shame or is lying about his divine father. This enrages Hercules, who decides to let his fists do the talking rather than argue with words.'
        },
        {
            number: '3',
            title: 'Wrestling Match Begins',
            text: 'The two begin wrestling. They throw dust over each other, grab at necks, legs and bodies, attacking from every angle. Achelous\' greater weight initially protects him - Hercules\' attacks are useless against the massive river god, who stands firm like a pile resisting a flood. They lock together: foot against foot, fingers gripping fingers, head pressed to head - like two bulls fighting over a heifer.'
        },
        {
            number: '4',
            title: 'Hercules Gains the Upper Hand',
            text: 'Three times Hercules tries unsuccessfully to push Achelous back. On the fourth attempt, he breaks the god\'s grip, strikes him with his hand, and manages to get on Achelous\' back with his full weight. The river god feels like he has a mountain pressing on top of him. Gasping for breath, with difficulty Achelous thrusts Hercules off, but the hero immediately grips his neck. Finally, Achelous\' knee touches the ground and his mouth tastes sand - he is losing.'
        },
        {
            number: '5',
            title: 'Shapeshifting: Snake Form',
            text: 'Inferior in strength, Achelous turns to magic. He transforms into a long snake, winding his body in coils and darting his forked tongue. But Hercules simply laughs and mocks him. He reminds Achelous that he defeated snakes in his cradle as a baby, and asks what one serpent is compared to the Lernaean Hydra with its hundred regenerating heads. Hercules grips the snake around the throat and chokes it, forcing Achelous to change form again.'
        },
        {
            number: '6',
            title: 'Final Form: Bull',
            text: 'Overpowered as a snake, Achelous has one transformation left - his fierce bull shape. He fights on with a bull\'s strength, charging and attacking. Hercules throws his arms around the god\'s bulging neck from the left, follows him as he charges, drags at him, and pulls him down to the ground, driving Achelous\' horns into the sand. But Hercules doesn\'t stop there - he breaks off one of the god\'s horns and tears it from his head.'
        },
        {
            number: '7',
            title: 'The Horn of Plenty',
            text: 'The Naiads (water nymphs) take the broken horn and fill it with fruit and scented flowers, making it sacred. This becomes the cornucopia - the Horn of Plenty - a symbol of abundance. The Goddess of Abundance (Copia) is now rich because of Achelous\' lost horn. Achelous is permanently scarred, explaining to Theseus why his forehead is damaged and one horn is missing.'
        }
    ],

    // Full text with minimal highlighting on difficult terms only
    fullText: `<p><span class="highlight" data-tip="Theseus: famous Greek hero, son of Poseidon (Neptune), known for killing the Minotaur">Theseus</span>, the hero, reputed son of <span class="highlight" data-tip="Neptune: Roman name for Poseidon, god of the sea">Neptune</span>, asked <span class="highlight" data-tip="Achelous: a river god in ancient Greece, one of the sons of Oceanus and Tethys">Acheloüs</span> why he had sighed, and the reason for his damaged forehead: to which the <span class="highlight" data-tip="Calydonian: from Calydon, a city in ancient Greece">Calydonian</span> river-god, his uncut hair wreathed with reeds, replied: 'You ask something painful of me. Who wants to recall the battles he has lost? But, I will tell it as it happened: since the shame of being beaten is no less than the honour of having fought. It is a great consolation to me that the victor was so famous.</p>

<p>If her name has ever come to your notice, <span class="highlight" data-tip="Deianira: daughter of King Oeneus of Calydon, sought as wife by both Hercules and Achelous">Deianira</span> was once the most beautiful girl, and the jealous hope of many suitors. When, with them, I entered <span class="highlight" data-tip="Oeneus: King of Calydon, father of Deianira">Oeneus's</span> house, her father, and the man I sought as my father-in-law, I said: "Accept me as your son-in-law, son of <span class="highlight" data-tip="Parthaon: father of Oeneus">Parthaon</span>." Hercules, scion of <span class="highlight" data-tip="Alceus: another name for Amphitryon, Hercules' mortal stepfather">Alceus</span>, said the same. The others gave way before the two of us. <span class="highlight" data-tip="Shows Hercules using his divine connections and heroic reputation to argue for marriage">Hercules declared that he could offer Jove as his bride's father-in-law, spoke of his famous labours, and of how he had survived what his stepmother, Juno, had prescribed for him.</span> On my side I said: <span class="highlight" data-tip="Achelous argues his immortality makes him superior to the still-mortal Hercules">"It would be shameful for a god to concede to a mortal" – He was not yet a god – "In me you see the lord of the waters, that flow in winding rivers, through your kingdom. As your son-in-law I would not be a stranger sent from a foreign shore, but a native, and wedded to your own interests. Only don't let it harm my case that Queen Juno does not hate me, and all the punishment of the labours, she demanded, passed me by!"</span></p>

<p>"Now, listen, Hercules, you, son of <span class="highlight" data-tip="Alcmena: Hercules' human mother">Alcmena</span>: <span class="highlight" data-tip="Fatal insult: Achelous questions Jupiter's paternity and accuses Alcmena of adultery">Jupiter, whose child you boast of being, is either wrongly called your father, or is truly a wrongdoer. You seek your father in a mother's adultery. Choose whether you prefer this fiction of Jove as a father, or to be born the son of shame.</span>" <span class="highlight" data-tip="Hercules' response shows his character: actions over words, physical strength over verbal arguments">As I spoke, he gazed at me fiercely, all the while, and unable to act like a man and control his blazing anger, he merely replied in these words: "My right hand is more powerful than my tongue. As long as I beat you at wrestling, you can win the talking", and he came at me ferociously.</span> I was ashamed to retreat, after my words: I took off my green robes; put up my arms; held my hands, fingers curved, in front of my chest in fighting stance; and readied my limbs for the match. He caught up dust in the hollow of his hands and threw it over me, and, in turn, was, himself, gilded by the yellow sand. Now he caught at my neck, or you might think he caught me, now at my legs, now at my loins: and attacked me from every side. My weight protected me, and his attempts were useless. I was like a massive pile that the roaring flood assaults with all its might: it remains, secure in its own bulk.</p>

<p>We pulled away for a moment, returned to the conflict, and stood firm, determined not to concede. Foot was set against foot, and I pushed at him, with my chest full forward, fingers locked with fingers, and head to head. <span class="highlight" data-tip="Epic simile comparing the wrestling to bulls fighting over a female - emphasises the primal, animalistic nature of the contest">I have seen two strong bulls come together like that, when they try for the sleekest heifer in the pasture as their prize in the contest. The herd watches in fear, not sure to which one victory will grant overriding supremacy.</span> <span class="highlight" data-tip="Shows Hercules' persistence and growing dominance">Three times without success Hercules tried to push my gleaming chest away from him. At the fourth attempt, he broke my grip, loosed himself from my constricting arms, and with a blow of his hand – certainly, I myself confess it is the truth – he turned me about, and clung, with all his weight, to my back.</span></p>

<p>If you can believe it – I am not seeking to gain false credit by saying it – I seemed to have a mountain pressing on top of me. With difficulty I thrust my arms, pouring with sweat from the great effort it took, under him, and, with difficulty, freed his firm hold on my body. He pressed me hard, as I gasped for breath, prevented me from gathering my strength, and gripped my neck. Then, at last, my knee touched the ground, and my mouth tasted sand. <span class="highlight" data-tip="Key moment: Achelous admits defeat in physical strength and turns to magic - showing the limits of divine power against heroic determination">Inferior to him in strength, I turned to my magic arts, and slipped from his grasp in the shape of a long snake.</span> But when I had wound my body in sinuous coils, and, hissing fiercely, darted my forked tongue at him, <span class="highlight" data-tip="Shows Hercules' confidence and experience - he's fought worse monsters than this">Tiryns's hero laughed, and mocking my magic arts, said: "My task in the cradle was to defeat snakes, and, though you are greater than other reptiles, Acheloüs, how big a slice of the Lernean Hydra would your one serpent be? It was made fecund by its wounds, and not one of its hundred heads was safely cut off without its neck generating two more. I overcame it, and having overcome it, disembowelled that monster, with branching snakeheads, that grew from their own destruction, thriving on evil. What do you think will happen to you, who are only a false snake, using unfamiliar weapons, whom a shifting form hides?"</span></p>

<p>He spoke and knotted his fingers round my throat. I was suffocating, as if my throat was gripped by a vice, and struggled to tear his thumbs away from my windpipe. Overpowered in this form, only my third, fierce, bull-shape remained. So I fought on, my limbs those of a bull. <span class="highlight" data-tip="Final stage of combat: Hercules uses wrestling technique and brute strength to defeat the bull form">From the left he threw his arms round my bulging neck; and followed me as I charged off; dragging at me, my horns piercing the hard ground as he pulled me down; and toppling me into the deep sand. As if that was not enough, holding the tough horn in his cruel hand, he broke it and tore it away from my mutilated brow.</span> <span class="highlight" data-tip="The aetiology (origin story): explains how the cornucopia (Horn of Plenty) was created">The Naiades took it, filling it with fruit and scented flowers, and made it sacred: the Goddess of Abundance is rich now because of my horn of plenty.</span></p>`,

    // Character analysis points
    characterAnalysis: [
        {
            title: '💪 Physical Superiority',
            icon: '💪',
            content: 'Hercules proves that mortal strength can surpass divine power. Despite Achelous being an immortal god with greater initial weight, Hercules\'s persistence and technique gradually wear him down. The fourth attempt succeeds where three failed, showing determination. When Achelous finally admits "Inferior to him in strength", it\'s a humiliating acknowledgement that a mortal has defeated a god in pure combat.'
        },
        {
            title: '🗣️ Actions Over Words',
            icon: '🗣️',
            content: '"My right hand is more powerful than my tongue" - this line defines Hercules\' character. He doesn\'t waste time in verbal sparring or clever arguments. When insulted, rather than matching Achelous\' rhetoric, he simply attacks. This directness contrasts with Achelous\' wordiness and establishes Hercules as a man of action, not speech. It also shows his anger management: he can\'t "control his blazing anger" through words, so he channels it into physical violence.'
        },
        {
            title: '🏆 Experience and Confidence',
            icon: '🏆',
            content: 'Hercules laughs at Achelous\' snake transformation, mocking it by referencing his past victories. His casual dismissal - comparing one serpent to the hundred-headed Hydra - shows supreme confidence born from experience. The detail that he defeated snakes "in the cradle" (referring to when Hera sent serpents to kill baby Hercules) demonstrates his entire life has been preparation for such contests. No trick can surprise him.'
        },
        {
            title: '🎯 Strategic Fighter',
            icon: '🎯',
            content: 'Hercules doesn\'t just rely on brute force. He attacks "from every side", uses leverage (getting on Achelous\' back), applies specific holds (gripping the neck to prevent recovery), and adapts his technique to each transformation. Against the snake, he uses a strangling grip on the throat. Against the bull, he throws his arms around the neck from the left, follows the charge, and uses the momentum to pull Achelous down. This is intelligent, technical combat.'
        },
        {
            title: '😤 Controlled Rage',
            icon: '😤',
            content: 'Hercules\' anger is described as "blazing" and he cannot control it verbally, but he channels it effectively into combat. His fury after the insult about his mother drives him to fight "ferociously", yet he maintains technique throughout. This controlled rage makes him more dangerous than if he were calm or completely out of control - it\'s focused, purposeful violence aimed at complete victory.'
        },
        {
            title: '🏅 Brutal Victor',
            icon: '🏅',
            content: 'Hercules doesn\'t just win - he humiliates and permanently scars his opponent. "As if that was not enough" - after defeating Achelous, he tears off a horn, mutilating the god. This shows Hercules doesn\'t fight for survival or self-defence; he fights for total, overwhelming victory that leaves no doubt about his superiority. The permanent scar serves as an eternal reminder of the god\'s defeat.'
        }
    ],

    // Exit questions
    exitQuestions: [
        {
            question: 'What arguments does each competitor make for why they should marry Deianira?',
            answer: 'Hercules argues that he can offer Jupiter as father-in-law, cites his famous twelve labours, and claims he survived Juno\'s persecution. Achelous argues that he is an immortal god whilst Hercules is still mortal, that he is native to the region (not a foreign stranger), and that Juno doesn\'t hate him so he hasn\'t had to complete punishing labours.'
        },
        {
            question: 'What insult does Achelous make that causes Hercules to attack him?',
            answer: 'Achelous questions whether Jupiter is really Hercules\' father, suggesting either it\'s a lie ("fiction") or that Jupiter committed wrongdoing. He accuses Alcmena (Hercules\' mother) of adultery, saying Hercules "seeks his father in a mother\'s adultery" and must choose between being "born the son of shame" or being a liar about his divine parentage.'
        },
        {
            question: 'Describe the three forms Achelous takes during the contest. Why does he shapeshift?',
            answer: 'First, Achelous fights in his normal form during wrestling. When he admits being "inferior in strength", he transforms into a long snake with sinuous coils and a darting forked tongue. When Hercules chokes the snake, Achelous takes his final form as a fierce bull. He shapeshifts because he is losing in physical strength and turns to "magic arts" to try to gain an advantage through supernatural abilities.'
        },
        {
            question: 'How does Hercules respond to each of Achelous\' transformations?',
            answer: 'When Achelous becomes a snake, Hercules laughs and mocks him, comparing one serpent to the hundred-headed Hydra he defeated. He then grips the snake\'s throat and chokes it. When Achelous becomes a bull, Hercules throws his arms around the neck from the left, follows the charge, drags him down by the horns into the sand, then breaks off one horn entirely.'
        },
        {
            question: 'What does this story reveal about Hercules\' character? Give three specific traits with evidence.',
            answer: 'Three key traits: (1) Actions over words - "My right hand is more powerful than my tongue" shows he prefers fighting to arguing; (2) Experience and confidence - he laughs at the snake form, comparing it dismissively to monsters he\'s already defeated; (3) Brutal determination - he doesn\'t just win but tears off Achelous\' horn "as if that was not enough", permanently scarring the defeated god.'
        },
        {
            question: 'What is the significance of a mortal defeating an immortal god in this story?',
            answer: 'It demonstrates that even divine immortality cannot overcome superior strength, skill, and determination. Achelous argues that "it would be shameful for a god to concede to a mortal", yet he is forced to do exactly that. The story shows that heroic excellence can surpass divine power, elevating mortal achievement above divine status. Hercules proves worthy of future godhood by defeating a god whilst still mortal.'
        }
    ]
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeStoryTimeline();
    initializeFullText();
    initializeCharacterAnalysis();
    initializeExitQuestions();
    initializeTooltips();
});

// Navigation
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            showSection(this.getAttribute('data-section'));
        });
    });

    const navButtons = document.querySelectorAll('.nav-btn[data-goto]');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            showSection(this.getAttribute('data-goto'));
        });
    });
}

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
}

// Story Timeline
function initializeStoryTimeline() {
    const container = document.getElementById('storyTimeline');
    if (!container) return;
    
    container.innerHTML = achelousData.storyTimeline.map(item => `
        <div class="timeline-item">
            <div class="timeline-number">${item.number}</div>
            <div class="timeline-content">
                <div class="timeline-title">${item.title}</div>
                <div class="timeline-text">${item.text}</div>
            </div>
        </div>
    `).join('');
}

// Full Text
function initializeFullText() {
    const container = document.getElementById('fullText');
    if (!container) return;
    
    container.innerHTML = achelousData.fullText;
}

// Tooltips for highlights
function initializeTooltips() {
    const tooltip = document.getElementById('tooltip');
    const highlights = document.querySelectorAll('.highlight');
    
    highlights.forEach(highlight => {
        highlight.addEventListener('mouseenter', function(e) {
            const tip = this.getAttribute('data-tip');
            tooltip.textContent = tip;
            tooltip.classList.add('active');
            positionTooltip(e, tooltip);
        });
        
        highlight.addEventListener('mousemove', function(e) {
            positionTooltip(e, tooltip);
        });
        
        highlight.addEventListener('mouseleave', function() {
            tooltip.classList.remove('active');
        });
    });
}

function positionTooltip(e, tooltip) {
    const x = e.clientX;
    const y = e.clientY;
    
    tooltip.style.left = (x + 15) + 'px';
    tooltip.style.top = (y + 15) + 'px';
}

// Character Analysis
function initializeCharacterAnalysis() {
    const container = document.getElementById('characterAnalysis');
    if (!container) return;
    
    container.innerHTML = `
        <div class="character-grid">
            ${achelousData.characterAnalysis.map(item => `
                <div class="character-card">
                    <div class="character-card-title">
                        <span style="font-size: 1.5rem;">${item.icon}</span>
                        ${item.title.replace(item.icon + ' ', '')}
                    </div>
                    <div class="character-card-content">
                        ${item.content}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Exit Questions
let currentQuestion = 0;

function initializeExitQuestions() {
    loadExitQuestion();
    
    const prevBtn = document.getElementById('prevQuestion');
    const nextBtn = document.getElementById('nextQuestion');
    const revealBtn = document.getElementById('revealAnswer');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentQuestion > 0) {
                currentQuestion--;
                loadExitQuestion();
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (currentQuestion < achelousData.exitQuestions.length - 1) {
                currentQuestion++;
                loadExitQuestion();
            }
        });
    }
    
    if (revealBtn) {
        revealBtn.addEventListener('click', function() {
            const answerEl = document.getElementById('questionAnswer');
            if (answerEl && !answerEl.classList.contains('visible')) {
                answerEl.classList.add('visible');
                this.textContent = '✓ Answer Revealed';
                this.classList.add('revealed');
            }
        });
    }
}

function loadExitQuestion() {
    const question = achelousData.exitQuestions[currentQuestion];
    const questionNumberEl = document.getElementById('questionNumber');
    const questionTextEl = document.getElementById('questionText');
    const questionAnswerEl = document.getElementById('questionAnswer');
    const prevBtn = document.getElementById('prevQuestion');
    const nextBtn = document.getElementById('nextQuestion');
    const revealBtn = document.getElementById('revealAnswer');
    
    if (questionNumberEl) questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${achelousData.exitQuestions.length}`;
    if (questionTextEl) questionTextEl.textContent = question.question;
    if (questionAnswerEl) {
        questionAnswerEl.textContent = question.answer;
        questionAnswerEl.classList.remove('visible');
    }
    
    if (prevBtn) prevBtn.disabled = currentQuestion === 0;
    if (nextBtn) nextBtn.disabled = currentQuestion === achelousData.exitQuestions.length - 1;
    
    if (revealBtn) {
        revealBtn.textContent = 'Reveal Answer';
        revealBtn.classList.remove('revealed');
    }
}
