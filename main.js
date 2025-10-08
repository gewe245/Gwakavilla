// Centralized site behaviour: mobile menu, overlay, hero slideshow, product sliders
(function() {
  function setupMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const overlay = document.getElementById('menu-overlay');
    if (!menuToggle || !mainNav || !overlay) return;

    mainNav.classList.add('mobile-panel');

    function openMenu() {
      menuToggle.classList.add('open');
      menuToggle.setAttribute('aria-expanded', 'true');
      mainNav.classList.add('open');
      document.body.classList.add('menu-open');
      overlay.classList.add('show');
      overlay.setAttribute('aria-hidden', 'false');
    }

    function closeMenu() {
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('open');
      document.body.classList.remove('menu-open');
      overlay.classList.remove('show');
      overlay.setAttribute('aria-hidden', 'true');
    }

    menuToggle.addEventListener('click', function() {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      if (expanded) closeMenu(); else openMenu();
    });

    overlay.addEventListener('click', closeMenu);
    mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  }

  function setupHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-bg');
    if (!slides || slides.length <= 1) return;
    let idx = 0;
    setInterval(() => {
      slides[idx].classList.remove('active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('active');
    }, 5000);
  }

  function setupProductSliders() {
    const productSliders = document.querySelectorAll('.product-slider');
    productSliders.forEach(slider => {
      const images = Array.from(slider.querySelectorAll('img'));
      if (images.length === 0) return;
      if (!images.some(img => img.classList.contains('active'))) images[0].classList.add('active');
      let currentImage = images.findIndex(img => img.classList.contains('active'));
      const delay = 4200;
      setInterval(() => {
        images[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add('active');
      }, delay);
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    setupMenu();
    setupHeroSlideshow();
    setupProductSliders();
  });
})();
