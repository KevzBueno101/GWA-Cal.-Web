document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('open');
        hamburger.classList.toggle('open');
    });
});

// back to top butn
const btn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});
