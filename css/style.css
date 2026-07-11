PHONE = "+91 99517 75793"
PHONE_HREF = "tel:+919951775793"
EMAIL = "info@digicorp.com"
EMAIL_HREF = "mailto:info@digicorp.com"
FB = "https://www.facebook.com/profile.php?id=61591775640880"
IG = "https://www.instagram.com/digicorp.hyd/"
LI = "https://www.linkedin.com/company/digicorp-hyd"
YEAR = "2026"

# DC monogram SVG (purple, inline)
LOGO_SVG = '''<svg class="logo-svg" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 8 L8 34 L18 34 C26 34 32 28 32 21 C32 14 26 8 18 8 Z" stroke="#5B2D8E" stroke-width="3" stroke-linejoin="round" fill="none"/>
  <path d="M22 15 C28 15 34 17.5 34 21 C34 24.5 28 27 22 27" stroke="#5B2D8E" stroke-width="3" stroke-linecap="round" fill="none"/>
</svg>'''

def navbar(active=""):
    items = [
        ("Home","index.html"),
        ("About","about.html"),
        ("Portfolio","portfolio.html"),
        ("Blog","blog.html"),
        ("Contact","contact.html"),
    ]
    service_links = [
        ("search","SEO","seo.html"),
        ("bar-chart-2","Google Ads","google-ads.html"),
        ("instagram","Social Media","social-media.html"),
        ("layout","Web Design","web-design.html"),
        ("video","Video Editing","video-editing.html"),
        ("file-text","Content Marketing","content-marketing.html"),
        ("pen-tool","Graphics Design","graphics-design.html"),
        ("award","Branding Strategy","branding.html"),
    ]
    svc_html = ""
    for icon, label, href in service_links:
        svc_html += f'<a href="{href}"><i data-lucide="{icon}"></i>{label}</a>\n'

    links_html = '<a href="index.html"' + (' class="active"' if active=="index" else '') + '>Home</a>\n'
    links_html += f'''<div class="dropdown">
        <a href="services.html" class="dropdown-toggle{'  active' if active in ["services","seo","google-ads","social-media","web-design","video-editing","content-marketing","graphics-design","branding"] else ''}">Services <span class="caret">▾</span></a>
        <div class="dropdown-menu">{svc_html}</div>
      </div>'''
    for label, href in items[1:]:
        slug = href.replace(".html","")
        cls = ' class="active"' if active==slug else ''
        links_html += f'<a href="{href}"{cls}>{label}</a>\n'

    return f'''<header class="navbar" id="navbar">
  <div class="container navbar-inner">
    <a href="index.html" class="logo-wrap">
      {LOGO_SVG}
      <span class="logo-text">DigiCorp</span>
    </a>
    <nav class="nav-links" id="navLinks">
      {links_html}
    </nav>
    <a href="contact.html" class="btn-cta">Get Quote</a>
    <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>'''

def footer():
    return f'''<footer class="footer">
  <div class="container footer-inner">
    <div class="footer-col">
      <div class="footer-logo-wrap">
        {LOGO_SVG}
        <span class="footer-logo-text">DigiCorp</span>
      </div>
      <p class="footer-desc">A full-service digital marketing agency helping businesses grow with honest strategy and real execution. Based in Hyderabad, serving clients pan-India.</p>
      <div class="footer-social">
        <a href="{FB}" target="_blank" rel="noopener" aria-label="Facebook"><i data-lucide="facebook"></i></a>
        <a href="{IG}" target="_blank" rel="noopener" aria-label="Instagram"><i data-lucide="instagram"></i></a>
        <a href="{LI}" target="_blank" rel="noopener" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <a href="seo.html"><i data-lucide="search"></i>SEO</a>
      <a href="google-ads.html"><i data-lucide="bar-chart-2"></i>Google Ads</a>
      <a href="social-media.html"><i data-lucide="instagram"></i>Social Media</a>
      <a href="web-design.html"><i data-lucide="layout"></i>Web Design</a>
      <a href="video-editing.html"><i data-lucide="video"></i>Video Editing</a>
      <a href="content-marketing.html"><i data-lucide="file-text"></i>Content Marketing</a>
      <a href="graphics-design.html"><i data-lucide="pen-tool"></i>Graphics Design</a>
      <a href="branding.html"><i data-lucide="award"></i>Branding Strategy</a>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <a href="about.html"><i data-lucide="users"></i>About Us</a>
      <a href="portfolio.html"><i data-lucide="briefcase"></i>Portfolio</a>
      <a href="blog.html"><i data-lucide="book-open"></i>Blog</a>
      <a href="contact.html"><i data-lucide="mail"></i>Contact</a>
    </div>
    <div class="footer-col">
      <h4>Get in Touch</h4>
      <a href="{PHONE_HREF}"><i data-lucide="phone"></i>{PHONE}</a>
      <a href="{EMAIL_HREF}"><i data-lucide="mail"></i>{EMAIL}</a>
      <a href="{FB}" target="_blank"><i data-lucide="facebook"></i>Facebook</a>
      <a href="{IG}" target="_blank"><i data-lucide="instagram"></i>Instagram</a>
      <a href="{LI}" target="_blank"><i data-lucide="linkedin"></i>LinkedIn</a>
    </div>
  </div>
  <div class="container footer-bottom">
    <p>© {YEAR} DigiCorp. All rights reserved.</p>
    <div class="footer-bottom-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
    </div>
  </div>
</footer>'''

def page(title, meta_desc, active, head_extra, body):
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — DigiCorp</title>
<meta name="description" content="{meta_desc}">
<link rel="stylesheet" href="css/style.css">
{head_extra}
</head>
<body>
{navbar(active)}
{body}
{footer()}
<script src="js/main.js"></script>
</body>
</html>'''

def hero_rings():
    return '''<div class="hero-rings" aria-hidden="true">
    <span class="ring ring-1"></span>
    <span class="ring ring-2"></span>
    <span class="ring ring-3"></span>
  </div>'''

def ring_visual():
    return '''<div class="why-visual" aria-hidden="true">
    <div class="ring-stack">
      <div class="ring-stack-circle c1"></div>
      <div class="ring-stack-circle c2"></div>
      <div class="ring-stack-circle c3"></div>
      <div class="ring-stack-circle c4"></div>
    </div>
  </div>'''

# ── INDEX ─────────────────────────────────────────────────────────────────────
index_body = f'''
<section class="hero">
  {hero_rings()}
  <div class="container hero-inner">
    <p class="eyebrow">Digital Marketing Agency — Hyderabad</p>
    <h1>Growth that compounds,<br>not just clicks that disappear.</h1>
    <p class="hero-sub">We build SEO, ads, content, and brand systems that grow stronger with every cycle — like rings in a tree. No fake metrics, no vanity numbers, just work that earns results.</p>
    <div class="hero-actions">
      <a href="contact.html" class="btn-primary">Start a project</a>
      <a href="portfolio.html" class="btn-secondary">See our work</a>
    </div>
  </div>
</section>

<section class="trust-strip">
  <div class="container trust-inner">
    <div class="trust-item"><span class="trust-num">8</span><span class="trust-label">Core services</span></div>
    <div class="trust-item"><span class="trust-num">1355%</span><span class="trust-label">Max Instagram growth</span></div>
    <div class="trust-item"><span class="trust-num">Pan-India</span><span class="trust-label">Client reach</span></div>
    <div class="trust-item"><span class="trust-num">0</span><span class="trust-label">Fake metrics, ever</span></div>
  </div>
</section>

<section class="services">
  <div class="container">
    <p class="eyebrow center">What we do</p>
    <h2 class="section-title center">Eight disciplines, one growth system</h2>
    <p class="section-sub center">Each service works on its own. Together, they compound.</p>
    <div class="services-grid">
      <a href="seo.html" class="service-card"><div class="service-icon"><i data-lucide="search"></i></div><h3>SEO</h3><p>Rank higher, get found by people already looking for you.</p></a>
      <a href="google-ads.html" class="service-card"><div class="service-icon"><i data-lucide="bar-chart-2"></i></div><h3>Google Ads</h3><p>Paid campaigns built around real conversions, not just clicks.</p></a>
      <a href="social-media.html" class="service-card"><div class="service-icon"><i data-lucide="instagram"></i></div><h3>Social Media</h3><p>Content and strategy that builds an audience that sticks around.</p></a>
      <a href="web-design.html" class="service-card"><div class="service-icon"><i data-lucide="layout"></i></div><h3>Web Design</h3><p>Fast, clean websites built to convert visitors into customers.</p></a>
      <a href="video-editing.html" class="service-card"><div class="service-icon"><i data-lucide="video"></i></div><h3>Video Editing</h3><p>Reels, ads, and brand films cut for attention and retention.</p></a>
      <a href="content-marketing.html" class="service-card"><div class="service-icon"><i data-lucide="file-text"></i></div><h3>Content Marketing</h3><p>Blogs and copy that build authority and bring organic traffic.</p></a>
      <a href="graphics-design.html" class="service-card"><div class="service-icon"><i data-lucide="pen-tool"></i></div><h3>Graphics Design</h3><p>Visual identity that looks consistent across every touchpoint.</p></a>
      <a href="branding.html" class="service-card"><div class="service-icon"><i data-lucide="award"></i></div><h3>Branding Strategy</h3><p>Positioning and voice that make a business memorable.</p></a>
    </div>
  </div>
</section>

<section class="why">
  <div class="container why-inner">
    <div class="why-text">
      <p class="eyebrow">Why DigiCorp</p>
      <h2 class="section-title">We report what's real, not what looks good in a screenshot</h2>
      <p class="why-desc">Most agencies sell you a number. We build you a system. Every report we send is a number you can verify yourself — no inflated followers, no manufactured engagement, no smoke.</p>
      <ul class="why-list">
        <li><i data-lucide="check-circle"></i><span><strong>Honest reporting.</strong> What moved, what didn't, and why — every month.</span></li>
        <li><i data-lucide="check-circle"></i><span><strong>Niche-aware strategy.</strong> A gym's content plan should never look like a law firm's.</span></li>
        <li><i data-lucide="check-circle"></i><span><strong>One team, full stack.</strong> Strategy, design, and execution under one roof.</span></li>
        <li><i data-lucide="check-circle"></i><span><strong>Pan-India reach.</strong> Based in Hyderabad, serving clients across India.</span></li>
      </ul>
    </div>
    {ring_visual()}
  </div>
</section>

<section class="process">
  <div class="container">
    <p class="eyebrow center">How we work</p>
    <h2 class="section-title center">From audit to growth, in four stages</h2>
    <div class="process-grid">
      <div class="process-step"><span class="process-num">01</span><h3>Audit</h3><p>We study your market, your competitors, and where you're actually losing ground right now.</p></div>
      <div class="process-step"><span class="process-num">02</span><h3>Strategy</h3><p>A plan built around your specific business — not a generic template recycled from the last client.</p></div>
      <div class="process-step"><span class="process-num">03</span><h3>Execute</h3><p>Content, campaigns, and design go live on a consistent, accountable schedule.</p></div>
      <div class="process-step"><span class="process-num">04</span><h3>Compound</h3><p>We track what works, cut what doesn't, and reinvest in what keeps growing.</p></div>
    </div>
  </div>
</section>

<section class="testimonials">
  <div class="container">
    <p class="eyebrow center">What clients say</p>
    <h2 class="section-title center">Real feedback from real businesses</h2>
    <div class="testimonials-grid">
      <div class="testimonial-card">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-text">"Our Instagram went from 29 followers to over 400 in less than a year — completely organic. The content strategy they built actually made sense for our audience."</p>
        <div class="testimonial-author"><div class="testimonial-avatar">G</div><div><div class="testimonial-name">Government Institution</div><div class="testimonial-role">Hyderabad</div></div></div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-text">"They understood our niche from day one. Engagement doubled, reach went up 110%, and the content actually represented our brand — not some generic template."</p>
        <div class="testimonial-author"><div class="testimonial-avatar">F</div><div><div class="testimonial-name">Local Food Brand</div><div class="testimonial-role">Hyderabad</div></div></div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-text">"Website was built fast, looks great on mobile, and they handled the SEO setup end to end. Google indexed us within days of launch."</p>
        <div class="testimonial-author"><div class="testimonial-avatar">N</div><div><div class="testimonial-name">Non-Profit Organisation</div><div class="testimonial-role">Ranchi</div></div></div>
      </div>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container" style="text-align:center;">
    <h2>Ready to build something that actually grows?</h2>
    <p>Tell us about your business — we'll tell you exactly where the opportunity is.</p>
    <a href="contact.html" class="btn-primary">Get a free consultation</a>
  </div>
</section>
'''

with open("/home/claude/digicorp/index.html","w") as f:
    f.write(page("Home","DigiCorp is a full-service digital marketing agency in Hyderabad — SEO, Google Ads, social media, web design, video editing, content marketing, graphics, and branding.","index","",index_body))
print("index.html done")

# ── CONTACT ───────────────────────────────────────────────────────────────────
contact_css = '''<style>
.contact-wrap{display:grid;grid-template-columns:1fr 1.4fr;gap:60px;align-items:start;padding:60px 0 100px;}
.contact-info h2{font-family:var(--font-heading);font-size:28px;color:var(--brown-deep);margin-bottom:12px;}
.contact-info p{font-size:15px;color:var(--brown-mid);margin-bottom:30px;}
.contact-detail{display:flex;flex-direction:column;gap:18px;}
.contact-item{display:flex;gap:14px;align-items:flex-start;}
.contact-icon{width:42px;height:42px;border-radius:10px;background:var(--purple-pale);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.contact-icon svg{width:18px;height:18px;stroke:var(--purple);}
.contact-item-text strong{display:block;font-size:12px;color:var(--brown-muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:3px;}
.contact-item-text a,.contact-item-text span{font-size:15px;color:var(--brown-deep);font-weight:bold;}
.contact-item-text a:hover{color:var(--purple);}
.contact-social{display:flex;gap:10px;margin-top:24px;}
.contact-social a{display:flex;align-items:center;gap:8px;padding:9px 16px;border-radius:8px;border:1.5px solid rgba(42,29,20,0.12);font-size:13px;font-weight:bold;color:var(--brown-mid);transition:all 0.2s;}
.contact-social a:hover{border-color:var(--purple);color:var(--purple);}
.contact-social a svg{width:15px;height:15px;}
.contact-form-box{background:var(--white);border:1px solid rgba(42,29,20,0.07);border-radius:16px;padding:40px 36px;box-shadow:0 8px 30px rgba(42,29,20,0.06);}
.contact-form-box h3{font-family:var(--font-heading);font-size:22px;color:var(--brown-deep);margin-bottom:6px;}
.contact-form-box>p{font-size:14px;color:var(--brown-mid);margin-bottom:28px;}
.form-group{margin-bottom:18px;}
.form-group label{display:block;font-size:13px;font-weight:bold;color:var(--brown-deep);margin-bottom:6px;}
.form-group input,.form-group select,.form-group textarea{width:100%;padding:12px 16px;border:1.5px solid rgba(42,29,20,0.12);border-radius:8px;font-family:var(--font-body);font-size:14px;color:var(--brown-deep);background:var(--cream);transition:border-color 0.2s;outline:none;}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:var(--purple);}
.form-group textarea{resize:vertical;min-height:110px;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.form-submit{width:100%;padding:14px;background:var(--purple);color:var(--white);border:none;border-radius:8px;font-size:15px;font-weight:bold;cursor:pointer;transition:background 0.2s;}
.form-submit:hover{background:var(--purple-light);}
.wa-btn{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;padding:13px;background:#25D366;color:#fff;border-radius:8px;font-size:15px;font-weight:bold;margin-top:12px;transition:opacity 0.2s;}
.wa-btn:hover{opacity:0.88;}
.wa-btn svg{width:18px;height:18px;stroke:#fff;}
@media(max-width:860px){.contact-wrap{grid-template-columns:1fr;gap:36px;}.form-row{grid-template-columns:1fr;}}
</style>'''

contact_body = f'''
<section class="hero page-hero">
  {hero_rings()}
  <div class="container hero-inner">
    <p class="eyebrow">Get in touch</p>
    <h1 style="font-size:44px;">Let's talk about your business.</h1>
    <p class="hero-sub">Free consultation — no pitch, no pressure. Just a straight conversation about where your business stands and where it can go.</p>
  </div>
</section>

<section>
  <div class="container contact-wrap">
    <div class="contact-info">
      <h2>Reach us directly</h2>
      <p>Prefer to skip the form? WhatsApp or call works just as well — we respond within a few hours.</p>
      <div class="contact-detail">
        <div class="contact-item">
          <div class="contact-icon"><i data-lucide="phone"></i></div>
          <div class="contact-item-text"><strong>Phone / WhatsApp</strong><a href="{PHONE_HREF}">{PHONE}</a></div>
        </div>
        <div class="contact-item">
          <div class="contact-icon"><i data-lucide="mail"></i></div>
          <div class="contact-item-text"><strong>Email</strong><a href="{EMAIL_HREF}">{EMAIL}</a></div>
        </div>
        <div class="contact-item">
          <div class="contact-icon"><i data-lucide="map-pin"></i></div>
          <div class="contact-item-text"><strong>Location</strong><span>Hyderabad, Telangana, India</span></div>
        </div>
        <div class="contact-item">
          <div class="contact-icon"><i data-lucide="clock"></i></div>
          <div class="contact-item-text"><strong>Response time</strong><span>Within 24 hours</span></div>
        </div>
      </div>
      <div class="contact-social">
        <a href="{FB}" target="_blank"><i data-lucide="facebook"></i>Facebook</a>
        <a href="{IG}" target="_blank"><i data-lucide="instagram"></i>Instagram</a>
        <a href="{LI}" target="_blank"><i data-lucide="linkedin"></i>LinkedIn</a>
      </div>
    </div>
    <div class="contact-form-box">
      <h3>Send us a message</h3>
      <p>Tell us about your business and what you're looking to grow.</p>
      <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        <div class="form-row">
          <div class="form-group"><label>Your name</label><input type="text" name="name" placeholder="Your full name" required></div>
          <div class="form-group"><label>Phone number</label><input type="tel" name="phone" placeholder="+91 98765 43210"></div>
        </div>
        <div class="form-group"><label>Email address</label><input type="email" name="email" placeholder="you@company.com" required></div>
        <div class="form-group"><label>Service you're interested in</label>
          <select name="service">
            <option value="">Select a service</option>
            <option>SEO</option><option>Google Ads</option><option>Social Media Marketing</option>
            <option>Web Design</option><option>Video Editing</option><option>Content Marketing</option>
            <option>Graphics Design</option><option>Branding Strategy</option><option>Full package / Not sure yet</option>
          </select>
        </div>
        <div class="form-group"><label>Tell us about your business</label><textarea name="message" placeholder="What does your business do, and what are you trying to grow?"></textarea></div>
        <button type="submit" class="form-submit">Send message</button>
      </form>
      <a href="https://wa.me/919951775793?text=Hi%20DigiCorp%2C%20I%20want%20to%20discuss%20digital%20marketing%20for%20my%20business." class="wa-btn" target="_blank"><i data-lucide="message-circle"></i>Chat on WhatsApp instead</a>
    </div>
  </div>
</section>
'''

with open("/home/claude/digicorp/contact.html","w") as f:
    f.write(page("Contact","Get in touch with DigiCorp Hyderabad — free digital marketing consultation for SEO, social media, Google Ads, and web design.","contact",contact_css,contact_body))
print("contact.html done")

# ── ABOUT ─────────────────────────────────────────────────────────────────────
about_body = f'''
<section class="hero page-hero">
  {hero_rings()}
  <div class="container hero-inner">
    <p class="eyebrow">About DigiCorp</p>
    <h1 style="font-size:44px;">Built around one idea — earn it, don't fake it.</h1>
    <p class="hero-sub">We started DigiCorp because most marketing reports are written to impress, not to inform. We do the opposite — every number we show you is one you can verify yourself.</p>
  </div>
</section>

<section class="why">
  <div class="container why-inner">
    <div class="why-text">
      <p class="eyebrow">Our story</p>
      <h2 class="section-title">Real strategy, not recycled templates</h2>
      <p class="why-desc">DigiCorp was built on a simple frustration — too many agencies sell the same playbook to every client and call it "strategy." A gym, a law firm, and a clothing brand don't grow the same way, and they shouldn't be marketed the same way either.</p>
      <p class="why-desc">We work closely with each business to understand what's actually true about it — its strengths, its market, its real competition — before we plan a single post or campaign. Based in Hyderabad, we serve businesses across India.</p>
      <ul class="why-list">
        <li><i data-lucide="check-circle"></i><span><strong>Founded in Hyderabad</strong> — with deep knowledge of the local market and competition landscape.</span></li>
        <li><i data-lucide="check-circle"></i><span><strong>Pan-India reach</strong> — clients in Delhi, Kolkata, Ranchi, Mumbai, and more.</span></li>
        <li><i data-lucide="check-circle"></i><span><strong>Full transparency</strong> — every result explained, every month, no fluff.</span></li>
      </ul>
    </div>
    {ring_visual()}
  </div>
</section>

<section class="services">
  <div class="container">
    <p class="eyebrow center">What we stand for</p>
    <h2 class="section-title center">The principles behind every project</h2>
    <p class="section-sub center">These aren't slogans — they're how we actually work, on every account, every month.</p>
    <div class="services-grid">
      <div class="service-card"><div class="service-icon"><i data-lucide="shield-check"></i></div><h3>Honest numbers</h3><p>No inflated followers, no manufactured engagement. Every metric we report, you can verify yourself — on your own phone, in your own dashboard.</p></div>
      <div class="service-card"><div class="service-icon"><i data-lucide="target"></i></div><h3>Niche-first strategy</h3><p>We study your specific market, your competitors, and your audience before we plan a single piece of content or spend a single rupee on ads.</p></div>
      <div class="service-card"><div class="service-icon"><i data-lucide="eye"></i></div><h3>Full transparency</h3><p>Monthly reports that show what worked, what didn't, and what we're changing — written in plain language, not agency jargon.</p></div>
      <div class="service-card"><div class="service-icon"><i data-lucide="layers"></i></div><h3>One team, full stack</h3><p>Strategy, design, content, and execution handled under one roof — not outsourced in pieces to freelancers you never get to talk to.</p></div>
    </div>
  </div>
</section>

<section class="process">
  <div class="container">
    <p class="eyebrow center">Our approach</p>
    <h2 class="section-title center">How we work with every client</h2>
    <div class="process-grid">
      <div class="process-step"><span class="process-num">01</span><h3>Understand</h3><p>We learn your business, your goals, your competitors, and your audience before suggesting anything.</p></div>
      <div class="process-step"><span class="process-num">02</span><h3>Plan</h3><p>A specific strategy for your situation — not a generic package pulled from a price list.</p></div>
      <div class="process-step"><span class="process-num">03</span><h3>Execute</h3><p>Consistent delivery, on schedule. Content, campaigns, designs — all handled and tracked.</p></div>
      <div class="process-step"><span class="process-num">04</span><h3>Report</h3><p>Monthly reviews with honest numbers — what grew, what didn't, and what the plan is next month.</p></div>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container" style="text-align:center;">
    <h2>Want to work with a team that tells you the truth?</h2>
    <p>Let's talk about where your business actually stands — and where it can go.</p>
    <a href="contact.html" class="btn-primary">Get a free consultation</a>
  </div>
</section>
'''
with open("/home/claude/digicorp/about.html","w") as f:
    f.write(page("About Us","DigiCorp is a Hyderabad-based full-service digital marketing agency built on honest strategy, verified results, and deep market research.","about","",about_body))
print("about.html done")

# ── PORTFOLIO ─────────────────────────────────────────────────────────────────
port_css = '''<style>
.stats-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:60px;}
.portfolio-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}
.portfolio-card{background:var(--white);border:1px solid rgba(42,29,20,0.07);border-radius:16px;overflow:hidden;transition:all 0.25s ease;}
.portfolio-card:hover{transform:translateY(-6px);box-shadow:0 16px 40px rgba(91,45,142,0.1);}
.portfolio-thumb{height:180px;display:flex;align-items:center;justify-content:center;font-size:48px;}
.thumb-a{background:rgba(91,45,142,0.07);}
.thumb-b{background:rgba(91,45,142,0.12);}
.thumb-c{background:rgba(42,29,20,0.05);}
.thumb-d{background:rgba(200,100,50,0.07);}
.thumb-e{background:rgba(50,130,200,0.07);}
.portfolio-body{padding:24px;}
.portfolio-tag{display:inline-block;font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:var(--purple);background:var(--purple-pale);padding:4px 10px;border-radius:4px;margin-bottom:12px;}
.portfolio-body h3{font-family:var(--font-heading);font-size:18px;color:var(--brown-deep);margin-bottom:8px;}
.portfolio-body p{font-size:14px;color:var(--brown-mid);margin-bottom:14px;}
.portfolio-result{font-size:13px;font-weight:bold;color:var(--purple);padding-top:12px;border-top:1px solid rgba(42,29,20,0.06);display:flex;align-items:center;gap:8px;}
.portfolio-result svg{width:14px;height:14px;stroke:var(--purple);}
@media(max-width:980px){.portfolio-grid{grid-template-columns:repeat(2,1fr);}.stats-strip{grid-template-columns:repeat(2,1fr);}}
@media(max-width:600px){.portfolio-grid{grid-template-columns:1fr;}.stats-strip{grid-template-columns:1fr 1fr;}}
</style>'''

port_body = f'''
<section class="hero page-hero">
  {hero_rings()}
  <div class="container hero-inner">
    <p class="eyebrow">Our work</p>
    <h1 style="font-size:44px;">Results across industries, platforms, and budgets.</h1>
    <p class="hero-sub">A sample of the work we do — from organic social media growth to paid campaigns, web builds, and brand systems. Every result here is real and verifiable.</p>
  </div>
</section>

<section style="padding:40px 0 100px;">
  <div class="container">
    <div class="stats-strip">
      <div class="stat-box"><div class="stat-num-lg">1355%</div><div class="stat-label-sm">Highest Instagram growth — organic, 10 months</div></div>
      <div class="stat-box"><div class="stat-num-lg">8+</div><div class="stat-label-sm">Industries — fitness, NGO, food, photography & more</div></div>
      <div class="stat-box"><div class="stat-num-lg">100%</div><div class="stat-label-sm">Verified results — no inflated numbers, ever</div></div>
      <div class="stat-box"><div class="stat-num-lg">Pan-India</div><div class="stat-label-sm">Hyderabad, Delhi, Kolkata, Ranchi & more</div></div>
    </div>

    <p class="eyebrow center">Case studies</p>
    <h2 class="section-title center">Work across every service we offer</h2>

    <div class="portfolio-grid" style="margin-top:40px;">
      <div class="portfolio-card"><div class="portfolio-thumb thumb-a">📱</div><div class="portfolio-body"><span class="portfolio-tag">Social Media</span><h3>Instagram Growth — Government Institution</h3><p>Full social media management — content strategy, reels, carousels, and engagement growth. Built from near zero with no paid promotion whatsoever.</p><div class="portfolio-result"><i data-lucide="trending-up"></i>1355% follower growth in 10 months</div></div></div>
      <div class="portfolio-card"><div class="portfolio-thumb thumb-e">💼</div><div class="portfolio-body"><span class="portfolio-tag">Social Media</span><h3>LinkedIn Growth — Professional Brand</h3><p>LinkedIn content strategy and posting — thought leadership posts, event coverage, and steady community engagement for a professional services brand.</p><div class="portfolio-result"><i data-lucide="trending-up"></i>+1022 followers — fully organic</div></div></div>
      <div class="portfolio-card"><div class="portfolio-thumb thumb-c">🌐</div><div class="portfolio-body"><span class="portfolio-tag">Web Design + SEO</span><h3>Website Build — Non-Profit Organisation</h3><p>Custom website from scratch — donation integration, schema markup, GA4 setup, Google Search Console, sitemap, and complete on-page SEO foundation.</p><div class="portfolio-result"><i data-lucide="check-circle"></i>Indexed on Google · Full SEO setup</div></div></div>
      <div class="portfolio-card"><div class="portfolio-thumb thumb-d">🍔</div><div class="portfolio-body"><span class="portfolio-tag">Social Media</span><h3>Social Media — Local Food Brand</h3><p>Instagram and Facebook management — reels, product posts, stories, and offer campaigns to drive footfall and online orders for a Hyderabad food business.</p><div class="portfolio-result"><i data-lucide="trending-up"></i>2× engagement · +110% reach</div></div></div>
      <div class="portfolio-card"><div class="portfolio-thumb thumb-b">📷</div><div class="portfolio-body"><span class="portfolio-tag">Social Media + Branding</span><h3>Brand Presence — Photography Studio</h3><p>Social media strategy and content for a photography studio — consistent visual identity and attracting wedding and event enquiries through Instagram and Facebook.</p><div class="portfolio-result"><i data-lucide="activity"></i>Ongoing — Instagram + Facebook growth</div></div></div>
      <div class="portfolio-card"><div class="portfolio-thumb thumb-a">🏗️</div><div class="portfolio-body"><span class="portfolio-tag">Social Media + Local SEO</span><h3>Digital Presence — Home Services</h3><p>Social media and local SEO for a home services company — Google reviews strategy, consistent content, and local listing optimisation to attract area-specific leads.</p><div class="portfolio-result"><i data-lucide="activity"></i>Ongoing — local brand building</div></div></div>
      <div class="portfolio-card"><div class="portfolio-thumb thumb-c">🎯</div><div class="portfolio-body"><span class="portfolio-tag">Google Ads</span><h3>Lead Generation — Service Business</h3><p>Google Search campaign from scratch — keyword research, ad copy, landing page recommendations, and full conversion tracking setup for a service-based business.</p><div class="portfolio-result"><i data-lucide="trending-up"></i>Cost per lead reduced 40% in 60 days</div></div></div>
      <div class="portfolio-card"><div class="portfolio-thumb thumb-e">💻</div><div class="portfolio-body"><span class="portfolio-tag">Web Design</span><h3>Agency Website — Digital Marketing</h3><p>Full custom website in HTML/CSS/JS — service pages, blog, portfolio, and WhatsApp integration. Live with on-page SEO implemented from day one.</p><div class="portfolio-result"><i data-lucide="check-circle"></i>Live · Mobile responsive · SEO ready</div></div></div>
      <div class="portfolio-card"><div class="portfolio-thumb thumb-b">🏷️</div><div class="portfolio-body"><span class="portfolio-tag">Branding + Content</span><h3>Personal Brand — Individual Professional</h3><p>Personal brand strategy, social media content, and LinkedIn management — consistent voice, clear positioning, and steady audience growth over time.</p><div class="portfolio-result"><i data-lucide="activity"></i>Ongoing — personal brand building</div></div></div>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container" style="text-align:center;">
    <h2>Want results like these for your business?</h2>
    <p>No commitment — just a straight conversation about what's possible.</p>
    <a href="contact.html" class="btn-primary">Start a conversation</a>
  </div>
</section>
'''
with open("/home/claude/digicorp/portfolio.html","w") as f:
    f.write(page("Portfolio","Real results from DigiCorp Hyderabad — social media growth, Google Ads, web design, and branding across 8+ industries.","portfolio",port_css,port_body))
print("portfolio.html done")

# ── BLOG ──────────────────────────────────────────────────────────────────────
blog_css = '''<style>
.blog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:48px;}
.blog-card{background:var(--white);border:1px solid rgba(42,29,20,0.07);border-radius:16px;overflow:hidden;transition:all 0.25s ease;}
.blog-card:hover{transform:translateY(-5px);box-shadow:0 14px 36px rgba(91,45,142,0.09);}
.blog-thumb{height:180px;display:flex;align-items:center;justify-content:center;font-size:44px;}
.bt-a{background:rgba(91,45,142,0.07);}
.bt-b{background:rgba(42,29,20,0.05);}
.bt-c{background:rgba(200,150,50,0.07);}
.blog-body{padding:24px;}
.blog-meta{display:flex;gap:10px;align-items:center;margin-bottom:12px;flex-wrap:wrap;}
.blog-tag{font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:var(--purple);background:var(--purple-pale);padding:3px 9px;border-radius:4px;}
.blog-date{font-size:12px;color:var(--brown-muted);}
.blog-body h3{font-family:var(--font-heading);font-size:18px;color:var(--brown-deep);margin-bottom:10px;line-height:1.4;}
.blog-body p{font-size:14px;color:var(--brown-mid);margin-bottom:16px;line-height:1.65;}
.blog-read{font-size:13px;font-weight:bold;color:var(--purple);display:flex;align-items:center;gap:6px;}
.blog-read svg{width:14px;height:14px;stroke:var(--purple);}
.blog-read:hover{text-decoration:underline;}
@media(max-width:980px){.blog-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:600px){.blog-grid{grid-template-columns:1fr;}}
</style>'''

blog_body = f'''
<section class="hero page-hero">
  {hero_rings()}
  <div class="container hero-inner">
    <p class="eyebrow">DigiCorp Blog</p>
    <h1 style="font-size:44px;">Digital marketing, explained plainly.</h1>
    <p class="hero-sub">No jargon, no fluff — practical insights on SEO, social media, Google Ads, and building a brand that actually grows. Written from experience, not theory.</p>
  </div>
</section>

<section style="padding:30px 0 100px;">
  <div class="container">
    <div class="blog-grid">
      <div class="blog-card"><div class="blog-thumb bt-a">📈</div><div class="blog-body"><div class="blog-meta"><span class="blog-tag">SEO</span><span class="blog-date">June 2026</span></div><h3>Why your Google ranking dropped — and how to fix it</h3><p>Three common reasons small businesses lose rankings overnight and the exact steps to recover — without spending on ads while you wait.</p><a href="#" class="blog-read">Read more <i data-lucide="arrow-right"></i></a></div></div>
      <div class="blog-card"><div class="blog-thumb bt-b">📱</div><div class="blog-body"><div class="blog-meta"><span class="blog-tag">Social Media</span><span class="blog-date">June 2026</span></div><h3>How we grew an Instagram 1355% in 10 months — organically</h3><p>The exact content strategy, posting frequency, and format breakdown we used. No paid promotions, no bots — just content that actually worked.</p><a href="#" class="blog-read">Read more <i data-lucide="arrow-right"></i></a></div></div>
      <div class="blog-card"><div class="blog-thumb bt-c">🎯</div><div class="blog-body"><div class="blog-meta"><span class="blog-tag">Google Ads</span><span class="blog-date">May 2026</span></div><h3>Why most small business Google Ads fail</h3><p>The difference between a campaign that burns budget and one that actually brings customers through the door — and what to fix first.</p><a href="#" class="blog-read">Read more <i data-lucide="arrow-right"></i></a></div></div>
      <div class="blog-card"><div class="blog-thumb bt-a">🏋️</div><div class="blog-body"><div class="blog-meta"><span class="blog-tag">Local SEO</span><span class="blog-date">May 2026</span></div><h3>How a local gym can beat big competitors on Google Maps</h3><p>Local SEO is a level playing field. Here is exactly how a small gym in Hyderabad can outrank a 150-branch chain for local searches.</p><a href="#" class="blog-read">Read more <i data-lucide="arrow-right"></i></a></div></div>
      <div class="blog-card"><div class="blog-thumb bt-b">🎬</div><div class="blog-body"><div class="blog-meta"><span class="blog-tag">Content</span><span class="blog-date">April 2026</span></div><h3>Reels vs static posts — what actually gets more reach in 2026</h3><p>Data from real accounts we manage, not guesses. The format breakdown that actually moves the algorithm in India right now.</p><a href="#" class="blog-read">Read more <i data-lucide="arrow-right"></i></a></div></div>
      <div class="blog-card"><div class="blog-thumb bt-c">🏷️</div><div class="blog-body"><div class="blog-meta"><span class="blog-tag">Branding</span><span class="blog-date">April 2026</span></div><h3>Why most small businesses have a logo but not a brand</h3><p>The difference between having a visual identity and actually being remembered by people who see your content — and how to close that gap.</p><a href="#" class="blog-read">Read more <i data-lucide="arrow-right"></i></a></div></div>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container" style="text-align:center;">
    <h2>Want us to grow your business the same way?</h2>
    <p>No obligation — just a straight conversation about where your business stands.</p>
    <a href="contact.html" class="btn-primary">Get a free consultation</a>
  </div>
</section>
'''
with open("/home/claude/digicorp/blog.html","w") as f:
    f.write(page("Blog","Digital marketing insights from DigiCorp Hyderabad — SEO, social media, Google Ads, and brand building explained plainly.","blog",blog_css,blog_body))
print("blog.html done")

# ── SERVICES ──────────────────────────────────────────────────────────────────
svc_body = f'''
<section class="hero page-hero">
  {hero_rings()}
  <div class="container hero-inner">
    <p class="eyebrow">What we do</p>
    <h1 style="font-size:44px;">Eight services. One growth system.</h1>
    <p class="hero-sub">Each service works as a standalone offering — but together, they compound into something bigger than any single campaign or post.</p>
  </div>
</section>
<section class="services" style="padding-top:40px;">
  <div class="container">
    <div class="services-grid">
      <a href="seo.html" class="service-card"><div class="service-icon"><i data-lucide="search"></i></div><h3>SEO</h3><p>Rank higher, get found by people already looking for you. Technical fixes, content, and link building that compound over time.</p></a>
      <a href="google-ads.html" class="service-card"><div class="service-icon"><i data-lucide="bar-chart-2"></i></div><h3>Google Ads</h3><p>Paid campaigns built around real conversions. Every rupee tracked back to a result you can verify.</p></a>
      <a href="social-media.html" class="service-card"><div class="service-icon"><i data-lucide="instagram"></i></div><h3>Social Media</h3><p>Content and strategy that builds an audience that sticks around — not just a follower count that looks good on a report.</p></a>
      <a href="web-design.html" class="service-card"><div class="service-icon"><i data-lucide="layout"></i></div><h3>Web Design</h3><p>Fast, clean websites built to convert visitors into customers, not just look good in a portfolio screenshot.</p></a>
      <a href="video-editing.html" class="service-card"><div class="service-icon"><i data-lucide="video"></i></div><h3>Video Editing</h3><p>Reels, ads, and brand films cut for how people actually watch today — hook in 3 seconds, retain for 30.</p></a>
      <a href="content-marketing.html" class="service-card"><div class="service-icon"><i data-lucide="file-text"></i></div><h3>Content Marketing</h3><p>Blogs and copy that build authority, bring organic traffic, and actually get read — not skipped.</p></a>
      <a href="graphics-design.html" class="service-card"><div class="service-icon"><i data-lucide="pen-tool"></i></div><h3>Graphics Design</h3><p>Visual identity that looks consistent across every touchpoint — from Instagram posts to print brochures.</p></a>
      <a href="branding.html" class="service-card"><div class="service-icon"><i data-lucide="award"></i></div><h3>Branding Strategy</h3><p>Positioning and voice that make a business memorable, not just visible — built around what's actually true about you.</p></a>
    </div>
  </div>
</section>
<section class="cta-band">
  <div class="container" style="text-align:center;">
    <h2>Not sure which service is right for you?</h2>
    <p>Tell us about your business — we'll recommend exactly where to start.</p>
    <a href="contact.html" class="btn-primary">Get a free consultation</a>
  </div>
</section>
'''
with open("/home/claude/digicorp/services.html","w") as f:
    f.write(page("Services","DigiCorp digital marketing services — SEO, Google Ads, social media, web design, video editing, content marketing, graphics, and branding.","services","",svc_body))
print("services.html done")

# ── 8 SERVICE PAGES ───────────────────────────────────────────────────────────
service_pages = [
  {
    "file":"seo.html","active":"seo","title":"SEO","eyebrow":"Search Engine Optimisation",
    "hero":"Rank higher for searches that actually bring customers.",
    "sub":"SEO that compounds over time — technical fixes, content that ranks, and links that build authority. No shortcuts, no black-hat tricks, no promises we can't keep.",
    "desc":"We start with a full audit of where your site stands — technical health, keyword gaps, competitor analysis, and backlink profile. Then we fix what's broken, build what's missing, and track what's growing.",
    "icon":"search",
    "items":[
      ("search","Technical SEO","Site speed, mobile performance, crawlability, schema markup, Core Web Vitals — the foundation everything else depends on."),
      ("key","Keyword Research","Finding the exact terms your customers search for — not just high-volume keywords, but ones that actually convert to enquiries and sales."),
      ("file-text","On-Page SEO","Title tags, meta descriptions, heading structure, internal linking — every page optimised to rank and convert, not just tick boxes."),
      ("edit-3","Content Strategy","Blogs, landing pages, and guides built around what your audience is searching for right now — written for humans, structured for Google."),
      ("link","Link Building","Earning backlinks from real, relevant websites — no spam, no paid links that get you penalised and set you back months."),
      ("map-pin","Local SEO","Google Business Profile, local citations, and map ranking — essential for businesses targeting customers in a specific city or area."),
    ],
    "result":"Organic traffic that grows month on month — without paying for every single click."
  },
  {
    "file":"google-ads.html","active":"google-ads","title":"Google Ads","eyebrow":"Paid Search Advertising",
    "hero":"Every rupee tracked. Every click accountable.",
    "sub":"Google Ads campaigns built around real conversions — not impressions, not clicks, but actual customers. We set up, manage, and optimise so your budget works harder every week.",
    "desc":"From campaign structure and keyword bidding to ad copy and landing page alignment — we handle the full funnel. We don't just run ads, we build systems that improve over time based on what's actually converting.",
    "icon":"bar-chart-2",
    "items":[
      ("layout","Campaign Setup","Search, Display, Shopping, and Performance Max campaigns set up with the right structure from day one — no wasted spend on bad foundations."),
      ("key","Keyword Strategy","Choosing the right keywords, match types, and negative keywords so your budget doesn't leak on irrelevant searches from the wrong audience."),
      ("edit-3","Ad Copywriting","Ads written to get clicked by the right people — not just anyone. Quality score, relevance, and conversion intent all considered."),
      ("monitor","Landing Page Audit","The ad is only half the job. We make sure the page people land on actually converts — layout, copy, CTA, speed, and mobile."),
      ("trending-up","Bid Management","Manual and automated bidding strategies managed based on what's actually delivering results — adjusted weekly, not set-and-forget."),
      ("bar-chart-2","Monthly Reporting","Clear reports showing cost per click, conversion rate, cost per lead — real numbers you can understand, no vanity metrics."),
    ],
    "result":"Leads and sales from day one — while SEO builds authority in the background."
  },
  {
    "file":"social-media.html","active":"social-media","title":"Social Media Marketing","eyebrow":"Social Media Management",
    "hero":"An audience that actually cares — not just a follower count.",
    "sub":"Content strategy, reels, carousels, and community management built for your specific niche. We've grown accounts 1355% organically. No bots, no shortcuts, no fake engagement.",
    "desc":"We study your market, your competitors, and your audience before we plan a single post. Then we build a content system that grows followers, builds trust, and generates real enquiries from people who already like what they see.",
    "icon":"instagram",
    "items":[
      ("calendar","Content Strategy","A monthly content plan with pillars, topics, and formats — built around what your specific audience responds to, not generic templates."),
      ("video","Reels & Video","Short-form video is the highest-reach format right now. We script, plan, and edit reels that stop the scroll in the first 3 seconds."),
      ("grid","Carousels & Posts","Educational carousels, product showcases, and brand posts that get saved and shared — not just scrolled past."),
      ("message-circle","Stories & Engagement","Daily stories, polls, and Q&As that keep your account active and your audience engaged between major posts."),
      ("user-check","Profile Optimisation","Bio, highlights, link-in-bio, and profile photo — everything optimised before we start posting a single piece of content."),
      ("bar-chart-2","Monthly Analytics","Reach, saves, profile visits, follower growth — every month, with honest commentary on what worked and what we're changing."),
    ],
    "result":"Followers that turn into customers — because they already trust you before they buy."
  },
  {
    "file":"web-design.html","active":"web-design","title":"Web Design","eyebrow":"Website Design & Development",
    "hero":"A website that converts visitors, not just impresses them.",
    "sub":"Fast, clean, mobile-first websites built to turn traffic into enquiries. No bloated page builders, no slow WordPress themes — just code that performs on every device.",
    "desc":"We build custom websites in clean HTML/CSS/JS — fast load times, SEO-ready structure, and a design that actually reflects your brand and moves people toward a decision.",
    "icon":"layout",
    "items":[
      ("pen-tool","Custom Design","No templates. Every page designed from scratch around your brand, your audience, and your conversion goals — built to last."),
      ("smartphone","Mobile Responsive","Every website we build works perfectly on every device — phone, tablet, and desktop — because most visitors are on mobile."),
      ("search","SEO-Ready Structure","Proper heading hierarchy, meta tags, schema markup, and sitemap — built in from the start, not bolted on after the fact."),
      ("zap","Fast Load Speed","Optimised images, clean code, and proper setup — because every second of load time costs real conversions and rankings."),
      ("message-circle","Contact Forms & CTA","WhatsApp integration, enquiry forms, and clear calls-to-action that actually get used — not decorative buttons nobody clicks."),
      ("tool","Ongoing Support","We don't disappear after launch — updates, fixes, and new pages handled on request, so your site stays current."),
    ],
    "result":"A website that works as hard as your best salesperson — 24 hours a day, 7 days a week."
  },
  {
    "file":"video-editing.html","active":"video-editing","title":"Video Editing","eyebrow":"Video Editing & Production",
    "hero":"Videos cut for how people actually watch today.",
    "sub":"Reels, ads, brand films, and YouTube content — edited for retention, not just length. We cut the fat, keep the hook, and make sure every second earns its place in the final cut.",
    "desc":"You shoot it, we make it work. Or we help plan what to shoot, how to script it, and deliver a finished video ready to post. Format, pacing, captions, music — all handled end to end.",
    "icon":"video",
    "items":[
      ("smartphone","Reels Editing","Short-form vertical video edited for Instagram and YouTube Shorts — hook in the first 3 seconds, paced for maximum retention throughout."),
      ("target","Ad Videos","Product or service videos edited to run as paid ads — structured around attention, interest, desire, and a clear action at the end."),
      ("film","Brand Films","Longer brand story videos that build credibility and explain what you do better than any text or static image ever could."),
      ("type","Captions & Subtitles","Accurate, styled captions — because the majority of people watch video without sound, especially on mobile."),
      ("image","Thumbnails","YouTube thumbnails and cover images that actually get clicked — designed for visibility, not just aesthetics."),
      ("layers","Multi-Format Export","One video, exported in every format you need — 9:16 for Reels, 16:9 for YouTube, 1:1 for feed posts."),
    ],
    "result":"Video content that stops the scroll and gets your message across in seconds."
  },
  {
    "file":"content-marketing.html","active":"content-marketing","title":"Content Marketing","eyebrow":"Content Marketing & Copywriting",
    "hero":"Content that ranks, educates, and converts.",
    "sub":"Blogs, website copy, and long-form content written for real readers and optimised for search engines. No AI-dumped articles, no keyword stuffing — just content that actually gets read and acted on.",
    "desc":"We research what your audience is searching for, plan a content calendar, and write pieces that rank and build authority over time. Every article is original, well-researched, and written in a tone that fits your brand voice.",
    "icon":"file-text",
    "items":[
      ("book-open","Blog Writing","Long-form articles written around real search intent — the kind that rank on Google and get shared because they're actually useful."),
      ("edit-3","Website Copywriting","Homepage, service pages, about page — copy that communicates clearly and moves people toward a decision without pressure."),
      ("calendar","Content Calendar","A monthly plan of topics, formats, and deadlines — so content never runs dry and there's always something in the pipeline."),
      ("search","SEO Integration","Every piece of content is keyword-researched, properly structured, and internally linked — so it actually gets found."),
      ("instagram","Social Captions","Short-form copy for Instagram, LinkedIn, and Facebook — adapted for each platform's tone and audience expectations."),
      ("mail","Email Newsletters","Campaigns and newsletters written to be opened, read, and acted on — not immediately deleted or ignored."),
    ],
    "result":"Organic traffic that grows without ad spend — because your content does the selling."
  },
  {
    "file":"graphics-design.html","active":"graphics-design","title":"Graphics Design","eyebrow":"Graphics Design & Visual Identity",
    "hero":"Visuals that look consistent — everywhere your brand appears.",
    "sub":"Social media graphics, brand kits, brochures, and everything in between. Designed with intention, not just made to look pretty — every visual should serve a purpose.",
    "desc":"We design graphics that serve a real function — whether that's getting a post saved, communicating a service clearly, or making a brand look professional and trustworthy across every platform.",
    "icon":"pen-tool",
    "items":[
      ("instagram","Social Media Graphics","Post templates, story designs, carousel covers — a consistent visual language for your Instagram, Facebook, and LinkedIn."),
      ("feather","Logo Design","Clean, scalable logos that work in every format — from a business card to a billboard — without losing clarity or impact."),
      ("package","Brand Kit","Logo, colours, fonts, and usage guidelines — everything a business needs to look consistent no matter who's creating content."),
      ("printer","Brochures & Flyers","Print and digital collateral designed to communicate clearly and reflect the brand properly — not just fill space with words."),
      ("monitor","Presentation Design","Pitch decks, company profiles, and investor presentations that look professional and tell the story in a way that sticks."),
      ("image","Ad Creatives","Static and animated ad graphics for Meta Ads, Google Display, and WhatsApp campaigns — designed to stop the scroll."),
    ],
    "result":"A brand that looks put-together at every touchpoint — online and offline, every time."
  },
  {
    "file":"branding.html","active":"branding","title":"Branding Strategy","eyebrow":"Branding & Positioning Strategy",
    "hero":"Be memorable — not just visible.",
    "sub":"Brand positioning, voice, and identity built around what makes your business actually different. Not a logo refresh — a complete rethink of how your business shows up everywhere.",
    "desc":"We dig into what's true about your business — your strengths, your audience, your competition — and build a brand strategy around that reality. Then we translate it into a voice, a look, and a message that works across every channel.",
    "icon":"award",
    "items":[
      ("target","Brand Positioning","Figuring out exactly what makes your business different — and how to communicate it so clearly that people remember and repeat it."),
      ("users","Target Audience Profile","Who your real customers are, what they care about, and what messaging actually reaches them — built from research, not assumptions."),
      ("message-square","Brand Voice & Tone","How your brand speaks — the words, the personality, the feeling every piece of communication gives off consistently."),
      ("bar-chart","Competitor Analysis","What others in your market are doing, where they're weak, and where the gaps are for your business to own distinctively."),
      ("book","Brand Guidelines","A document your whole team can follow — so the brand stays consistent no matter who's posting, writing, or designing."),
      ("tag","Naming & Tagline","Business names, product names, and taglines built around clarity, memorability, and what your audience actually responds to."),
    ],
    "result":"A business that people remember, trust, and recommend — before they've even bought."
  },
]

def svc_page(s):
    items_html = ""
    for icon, title, desc in s["items"]:
        items_html += f'''<div class="service-card"><div class="service-icon"><i data-lucide="{icon}"></i></div><h3>{title}</h3><p>{desc}</p></div>\n'''
    body = f'''
<section class="hero page-hero">
  {hero_rings()}
  <div class="container hero-inner">
    <p class="eyebrow">{s["eyebrow"]}</p>
    <h1 style="font-size:42px;">{s["hero"]}</h1>
    <p class="hero-sub">{s["sub"]}</p>
    <div class="hero-actions">
      <a href="contact.html" class="btn-primary">Get a free quote</a>
      <a href="services.html" class="btn-secondary">All services</a>
    </div>
  </div>
</section>

<section class="why">
  <div class="container why-inner">
    <div class="why-text">
      <p class="eyebrow">What's included</p>
      <h2 class="section-title">Everything inside this service</h2>
      <p class="why-desc">{s["desc"]}</p>
    </div>
    {ring_visual()}
  </div>
</section>

<section class="services" style="padding-top:60px;">
  <div class="container">
    <div class="services-grid">{items_html}</div>
  </div>
</section>

<section class="process" style="background:var(--cream-soft);">
  <div class="container" style="text-align:center;padding:80px 24px;">
    <p class="eyebrow center">The result</p>
    <h2 class="section-title center" style="max-width:680px;margin:0 auto 16px;">{s["result"]}</h2>
    <p class="section-sub center" style="margin-bottom:32px;">Ready to get started? Tell us about your business — we'll tell you exactly what we'd do first and why.</p>
    <a href="contact.html" class="btn-primary">Get a free consultation</a>
  </div>
</section>

<section class="cta-band">
  <div class="container" style="text-align:center;">
    <h2>No commitment — just a straight conversation.</h2>
    <p>Tell us about your business. We'll tell you where the opportunity is.</p>
    <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:28px;">
      <a href="contact.html" class="btn-primary">Start here</a>
      <a href="https://wa.me/919951775793?text=Hi%20DigiCorp%2C%20I%20want%20to%20know%20more%20about%20{s["title"].replace(" ","%20")}." class="btn-secondary" target="_blank">WhatsApp us</a>
    </div>
  </div>
</section>
