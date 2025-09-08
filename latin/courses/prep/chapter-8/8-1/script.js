// Show/hide story pages
function showPage(pageNum) {
    // Hide all pages
    const pages = document.querySelectorAll('.story-page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.story-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(`story-page-${pageNum}`).classList.add('active');
    
    // Activate selected tab
    tabs[pageNum - 1].classList.add('active');
    
    // Scroll to story section
    document.querySelector('.story-nav').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
    });
}

// Add hover effect to Latin words for vocabulary help
document.addEventListener('DOMContentLoaded', function() {
    // Vocabulary tooltips data
    const vocabTooltips = {
        'laborābam': 'I was working (imperfect)',
        'faciēbat': 'he/she was making (imperfect)',
        'intrāvit': 'he/she entered (perfect)',
        'abest': 'is missing/absent (present)',
        'vīdistīne': 'have you seen? (perfect)',
        'discessit': 'he/she left (perfect)',
        'attonita': 'shocked, astonished',
        'cucurrī': 'I ran (perfect)',
        'quaesīvī': 'I looked for (perfect)',
        'invēnī': 'I found (perfect)',
        'lacrimābat': 'he/she was crying (imperfect)',
        'accidit': 'happened (perfect)',
        'festīnāvistī': 'you hurried (perfect)',
        'respondit': 'he/she replied (perfect)',
        'cōnspexī': 'I noticed (perfect)',
        'ambulābant': 'they were walking (imperfect)',
        'salūtāvērunt': 'they greeted (perfect)',
        'tenēbat': 'he was holding (imperfect)',
        'fēcērunt': 'they made (perfect)',
        'cēpit': 'he took (perfect)',
        'intellēxī': 'I understood (perfect)',
        'dēstitit': 'he stopped (perfect)',
        'pugnāvī': 'I fought (perfect)',
        'temptāvī': 'I tried (perfect)',
        'iēcit': 'he threw (perfect)',
        'habēbant': 'they had (imperfect)',
        'cucurrērunt': 'they ran (perfect)',
        'superāvī': 'I overpowered (perfect)',
        'dūxī': 'I led (perfect)'
    };
    
    // Add click handlers for comprehension check
    const questionSections = document.querySelectorAll('.questions-section');
    questionSections.forEach(section => {
        const questions = section.querySelectorAll('li');
        questions.forEach((question, index) => {
            question.style.cursor = 'pointer';
            question.addEventListener('click', function() {
                // Toggle a subtle highlight to show it's been read
                this.style.color = this.style.color === 'rgb(0, 102, 255)' ? '#555' : '#0066ff';
            });
        });
    });
    
    // Track progress through pages
    let pagesViewed = new Set();
    
    // Add page tracking
    const storyTabs = document.querySelectorAll('.story-tab');
    storyTabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            pagesViewed.add(index + 1);
            updateProgress();
        });
    });
    
    // Update progress indicator
    function updateProgress() {
        if (pagesViewed.size === 3) {
            // All pages viewed - show completion message
            if (!document.querySelector('.completion-message')) {
                const completionMsg = document.createElement('div');
                completionMsg.className = 'completion-message';
                completionMsg.innerHTML = '✓ Well done! You\'ve read the complete story.';
                completionMsg.style.cssText = `
                    background: #4CAF50;
                    color: white;
                    padding: 1rem;
                    border-radius: 8px;
                    text-align: center;
                    margin: 1rem 0;
                    animation: slideIn 0.5s ease;
                `;
                document.querySelector('.story-nav').after(completionMsg);
            }
        }
    }
    
    // Initialize first page as viewed
    pagesViewed.add(1);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const activeTab = document.querySelector('.story-tab.active');
        const tabs = Array.from(document.querySelectorAll('.story-tab'));
        const currentIndex = tabs.indexOf(activeTab);
        
        if (e.key === 'ArrowRight' && currentIndex < tabs.length - 1) {
            showPage(currentIndex + 2);
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            showPage(currentIndex);
        }
    });
    
    // Add smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Simple animation for vocabulary cards
document.addEventListener('DOMContentLoaded', function() {
    const vocabCards = document.querySelectorAll('.vocab-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50);
            }
        });
    }, { threshold: 0.1 });
    
    vocabCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
});
