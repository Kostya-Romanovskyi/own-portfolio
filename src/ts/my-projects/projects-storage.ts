interface OtherProject {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface imagesInfo {
  image: string;
  alt: string;
}

interface ProjectImages {
  main: imagesInfo;
  gallery: string[];
}

interface Project {
  id: string;
  title: string;
  technologies: string[];
  images: ProjectImages;
  story: string[];
  otherProjects: OtherProject[];
}

export const projects: Project[] = [
  {
    id: 'web-studio',
    title: 'Web Studio',
    technologies: ['HTML', 'CSS', 'JavaScript', 'SCSS'],
    images: {
      main: {
        image: '/src/images/WebStudio/main.jpg',
        alt: 'Web studio main image',
      },
      gallery: [
        '../src/images/WebStudio/1.jpg',
        '../src/images/WebStudio/2.jpg',
        '../src/images/WebStudio/3.jpg',
      ],
    },
    story: [
      `Web Studio is a personal learning project I created as a junior front-end developer.
       It is built with HTML, CSS, SCSS, and JavaScript, focusing on responsive design so the
       website works smoothly on mobile devices, tablets, and desktops.`,

      `The concept of the project is to showcase how a modern web development studio might
       present its services online.`,
    ],
    otherProjects: [
      {
        title: 'Logo Project 1',
        description: 'Branding',
        image: '../src/images/WebStudio/3.jpg',
        link: '#',
      },
      {
        title: 'Logo Project 2',
        description: 'UI/UX',
        image: '../src/images/WebStudio/3.jpg',
        link: '#',
      },
      {
        title: 'Logo Project 3',
        description: 'Illustration',
        image: '../src/images/WebStudio/3.jpg',
        link: '#',
      },
    ],
  },
  // {
  //   id: 'barber',
  //   title: 'Barber Shop',
  //   technologies: ['HTML', 'CSS', 'JavaScript', 'SCSS'],
  //   images: {
  //     main: {
  //       image: '../src/images/WebStudio/main.jpg',
  //       alt: 'Web studio main image',
  //     },
  //     gallery: [
  //       '../src/images/WebStudio/1.jpg',
  //       '../src/images/WebStudio/2.jpg',
  //       '../src/images/WebStudio/3.jpg',
  //     ],
  //   },
  // },
];
