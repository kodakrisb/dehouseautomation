const products = [
  { name: "Smart Wall Switch", category: "LIGHTING", benefit: "Control lights by app, scene or schedule.", type: "switch" },
  { name: "Smart Plug", category: "POWER", benefit: "Turn everyday appliances into connected devices.", type: "plug" },
  { name: "Smart Door Lock", category: "ACCESS", benefit: "Keyless entry with modern access control.", type: "lock" },
  { name: "Smart Security Camera", category: "SECURITY", benefit: "Keep an eye on your space from anywhere.", type: "camera" },
  { name: "Smart IR Controller", category: "CLIMATE", benefit: "Control compatible ACs and remotes from your phone.", type: "ir" },
  { name: "Smart Motion Sensor", category: "AUTOMATION", benefit: "Trigger lights and routines when movement is detected.", type: "sensor" }
];

const productVisual = (type) => {
  const visuals = {
    switch: '<div class="device switch-device"><i></i><i></i><small>DEHOUSE</small></div>',
    plug: '<div class="device plug-device"><span class="socket">●<i></i><i></i></span><b>ON</b></div>',
    lock: '<div class="device lock-product"><span class="camera-dot"></span><b>1 2 3<br>4 5 6<br>7 8 9</b><i></i></div>',
    camera: '<div class="device camera-device"><span class="lens"><i></i></span><b></b></div>',
    ir: '<div class="device ir-device"><span></span><i>IR</i></div>',
    sensor: '<div class="device sensor-device"><span><i></i></span><b>MOTION</b></div>'
  };
  return visuals[type] || visuals.switch;
};

const productGrid = document.querySelector('[data-products]');
if (productGrid) {
  productGrid.innerHTML = products.map((product, index) => `
    <article class="product-card reveal" data-delay="${index % 3}">
      <a class="product-image" href="devices/?device=${encodeURIComponent(product.name)}" aria-label="View ${product.name}">
        <span class="product-index">0${index + 1}</span>
        ${productVisual(product.type)}
        <span class="product-action">↗</span>
      </a>
      <div class="product-info">
        <p>${product.category}</p>
        <h3>${product.name}</h3>
        <span>${product.benefit}</span>
        <a href="build-smart-home/?device=${encodeURIComponent(product.name)}">Add to Smart Home <b>+</b></a>
      </div>
    </article>
  `).join('');
}

const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');

const setMenu = (open) => {
  if (!toggle || !mobileMenu) return;
  toggle.setAttribute('aria-expanded', String(open));
  mobileMenu.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('menu-open', open);
};

toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));

window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 24), { passive: true });

const observer = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' })
  : null;

document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('is-visible'));

const cfg = window.DEHOUSE_CONFIG || {};
const whatsappNumber = String(cfg.WHATSAPP_NUMBER || '').trim();
const isWhatsAppConfigured = /^\d{10,15}$/.test(whatsappNumber);

const openWhatsApp = (message) => {
  if (!isWhatsAppConfigured) return null;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

document.querySelectorAll('[data-whatsapp]').forEach(link => {
  const message = link.dataset.message || cfg.WHATSAPP_DEFAULT_MESSAGE || 'Hello DeHouse Automation.';
  const href = openWhatsApp(message);

  if (href) {
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.removeAttribute('aria-disabled');
  } else {
    // Prevent a misleading or broken WhatsApp action before the real number is supplied.
    link.href = '#';
    link.setAttribute('aria-disabled', 'true');
    link.title = 'WhatsApp number must be configured before launch';
    link.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Launch setup required: add the real DeHouse WhatsApp number in config.js.');
    });
  }
});

const optionalLinks = [
  ['instagram', cfg.INSTAGRAM_URL],
  ['tiktok', cfg.TIKTOK_URL],
  ['facebook', cfg.FACEBOOK_URL]
];

optionalLinks.forEach(([name, url]) => {
  const link = document.querySelector(`[data-social="${name}"]`);
  if (!link) return;
  if (url) {
    link.hidden = false;
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    link.hidden = true;
  }
});

const phone = document.querySelector('[data-business-phone]');
if (phone) phone.textContent = cfg.BUSINESS_PHONE_DISPLAY || 'Add before launch';

const email = document.querySelector('[data-business-email]');
if (email) {
  if (cfg.BUSINESS_EMAIL) {
    email.textContent = cfg.BUSINESS_EMAIL;
    email.href = `mailto:${cfg.BUSINESS_EMAIL}`;
  } else {
    email.textContent = 'Add before launch';
    email.removeAttribute('href');
  }
}

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

// Smooth scrolling for same-page anchors, respecting reduced motion preferences.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (event) => {
    const id = anchor.getAttribute('href');
    if (!id || id === '#' || id === '#contact-unavailable') return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
  });
});
