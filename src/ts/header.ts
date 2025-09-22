const burgerButton = document.querySelector(
  '.header__burger__btn'
) as HTMLButtonElement;

const navItems = document.querySelectorAll<HTMLLIElement>('.header__nav__item');

burgerButton?.addEventListener('click', toggleMenu);

function toggleMenu() {
  document.documentElement.classList.toggle('isOpen');
}

navItems.forEach(item =>
  item.addEventListener('click', () => {
    document.documentElement.classList.remove('isOpen');
  })
);
