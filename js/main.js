// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Mobile dropdown toggle (tap to expand on small screens)
document.querySelectorAll('.dropdown-toggle').forEach((toggle) => {
  toggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      toggle.closest('.dropdown').classList.toggle('open');
    }
  });
});

// Close mobile menu when clicking a normal link
document.querySelectorAll('.nav-links a:not(.dropdown-toggle)').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Navbar shadow on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 2px 12px rgba(42, 29, 20, 0.06)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// (scroll reveal removed — kept content always visible for reliability)
