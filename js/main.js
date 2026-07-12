// Lucide icons CDN load
(function() {
  var s = document.createElement('script');
  s.src = 'https://unpkg.com/lucide@latest/dist/umd/lucide.min.js';
  s.onload = function() { if (window.lucide) lucide.createIcons(); };
  document.head.appendChild(s);
})();

// Navbar scroll effect
var navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  if (window.scrollY > 10) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// Mobile menu
var menuToggle = document.getElementById('menuToggle');
var navLinks = document.getElementById('navLinks');
if (menuToggle) {
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('open');
  });
}

// Mobile dropdown
document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
  toggle.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      toggle.closest('.dropdown').classList.toggle('open');
    }
  });
});

// Close menu on link click
document.querySelectorAll('.nav-links a:not(.dropdown-toggle)').forEach(function(link) {
  link.addEventListener('click', function() { navLinks.classList.remove('open'); });
});

// Init lucide if already loaded
document.addEventListener('DOMContentLoaded', function() {
  if (window.lucide) lucide.createIcons();
});
