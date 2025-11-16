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

   document.addEventListener('DOMContentLoaded', function() {
       // Get the current page filename (e.g., 'index.html')
       const currentPath = window.location.pathname.split('/').pop();
       
       // Select all navigation links
       const navLinks = document.querySelectorAll('nav ul li a');
       
       // Loop through links and add 'active' class if href matches current path
       navLinks.forEach(link => {
           const linkPath = link.getAttribute('href');
           if (linkPath === currentPath) {
               link.classList.add('active');
           }
       });
   });
   