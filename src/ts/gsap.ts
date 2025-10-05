import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll<HTMLElement>('.section');

sections.forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
  });
});

const aboutDecorateIcons =
  document.querySelectorAll<HTMLElement>('.decorate__icon');

aboutDecorateIcons.forEach(icon => {
  gsap.from(icon, {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: 'power2.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: icon,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
});

const skillsItemSoft = document.querySelectorAll<HTMLElement>(
  '.skills__item--soft'
);

skillsItemSoft.forEach(item => {
  gsap.from(item, {
    opacity: 0,
    x: 0,
    duration: 1,
    ease: 'power2.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: item,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
});

const skillsItem = document.querySelectorAll<HTMLElement>('.skills__item');

skillsItem.forEach(item => {
  gsap.from(item, {
    opacity: 0,
    x: 0,
    duration: 1,
    ease: 'power2.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: item,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
});
