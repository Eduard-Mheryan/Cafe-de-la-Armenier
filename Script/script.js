function toggleMenu() {
    const secondaryNavbar = document.getElementById('secondaryNavbar');
    if (secondaryNavbar.style.display === 'block') {
        secondaryNavbar.style.opacity = 0;
        setTimeout(() => {
            secondaryNavbar.style.display = 'none';
        }, 500);
    } else {
        secondaryNavbar.style.display = 'block';
        setTimeout(() => {
            secondaryNavbar.style.opacity = 1;
        }, 10);
    }
}

document.getElementById('close').onclick = function () {
    // Optional: Überprüfen, ob das Event ausgelöst wird
    console.log("Close button clicked");
    const secondaryNavbar = document.getElementById('secondaryNavbar');

    // Nur ausführen, wenn die Bildschirmbreite >= 850px ist
    if (window.innerWidth >= 850) {
        secondaryNavbar.style.opacity = 0;
        setTimeout(() => {
            secondaryNavbar.style.display = 'none';
        }, 500);
    } else {
        // Für kleinere Bildschirme
        secondaryNavbar.style.opacity = 0;
        setTimeout(() => {
            secondaryNavbar.style.display = 'none';
        }, 500);
    }
};

window.addEventListener('scroll', function () {
    if (window.innerWidth >= 850) {
        const header = document.querySelector('header');
        const navbar = document.getElementById('navbar');
        const menu = document.getElementById('Menu');
        const logo = document.getElementById('Logo');
        const scrollPosition = window.scrollY;

        if (scrollPosition > 100) {
            header.classList.add('scrolled');
            navbar.classList.add('center-navbar');
            menu.style.display = 'none';
            logo.style.display = 'none';
            header.style.boxShadow = '0px 1px #fc4c02';
        } else {
            header.classList.remove('scrolled');
            navbar.classList.remove('center-navbar');
            menu.style.display = 'block';
            logo.style.display = 'block';
            header.style.boxShadow = '0px 1px #fc4c02';
        }
    }
});
