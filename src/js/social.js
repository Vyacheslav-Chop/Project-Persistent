function removeHoverAndFocusFromSocialLinks(event) {
  const socialLinks = document.querySelectorAll(
    '.social-link-footer, .header-icon-social-link, .menu-social-link, .contacts'
  );
  socialLinks.forEach(link => link.blur());
}

document
  .querySelectorAll(
    '.social-link-footer, .header-icon-social-link, .menu-social-link, .contacts'
  )
  .forEach(link => {
    link.addEventListener('click', event => {
      removeHoverAndFocusFromSocialLinks(event);

      const menu = document.querySelector('.menu');
      if (menu && menu.classList.contains('is-open')) {
        toggleMenu();
      }
    });
  });
