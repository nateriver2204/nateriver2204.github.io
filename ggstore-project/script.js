//burger-menu
const toggleBtn = document.querySelector(`.toggle-btnn`);
const navbarLinks = document.querySelector(`.navbarr-links`);
const navbarrLinks = document.querySelectorAll(`.navbarr-links`)[1];

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  navbarrLinks.classList.toggle("active");
});

//showmore-less-btn
