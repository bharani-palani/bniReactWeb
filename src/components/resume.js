import React from "react";
import { PDFReader } from "reactjs-pdf-reader";
import { Link } from "react-router-dom";
import Breadcrumbs from "./breadcrumb";
import Loader from "react-loader-spinner";
import helpers from "../helpers";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeContainer: false,
      showLoader: true
    };
  }
  componentDidMount() {
    const width = document.getElementsByClassName("lb")[0].clientWidth;
    this.setState({ resumeContainer: width -50 });
    setTimeout(() => {
        this.setState({ showLoader: false })
    }, 2000);
  }
  render() {
    document.title = "Bharani | Resume";
    return (
      <section
        className="section lb"
        style={{ minHeight: window.screen.height }}
      >
        <div className="breadcrumbs">
          <Breadcrumbs />
        </div>
        {this.state.showLoader ? (
          <div className="spinner">
            <Loader
              type={helpers.LoadRandomSpinnerIcon()}
              color="#c2d82e"
              height={100}
              width={100}
            />
          </div>
        ) : (
          <>
            <div className="section-title">
              <div
                style={{ backgroundColor: "transparent" }}
                className="process-box"
              >
                <div className="process-front text-center">
                  <h2 style={{ color: "#aaa" }}>Resume</h2>
                  <hr />
                  <i className="fi-ecommerce-invoice"></i>
                  <p>My skills, experience, projects and more</p>
                </div>
              </div>
            </div>
            <div className="container-fluid text-center">
              <Link to={require("./resume.pdf")} target="_blank" download>
                <i className="fi-creative-download downloadIcon" />
              </Link>
            </div>
            
            <PDFReader
              width={this.state.resumeContainer}
              showAllPage={true}
              url={require("./resume.pdf")}
            />
          </>
        )}
      </section>
    );
  }
}

export default Resume;
