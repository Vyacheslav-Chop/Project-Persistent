
function smoothScroll(event) {
  event.preventDefault();
  const target = document.querySelector(
    event.currentTarget.getAttribute('href')
  );
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

document.querySelectorAll('.header-nav-link').forEach(link => {
  link.addEventListener('click', smoothScroll);
});

// Додавання слухача події для всіх посилань у footer-нав
document.querySelectorAll('.footer-nav-link').forEach(link => {
  link.addEventListener('click', smoothScroll);
});
