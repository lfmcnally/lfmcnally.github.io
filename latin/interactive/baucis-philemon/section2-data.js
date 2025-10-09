// Baucis and Philemon Data File

const lessonData = {
    fullTranslation: "Therefore when the heaven-dwellers touched the humble dwelling and entered the low doorway with bowed heads, the old man ordered them to rest their limbs on a seat which had been placed there, over which busy Baucis threw a rough woven cloth. Then she moved aside the warm ash from the hearth and revived yesterday's fires and nourished them with leaves and dry bark, and brought them to flame with her elderly breath, and brought down from the roof split kindling and dry twigs and broke them up and pushed them under the small bronze pot, and she strips the leaves from the vegetables which her husband had gathered from the well-watered garden; he lifts with a two-pronged fork the dirty back of a pig hanging from the black beam and cuts off a small part from the long-saved back and softens the cut piece in boiling water.",

    fullText: [
        { number: 637, text: "ergo ubi caelicolae parvos tetigere penates" },
        { number: 638, text: "summissoque humiles intrarunt vertice postes," },
        { number: 639, text: "membra senex posito iussit relevare sedili," },
        { number: 640, text: "cui superiniecit textum rude sedula Baucis." },
        { number: 641, text: "inde foco tepidum cinerem dimovit et ignes" },
        { number: 642, text: "suscitat hesternos foliisque et cortice sicco" },
        { number: 643, text: "nutrit et ad flammas anima producit anili," },
        { number: 644, text: "multifidasque faces ramaliaque arida tecto" },
        { number: 645, text: "detulit et minuit parvoque admovit aeno," },
        { number: 646, text: "quodque suus coniunx riguo collegerat horto" },
        { number: 647, text: "truncat holus foliis; furca levat ille bicorni" },
        { number: 648, text: "sordida terga suis nigro pendentia tigno" },
        { number: 649, text: "servatoque diu resecat de tergore partem" },
        { number: 650, text: "exiguam sectamque domat ferventibus undis." }
    ],

    sections: {
        section1: {
            lines: [
                { number: 637, text: "ergo ubi caelicolae parvos tetigere penates" },
                { number: 638, text: "summissoque humiles intrarunt vertice postes," },
                { number: 639, text: "membra senex posito iussit relevare sedili," },
                { number: 640, text: "cui superiniecit textum rude sedula Baucis." },
                { number: 641, text: "inde foco tepidum cinerem dimovit et ignes" }
            ],
            examples: [
                {
                    title: "Elevated Vocabulary: 'caelicolae'",
                    latin: "<span class='highlight-word'>caelicolae</span> parvos tetigere penates",
                    explanation: "<strong>What is it?</strong> Instead of using the simple word 'dei' (gods), Ovid uses the compound word <strong>caelicolae</strong> - literally 'heaven-dwellers'.",
                    effect: "<strong>Why does it matter?</strong> This elevated, poetic vocabulary reminds us that these aren't ordinary guests - they're divine beings in disguise. The contrast between 'caelicolae' (heaven-dwellers) and 'parvos penates' (humble home) is striking - gods entering a tiny cottage."
                },
                {
                    title: "Word Order: Wrapping Around (Hyperbaton)",
                    latin: "<span class='highlight-a'>summisso</span>que humiles intrarunt <span class='highlight-a'>vertice</span> postes",
                    key: [
                        { color: "rgba(76, 175, 80, 0.35)", label: "summisso...vertice (with bowed...head)" }
                    ],
                    explanation: "<strong>What is it?</strong> The words 'summisso...vertice' (with bowed...head) are separated and wrap around the middle of the line. This is called <strong>hyperbaton</strong> - deliberately separating words that belong together.",
                    effect: "<strong>Why does it matter?</strong> The word order itself creates a visual 'bowing' in the Latin! The words physically bow around the centre of the line, matching the action they describe. The adjective 'humiles' (low) is placed right next to 'intrarunt' (entered), emphasising the stooping action."
                },
                {
                    title: "Framing: Emphasising Character",
                    latin: "cui <span class='highlight-b'>superiniecit</span> textum rude <span class='highlight-word'>sedula Baucis</span>",
                    key: [
                        { color: "rgba(33, 150, 243, 0.35)", label: "Verb (threw over)" },
                        { color: "rgba(255, 152, 0, 0.35)", label: "Subject at the end (busy Baucis)" }
                    ],
                    explanation: "<strong>What is it?</strong> The verb 'superiniecit' (threw over) comes first, then the object 'textum rude' (rough cloth), and finally the subject 'sedula Baucis' (busy Baucis) at the very end.",
                    effect: "<strong>Why does it matter?</strong> By placing 'sedula Baucis' at the end of the line, Ovid gives it emphasis. We're meant to notice her character trait - she's <strong>sedula</strong> (busy, diligent). The adjective 'rude' (rough) also reminds us of their poverty - they don't have fine cloth, but they're still generous hosts."
                },
                {
                    title: "Realistic Detail: 'tepidum'",
                    latin: "foco <span class='highlight-detail'>tepidum</span> cinerem dimovit",
                    explanation: "<strong>What is it?</strong> The adjective 'tepidum' means 'warm' or 'lukewarm'.",
                    effect: "<strong>Why does it matter?</strong> This tiny detail makes the scene feel real. The ash is still warm from yesterday's fire - we can almost feel it! These precise, realistic observations bring the humble cottage to life and show Ovid's attention to domestic detail."
                }
            ]
        },

        section2: {
            lines: [
                { number: 642, text: "suscitat hesternos foliisque et cortice sicco" },
                { number: 643, text: "nutrit et ad flammas anima producit anili," },
                { number: 644, text: "multifidasque faces ramaliaque arida tecto" },
                { number: 645, text: "detulit et minuit parvoque admovit aeno," },
                { number: 646, text: "quodque suus coniunx riguo collegerat horto" }
            ],
            examples: [
                {
                    title: "The Historic Present",
                    latin: "<span class='highlight-perfect'>dimovit</span> et ignes <span class='highlight-present'>suscitat</span> hesternos foliisque et cortice sicco <span class='highlight-present'>nutrit</span> et ad flammas anima <span class='highlight-present'>producit</span> anili",
                    key: [
                        { color: "rgba(156, 39, 176, 0.25)", label: "Perfect tense (dimovit = moved)" },
                        { color: "rgba(255, 193, 7, 0.35)", label: "Present tense (suscitat, nutrit, producit)" }
                    ],
                    explanation: "<strong>What is it?</strong> Ovid switches from perfect tense ('dimovit' = moved) to present tense ('suscitat' = revives, 'nutrit' = nourishes, 'producit' = brings forth). This is called the <strong>historic present</strong> - using present tense to describe past events.",
                    effect: "<strong>Why does it matter?</strong> The present tense makes the action feel immediate and happening now, as if we're watching Baucis work. It's more vivid and cinematic than keeping everything in the past tense. We feel like we're in the cottage with her."
                },
                {
                    title: "Personification: Fire as a Living Thing",
                    latin: "<span class='highlight-word'>suscitat</span> hesternos... <span class='highlight-word'>nutrit</span>... <span class='highlight-word'>producit</span> ad flammas",
                    explanation: "<strong>What is it?</strong> The fire is described with verbs usually used for living things: 'suscitat' (revives/awakens), 'nutrit' (nourishes/feeds), 'producit' (brings forth/leads out). This is called <strong>personification</strong> - giving human or living qualities to non-living things.",
                    effect: "<strong>Why does it matter?</strong> The fire becomes almost like a sleeping animal that Baucis is waking up and feeding. The addition of 'anima anili' (with elderly breath) is particularly touching - we picture this old woman gently blowing on the embers to coax the flames back to life. The hearth was sacred in Roman homes, and Ovid makes it feel alive."
                },
                {
                    title: "Compound Words: Poetic Elegance",
                    latin: "<span class='highlight-compound'>multifidas</span>que faces <span class='highlight-compound'>ramalia</span>que arida tecto",
                    key: [
                        { color: "rgba(244, 67, 54, 0.3)", label: "Compound adjectives" }
                    ],
                    explanation: "<strong>What is it?</strong> 'Multifidas' = 'multi' (many) + 'fidas' (split) = 'split into many pieces'. 'Ramalia' is a poetic word for twigs/small branches.",
                    effect: "<strong>Why does it matter?</strong> Creating compound words like this is a feature of elevated poetic style. It's more elegant than saying 'split into many pieces' in separate words. Even when describing humble kindling, Ovid maintains his poetic craft."
                },
                {
                    title: "Lists with -que: Busy Activity",
                    latin: "foliis<span class='highlight-word'>que</span> et cortice... multifidas<span class='highlight-word'>que</span> faces ramalia<span class='highlight-word'>que</span>",
                    explanation: "<strong>What is it?</strong> Ovid connects multiple items with '-que' (and) attached to words: leaves AND bark, kindling AND twigs. This is called <strong>polysyndeton</strong> - using multiple 'ands'.",
                    effect: "<strong>Why does it matter?</strong> Piling up items with 'and...and...and' creates a sense of abundance and busy activity. Baucis is gathering lots of different materials to feed the fire. The technique makes her actions feel breathless and energetic - she's working hard to prepare for her guests."
                }
            ]
        },

        section3: {
            lines: [
                { number: 647, text: "truncat holus foliis; furca levat ille bicorni" },
                { number: 648, text: "sordida terga suis nigro pendentia tigno" },
                { number: 649, text: "servatoque diu resecat de tergore partem" },
                { number: 650, text: "exiguam sectamque domat ferventibus undis." }
            ],
            examples: [
                {
                    title: "Shift in Focus: From Baucis to Philemon",
                    latin: "truncat holus foliis; furca levat <span class='highlight-word'>ille</span> bicorni",
                    explanation: "<strong>What is it?</strong> The semicolon marks a pause, and 'ille' (he/that one) shifts our attention from Baucis to Philemon.",
                    effect: "<strong>Why does it matter?</strong> Ovid has been focusing on Baucis for several lines. Now he shows us both members of the couple working together - she prepares vegetables whilst he deals with the meat. This teamwork emphasises their partnership and shared hospitality."
                },
                {
                    title: "Realistic Details: Poverty and Sacrifice",
                    latin: "<span class='highlight-detail'>sordida</span> terga suis <span class='highlight-detail'>nigro</span> pendentia tigno... <span class='highlight-detail'>servatoque diu</span>... partem <span class='highlight-detail'>exiguam</span>",
                    key: [
                        { color: "rgba(0, 188, 212, 0.3)", label: "Details showing poverty" }
                    ],
                    explanation: "<strong>What is it?</strong> Look at all these descriptive details:<br>• <strong>sordida</strong> = dirty, grimy (from the smoke)<br>• <strong>nigro tigno</strong> = black beam (blackened by years of smoke)<br>• <strong>servato diu</strong> = saved for a long time<br>• <strong>exiguam</strong> = tiny, small",
                    effect: "<strong>Why does it matter?</strong> These details paint a vivid picture of poverty. The meat is smoke-blackened and has been saved for ages - it's precious. They're cutting off only a tiny piece ('exiguam partem') because it's all they have. Yet they're sharing it with strangers! This makes their generosity even more impressive. We see that true hospitality isn't about wealth - it's about giving what you can."
                },
                {
                    title: "Unusual Verb Choice: 'domat'",
                    latin: "sectamque <span class='highlight-word'>domat</span> ferventibus undis",
                    explanation: "<strong>What is it?</strong> The verb 'domat' usually means 'to tame' or 'to conquer' - you'd use it for taming a wild horse! Here it means 'to soften' the tough meat.",
                    effect: "<strong>Why does it matter?</strong> This is a surprisingly strong verb for cooking! By using 'domat' (tames), Ovid perhaps suggests the meat is so tough and old that it needs to be 'conquered' by boiling water. It adds a touch of humour whilst reinforcing how humble their meal is - even the meat is a challenge to prepare."
                },
                {
                    title: "Compound Word: 'bicorni'",
                    latin: "furca levat ille <span class='highlight-compound'>bicorni</span>",
                    explanation: "<strong>What is it?</strong> 'Bicorni' = 'bi' (two) + 'corni' (horned/pronged) = 'two-pronged'.",
                    effect: "<strong>Why does it matter?</strong> Again, Ovid uses a compound adjective for a simple farm tool. Instead of saying 'a fork with two prongs', he creates the elegant compound 'bicorni'. This shows his poetic style - even describing a rustic pitchfork, he maintains literary elevation."
                }
            ]
        }
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadFullText();
    loadSections();
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

// Load Full Text
function loadFullText() {
    const latinTextEl = document.getElementById('latinText');
    if (latinTextEl) {
        let html = '';
        lessonData.fullText.forEach(line => {
            html += `<div class="latin-line"><span class="line-number">${line.number}</span>${line.text}</div>`;
        });
        latinTextEl.innerHTML = html;
    }
    
    const fullTranslationTextEl = document.getElementById('fullTranslationText');
    if (fullTranslationTextEl) {
        fullTranslationTextEl.textContent = lessonData.fullTranslation;
    }
}

// Load Teaching Sections
function loadSections() {
    ['section1', 'section2', 'section3'].forEach(sectionId => {
        const sectionData = lessonData.sections[sectionId];
        
        // Load section text
        const sectionTextEl = document.getElementById(`${sectionId}Text`);
        if (sectionTextEl) {
            let html = '';
            sectionData.lines.forEach(line => {
                html += `<div class="latin-line"><span class="line-number">${line.number}</span>${line.text}</div>`;
            });
            sectionTextEl.innerHTML = html;
        }
        
        // Load examples
        const examplesEl = document.getElementById(`${sectionId}Examples`);
        if (examplesEl) {
            let html = '';
            sectionData.examples.forEach(example => {
                html += `
                    <div class="teaching-example">
                        <h4>${example.title}</h4>
                        ${example.key ? createPatternKey(example.key) : ''}
                        <div class="example-latin">${example.latin}</div>
                        <div class="explanation">
                            <p>${example.explanation}</p>
                            <p><strong>${example.effect}</strong></p>
                        </div>
                    </div>
                `;
            });
            examplesEl.innerHTML = html;
        }
    });
}

function createPatternKey(keyItems) {
    let html = '<div class="pattern-key">';
    keyItems.forEach(item => {
        html += `
            <div class="pattern-item">
                <div class="pattern-box" style="background: ${item.color};"></div>
                <span>${item.label}</span>
            </div>
        `;
    });
    html += '</div>';
    return html;
}
