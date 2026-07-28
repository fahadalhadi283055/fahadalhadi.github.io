// Fahad Al Hadi — portfolio interactions (mobile nav, scroll reveal, carousel)

document.addEventListener('DOMContentLoaded', () => {
  // mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.textContent = nav.classList.contains('open') ? 'CLOSE' : 'MENU';
    });
  }

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  // "other projects" carousel
  const carousel = document.querySelector('.carousel');
  const prevBtn = document.querySelector('.car-prev');
  const nextBtn = document.querySelector('.car-next');
  if (carousel && prevBtn && nextBtn) {
    const scrollAmount = () => carousel.querySelector('.pcard')?.offsetWidth + 20 || 320;
    prevBtn.addEventListener('click', () => carousel.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }));
    nextBtn.addEventListener('click', () => carousel.scrollBy({ left: scrollAmount(), behavior: 'smooth' }));
  }
});
