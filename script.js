function toggleMenu()
{
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let currentTheme = 'light'; // or 'dark'

function toggleMode() {
    // Toggle the theme folder
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Select all icons
    const allIcons = document.querySelectorAll('.icon');

    // Update each icon's src
    allIcons.forEach(icon => {
        const fileName = icon.getAttribute('data-icon');
        if (fileName) {
            icon.src = `./assets/${currentTheme}/${fileName}`;
        }
    });
}



