import webStudioMainImg from '../../images/WebStudio/main.webp';
import webStudioOtherImg from '../../images/WebStudio/3.webp';
import webStudioImg1 from '../../images/WebStudio/4.webp';
import webStudioImg2 from '../../images/WebStudio/5.webp';

import barberShopMainImg from '../../images/BarberShop/main.webp';
import barberShopOtherImg from '../../images/BarberShop/2.webp';
import barberShopImg1 from '../../images/BarberShop/3.webp';
import barberShopImg2 from '../../images/BarberShop/4.webp';

import iceCreamMainImg from '../../images/IceCream/main.webp';
import iceCreamOtherImg from '../../images/IceCream/1.webp';
import iceCreamImg1 from '../../images/IceCream/2.webp';
import iceCreamImg2 from '../../images/IceCream/3.webp';

import filmotekaMainImg from '../../images/Filmoteka/main.webp';
import filmotekaOtherImg from '../../images/Filmoteka/1.webp';
import filmotekaImg1 from '../../images/Filmoteka/2.webp';
import filmotekaImg2 from '../../images/Filmoteka/3.webp';

import petBoomMainImg from '../../images/PetBoom/main.webp';
import petBoomOtherImg from '../../images/PetBoom/1.webp';
import petBoomImg1 from '../../images/PetBoom/2.webp';
import petBoomImg2 from '../../images/PetBoom/3.webp';

import ownTodoMainImg from '../../images/ownToDo/main.webp';
import ownTodoOtherImg from '../../images/ownToDo/1.webp';
import ownTodoImg1 from '../../images/ownToDo/2.webp';
import ownTodoImg2 from '../../images/ownToDo/3.webp';

import ownRestaurantMainImg from '../../images/ownRestaurant/main.webp';
import ownRestaurantOtherImg from '../../images/ownRestaurant/1.webp';
import ownRestaurantImg1 from '../../images/ownRestaurant/2.webp';
import ownRestaurantImg2 from '../../images/ownRestaurant/3.webp';

import ownRestaurantBackendMainImg from '../../images/ownRestaurantBack/main.webp';
import ownRestaurantBackendOtherImg from '../../images/ownRestaurantBack/1.webp';
import ownRestaurantBackendImg1 from '../../images/ownRestaurantBack/2.webp';
import ownRestaurantBackendImg2 from '../../images/ownRestaurantBack/3.webp';

import ownCinemaMainImg from '../../images/ownCinema/main.webp';
import ownCinemaOtherImg from '../../images/ownCinema/1.webp';
import ownCinemaImg1 from '../../images/ownCinema/2.webp';
import ownCinemaImg2 from '../../images/ownCinema/3.webp';

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

interface linkInfo {
  url: string;
  text: string;
}

interface ProjectImages {
  main: imagesInfo;
  gallery: imagesInfo[];
}

interface Project {
  id: string;
  title: string;
  link: linkInfo;
  technologies: string[];
  images: ProjectImages;
  story: string[];
  otherProjects: OtherProject[];
}

export const projects: Project[] = [
  {
    id: 'web-studio',
    title: 'Web Studio',
    link: {
      url: 'https://kostya-romanovskyi.github.io/WebStudio/index.html',
      text: 'Link to project',
    },
    technologies: ['HTML', 'CSS', 'JavaScript', 'SCSS'],
    images: {
      main: {
        image: webStudioMainImg,
        alt: 'Web studio main image',
      },
      gallery: [
        { image: webStudioImg1, alt: 'Footer of Web Studio web site' },
        { image: webStudioImg2, alt: 'Footer of Web Studio web site' },
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
        title: 'Barber Shop',
        description: 'Personal project',
        image: barberShopOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=barber-shop',
      },
      {
        title: 'Own Restaurant',
        description: 'Personal project',
        image: ownRestaurantOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=own-restaurant',
      },
      {
        title: 'Filmoteka',
        description: 'Team project',
        image: filmotekaOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=filmoteka',
      },
    ],
  },
  {
    id: 'barber-shop',
    title: 'Barber Shop',
    link: {
      url: 'https://kostya-romanovskyi.github.io/BarberShop/',
      text: 'Link to project',
    },
    technologies: ['HTML', 'CSS', 'JavaScript', 'SCSS'],
    images: {
      main: {
        image: barberShopMainImg,
        alt: 'Barber Shop main image',
      },
      gallery: [
        { image: barberShopImg1, alt: 'Homepage of Barber Shop website' },
        {
          image: barberShopImg2,
          alt: 'Services section of Barber Shop website',
        },
      ],
    },
    story: [
      `Barber Shop is a personal learning project developed to practice building 
     a stylish and functional website for a small business. 
     The project demonstrates how a modern barbershop could present its services, 
     pricing, and atmosphere online.`,

      `The website was built using HTML, CSS, SCSS, and JavaScript, with 
     an emphasis on responsive design. It adapts seamlessly to mobile devices, 
     tablets, and desktops, providing users with a consistent experience across 
     all platforms.`,

      `The goal of the project was to explore layout design, create 
     an inviting visual identity, and highlight the usability aspects of 
     service-based websites.`,
    ],
    otherProjects: [
      {
        title: 'Web Studio',
        description: 'Personal project',
        image: webStudioOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=web-studio',
      },
      {
        title: 'Ice cream',
        description: 'Personal project',
        image: iceCreamOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=ice-cream',
      },
      {
        title: 'Own To Do',
        description: 'Personal project',
        image: ownTodoOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=own-todo',
      },
    ],
  },
  {
    id: 'ice-cream',
    title: 'Ice cream',
    link: {
      url: 'https://kostya-romanovskyi.github.io/IceCream/',
      text: 'Link to project',
    },
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'SCSS',
      'Adaptive layout',
      'Parcel',
      'Smooth animations',
      'HTML partials',
    ],
    images: {
      main: {
        image: iceCreamMainImg,
        alt: 'Ice cream landing page main section',
      },
      gallery: [
        { image: iceCreamImg1, alt: 'Hero section of Ice cream website' },
        {
          image: iceCreamImg2,
          alt: 'Products showcase section of Ice cream website',
        },
      ],
    },
    story: [
      `Ice cream is a visually engaging landing page project designed to practice modern front-end techniques. 
     The layout is fully adaptive, ensuring a smooth and consistent user experience across desktops, tablets, and mobile devices.`,

      `The project was built with HTML, SCSS, and JavaScript, bundled with Parcel for efficient development and deployment. 
     Smooth animations were added to enhance the interactive feel, while HTML partials allowed for a clean, modular code structure.`,

      `The Ice cream concept highlights how a playful and colorful design can be combined with responsive layouts 
     and performance optimization to create an attractive promotional website.`,
    ],
    otherProjects: [
      {
        title: 'Pet Boom',
        description: 'Personal project',
        image: petBoomOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=pet-boom',
      },
      {
        title: 'Own Restaurant backend',
        description: 'Personal project',
        image: ownRestaurantBackendOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=own-restaurant-backend',
      },
      {
        title: 'Barber Shop',
        description: 'Personal project',
        image: barberShopOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=barber-shop',
      },
    ],
  },
  {
    id: 'filmoteka',
    title: 'Filmoteka',
    link: {
      url: 'https://kostya-romanovskyi.github.io/Filmoteka-team-proj/index.html',
      text: 'Link to project',
    },
    technologies: ['HTML', 'SCSS', 'JavaScript', 'REST API', 'Adaptive layout'],
    images: {
      main: {
        image: filmotekaMainImg,
        alt: 'Filmoteka main page',
      },
      gallery: [
        { image: filmotekaImg1, alt: 'Filmoteka trending movies section' },
        { image: filmotekaImg2, alt: 'Filmoteka search results page' },
      ],
    },
    story: [
      `Filmoteka is a team project created to consolidate and apply knowledge 
    gained during the JavaScript course. Thanks to these skills, the project 
    was successfully implemented.`,

      `The project was built according to a designer-provided mockup and 
    includes adaptive layout for three breakpoints — mobile, tablet, and desktop —
    using the Mobile First approach.`,

      `The main functionality of the project is to display trending movies of the week, 
    allow users to search by keyword, and manage a personal Filmoteka by 
    adding movies to "Watched" or "Queue". Users can also view movie trailers 
    directly from the application.`,

      `This collaborative project demonstrates not only technical skills in working with 
    JavaScript, SCSS, and REST API, but also teamwork, code collaboration, and 
    following best practices for responsive design.`,
    ],
    otherProjects: [
      {
        title: 'Ice cream',
        description: 'Personal project',
        image: iceCreamOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=ice-cream',
      },
      {
        title: 'Barber Shop',
        description: 'Personal project',
        image: barberShopOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=barber-shop',
      },
      {
        title: 'Own Restaurant backend',
        description: 'Personal project',
        image: ownRestaurantBackendOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=own-restaurant-backend',
      },
    ],
  },
  {
    id: 'pet-boom',
    title: 'Pet Boom',
    link: {
      url: 'https://kostya-romanovskyi.github.io/pet-boom-frontend/',
      text: 'Link to project',
    },
    technologies: [
      'React',
      'SCSS',
      'JavaScript',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    images: {
      main: {
        image: petBoomMainImg,
        alt: 'Pet Boom landing page image',
      },
      gallery: [
        { image: petBoomImg1, alt: 'Pet Boom homepage section' },
        { image: petBoomImg2, alt: 'Pet Boom backend data flow' },
      ],
    },
    story: [
      `Pet Boom is a single-page application developed for a small business in Ukraine. 
    The project was built with React and SCSS, ensuring a clean and modern interface 
    with future scalability in mind.`,

      `In addition to the frontend, a backend was implemented using Node.js, Express, 
    and MongoDB to collect and manage customer information, making the website not 
    only presentational but also functional.`,

      `The application demonstrates practical full-stack development skills, combining 
    responsive frontend design with a working backend and database integration.`,

      `This project highlights the ability to create production-oriented solutions for 
    small businesses, with a foundation ready for further growth and additional features.`,
    ],
    otherProjects: [
      {
        title: 'Own Restaurant backend',
        description: 'Personal project',
        image: ownRestaurantBackendOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=own-restaurant-backend',
      },
      {
        title: 'Own Restaurant',
        description: 'Personal project',
        image: ownRestaurantOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=own-restaurant',
      },
      {
        title: 'Own To Do',
        description: 'Personal project',
        image: ownTodoOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=own-todo',
      },
    ],
  },
  {
    id: 'own-todo',
    title: 'OwnToDo',
    link: {
      url: 'https://kostya-romanovskyi.github.io/own-todo-typescript',
      text: 'Link to project',
    },
    technologies: [
      'React',
      'Firebase Authentication',
      'i18n',
      'TypeScript',
      'CSS Modules',
    ],
    images: {
      main: {
        image: ownTodoMainImg,
        alt: 'OwnToDo task management app main screen',
      },
      gallery: [
        { image: ownTodoImg1, alt: 'Task list with filters' },
        { image: ownTodoImg2, alt: 'Dark theme interface' },
      ],
    },
    story: [
      `OwnToDo is a modern task management application designed to simplify daily planning 
    and improve productivity. The application allows users to create, edit, and delete 
    tasks while adjusting their complexity and tracking completion status.`,

      `Additional features include a task timer, advanced search, category sorting, 
    and the ability to switch between light and dark themes for a personalized experience.`,

      `The app supports both Ukrainian and English languages, providing accessibility 
    for a broader audience. Secure login with Google Authentication ensures 
    every user has their own private to-do list.`,

      `This project demonstrates skills in building interactive and user-friendly 
    applications, combining state management, localization, and authentication 
    into a polished product.`,
    ],
    otherProjects: [
      {
        title: 'Own Restaurant',
        description: 'Personal project',
        image: ownRestaurantOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=own-restaurant',
      },
      {
        title: 'Own Cinema',
        description: 'Personal project',
        image: ownCinemaOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=own-cinema',
      },
      {
        title: 'Web Studio',
        description: 'Personal project',
        image: webStudioOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=web-studio',
      },
    ],
  },
  {
    id: 'own-restaurant',
    title: 'Own Restaurant',
    link: {
      url: 'https://kostya-romanovskyi.github.io/own-shop/',
      text: 'Link to project',
    },
    technologies: [
      'React',
      'TypeScript',
      'SCSS',
      'Vite',
      'Axios',
      'WebSockets',
      'Node.js',
      'Express',
      'MySQL (AWS RDS)',
    ],
    images: {
      main: {
        image: ownRestaurantMainImg,
        alt: 'Own Restaurant main image',
      },
      gallery: [
        { image: ownRestaurantImg1, alt: 'Restaurant menu with categories' },
        { image: ownRestaurantImg2, alt: 'Reservation form and table booking' },
      ],
    },
    story: [
      `Own Restaurant is a full-featured React application designed for a restaurant business. 
    It provides a complete digital experience, starting with a menu organized into categories, 
    detailed product descriptions including ingredients, and an interactive gallery and reviews section.`,

      `Users can reserve tables, add items to the cart, update quantities, and track their orders 
    in real time. A personal account allows customers to edit their profile, view reservation history, 
    and manage past orders.`,

      `An advanced admin panel was developed with secure login credentials. Administrators receive 
    instant sound notifications for new orders with a "pending" status and can manage orders 
    in real time. Thanks to WebSocket integration, the admin dashboard is synchronized immediately 
    when a customer places an order.`,

      `The backend was built with Node.js, Express, and MySQL hosted on AWS RDS, providing 
    reliable data storage and management. This project showcases strong skills in 
    full-stack development, real-time communication, and building scalable production-ready systems.`,
    ],
    otherProjects: [
      {
        title: 'Web Studio',
        description: 'Personal project',
        image: webStudioOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=web-studio',
      },
      {
        title: 'Own Restaurant backend',
        description: 'Personal project',
        image: ownRestaurantBackendOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=own-restaurant-backend',
      },
      {
        title: 'Filmoteka',
        description: 'Team project',
        image: filmotekaOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=filmoteka',
      },
    ],
  },
  {
    id: 'own-restaurant-backend',
    title: 'Own Restaurant Backend',
    link: {
      url: 'https://github.com/Kostya-Romanovskyi/own-shop-back/tree/main',
      text: 'Link to github',
    },
    technologies: [
      'JavaScript',
      'Node.js',
      'Express',
      'Sequelize',
      'MySQL (AWS RDS)',
      'Cloudinary',
      'JWT Authentication',
    ],
    images: {
      main: {
        image: ownRestaurantBackendMainImg,
        alt: 'Own Restaurant backend architecture diagram',
      },
      gallery: [
        {
          image: ownRestaurantBackendImg1,
          alt: 'Database schema with Sequelize models',
        },
        {
          image: ownRestaurantBackendImg2,
          alt: 'Cloudinary integration for media storage',
        },
      ],
    },
    story: [
      `Own Restaurant Backend is a custom-built server application that powers the 
    functionality of the Own Restaurant platform. Developed with Node.js and Express, 
    it provides a reliable and scalable API for handling restaurant operations.`,

      `The backend connects to a MySQL database hosted on AWS RDS, with Sequelize ORM 
    managing models, relationships, and database queries. This ensures a structured 
    and maintainable approach to data management.`,

      `Cloudinary was integrated for efficient media storage, enabling secure handling 
    and optimization of images such as menu photos, gallery visuals, and user uploads.`,

      `The backend includes robust authentication using JWT, role-based access for users 
    and administrators, and secure endpoints for managing reservations, orders, 
    user profiles, and admin operations.`,

      `This project demonstrates proficiency in backend development, API design, 
    cloud database integration, media storage solutions, and building 
    a secure and production-ready server infrastructure.`,
    ],
    otherProjects: [
      {
        title: 'Ice cream',
        description: 'Personal project',
        image: iceCreamOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=ice-cream',
      },
      {
        title: 'Own Cinema',
        description: 'Personal project',
        image: ownCinemaOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=own-cinema',
      },
      {
        title: 'Filmoteka',
        description: 'Team project',
        image: filmotekaOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=filmoteka',
      },
    ],
  },
  {
    id: 'own-cinema',
    title: 'Own Cinema',
    link: {
      url: 'https://kostya-romanovskyi.github.io/own-cinema/',
      text: 'Link to project',
    },
    technologies: [
      'HTML',
      'CSS',
      'React',
      'JavaScript',
      'REST API',
      'AJAX',
      'Adaptive layout',
      'Redux',
      'Vite',
      'Firebase',
    ],
    images: {
      main: {
        image: ownCinemaMainImg,
        alt: 'Own Cinema main page',
      },
      gallery: [
        { image: ownCinemaImg1, alt: 'Own Cinema movie search by categories' },
        { image: ownCinemaImg2, alt: 'Own Cinema personal movie library' },
      ],
    },
    story: [
      `Own Cinema is a web application that allows users to find their favorite 
    movies or discover new ones with ease.`,

      `Users can search for movies by categories, handle direct searches, or 
    browse personalized recommendations offered on the main page.`,

      `If a user chooses to log in via Google, they gain access to a personal 
    library where they can add favorite movies or save titles to watch later.`,

      `The project was built with React, Redux, and Vite, with a focus on adaptive 
    layout for mobile, tablet, and desktop. Movie data is fetched using REST API and AJAX, 
    while Firebase is used for Google authentication and user data storage.`,

      `This project demonstrates practical skills in frontend development, 
    state management with Redux, and integration of third-party services 
    like Firebase for authentication.`,
    ],
    otherProjects: [
      {
        title: 'Web Studio',
        description: 'Personal project',
        image: webStudioOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=web-studio',
      },
      {
        title: 'Own Restaurant backend',
        description: 'Personal project',
        image: ownRestaurantBackendOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=own-restaurant-backend',
      },
      {
        title: 'Ice cream',
        description: 'Personal project',
        image: iceCreamOtherImg,
        link: '/own-portfolio/my-projects/project-detail.html?project=ice-cream',
      },
    ],
  },
];
