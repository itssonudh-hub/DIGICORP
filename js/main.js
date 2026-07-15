document.addEventListener('DOMContentLoaded', function() {

  // Preloader
  var pre = document.getElementById('preloader');
  if (pre) window.addEventListener('load', function() { setTimeout(function(){ pre.classList.add('hidden'); }, 1200); });

  // Progress bar
  var bar = document.getElementById('progress-bar');
  if (bar) window.addEventListener('scroll', function() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
  });

  // Navbar scroll
  var nav = document.getElementById('navbar');
  if (nav) window.addEventListener('scroll', function() { nav.classList.toggle('scrolled', window.scrollY > 20); });

  // Hamburger
  var hbg = document.getElementById('hamburger');
  var mob = document.getElementById('mobNav');
  if (hbg && mob) {
    hbg.addEventListener('click', function() { hbg.classList.toggle('open'); mob.classList.toggle('open'); });
  }

  // Mobile dropdown
  var dBtn = document.getElementById('mobDdBtn');
  var dMenu = document.getElementById('mobSvcGrid');
  if (dBtn && dMenu) {
    dBtn.addEventListener('click', function() { dMenu.classList.toggle('open'); });
  }

  // Close mob nav on link
  if (mob) mob.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() { if(hbg) hbg.classList.remove('open'); mob.classList.remove('open'); });
  });

  // Rotating text
  var rt = document.getElementById('rotatingText');
  if (rt) {
    var words = ['Business','Instagram','Website','Brand','Revenue','Presence'];
    var idx = 0;
    rt.style.transition = 'opacity 0.3s, transform 0.3s';
    setInterval(function() {
      rt.style.opacity = '0'; rt.style.transform = 'translateY(-8px)';
      setTimeout(function() { idx = (idx+1) % words.length; rt.textContent = words[idx]; rt.style.opacity = '1'; rt.style.transform = 'translateY(0)'; }, 300);
    }, 2200);
  }

  // Reveal on scroll
  var revEls = document.querySelectorAll('.reveal');
  if (revEls.length) {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    revEls.forEach(function(el) { obs.observe(el); });
  }

  // FAQ
  document.querySelectorAll('.faq-q').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = btn.closest('.faq-item');
      var open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(o){ o.classList.remove('open'); });
      if (!open) item.classList.add('open');
    });
  });

  // FAB top
  var fabTop = document.getElementById('fabTop');
  if (fabTop) {
    window.addEventListener('scroll', function() { fabTop.classList.toggle('show', window.scrollY > 400); });
    fabTop.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  // Exit popup
  var exitOv = document.getElementById('exitOverlay');
  var exitCl = document.getElementById('exitClose');
  if (exitOv && !sessionStorage.getItem('exitShown')) {
    var shown = false;
    document.addEventListener('mouseleave', function(e) {
      if (e.clientY < 10 && !shown) { shown = true; sessionStorage.setItem('exitShown','1'); exitOv.classList.add('show'); }
    });
    if (exitCl) exitCl.addEventListener('click', function() { exitOv.classList.remove('show'); });
    exitOv.addEventListener('click', function(e) { if(e.target===exitOv) exitOv.classList.remove('show'); });
  }

  // Cookie
  var cookieBar = document.getElementById('cookieBar');
  if (cookieBar) {
    if (localStorage.getItem('cookieOk')) { cookieBar.classList.add('hidden'); }
    var ca = document.getElementById('cookieAccept');
    var cd = document.getElementById('cookieDecline');
    if (ca) ca.addEventListener('click', function() { localStorage.setItem('cookieOk','1'); cookieBar.classList.add('hidden'); });
    if (cd) cd.addEventListener('click', function() { cookieBar.classList.add('hidden'); });
  }

  // Contact form
  var form = document.getElementById('contactForm');
  if (form) {
    var msgField = document.getElementById('msgField');
    var charCount = document.getElementById('charCount');
    if (msgField && charCount) msgField.addEventListener('input', function() { charCount.textContent = msgField.value.length + ' / 500'; });

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var valid = true;
      form.querySelectorAll('.form-group').forEach(function(g) {
        var inp = g.querySelector('input,textarea,select');
        if (!inp) return;
        g.classList.remove('error');
        if (inp.required && !inp.value.trim()) { g.classList.add('error'); valid = false; }
        if (inp.type==='email' && inp.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.value)) { g.classList.add('error'); valid = false; }
      });
      if (!valid) return;
      var btn = form.querySelector('.btn-talk-lg');
      btn.textContent = 'Sending...'; btn.disabled = true;
      fetch(form.action, { method:'POST', body: new FormData(form), headers:{'Accept':'application/json'} })
        .then(function(r) {
          if (r.ok) { form.style.display='none'; document.getElementById('formSuccess').style.display='block'; }
          else { btn.textContent='Send message'; btn.disabled=false; }
        }).catch(function() { btn.textContent='Send message'; btn.disabled=false; });
    });
  }

  // Mobile bottom nav active
  var cur = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.mbn-btn').forEach(function(b) {
    if (b.getAttribute('href') === cur) b.classList.add('active');
  });

});
