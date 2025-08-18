const analysisData = {
    analyses: {
        "opening-hook": {
            type: "structure",
            technique: "Opening with failure",
            explanation: "Morris immediately undermines the explorers' credibility by starting with their previous failure. The word 'farce' sets a mocking tone before we even learn about the current incident."
        },
        
        "dramatic-threat": {
            type: "language",
            technique: "Dramatic verb choices",
            explanation: "'Threatened to send in military planes to intercept' creates an image of international incident and incompetence. The explorers appear as troublemakers rather than heroes."
        },
        
        "time-marker": {
            type: "structure",
            technique: "Temporal transition",
            explanation: "'Yesterday' creates immediacy and links this new failure to their pattern of mishaps, suggesting this is just the latest in a series."
        },
        
        "neutral-label": {
            type: "voice",
            technique: "Apparent objectivity",
            explanation: "Morris uses the neutral term 'British explorers' here, but this objectivity is undermined by the surrounding critical context."
        },
        
        "almost-tragedy": {
            type: "language",
            technique: "Near-miss language",
            explanation: "'Almost led to tragedy' emphasizes how close to disaster they came, implying recklessness rather than bad luck."
        },
        
        "dramatic-verb": {
            type: "language",
            technique: "Action verb",
            explanation: "'Plunged' is more dramatic than 'crashed' or 'landed', emphasizing the violence and lack of control in their descent."
        },
        
        "rescue-verb": {
            type: "language",
            technique: "Passive rescue imagery",
            explanation: "'Plucked from the icy water' makes them seem helpless, like children being rescued rather than competent explorers."
        },
        
        "duration-emphasis": {
            type: "purpose",
            technique: "Time cost emphasis",
            explanation: "'Nine-hour rescue' highlights the extensive time and resources required, building the case about waste before mentioning money."
        },
        
        "cost-setup": {
            type: "purpose",
            technique: "Resource listing",
            explanation: "Listing three separate rescue services (Royal Navy, RAF, British coastguards) emphasizes the scale and expense of the operation."
        },
        
        "critical-tone": {
            type: "voice",
            technique: "Reported criticism",
            explanation: "'Resentment in some quarters' introduces public anger while maintaining journalistic distance - Morris reports the criticism without directly making it."
        },
        
        "cost-emphasis": {
            type: "purpose",
            technique: "Financial impact",
            explanation: "'Tens of thousands of pounds' puts a specific price on their adventure, making abstract waste concrete for taxpaying readers."
        },
        
        "expert-opinion": {
            type: "audience",
            technique: "Authority appeal",
            explanation: "'Experts questioned' brings in professional judgment, appealing to readers who value informed opinion over adventure."
        },
        
        "technical-detail": {
            type: "language",
            technique: "Specific technical information",
            explanation: "Naming the exact helicopter model and its single engine highlights the specific poor judgment - they chose the wrong equipment."
        },
        
        "hostile-environment": {
            type: "language",
            technique: "Environmental emphasis",
            explanation: "'Hostile environment' underscores the danger and their poor judgment in entering it unprepared."
        },
        
        "confusion": {
            type: "voice",
            technique: "Undermining purpose",
            explanation: "'Confusion about what exactly the men were trying to achieve' suggests they lack clear goals - they're not serious explorers."
        },
        
        "trusty-irony": {
            type: "voice",
            technique: "Ironic quotation",
            explanation: "Quotation marks around 'trusty helicopter' signal Morris's skepticism - the helicopter that just crashed was hardly trustworthy."
        },
        
        "boys-messing": {
            type: "voice",
            technique: "Diminishing quote",
            explanation: "The wife's phrase 'boys messing about' becomes the article's defining judgment - they're not men or explorers, but boys playing with expensive toys."
        },
        
        "drama-begins": {
            type: "structure",
            technique: "Chronological marker",
            explanation: "'The drama began' shifts to narrative mode, building tension while maintaining the sense of unnecessary spectacle."
        },
        
        "nickname": {
            type: "language",
            technique: "Trivializing detail",
            explanation: "'Also known as Q' adds a James Bond pretension that seems absurd given their incompetence."
        },
        
        "ditched": {
            type: "language",
            technique: "Aviation terminology",
            explanation: "'Ditched' is technical aviation language for emergency water landing, adding authenticity while emphasizing the emergency."
        },
        
        "scrambled": {
            type: "language",
            technique: "Desperate action",
            explanation: "'Scrambled' suggests panic and desperation rather than calm, professional emergency response."
        },
        
        "direct-quote": {
            type: "voice",
            technique: "Domestic normalcy",
            explanation: "The wife's matter-of-fact quote ('could I call the emergency people?') makes the life-threatening situation sound like calling a plumber."
        },
        
        "luxury-detail": {
            type: "language",
            technique: "Class marker",
            explanation: "'Breitling emergency watch, a wedding present' subtly highlights their wealth - they have expensive toys for their dangerous games."
        },
        
        "nautical-verb": {
            type: "language",
            technique: "Naval terminology",
            explanation: "'Steaming' is proper nautical language, contrasting professional Navy response with amateur explorers."
        },
        
        "miracle-quote": {
            type: "voice",
            technique: "Contrasting perspective",
            explanation: "An Antarctic explorer calling survival 'a miracle' emphasizes how lucky they were, not how skilled."
        },
        
        "credentials": {
            type: "structure",
            technique: "Delayed credentials",
            explanation: "Morris waits until paragraph 15 to list their experience, after establishing them as incompetent - the structure undermines their achievements."
        },
        
        "class-marker": {
            type: "audience",
            technique: "Social positioning",
            explanation: "'Property developer from London' signals wealth and privilege to Guardian readers, suggesting entitled rich men playing with danger."
        },
        
        "impressive-detail": {
            type: "language",
            technique: "Scale emphasis",
            explanation: "'16,000-mile trip took three months' sounds impressive but in context suggests they have too much time and money."
        },
        
        "undermining-transition": {
            type: "structure",
            technique: "Contradicting transition",
            explanation: "'Despite their experience' sets up the contradiction - all their experience doesn't prevent repeated failures."
        },
        
        "pattern-criticism": {
            type: "voice",
            technique: "Pattern establishment",
            explanation: "'Not the first time they have hit the headlines for the wrong reasons' establishes a pattern of failure and publicity-seeking."
        },
        
        "failure-pattern": {
            type: "structure",
            technique: "Repeated failure",
            explanation: "'Forced to call a halt' shows another abandoned mission, reinforcing the pattern of incompetence."
        },
        
        "ironically": {
            type: "voice",
            technique: "Ironic commentary",
            explanation: "'Ironically' highlights the gap between their stated aims (showing good relations) and actual results (international incident)."
        },
        
        "expert-criticism": {
            type: "purpose",
            technique: "Professional authority",
            explanation: "Citing the editor of Jane's Helicopter Markets adds authoritative weight to criticism of their judgment."
        },
        
        "expert-quote": {
            type: "language",
            technique: "Direct expert criticism",
            explanation: "'I wouldn't use a helicopter like that' is damning professional judgment - they made a basic error that any expert would avoid."
        },
        
        "excellent-irony": {
            type: "voice",
            technique: "Ironic juxtaposition",
            explanation: "Claims of 'excellent' conditions after a crash create irony - either they're lying or can't handle even perfect conditions."
        },
        
        "taxpayer-bill": {
            type: "purpose",
            technique: "Cost confirmation",
            explanation: "Official confirmation that 'the taxpayer would pick up the bill' validates the article's main criticism about wasted public money."
        },
        
        "highly-unlikely": {
            type: "language",
            technique: "Bureaucratic language",
            explanation: "'Highly unlikely' is bureaucratic speak for 'definitely not' - the money is gone forever."
        },
        
        "wife-comment": {
            type: "voice",
            technique: "Domestic comedy ending",
            explanation: "The wife's comment about 'bottoms kicked' reduces the explorers to naughty schoolboys, ending on domestic comedy rather than heroic adventure."
        }
    },
    
    vocabulary: {
        "farce": "A complete failure or ridiculous situation; something absurd",
        "intercept": "To stop and catch something or someone before they reach their destination",
        "plunged": "Fell or dived suddenly and uncontrollably",
        "hostile": "Unfriendly, antagonistic; (of environment) harsh and difficult to survive in",
        "ditched": "Made an emergency landing on water (aviation term)",
        "scrambled": "Moved or climbed quickly and with difficulty, often in panic",
        "dispatched": "Sent off to a destination for a purpose",
        "amphibious": "Able to operate both on land and in water",
        "floes": "Sheets of floating ice"
    }
};

// Function to handle interactive highlighting
function initializeInteractive() {
    document.querySelectorAll('.highlight').forEach(span => {
        span.addEventListener('click', function() {
            const analysisKey = this.getAttribute('data-analysis');
            if (analysisKey && analysisData.analyses[analysisKey]) {
                showAnalysis(analysisData.analyses[analysisKey]);
            }
        });
    });
}

// Function to display analysis panel
function showAnalysis(analysis) {
    const panel = document.getElementById('analysis-panel');
    if (panel) {
        panel.innerHTML = `
            <div class="analysis-content">
                <button class="close-btn" onclick="closeAnalysis()">×</button>
                <h3 class="${analysis.type}">${analysis.type.charAt(0).toUpperCase() + analysis.type.slice(1)}</h3>
                <h4>${analysis.technique}</h4>
                <p>${analysis.explanation}</p>
            </div>
        `;
        panel.classList.add('active');
    }
}

// Function to close analysis panel
function closeAnalysis() {
    const panel = document.getElementById('analysis-panel');
    if (panel) {
        panel.classList.remove('active');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeInteractive);
