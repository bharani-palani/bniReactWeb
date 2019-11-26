import React from "react";
import baseUrl from "../environment";
import Loader from "react-loader-spinner";
import helpers from "../helpers";
import Breadcrumbs from "./breadcrumb";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
    document.title = "Bharani | Projects";
  }
  componentDidMount() {
    const that = this;
    const apiUrl = `${baseUrl()}/projects`;
    const axios = require("axios");
    axios
      .get(apiUrl)
      .then(response => {
        const [projectsHeading, projectsList] = helpers.sageHeaderAndList(
          response.data.response,
          "project_sort"
        );
        that.setState({ projects: projectsList, projectsHeading }, () => {
          console.log(this.state);
        });
      })
      .catch(error => console.log(error))
      .finally(() => 1);
  }

  render() {
    return (
      <section
        className="section lb"
        style={{ minHeight: window.screen.height }}
      >
        {this.state.projects.length < 1 ? (
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
            <div className="breadcrumbs">
              <Breadcrumbs />
            </div>
            <div className="section-title">
              <div
                style={{ backgroundColor: "transparent" }}
                className="process-box"
              >
                <div className="process-front text-center">
                  <h2 style={{ color: "#aaa" }}>Projects</h2>
                  <hr />
                  <i className="fi-creative-cloud-computing-3"></i>
                  <p>
                    {this.state.projectsHeading
                      ? this.state.projectsHeading.project_value
                      : null}
                  </p>
                </div>
              </div>
              {this.state.projects.map((project, i) => (
                <div
                  style={{ color: "#333" }}
                  key={i}
                  className={`${(i + 1) % 2 === 0 ? "row form-group" : null}`}
                >
                  <div className="col-md-6">
                    <div className="blog-box">
                      <div className="post-media">
                        <div className="title text-center">
                          <h4>{project.project_label}</h4>
                        </div>
                      </div>
                      <div className="blog-desc">
                        <p>{project.project_value}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    );
  }
}
export default Projects;
