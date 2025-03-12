// Handle navigation active states
function handleNavigation() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav ul li a[href^='#']");

  window.addEventListener("scroll", () => {
      let current = "";
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
              current = section.getAttribute("id");
          }
      });

      navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === current) {
              link.classList.add("active");
          }
      });
  });
}

// Handle dropdown menu interactions
function initializeDropdowns() {
  const dropdownItems = document.querySelectorAll('.dropdown');
  
  dropdownItems.forEach(item => {
      // Show dropdown on hover
      item.addEventListener('mouseenter', () => {
          const dropdownMenu = item.querySelector('.dropdown-menu');
          if (dropdownMenu) {
              dropdownMenu.classList.add('show');
          }
      });
      
      // Hide dropdown when mouse leaves
      item.addEventListener('mouseleave', () => {
          const dropdownMenu = item.querySelector('.dropdown-menu');
          if (dropdownMenu) {
              dropdownMenu.classList.remove('show');
          }
      });
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  handleNavigation();
  initializeDropdowns();
});