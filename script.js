function toggleMenu()
{
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let currentTheme = 'light'; // or 'dark'

function toggleMode() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-mode'); // toggles the class

    const themeFolder = isDark ? 'dark' : 'light';

    // Update all icons
    document.querySelectorAll('.icon').forEach(icon => {
        const fileName = icon.src.split('/').pop(); // gets "home.svg", etc.
        icon.src = `./assets/${themeFolder}/${fileName}`;
    });

    // Optional: Remember preference
    localStorage.setItem('theme', themeFolder);
}


