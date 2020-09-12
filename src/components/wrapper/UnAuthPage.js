import React from "react";
import { Link } from "react-router-dom";

class UnAuthPage extends React.Component {
  render() {
    document.title = "Bharani | Unauthorized Page";
    return (
        <div className="video-section">
            <div className="overlay"></div>
            <div className="home-text-wrapper">
                <div className="home-message">
                <h1 style={{ color: "#ddd" }}>Hoi!</h1>
                <h2 style={{ color: "#ddd" }}><i className="fa fa-lock" /> 401 Unauthorized</h2>
                <div className="error-details" style={{ color: "#ddd" }}>
                    Sorry, you do not have valid authentication credentials to access this module
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

    );
  }
}

export default UnAuthPage;
