// Classical Civilisation - Common Data
// Shared across all Classical Civ courses (Politics, Myth & Religion)

const commonData = {
    // Navigation Links for Different Courses
    navigation: {
        politics: {
            topics: [
                { id: 'topic1', text: 'Topic 1: Structure', url: 'topic1.html' },
                { id: 'topic2', text: 'Topic 2: Individuals', url: 'topic2.html' },
                { id: 'topic3', text: 'Topic 3: Crisis & Collapse', url: 'topic3.html' }
            ],
            subtopics: {
                topic1: [
                    { id: '1-1', text: '1.1 What was the Republic?', url: '1-1/index.html' },
                    { id: '1-2', text: '1.2 The Constitution', url: '1-2/index.html' },
                    { id: '1-3', text: '1.3 Patronage & Amicitia', url: '1-3/index.html' },
                    { id: '1-4', text: '1.4 Political Ideals', url: '1-4/index.html' },
                    { id: '1-5', text: '1.5 Key Factions', url: '1-5/index.html' }
                ]
            }
        },
        myth: {
            topics: [
                { id: 'topic1', text: 'Topic 1: The Gods', url: 'topic1.html' },
                { id: 'topic2', text: 'Topic 2: Heracles/Hercules', url: 'topic2.html' },
                { id: 'topic3', text: 'Topic 3: Foundation', url: 'topic3.html' },
                { id: 'topic4', text: 'Topic 4: Festivals', url: 'topic4.html' },
                { id: 'topic5', text: 'Topic 5: Temples', url: 'topic5.html' },
                { id: 'topic6', text: 'Topic 6: Symbols', url: 'topic6.html' }
            ],
            subtopics: {
                topic1: [
                    { id: '1-1', text: '1.1 Ancient Religion', url: 'topic1-1.html' },
                    { id: '1-2', text: '1.2 Gods & Iconography', url: 'topic1-2.html' },
                    { id: '1-3', text: '1.3 Hymn to Demeter', url: 'topic1-3.html' }
                ]
            }
        },
        otherSubjects: [
            { text: 'Latin', url: '../../../latin/vocabulary.html' },
            { text: 'Greek', url: '../../../greek/vocabulary.html' },
            { text: 'English', url: '../../../english/interactive/index.html' },
            { text: '← Back to Home', url: '../../../index.html' }
        ]
    },

    // Modal Content
    modalContent: {
        title: 'salve! 👋',
        paragraphs: [
            "Thank you for checking out Classicalia! I'm Lawrence and I teach Latin and Classics in Bristol.",
            "I have a BA in Ancient History from King's College London, a PGCE in Latin with Classics from the University of Cambridge and an MEd (Transforming Practice) from Darwin College, Cambridge. I am particularly interested in Tacitean studies and the history of memory in classical antiquity. In 2021 I won the Classical Association's 'Outstanding New Teacher' award.",
            "I also enjoy creating teacher guides and student workbooks. Please feel free to use my resources!",
            "If you have any feedback, thoughts or questions, please don't hesitate to get in touch!"
        ],
        imageUrl: '../../../images/lmc.jpg',
        imageAlt: 'Lawrence McNally',
        contacts: [
            {
                icon: '🐦',
                label: 'Follow me on Twitter',
                value: '@lfmcnally',
                url: 'https://twitter.com/lfmcnally'
            },
            {
                icon: '🎵',
                label: 'Follow me on TikTok',
                value: '@classicalcivilisation',
                url: 'https://www.tiktok.com/@classicalcivilisation'
            },
            {
                icon: '💼',
                label: 'Connect on LinkedIn',
                value: 'Lawrence McNally',
                url: 'https://www.linkedin.com/in/lawrence-mcnally-318651116/'
            },
            {
                icon: '☕',
                label: 'Buy me a coffee',
                value: '@lfmcnally',
                url: 'https://buymeacoffee.com/lfmcnally'
            }
        ],
        signature: {
            line1: 'An open-source project made with ❤️',
            line2: '-Lawrence'
        }
    }
};

// Function to load common data into the HTML
function loadCommonData() {
    // Load navigation links based on course
    loadNavigation();
    
    // Load modal content
    loadModalContent();
}

// Load navigation based on current course
function loadNavigation() {
    const currentPath = window.location.pathname;
    let courseType = '';
    
    if (currentPath.includes('/politics/')) {
        courseType = 'politics';
    } else if (currentPath.includes('/myth/')) {
        courseType = 'myth';
    }
    
    // Load topic navigation
    const topicNav = document.getElementById('topic-navigation');
    if (topicNav && courseType) {
        const topics = commonData.navigation[courseType].topics;
        topics.forEach(topic => {
            const link = document.createElement('a');
            link.href = topic.url;
            link.className = 'nav-link';
            link.textContent = topic.text;
            if (currentPath.includes(topic.id)) {
                link.classList.add('current');
            }
            topicNav.appendChild(link);
        });
    }
    
    // Load other subjects navigation
    const otherNav = document.getElementById('other-subjects-nav');
    if (otherNav) {
        commonData.navigation.otherSubjects.forEach(subject => {
            const link = document.createElement('a');
            link.href = subject.url;
            link.className = 'nav-link';
            link.textContent = subject.text;
            otherNav.appendChild(link);
        });
    }
}

// Load modal content
function loadModalContent() {
    // Load modal text
    const modalText = document.getElementById('modal-text-content');
    if (modalText) {
        modalText.innerHTML = commonData.modalContent.paragraphs
            .map(p => `<p>${p}</p>`)
            .join('');
    }
    
    // Load modal image
    const modalImage = document.querySelector('.modal-image img');
    if (modalImage) {
        modalImage.src = commonData.modalContent.imageUrl;
        modalImage.alt = commonData.modalContent.imageAlt;
    }
    
    // Load contact items
    const contactItems = document.getElementById('contact-items');
    if (contactItems) {
        contactItems.innerHTML = commonData.modalContent.contacts
            .map(contact => `
                <a href="${contact.url}" target="_blank" rel="noopener noreferrer" class="contact-item">
                    <div class="contact-icon">${contact.icon}</div>
                    <div class="contact-info">
                        <div class="contact-label">${contact.label}</div>
                        <div class="contact-value">${contact.value}</div>
                    </div>
                </a>
            `)
            .join('');
    }
    
    // Load signature
    const signature = document.querySelector('.modal-signature');
    if (signature) {
        signature.innerHTML = `
            <p>${commonData.modalContent.signature.line1}</p>
            <p><strong>${commonData.modalContent.signature.line2}</strong></p>
        `;
    }
}

// Modal functions
function showInfoModal() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeInfoModal() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        closeInfoModal();
    }
}

// Navigation functions for lessons
function navigateToLesson(lesson) {
    window.location.href = `../${lesson}/index.html`;
}

// Checklist functionality
function markAsDoingNow(index) {
    const button = document.getElementById(`do-now-${index}`);
    const allButtons = document.querySelectorAll('.do-now-btn');
    
    // Remove active state from all buttons
    allButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.textContent = 'Do now';
    });
    
    // Toggle this button
    if (button && !button.classList.contains('active')) {
        button.classList.add('active');
        button.textContent = 'Doing now!';
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadCommonData();
});
