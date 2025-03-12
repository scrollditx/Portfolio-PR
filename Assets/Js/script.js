document.querySelectorAll(".portfolio-item").forEach((item, index) => {
  item.addEventListener("click", () => {
    const carousel = document.querySelector("#portfolioCarousel");
    const bsCarousel = new bootstrap.Carousel(carousel);
    bsCarousel.to(index);
  });
});

// Function to handle active nav links based on scroll position
function handleNavigation() {
  // Get all sections that have an ID defined
  const sections = document.querySelectorAll("section[id]");
  // Get all nav links
  const navLinks = document.querySelectorAll(".list-unstyled li a");

  // Add scroll event listener
  window.addEventListener("scroll", () => {
    // Get current scroll position
    let scrollY = window.scrollY;

    // Loop through sections to get height, top and ID values
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute("id");

      // Check if we've scrolled to the section
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        // Remove active class from all links
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        // Add active class to corresponding nav link
        document
          .querySelector(`.list-unstyled li a[href*=${sectionId}]`)
          ?.classList.add("active");
      }
    });
  });

  // Handle click events
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", handleNavigation);
