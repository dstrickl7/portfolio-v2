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
const projectSection = document.querySelector("#projects");
const options = {
  root: null, //viewport, default null
  threshold: 0.25, //btwn 0 and 1, default 0 how much of the item is on page
  rootMargin: "0px", //must be in px or %
};
const projectSectionObserver = new IntersectionObserver(
  (entries, projectSectionObserver) => {
    entries.forEach((entry) => {
      sidebar.classList.toggle("visible");
    });
  },
  options
);
projectSectionObserver.observe(projectSection);
/***********************************************************/
// Social icon sidebar variables
const projects = document.querySelectorAll(".project");
const projectOptions = {
  root: null, //viewport, default null
  threshold: 0, //btwn 0 and 1, default 0 how much of the item is on page
  rootMargin: "0px", //must be in px or %
};
const projectObserver = new IntersectionObserver((entries, projectObserver) => {
  entries.forEach((entry) => {});
}, projectOptions);
projects.forEach((project) => {
  projectObserver.observe(project);
});

/***********************************************************/

/***********************************************************/

/***********************************************************/
