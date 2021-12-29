// Navbar variables
const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".navlist-container");
const overlay = document.querySelector(".overlay");
const navBtn = document.querySelector(".nav-btn");
const navlinks = document.querySelectorAll(".navitem");

// Open mobile nav
if (navlist) {
  navBtn.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navlist.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  navlinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.click();
    });
  });
}

/***********************************************************/
// Social icon sidebar variables
const sidebar = document.querySelector(".icon-bar");
/***********************************************************/

/***********************************************************/

/***********************************************************/

/***********************************************************/
