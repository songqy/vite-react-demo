import { Suspense } from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import routes from './routes';
import BasicLayout from '../layout/BasicLayout';

const Routers = () => {
  return (
    <Router>
      <BasicLayout>
        <Suspense fallback={<div>loading</div>}>
          <Switch>
            {routes.map((route) => (
              <Route
                exact
                path={route.path}
                key={route.path}
                component={route.component}
              ></Route>
            ))}
          </Switch>
        </Suspense>
      </BasicLayout>
    </Router>
  );
};

export default Routers;
