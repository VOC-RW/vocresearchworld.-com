
/* VOC LEARNING ACADEMY
   Main JavaScript
*/

(function () {
  "use strict";

  // Update copyright year automatically
  const yearElements = document.querySelectorAll("[data-current-year]");

  yearElements.forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  // Smooth scrolling for internal navigation
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Accessible navigation state
  const navigation = document.querySelector(".header nav");

  if (navigation) {
    navigation.setAttribute("aria-label", "Main navigation");
  }

  // Mark the page as ready
  document.documentElement.classList.add("academy-ready");

  console.info("VOC Learning Academy loaded successfully.");
})();
