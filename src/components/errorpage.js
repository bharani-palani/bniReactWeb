import React from "react";
import { Link } from "react-router-dom";

class ErrorPage extends React.Component {
  render() {
    return (
      <div id="wrapper" className="container section text-center">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div className="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
              <div className="error-actions">
                <Link to="/about" className="btn btn-primary btn-lg">
                  <span className="glyphicon glyphicon-home" />{" "}
                  Home
                </Link>
                <Link to="/contact" className="btn btn-default btn-lg">
                  <span className="glyphicon glyphicon-phone" />{" "}Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
