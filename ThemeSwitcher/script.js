const btnSwitcher = document.getElementById("btn-switcher");
const body = document.querySelector('body');

function toggle() {
    if (body.style.backgroundColor === "var(--light)") {
        body.style.backgroundColor = "var(--dark)";
        btnSwitcher.style.left = 'unset'
        btnSwitcher.style.right = '3%'

    } else {
        body.style.backgroundColor = "var(--light)";
        btnSwitcher.style.left = '4%'
        btnSwitcher.style.right = 'unset'
    }
}

toggle()

btnSwitcher.addEventListener('click', toggle); 