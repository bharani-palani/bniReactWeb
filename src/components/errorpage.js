import React from "react";
import { Link } from "react-router-dom";

class ErrorPage extends React.Component {
  render() {
    return (
      <div id="wrapper" className="text-center">
        {/* <div className="section lb">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="home-message">
                            <h1 style={{ color: "#ddd" }}>Oops!</h1>
                            <h2 style={{ color: "#ddd" }}>404 Not Found</h2>
                            <div className="error-details" style={{ color: "#ddd" }}>
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            <hr />
                            <div className="error-actions">
                                <Link to="/about" className="btn btn-default-bordered btn-lg">
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
        </div> */}
        <div className="video-section">
            <div className="overlay"></div>
            <div className="home-text-wrapper">
                <div className="home-message">
                <h1 style={{ color: "#ddd" }}>Oops!</h1>
                <h2 style={{ color: "#ddd" }}>404 Not Found</h2>
                <div className="error-details" style={{ color: "#ddd" }}>
                    Sorry, an error has occured, Requested page cannot be found!
                </div>
                <hr />
                <div className="error-actions">
                    <Link to="/about" className="btn btn-default-bordered btn-lg">
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
