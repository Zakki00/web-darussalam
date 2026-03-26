const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");

  if (!navLinks.classList.contains("show")) {
    // Pastikan kondisi awal ter-render dulu
    requestAnimationFrame(() => {
      setTimeout(() => {
        navLinks.classList.add("show");
      }, 400); // kasih jeda sedikit biar smooth
    });
  } else {
    navLinks.classList.remove("show");
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        navLinks.classList.remove("show");
        menuToggle.classList.remove("active");
      }, 600);
    });
  });
});
