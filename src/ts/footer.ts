const footerInfo =
  document.querySelector<HTMLParagraphElement>('.footer__info');

const currentYear = new Date().getFullYear();

if (footerInfo) {
  footerInfo.textContent = `\u00A9 ${currentYear}. Front End Developer Portfolio. All rights reserved.`;
}
