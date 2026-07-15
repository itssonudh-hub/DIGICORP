document.addEventListener('DOMContentLoaded', function() {

  // Custom smooth scroll (eased, accounts for fixed navbar height, respects reduced-motion)
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function easeInOutQuad(t) { return t < 0.5 ? 2*t*t : 1-Math.pow(-2*t+2,2)/2; }
  function smoothScrollTo(targetY, duration) {
    duration = duration || 650;
    var startY = window.scrollY;
    var diff = targetY - startY;
    if (reduceMotion || !diff) { window.scrollTo(0, targetY); return; }
    var startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      window.scrollTo(0, startY + diff * easeInOutQuad(progress));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function scrollToEl(el) {
    var navEl = document.getElementById('navbar');
    var offset = (navEl ? navEl.offsetHeight : 68) + 16;
    var y = el.getBoundingClientRect().top + window.scrollY - offset;
    smoothScrollTo(Math.max(y, 0));
  }
  // Wire up any in-page anchor links (e.g. href="#services") site-wide
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var id = a.getAttribute('href').slice(1);
      var target = document.getElementById(id);
      if (target) { e.preventDefault(); scrollToEl(target); history.pushState(null, '', '#' + id); }
    });
  });

  // Digital Presence Snapshot (interactive self-audit)
  var snapItems = document.querySelectorAll('.snap-item');
  if (snapItems.length) {
    var ringFill = document.getElementById('snapRingFill');
    var scoreEl = document.getElementById('snapScore');
    var verdictEl = document.getElementById('snapVerdict');
    var circumference = 439.8;
    function updateSnapshot() {
      var total = 0;
      snapItems.forEach(function(item) {
        if (item.classList.contains('checked')) total += parseInt(item.getAttribute('data-points'), 10);
      });
      scoreEl.textContent = total;
      var offset = circumference - (circumference * total / 100);
      ringFill.style.strokeDashoffset = offset;
      var msg;
      if (total === 0) msg = "Tick what's already true for your business to see where you stand.";
      else if (total <= 35) msg = "There's real room to grow here — most of the basics are still missing. That's actually the easiest stage to make fast progress from.";
      else if (total <= 65) msg = "You've got a foundation in place, but a few gaps are likely costing you leads every month.";
      else if (total <= 85) msg = "Solid presence overall. The gaps left are usually where the next real jump in results comes from.";
      else msg = "Strong digital presence. At this stage it's about compounding what's already working, not fixing basics.";
      verdictEl.textContent = msg;
    }
    snapItems.forEach(function(item) {
      item.addEventListener('click', function() { item.classList.toggle('checked'); updateSnapshot(); });
    });
    updateSnapshot();
  }

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
    fabTop.addEventListener('click', function() { smoothScrollTo(0, 550); });
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
