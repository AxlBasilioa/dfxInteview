document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: [0, 0.5] 
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.5) {
                entry.target.classList.add('fade-in');
                entry.target.classList.remove('fade-out');
            } else if (entry.intersectionRatio <= 0) {
                entry.target.classList.add('fade-out');
                entry.target.classList.remove('fade-in');
            }
        });
    }, observerOptions);
    const animatableElements = document.querySelectorAll('.animatable');
    animatableElements.forEach(element => {
        observer.observe(element);
    });
});
