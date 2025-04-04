function toggleMenu()
{
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


function switchdark() {
    const body = document.body;
    const icon = document.getElementById("dark-mode-icon");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        icon.src = "./assets/light.svg"; 
    } else {
        localStorage.setItem("darkMode", "disabled");
        icon.src = "./assets/dark.svg"; 
    }
}