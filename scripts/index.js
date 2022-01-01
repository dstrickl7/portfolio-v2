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
const heroSection = document.querySelector(".hero");
// Section observer for navbar
const navOptions = {
  root: null, //viewport, default null
  threshold: 0, //btwn 0 and 1, default 0 how much of the item is on page
  rootMargin: "0px 0px -100%  0px", //must be in px or %
};
const stickNavbar = new IntersectionObserver((entries, stickNavbar) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navbar.classList.add("scrolled");
    } else {
      return;
    }
  });
}, navOptions);
stickNavbar.observe(projectSection);

/*** Unstick navbar ***/
const navOptions2 = {
  root: null, //viewport, default null
  threshold: 0, //btwn 0 and 1, default 0 how much of the item is on page
  rootMargin: "0px", //must be in px or %
};

const unstickNavbar = new IntersectionObserver((entries, stickNavbar) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navbar.classList.remove("scrolled");
    } else {
      return;
    }
  });
}, navOptions2);
unstickNavbar.observe(heroSection);

/***********************************************************/
// Social icon sidebar variables
const sidebar = document.querySelector(".icon-bar");
const sections = document.querySelectorAll("section");
const contactSection = document.querySelector("#contact");

/*** Show sidebar ***/
const sidebarOptions = {
  root: null, //viewport, default null
  threshold: 0, //btwn 0 and 1, default 0 how much of the item is on page
  rootMargin: "-50% 0px", //must be in px or %
};

const showSidebar = new IntersectionObserver((entries, showSidebar) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      sidebar.classList.add("visible");
    } else {
      return;
    }
  });
}, sidebarOptions);
sections.forEach((section) => {
  showSidebar.observe(section);
});

/*** Hide sidebar ***/
const sidebarOptions2 = {
  root: null, //viewport, default null
  threshold: 0.85, //btwn 0 and 1, default 0 how much of the item is on page
  rootMargin: "0px", //must be in px or %
};

const hideSidebar = new IntersectionObserver((entries, hideSidebar) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      sidebar.classList.remove("visible");
    } else {
      return;
    }
  });
}, sidebarOptions2);
hideSidebar.observe(contactSection);
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
