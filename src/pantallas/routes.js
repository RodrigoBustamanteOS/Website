const RootPath = 'pantallas';
const RoutePantalla1 = 'pantalla1';
const RoutePantalla2 = 'pantalla2';

const routes = [
  { name: RoutePantalla1, route: RoutePantalla1, moduleId: `${RootPath}/${RoutePantalla1}/index`, nav: true, title: 'pantalla 1', settings: { iconClass: 'fa-cog' } },
  { name: RoutePantalla2, route: RoutePantalla2, moduleId: `${RootPath}/${RoutePantalla2}/index`, nav: true, title: 'pantalla 2', settings: { iconClass: 'fa-cog' } },
];

export default routes;
