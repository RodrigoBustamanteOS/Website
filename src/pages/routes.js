const RootPath = 'pantallas';
const RoutePantalla1 = 'pantalla1';
const RoutePantalla2 = 'pantalla2';

const routes = [
  { name: 'about', route: 'about', moduleId: `${RootPath}/${RoutePantalla1}/index`, nav: true, title: 'Quiénes Somos', settings: { iconClass: 'fa-cog' } },
  { name: 'services', route: 'services', moduleId: `${RootPath}/${RoutePantalla1}/index`, nav: true, title: 'Servicios', settings: { iconClass: 'fa-cog' } },
  { name: 'contact', route: 'contact', moduleId: `${RootPath}/${RoutePantalla1}/index`, nav: true, title: 'Contacto', settings: { iconClass: 'fa-cog' } }
];

export default routes;
