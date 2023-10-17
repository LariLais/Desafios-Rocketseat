const menu = document.getElementById("menu");
const content = document.getElementById("content");
const menuSidebar = document.getElementById("menu-sidebar")
const main = document.querySelector("main")

function toggleMenu() {
    if (menu.style.backgroundImage.includes("menu-buguer-open.svg")) {
        menu.style.backgroundImage = "url(assets/menu-buguer-close.svg)";
        content.style.display = 'none';
        menuSidebar.style.display = 'flex'
        main.style.margin = '0'
        main.style.padding = '0'
        main.style.backgroundImage = 'none'
        main.style.backgroundColor = 'black'
    } else {
        menu.style.backgroundImage = "url(assets/menu-buguer-open.svg)";
        content.style.display = 'flex';
        menuSidebar.style.display = 'none'
        main.style.marginTop = '80px'
        main.style.padding = '0 27px'
        main.style.backgroundImage = 'url(assets/rocket-coffee.png)'
        main.style.backgroundColor = 'none'
    }
}


menu.addEventListener("click", toggleMenu);
