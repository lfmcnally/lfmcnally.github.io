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
    // Add a longer delay to ensure all scripts load
    setTimeout(function() {
        initializeInteractiveFeatures();
    }, 500);
});

function initializeInteractiveFeatures() {
    console.log('Initializing interactive features...');
    
    const highlights = document.querySelectorAll('.highlight');
    console.log('Found highlights:', highlights.length);
    
    // Load analysis data first
    loadAnalysisData();
    
    highlights.forEach(highlight => {
        highlight.addEventListener('click', function(e) {
            console.log('Highlight clicked:', this.dataset.analysis);
            
            const analysisId = this.dataset.analysis;
            
            // Show the analysis panel
            const panel = document.getElementById('analysis-panel');
            if (panel) {
                panel.style.display = 'block';
                console.log('Panel shown');
            } else {
                console.error('Panel not found');
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
                console.log('Showing analysis for:', analysisId);
            } else {
                console.error('Analysis not found for:', analysisId);
            }
        });
    });
}

function loadAnalysisData() {
    console.log('Loading analysis data...');
    
    const panel = document.getElementById('analysis-panel');
    if (!panel) {
        console.error('Analysis panel not found');
        return;
    }
    
    // Check for data (try both window.messalinaData and messalinaData)
    let analysisData = null;
    if (typeof window.messalinaData !== 'undefined') {
        analysisData = window.messalinaData;
        console.log('Found window.messalinaData');
    } else if (typeof messalinaData !== 'undefined') {
        analysisData = messalinaData;
        console.log('Found messalinaData');
    }
    
    if (!analysisData) {
        console.error('No analysis data found');
        return;
    }
    
    console.log('Analysis data loaded, creating HTML...');
    
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
    console.log('Analysis HTML created');
}
