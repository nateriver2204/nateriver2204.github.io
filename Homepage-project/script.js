let menuEl = document.getElementById("hamburger-menu");
let navbarEl = document.getElementById("navbar");
let overlayEl = document.getElementById("overlay");

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) {
    menuEl.classList.remove("bar-changer");
    navbarEl.classList.remove("active");
    navbarEl.querySelector("ul").classList.remove("active");
    overlayEl.classList.remove("active");
  }
});

menuEl.addEventListener("click", () => {
  menuEl.classList.toggle("bar-changer");
  navbarEl.classList.toggle("active");
  navbarEl.querySelector("ul").classList.toggle("active");
  overlayEl.classList.toggle("active");
});
