import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./about";
import Technologies from "./technologies";
import ErrorPage from "./errorpage";
import Projects from "./projects";
import Skills from "./skills";
import Awards from "./awards";
import Utilities from "../utilities/utilities";
import Contact from "./contact";
import Resume from "./resume";
import Write from "./write";
import AccountPlanner from "../../components/accountPlanner/AccountPlanner";
import { withRouter } from "react-router-dom";

class Wrapper extends React.Component {
  render() {
    return (
        <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/technologies" component={Technologies} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/awards" component={Awards} />
            <Route exact path="/utilities" component={Utilities} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/write" component={Write} />
            <Route exact path="/accountPlanner" component={AccountPlanner} />
            <Route path="*" component={ErrorPage} />
        </Switch>
    )
  }
}

export default withRouter(Wrapper);
