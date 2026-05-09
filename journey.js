// Scroll-triggered reveal for each journey stop
const stops = document.querySelectorAll('.journey-stop');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate once
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -60px 0px'
});

stops.forEach(stop => observer.observe(stop));
