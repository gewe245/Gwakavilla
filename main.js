// Centralized site behaviour: mobile menu, overlay, hero slideshow, product sliders
(function() {
  function setupMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const overlay = document.getElementById('menu-overlay');
    if (!menuToggle || !mainNav || !overlay) return;

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

  let statsObserver = null;

  function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target + '+';
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current);
        }
      }, 16);
    });
  }

  function createStatsObserver() {
    const statsSection = document.querySelector('.about-stats');
    if (!statsSection) return;

    const counters = document.querySelectorAll('.counter');
    if (statsObserver) {
      statsObserver.disconnect();
    }

    statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
        }
      });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
  }

  function resetStatsCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      counter.textContent = '+0';
    });

    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
      // If section is already in view, trigger animation immediately
      const rect = statsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        animateCounters();
      }
    }

    createStatsObserver();
  }

  function setupStatsAnimation() {
    createStatsObserver();
  }

  document.addEventListener('DOMContentLoaded', function() {
    setupMenu();
    setupHeroSlideshow();
    setupProductSliders();
    setupStatsAnimation();

    // Listen for language change to reset stats animation
    window.addEventListener('languageChanged', resetStatsCounters);
  });
})();
