import pantallas from 'pages/routes';

const routes = [
<<<<<<< HEAD
  { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: false, title: 'inicio' },
  { route: '/blog', name: 'blog', moduleId: 'blog', nav: true, title: 'blog' },
  ...pantallas
=======
  { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Inicio' },
  { name: 'about', route: 'about', moduleId: `pages/pantalla2/index`, nav: true, title: 'Quiénes Somos', settings: { iconClass: 'fa-cog' } },
  { name: 'services', route: 'services', moduleId: `pages/pantalla2/index`, nav: true, title: 'Servicios', settings: { iconClass: 'fa-cog' } },
  { name: 'contact', route: 'contact', moduleId: `pages/pantalla1/index`, nav: true, title: 'Contacto', settings: { iconClass: 'fa-cog' } }
  // ...pantallas,
>>>>>>> a119bc3a113b118c98dbffe99490486617db217e
];

export default routes;