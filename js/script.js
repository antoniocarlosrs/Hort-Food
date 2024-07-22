const nemu = document.querySelector(".menu");
const NavNemu = document.querySelector(".nav-menu")

nemu.addEventListener("click", () => {
    nemu.classList.toggle("ativo");
    NavNemu.classList.toggle("ativo");
})
