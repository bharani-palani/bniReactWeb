import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../about";
import Technologies from "../technologies";
import ErrorPage from "../errorpage";
import Projects from "../projects";

class Wrapper extends React.Component {
  render() {
    return (
        <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/technologies" component={Technologies} />
            <Route exact path="/projects" component={Projects} />
            <Route component={ErrorPage} />
        </Switch>
    )
  }
}

export default Wrapper;
