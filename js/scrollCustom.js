window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    let pageHeight = document.documentElement.scrollHeight;
    let windowHeight = window.innerHeight;
    let backgroundHeight;
    if (window.innerWidth <= 768) { 
        backgroundHeight = 850; 
    } else {
        backgroundHeight = 3000; 
    }
    let scrollRatio = scrollPosition / (pageHeight - windowHeight);
    let backgroundPosition = scrollRatio * (backgroundHeight - windowHeight);
    document.documentElement.style.backgroundPosition = `center -${backgroundPosition}px`;
});
