import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../about";
import Technologies from "../technologies";
import ErrorPage from "../errorpage";
import Projects from "../projects";
import Skills from "../skills";

class Wrapper extends React.Component {
  render() {
    return (
        <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/technologies" component={Technologies} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
            <Route component={ErrorPage} />
        </Switch>
    )
  }
}

export default Wrapper;
