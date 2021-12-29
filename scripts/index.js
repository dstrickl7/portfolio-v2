// Navbar variables
const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".navlist-container");
const overlay = document.querySelector(".overlay");
const navBtn = document.querySelector(".nav-btn");

// Open mobile nav
if (navlist) {
  navBtn.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navlist.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}
