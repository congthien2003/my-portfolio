window.addEventListener("scroll", () => {
  const header = document.querySelector("#header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Mobile menu functionality
const mobileMenuBtn = document.createElement("button");
mobileMenuBtn.className = "mobile-menu-btn";
mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector(".menu").prepend(mobileMenuBtn);

mobileMenuBtn.addEventListener("click", () => {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
  mobileMenuBtn.innerHTML = menu.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const menu = document.querySelector(".menu");
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  if (!menu.contains(e.target) && menu.classList.contains("active")) {
    menu.classList.remove("active");
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const menu = document.querySelector(".menu");
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      document.querySelector(".mobile-menu-btn").innerHTML =
        '<i class="fas fa-bars"></i>';
    }
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Initialize VANTA.NET with enhanced settings
VANTA.NET({
  el: "#root",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 500.0,
  minWidth: 500.0,
  scale: 1.5,
  scaleMobile: 2.0,
  color: 0x3f99ff,
  backgroundColor: 0x0a0a0a,
  points: 8.0,
  maxDistance: 25.0,
  spacing: 20.0,
  showLines: true,
});
