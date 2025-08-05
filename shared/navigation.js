// Modal functions
function showInfoModal() {
    document.getElementById('infoModal').style.display = 'block';
}

function closeInfoModal() {
    document.getElementById('infoModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        closeInfoModal();
    }
}

// Set text selection (for texts pages)
function selectText(textName) {
    // Update active text card
    document.querySelectorAll('.text-card').forEach(card => {
        card.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show corresponding videos
    if (document.getElementById('messalina-videos')) {
        document.getElementById('messalina-videos').classList.add('hidden');
    }
    if (document.getElementById('future-videos')) {
        document.getElementById('future-videos').classList.add('hidden');
    }
    
    if (textName === 'messalina') {
        if (document.getElementById('messalina-videos')) {
            document.getElementById('messalina-videos').classList.remove('hidden');
        }
    } else {
        if (document.getElementById('future-videos')) {
            document.getElementById('future-videos').classList.remove('hidden');
        }
    }
}
