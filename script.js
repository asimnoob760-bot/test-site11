// Simple navigation and interactivity
document.addEventListener('DOMContentLoaded', function() {
    console.log('Study Materials Hub loaded');
    
    // Add smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Function to load chapter content
function loadChapter(subject, chapter) {
    console.log(`Loading ${subject} - ${chapter}`);
}

// Function to filter content
function filterContent(category) {
    const items = document.querySelectorAll('[data-category]');
    items.forEach(item => {
        if (item.dataset.category === category || category === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}