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

  if (document.documentElement.clientWidth < 1024) {
    navlinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.click();
      });
    });
  }
}

/***********************************************************/
// Social icon sidebar variables
const sidebar = document.querySelector(".icon-bar");
const projectSection = document.querySelector("#projects");

// Section observer for project section
const options = {
  root: null, //viewport, default null
  threshold: 0.25, //btwn 0 and 1, default 0 how much of the item is on page
  rootMargin: "0px", //must be in px or %
};
const projectSectionObserver = new IntersectionObserver(
  (entries, projectSectionObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      sidebar.classList.toggle("visible");
    });
  },
  options
);
projectSectionObserver.observe(projectSection);
/***********************************************************/
// Project variables
const projects = document.querySelectorAll(".project");

// observer for projects
const projectOptions = {
  root: null, //viewport, default null
  threshold: 0, //btwn 0 and 1, default 0 how much of the item is on page
  rootMargin: "0px", //must be in px or %
};
const projectObserver = new IntersectionObserver((entries, projectObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.toggle("visible");
  });
}, projectOptions);
projects.forEach((project) => {
  projectObserver.observe(project);
});

/***********************************************************/
// Resume display variables
const resumeContainer = document.querySelector(".resume-container");
const resumeBtn = document.querySelector("#resume-btn");

resumeBtn.addEventListener("click", () => {
  resumeContainer.classList.toggle("active");
});

/***********************************************************/
// Skill card variables
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const polygons = document.querySelectorAll(".polygon");

// Display card back on tap
polygons.forEach((polygon) => {
  if (document.documentElement.clientWidth < 1024) {
    polygon.addEventListener("click", () => {
      front.classList.toggle("hidden");
      back.classList.toggle("active");
    });
  } else {
    polygon.addEventListener("mouseover", () => {
      polygon.addEventListener("click", () => {
        front.classList.toggle("hidden");
        back.classList.toggle("active");
      });
    });
  }
});
/***********************************************************/
