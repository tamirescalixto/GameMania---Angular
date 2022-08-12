// Menu hamburguer
const hamburguer = document.querySelector(".hamburguer");
const menuNav = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    menuNav.classList.toggle('active');
})