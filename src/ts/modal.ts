const backdrop = document.querySelectorAll<HTMLDivElement>('[data-backdrop]');
const openButton = document.querySelector<HTMLButtonElement>(
  '.header__contacts__button'
);

// open modal
openButton?.addEventListener('click', () => {
  backdrop[0].classList.remove('is-hidden');
});

// close modal
backdrop.forEach(el => {
  const type = el.dataset.backdrop;

  if (type === 'container') {
    el.addEventListener('click', e => {
      if (e.target === el) {
        el.classList.add('is-hidden');
      }
    });
  }

  if (type === 'button') {
    el.addEventListener('click', () => {
      el.closest<HTMLElement>('[data-backdrop="container"]')?.classList.add(
        'is-hidden'
      );
    });
  }
});
