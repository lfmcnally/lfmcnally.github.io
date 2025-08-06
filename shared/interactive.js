// Interactive analysis functionality for all texts
document.addEventListener('DOMContentLoaded', function() {
    initializeInteractiveFeatures();
});

function initializeInteractiveFeatures() {
    console.log('Initializing interactive features...');
    
    const highlights = document.querySelectorAll('.highlight');
    console.log('Found highlights:', highlights.length);
    
    highlights.forEach(highlight => {
        highlight.addEventListener('click', function(e) {
            console.log('Highlight clicked:', this.dataset.analysis);
            
            const analysisId = this.dataset.analysis;
            const sectionId = this.dataset.section;
            
            // Show the analysis panel
            const panel = document.getElementById('analysis-panel');
            if (panel) {
                panel.style.display = 'block';
                
                // Position panel relative to the section title if section info is available
                if (sectionId) {
                    const sectionTitle = document.getElementById(sectionId);
                    if (sectionTitle) {
                        const rect = sectionTitle.getBoundingClientRect();
                        const textPanel = document.querySelector('.text-panel');
                        const textPanelRect = textPanel.getBoundingClientRect();
                        
                        // Calculate position relative to text panel
                        const topOffset = rect.top - textPanelRect.top;
                        panel.style.top = topOffset + 'px';
                    }
                }
                
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
    
    // Load analysis data and create HTML
    loadAnalysisData();
}

function loadAnalysisData() {
    console.log('Loading analysis data...');
    
    const panel = document.getElementById('analysis-panel');
    if (!panel) {
        console.error('Analysis panel not found');
        return;
    }
    
    if (!messalinaData) {
        console.error('No analysis data found');
        return;
    }
    
    console.log('Analysis data loaded, creating HTML...');
    
    // Create default message
    let html = '<div class="analysis-content active" id="default-message">';
    html += '<div class="analysis-title">Click on highlighted text</div>';
    html += '<p>Select any highlighted word or phrase in the Latin text to see detailed analysis including:</p>';
    html += '<ul><li>English translation</li><li>Literary devices</li><li>Grammatical points</li><li>Literary effects</li></ul>';
    html += '</div>';
    
    // Add all analysis items
    for (const id in messalinaData) {
        const data = messalinaData[id];
        html += '<div class="analysis-content" id="' + id + '">';
        html += '<div class="analysis-title">' + data.title + '</div>';
        html += '<div class="analysis-translation">' + data.translation + '</div>';
        html += '<div class="analysis-device">';
        html += '<div class="device-name">' + data.device + '</div>';
        html += data.description;
        html += '</div>';
        html += '<div class="analysis-effect">';
        html += '<div class="effect-title">Effect:</div>';
        html += data.effect;
        html += '</div>';
        html += '</div>';
    }
    
    panel.innerHTML = html;
    console.log('Analysis HTML created');
}
