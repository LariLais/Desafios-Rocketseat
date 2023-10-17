const menuSidebar = document.querySelector(".menu-sidebar");
const sidebar = document.getElementById("sidebar");
const btnMenu = document.getElementById("btn-menu");
const random = document.querySelectorAll(".hidden");
const input = document.getElementById("input-search");
const login = document.querySelector(".login");

function sidebarFuncao() {
    if (sidebar.style.width === "78px") {
        sidebar.style.width = "250px";
        random.forEach(e => e.classList.replace("hidden", "show"));
        input.style.backgroundColor = "var(--light-green)";
        login.style.justifyContent = 'space-between';
        login.style.padding = '0 10px';
    } else {
        sidebar.style.width = "78px";
        random.forEach(e => e.classList.replace("show", "hidden"));
        input.style.backgroundColor = "var(--light-grey)";
        login.style.justifyContent = 'center';
        login.style.padding = '0';
    }
}

sidebarFuncao();

btnMenu.addEventListener("click", () => sidebarFuncao()); 
