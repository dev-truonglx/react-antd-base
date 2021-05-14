import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { routes } from './routes';

function App() {
  return (
    <>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          ></Route>
        ))}
      </Switch>
    </>
  );
}

export default App;
