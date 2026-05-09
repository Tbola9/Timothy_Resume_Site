// Nav scroll shadow
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 20
    ? '0 4px 32px rgba(0,0,0,0.4)'
    : 'none';
});

// Timeline sliding dot
const timeline  = document.getElementById('timeline');
const indicator = document.getElementById('tl-indicator');
const tlItems   = timeline ? timeline.querySelectorAll('.timeline-item') : [];

tlItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const itemRect   = item.getBoundingClientRect();
    const parentRect = timeline.getBoundingClientRect();
    const centerY    = itemRect.top - parentRect.top + itemRect.height / 2;
    indicator.style.top     = centerY + 'px';
    indicator.style.opacity = '1';
  });
});

timeline && timeline.addEventListener('mouseleave', () => {
  indicator.style.opacity = '0';
});

// Scroll-reveal for .journey-stop, .r-section, .resume-download-footer
const revealEls = document.querySelectorAll('.journey-stop, .r-section, .resume-download-footer');
if (revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px 0px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  // Fallback: force everything visible after 600ms in case observer misfires
  setTimeout(() => {
    revealEls.forEach(el => el.classList.add('visible'));
  }, 600);
}
