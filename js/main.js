// Load Lucide icons from CDN
function loadLucide() {
  if (window.lucide) {
    lucide.createIcons();
    return;
  }
  var s = document.createElement('script');
  s.src = 'https://unpkg.com/lucide@0.383.0/dist/umd/lucide.min.js';
  s.onload = function() { 
    if (window.lucide) lucide.createIcons(); 
  };
  // Fallback: jsDelivr CDN
  s.onerror = function() {
    var s2 = document.createElement('script');
    s2.src = 'https://cdn.jsdelivr.net/npm/lucide@0.383.0/dist/umd/lucide.min.js';
    s2.onload = function() { if (window.lucide) lucide.createIcons(); };
    document.head.appendChild(s2);
  };
  document.head.appendChild(s);
}

// Navbar scroll effect
var navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

// Mobile menu
var menuToggle = document.getElementById('menuToggle');
var navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
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
  link.addEventListener('click', function() { 
    if (navLinks) navLinks.classList.remove('open'); 
  });
});

// Init
document.addEventListener('DOMContentLoaded', loadLucide);
if (document.readyState !== 'loading') loadLucide();
