// Interactive analysis functionality for all texts
document.addEventListener('DOMContentLoaded', function() {
    // Wait a moment for all scripts to load, then initialize
    setTimeout(function() {
        loadAnalysisData();
        initializeInteractiveFeatures();
    }, 100);
});

function loadAnalysisData() {
    const panel = document.getElementById('analysis-panel');
    if (!panel) return;
    
    // Check for the specific data variable (messalinaData, avunculusData, etc.)
    let analysisData = null;
    if (typeof messalinaData !== 'undefined') {
        analysisData = messalinaData;
    }
    // Future:// Interactive analysis functionality for all texts
document.addEventListener('DOMContentLoaded', function() {
    // Wait a moment for all scripts to load, then initialize
    setTimeout(function() {
        loadAnalysisData();
        initializeInteractiveFeatures();
    }, 100);
});

function loadAnalysisData() {
    const panel = document.getElementById('analysis-panel');
    if (!panel) return;
    
    // Check for the specific data variable (messalinaData, avunculusData, etc.)
    let analysisData = null;
    if (typeof messalinaData !== 'undefined') {
        analysisData = messalinaData;
    }
    // Future: add other data checks here
    // else if (typeof avunculusData !== 'undefined') {
    //     analysisData = avunculusData;
    // }
    
    if (!analysisData) return;
    
    // Create default message
    let html = `
        <div class="analysis-content active" id="default-message">
            <div class="analysis-title">Click on highlighted text</div>
            <p>Select any highlighted word or phrase in the Latin text to see detailed analysis including:</p>
            <ul>
                <li>English translation</li>
                <li>Literary devices</li>
                <li>Grammatical points</li>
                <li>Literary effects</li>
            </ul>
        </div>
    `;
    
    // Add all analysis items
    for (const [id, data] of Object.entries(analysisData)) {
        html += `
            <div class="analysis-content" id="${id}">
                <div class="analysis-title">${data.title}</div>
                <div class="analysis-translation">${data.translation}</div>
                <div class="analysis-device">
                    <div class="device-name">${data.device}</div>
                    ${data.description}
                </div>
                <div class="analysis-effect">
                    <div class="effect-title">Effect:</div>
                    ${data.effect}
                </div>
            </div>
        `;
    }
    
    panel.innerHTML = html;
}

function initializeInteractiveFeatures() {
    const highlights = document.querySelectorAll('.highlight');
    
    highlights.forEach(highlight => {
        highlight.addEventListener('click', function() {
            const analysisId = this.dataset.analysis;
            
            // Show the analysis panel
            const panel = document.getElementById('analysis-panel');
            if (panel) {
                panel.style.display = 'block';
            }
            
            // Remove active class from all highlights
            highlights.forEach(h => h.classList.remove('active'));
            
            // Add active class to clicked highlight
            this.classList.add('active');
            
            // Hide all analysis content
            const analysisContents = document.querySelectorAll('.analysis-content');
            analysisContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Show selected analysis
            const targetAnalysis = document.getElementById(analysisId);
            if (targetAnalysis) {
                targetAnalysis.classList.add('active');
            }
        });
    });
}
