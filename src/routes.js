import pantallas from 'pantallas/routes';

const routes = [
  { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Inicio' },
  { name: 'about', route: 'about', moduleId: `pages/pantalla2/index`, nav: true, title: 'Quiénes Somos', settings: { iconClass: 'fa-cog' } },
  { name: 'services', route: 'services', moduleId: `pages/pantalla2/index`, nav: true, title: 'Servicios', settings: { iconClass: 'fa-cog' } },
  { name: 'contact', route: 'contact', moduleId: `pages/pantalla1/index`, nav: true, title: 'Contacto', settings: { iconClass: 'fa-cog' } }
  // ...pantallas,
];

export default routes;