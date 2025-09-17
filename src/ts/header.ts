const burgerButton = document.querySelector(
  '.header__burger__btn'
) as HTMLButtonElement;

burgerButton?.addEventListener('click', toggleMenu);

function toggleMenu() {
  document.documentElement.classList.toggle('isOpen');

  const ButtonClass = document.documentElement.classList.value;

  if (ButtonClass === 'isOpen') {
  }
}
