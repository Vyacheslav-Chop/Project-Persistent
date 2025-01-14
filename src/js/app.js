
function smoothScroll(event) {
  event.preventDefault();
  const target = document.querySelector(
    event.currentTarget.getAttribute('href')
  );
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
  
  event.currentTarget.blur();

  const menu = event.currentTarget.closest('.menu');
  if (menu && menu.classList.contains('is-open')) {
    menu.classList.remove('is-open');
  }
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', smoothScroll);
});
