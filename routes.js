import pantallas from 'pages/routes';

const routes = [

  { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Inicio' },
  { name: 'us', route: 'us', moduleId: `pages/pantalla2/index`, nav: true, title: 'Quiénes Somos', settings: { iconClass: 'fa-cog' } },
  { name: 'benefits', route: 'benefits', moduleId: `pages/benefits/benefits`, nav: true, title: 'Servicios', settings: { iconClass: 'fa-cog' } },
  { name: 'contact', route: 'contact', moduleId: `pages/pantalla1/index`, nav: true, title: 'Contacto', settings: { iconClass: 'fa-cog' } }
  // ...pantallas,

];

export default routes;