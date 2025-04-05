function toggleMenu()
{
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// let currentTheme = 'light'; // or 'dark'

function toggleMode() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-mode');
    const themeFolder = isDark ? 'dark' : 'light';

    document.querySelectorAll('.icon').forEach(icon => {
        const src = icon.src; // full URL
        const fileName = src.substring(src.lastIndexOf('/') + 1); // e.g. "home.svg"
    
        const updatedFile = isDark
            ? fileName.replace('.png', '1.png')
            : fileName.replace('1.png', '.png'); // important: back to base
    
        icon.src = `./assets/${updatedFile}`;
    });

    localStorage.setItem('theme', themeFolder);
}


