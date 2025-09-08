const burgerButton = document.querySelector('.header__burger__btn');

burgerButton?.addEventListener('click', toggleMenu);

function toggleMenu() {
  document.documentElement.classList.toggle('isOpen');
}
