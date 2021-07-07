import { lazy } from 'react';
// import Home from '../pages/Home';
// import Page1 from '../pages/Page1';
// import Page2 from '../pages/Page2';

const lazyImport = (name) => {
  return lazy(() => import(`../pages/${name}/index.jsx`));
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: lazyImport('Home'),
    // component: Home,
  },
  {
    path: '/page1',
    name: 'Page1',
    component: lazyImport('Page1'),
    // component: Page1,
  },
  {
    path: '/page2',
    name: 'Page2',
    component: lazyImport('Page2'),
    // component: Page2,
  },
];

export default routes;
