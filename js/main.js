// ===== LUCIDE ICONS =====
function loadLucide() {
  if (window.lucide) { lucide.createIcons(); return; }
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/lucide@0.383.0/dist/umd/lucide.min.js';
  s.onload = function() { if (window.lucide) lucide.createIcons(); };
  s.onerror = function() {
    var s2 = document.createElement('script');
    s2.src = 'https://unpkg.com/lucide@0.383.0/dist/umd/lucide.min.js';
    s2.onload = function() { if (window.lucide) lucide.createIcons(); };
    document.head.appendChild(s2);
  };
  document.head.appendChild(s);
}

// ===== PRELOADER =====
function initPreloader() {
  var pre = document.getElementById('preloader');
  if (!pre) return;
  window.addEventListener('load', function() {
    setTimeout(function() { pre.classList.add('hidden'); }, 1200);
  });
}

// ===== PROGRESS BAR =====
function initProgressBar() {
  var bar = document.getElementById('progress-bar');
  if (!bar) return;
  window.addEventListener('scroll', function() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var p = h > 0 ? (window.scrollY / h) * 100 : 0;
    bar.style.width = p + '%';
  });
}

// ===== NAVBAR =====
function initNavbar() {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
  var toggle = document.getElementById('menuToggle');
  var mobileNav = document.getElementById('mobileNav');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', function() {
    toggle.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });

  // Dropdown in mobile
  var dToggle = document.getElementById('mobileDropToggle');
  var dMenu = document.getElementById('mobileDropMenu');
  if (dToggle && dMenu) {
    dToggle.addEventListener('click', function() {
      dMenu.classList.toggle('open');
      dToggle.querySelector('.caret').textContent = dMenu.classList.contains('open') ? '▴' : '▾';
    });
  }

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() {
      toggle.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });
}

// ===== ROTATING TEXT =====
function initRotatingText() {
  var el = document.getElementById('rotatingText');
  if (!el) return;
  var words = ['Instagram', 'Website', 'Brand', 'Business', 'Presence', 'Revenue'];
  var i = 0;
  el.textContent = words[0];
  setInterval(function() {
    el.style.opacity = '0';
    el.style.transform = 'translateY(-10px)';
    setTimeout(function() {
      i = (i + 1) % words.length;
      el.textContent = words[i];
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 300);
  }, 2000);
  el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
}

// ===== SCROLL REVEAL =====
function initReveal() {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function(el) { observer.observe(el); });
}

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  var target = parseFloat(el.dataset.target);
  var suffix = el.dataset.suffix || '';
  var prefix = el.dataset.prefix || '';
  var duration = 1800;
  var start = performance.now();
  function update(now) {
    var elapsed = now - start;
    var progress = Math.min(elapsed / duration, 1);
    var ease = 1 - Math.pow(1 - progress, 3);
    var val = target * ease;
    el.textContent = prefix + (Number.isInteger(target) ? Math.floor(val) : val.toFixed(1)) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function initCounters() {
  var counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(function(c) { observer.observe(c); });
}

// ===== FAQ TOGGLE =====
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(o) { o.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ===== BACK TO TOP =====
function initFAB() {
  var fabTop = document.getElementById('fabTop');
  if (!fabTop) return;
  window.addEventListener('scroll', function() {
    fabTop.classList.toggle('show', window.scrollY > 400);
  });
  fabTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== EXIT POPUP =====
function initExitPopup() {
  var popup = document.getElementById('exitPopup');
  if (!popup) return;
  if (sessionStorage.getItem('exitShown')) return;
  var shown = false;
  document.addEventListener('mouseleave', function(e) {
    if (e.clientY < 10 && !shown) {
      shown = true;
      sessionStorage.setItem('exitShown', '1');
      popup.classList.add('show');
    }
  });
  var close = document.getElementById('exitClose');
  if (close) close.addEventListener('click', function() { popup.classList.remove('show'); });
  popup.addEventListener('click', function(e) { if (e.target === popup) popup.classList.remove('show'); });
}

// ===== COOKIE BANNER =====
function initCookie() {
  var banner = document.getElementById('cookieBanner');
  if (!banner) return;
  if (localStorage.getItem('cookieAccepted')) { banner.classList.add('hidden'); return; }
  var accept = document.getElementById('cookieAccept');
  var decline = document.getElementById('cookieDecline');
  if (accept) accept.addEventListener('click', function() {
    localStorage.setItem('cookieAccepted', '1');
    banner.classList.add('hidden');
  });
  if (decline) decline.addEventListener('click', function() { banner.classList.add('hidden'); });
}

// ===== CONTACT FORM =====
function initContactForm() {
  var form = document.getElementById('contactForm');
  if (!form) return;

  // Char counter
  var msg = document.getElementById('msgField');
  var counter = document.getElementById('charCount');
  if (msg && counter) {
    msg.addEventListener('input', function() {
      counter.textContent = msg.value.length + '/500 characters';
    });
  }

  // Validation
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var valid = true;

    form.querySelectorAll('.form-group').forEach(function(g) {
      var inp = g.querySelector('input,textarea,select');
      if (!inp) return;
      g.classList.remove('error');
      if (inp.required && !inp.value.trim()) {
        g.classList.add('error');
        valid = false;
      }
      if (inp.type === 'email' && inp.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.value)) {
        g.classList.add('error');
        valid = false;
      }
    });

    if (!valid) return;

    var btn = form.querySelector('.form-submit');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function(r) {
      if (r.ok) {
        form.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
      } else {
        btn.textContent = 'Send message';
        btn.disabled = false;
        alert('Something went wrong. Please try WhatsApp or email us directly.');
      }
    }).catch(function() {
      btn.textContent = 'Send message';
      btn.disabled = false;
    });
  });
}

// ===== MOBILE BOTTOM NAV =====
function initMobileBottomNav() {
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.mobile-nav-btn').forEach(function(btn) {
    if (btn.dataset.page === current) btn.classList.add('active');
    btn.addEventListener('click', function() {
      if (btn.dataset.href) window.location.href = btn.dataset.href;
    });
  });
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', function() {
  initPreloader();
  initProgressBar();
  initNavbar();
  initMobileMenu();
  initRotatingText();
  initReveal();
  initCounters();
  initFAQ();
  initFAB();
  initExitPopup();
  initCookie();
  initContactForm();
  initMobileBottomNav();
  loadLucide();
});
