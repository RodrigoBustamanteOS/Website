import pantallas from 'pantallas/routes';

const routes = [
  { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: false, title: 'inicio' },
  ...pantallas,
];

export default routes;