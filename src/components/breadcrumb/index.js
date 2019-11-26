import React from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import "./breadcrumb.scss";

const userNamesById = { "1": "John", "2": "Mike" };
const DynamicUserBreadcrumb = ({ match }) => (
  <span>{userNamesById[match.params.userId]}</span>
);

const routes = [{ path: "/users/:userId", breadcrumb: DynamicUserBreadcrumb }];

// map & render your breadcrumb components however you want.
const Breadcrumbs = withBreadcrumbs(routes)(({ breadcrumbs }) => (
  <div>
    {breadcrumbs.map(({ match, breadcrumb }) => (
      // other props are available during render, such as `location`
      // and any props found in your route objects will be passed through too
      <span key={match.url}>
        <NavLink to={match.url}>{breadcrumb} / </NavLink>
      </span>
    ))}
  </div>
));

/**
 * Anything below this line isn't super important. This just
 * handles the rendering of the link menu & routeConfig components
 */

export default Breadcrumbs;
