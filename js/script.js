document.addEventListener("DOMContentLoaded", () => {
    const toggleMenu = document.querySelector('.toggle-menu');
    const navLinks = document.querySelector('.nav-links');

    // Vérification si les éléments existent avant d'attacher les événements
    if (toggleMenu && navLinks) {
        toggleMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const sections = document.querySelectorAll('.section');

    const handleScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Vérifie si la section est dans la fenêtre d'affichage (viewport)
            if (sectionTop < windowHeight - 100) {
                section.classList.add('show');
            }
        });
    };

    // Ajout de l'événement de défilement et exécution initiale
    if (sections.length > 0) {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Exécute lors du chargement pour afficher les sections visibles
    }
    
});
