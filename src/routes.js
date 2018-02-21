import pantallas from 'pantallas/routes';

const routes = [
  { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: false, title: 'inicio' },
  { route: '/blog', name: 'blog', moduleId: 'blog', nav: true, title: 'blog' },
  ...pantallas
];

export default routes;