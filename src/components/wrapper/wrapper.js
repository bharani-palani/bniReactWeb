import React from 'react';
import { Route } from "react-router-dom";
import About from '../about';
import Technologies from '../technologies';

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <About />,
      },
      {
      path: "/about",
      exact: true,
      sidebar: () => <About />,
    },
    {
      path: "/technologies",
      sidebar: () => <Technologies />,
    },
];
  
class Wrapper extends React.Component {
    render() {
        return (
            routes.map((route, index) => (
                <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
                />
            ))
        );
    }
}

export default Wrapper;