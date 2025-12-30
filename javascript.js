const stickyHeaders = document.querySelectorAll(".sticky-header");

stickyHeaders.forEach((header) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.intersectionRatio < 1) {
        header.classList.add("is-stuck");
      } else {
        header.classList.remove("is-stuck");
      }
    },
    { threshold: [1] }
  );

  observer.observe(header);
});

function updateActiveNav() {
  if (window.innerWidth > 1024) {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    let currentSection = "";
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition + windowHeight >= documentHeight - 50) {
      currentSection = sections[sections.length - 1].getAttribute("id");
    } else {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop - windowHeight / 2) {
          currentSection = section.getAttribute("id");
        }
      });
    }

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }
}

// Run on scroll
window.addEventListener("scroll", updateActiveNav);

// Run on load
window.addEventListener("load", updateActiveNav);

// Run immediately
updateActiveNav();
