document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Toggle mobile navigation
    const menuButton = document.querySelector('.menu-button');
    const navUL = document.querySelector('nav ul');
    menuButton.addEventListener('click', () => {
        navUL.classList.toggle('open');
        function toggleMenu() {
            var menu = document.querySelector(".nav-menu");
            menu.classList.toggle("open");
        }
        
    });
    


    // Scroll Animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5 // Adjust if needed
    });
    animatedElements.forEach(element => observer.observe(element));

    // Modal Image Pop-up for Event Images
    document.querySelectorAll('.event img').forEach(image => {
        image.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.left = '0';
            modal.style.top = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = '1000';

            const modalImg = document.createElement('img');
            modalImg.src = image.src;
            modalImg.style.maxWidth = '90%';
            modalImg.style.maxHeight = '90%';
            modal.appendChild(modalImg);

            modal.addEventListener('click', () => {
                modal.remove();
            });

            document.body.appendChild(modal);
        });
    });
});


