// Smooth scroll effect
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ScrollReveal animations
ScrollReveal().reveal('.container', { duration: 1000, distance: '50px', origin: 'bottom' });