function toggleMenu()
{
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


function toggleMode() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-mode');

    // Update all elements with mode-dependent icons
    document.querySelectorAll('[data-light][data-dark]').forEach(img => {
        img.src = isDark ? img.getAttribute('data-dark') : img.getAttribute('data-light');
    });
}


