window.addEventListener('DOMContentLoaded', event => {

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74,
    });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

});

// Screenshot slideshow functionality
function initSlideshow() {
  const slideshows = document.querySelectorAll('.screenshot-slideshow');

  slideshows.forEach(slideshow => {
    const screenshots = slideshow.querySelectorAll('.screenshot');
    let currentIndex = 0;

    setInterval(() => {
      screenshots[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % screenshots.length;
      screenshots[currentIndex].classList.add('active');
    }, 3000); // Change slide every 3 seconds
  });
}

// Initialize slideshow when DOM is ready
initSlideshow();

// Trigger privacy section fade-in when in view
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
    });
  }, { threshold: 0.1 });

  const privacySection = document.getElementById('privacy-content');
  if (privacySection) observer.observe(privacySection);
});

// Animate feature cards on scroll
document.addEventListener('DOMContentLoaded', () => {
  const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card').forEach(card => {
    featureObserver.observe(card);
  });
});

function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  // Clear existing particles (for resize safety)
  container.innerHTML = '';

  const particleCount = window.innerWidth > 768 ? 30 : 15; // fewer on mobile

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random size: 2px to 8px
    const size = Math.random() * 6 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random horizontal position
    particle.style.left = `${Math.random() * 100}%`;

    // Random animation duration: 15s to 30s
    const duration = Math.random() * 15 + 15;
    particle.style.animationDuration = `${duration}s`;

    // Random delay: up to 15s
    particle.style.animationDelay = `${Math.random() * 15}s`;

    // Optional: subtle horizontal drift using transform
    const drift = (Math.random() - 0.5) * 100; // -50px to +50px
    particle.style.setProperty('--drift', `${drift}px`);

    container.appendChild(particle);
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
});

// Optional: Recreate on resize (debounced)
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(createParticles, 250);
});

// Anti-copy mechanism
document.addEventListener('keydown', (e) => {
  if (
      (e.ctrlKey && ['c', 'x', 'u', 's', 'a'].includes(e.key.toLowerCase())) ||
      (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') ||
      e.key === 'F12'
  ) {
    e.preventDefault();
  }
});

document.addEventListener('dragstart', (e) => {
  e.preventDefault();
});