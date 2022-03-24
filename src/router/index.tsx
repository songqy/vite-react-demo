import { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import BasicLayout from '../layout/BasicLayout';

const Routers = () => {
  return (
    <Router>
      <BasicLayout>
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            {routes.map((route) => {
              const Component = route.component;
              return (
                <Route
                  path={route.path}
                  key={route.path}
                  element={<Component />}
                />
              );
            })}
          </Routes>
        </Suspense>
      </BasicLayout>
    </Router>
  );
};

export default Routers;
