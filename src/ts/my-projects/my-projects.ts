import { projects } from './projects-storage';

// get id from url (example - ?project=web-studio)
const params = new URLSearchParams(window.location.search);
const projectId = params.get('project');

// search project by id
const project = projects.find(p => p.id === projectId);

if (project) {
  const title = document.querySelector('.project__detail__title');
  if (title) {
    title.textContent = project.title;
  }
  // technologies subtitle
  const techWrapper = document.querySelector(
    '.project__detail__descr__wrapper'
  );

  if (techWrapper) {
    techWrapper.innerHTML = project.technologies
      .map(tech => `<p class="project__detail__descr">${tech}</p>`)
      .join('');
  }

  // main image
  const imageWrapper = document.querySelector<HTMLDivElement>(
    '.project__story__img__wrapper'
  );

  if (imageWrapper) {
    imageWrapper.innerHTML = `<img class="project__story__img" src="${project.images.main.image}"
                            alt="${project.images.main.alt}">`;
  }

  // story text
  const storyWrapper = document.querySelector('.story__wrapper');
  const storyTexts = project.story
    .map(text => `<p class="story__description">${text}</p>`)
    .join('');

  if (storyWrapper) storyWrapper.innerHTML += storyTexts;

  // Other projects
  const otherList = document.querySelector('.other__list');
  if (otherList)
    otherList.innerHTML = project.otherProjects
      .map(
        p => `
      <li class="other__item">
        <a class="other__link" href="${p.link}">
          <div class="other__img__wrapper">
            <img class="other__img" src="${p.image}" alt="">
          </div>
          <h3 class="other__subtitle">${p.title}</h3>
          <p class="other__description">${p.description}</p>
        </a>
      </li>
    `
      )
      .join('');
}
