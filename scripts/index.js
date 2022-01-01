// Navbar variables
const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".navlist-container");
const overlay = document.querySelector(".overlay");
const navBtn = document.querySelector(".nav-btn");
const navlinks = document.querySelectorAll(".navitem");
const navbar = document.querySelector(".navbar");

// Open mobile nav
if (navlist) {
  navBtn.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navlist.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

if (document.documentElement.clientWidth < 1024) {
  navlinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.click();
    });
  });
}

/***********************************************************/
const projectSection = document.querySelector("#projects");
// Section observer for navbar
const navOptions = {
  root: null, //viewport, default null
  threshold: 0, //btwn 0 and 1, default 0 how much of the item is on page
  rootMargin: "0px 0px -50% 0px", //must be in px or %
};
const stickNavbar = new IntersectionObserver((entries, stickNavbar) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navbar.classList.toggle("scrolled");
    } else {
      return;
    }
  });
}, navOptions);
stickNavbar.observe(projectSection);

/***********************************************************/
// Social icon sidebar variables
const sidebar = document.querySelector(".icon-bar");
const contactSection = document.querySelector("#contact");

// Section observer for project section
const options = {
  root: null, //viewport, default null
  threshold: 0.25, //btwn 0 and 1, default 0 how much of the item is on page
  rootMargin: "0px", //must be in px or %
};
const sectionObserver = new IntersectionObserver((entries, sectionObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      sidebar.classList.toggle("visible");
    } else {
      return;
    }
  });
}, options);
sectionObserver.observe(projectSection);

// Section observer for contact section
const contactOptions = {
  root: null, //viewport, default null
  threshold: 0, //btwn 0 and 1, default 0 how much of the item is on page
  rootMargin: "0px", //must be in px or %
};
const contactSectionObserver = new IntersectionObserver(
  (entries, contactSectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sidebar.classList.toggle("hidden");
      } else {
        return;
      }
    });
  },
  contactOptions
);
contactSectionObserver.observe(contactSection);
/***********************************************************/
// Project variables
const projects = document.querySelectorAll(".project");

// observer for projects
const projectOptions = {
  threshold: 0, //btwn 0 and 1, default 0 how much of the item is on page
  rootMargin: "0px 0px -50% 0px", //must be in px or %
};
const projectSlideIn = new IntersectionObserver((entries, projectSlideIn) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.toggle("slide-in");
      projectSlideIn.unobserve(entry.target);
    } else {
      return;
    }
  });
}, projectOptions);

projects.forEach((project) => {
  projectSlideIn.observe(project);
});

/***********************************************************/
// Resume display variables
const resumeContainer = document.querySelector(".resume-container");
const resumeBtn = document.querySelector("#resume-btn");

resumeBtn.addEventListener("click", () => {
  resumeContainer.classList.toggle("active");
});

/***********************************************************/

/***********************************************************/
