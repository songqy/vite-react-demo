import { lazy } from 'react';

const lazyImport = (name: string) => {
  // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
  return lazy(() => import(`../pages/${name}/index.tsx`));
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: lazyImport('Home'),
  },
  {
    path: '/page1',
    name: 'Page1',
    component: lazyImport('Page1'),
  },
  {
    path: '/page2',
    name: 'Page2',
    component: lazyImport('Page2'),
  },
  {
    path: '/page3',
    name: 'Page3',
    component: lazyImport('Page3'),
  },
];

export default routes;
