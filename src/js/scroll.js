function smoothScroll(event) {
  event.preventDefault();
  const target = document.querySelector(
    event.currentTarget.getAttribute('href')
  );
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}


const heroLink = document.querySelector('.hero-link');
if (heroLink) {
  heroLink.addEventListener('click', smoothScroll);
}
