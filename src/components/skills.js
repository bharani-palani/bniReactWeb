import React from "react";
import "../../node_modules/flat-icons/ecommerce.css";
import "../../node_modules/flat-icons/interface.css";
import "../../node_modules/flat-icons/technology.css";
import "../../node_modules/flat-icons/creative.css";
import Breadcrumbs from "./breadcrumb";
import Loader from "react-loader-spinner";
import baseUrl from "../environment";
import helpers from "../helpers";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    };
    document.title = "Bharani | Skills";
  }
  componentDidMount() {
    const that = this;
    const apiUrl = `${baseUrl()}/skills/`;
    const axios = require("axios");
    axios
      .get(apiUrl)
      .then(response => {
        const [skillsHeading, skillsList] = helpers.sageHeaderAndList(
            response.data.response,
            "contact_sort"
          );
          that.setState({ skills: skillsList, skillsHeading });
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
        {this.state.skills.length < 1 ? (
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
                  <h2 style={{ color: "#aaa" }}>Skills</h2>
                  <hr />
                  <i className="fi-tech-gamepad-1"></i>
                  <p>
                    {this.state.skillsHeading}
                  </p>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div style={{ color: "#333" }} className="row">
                {this.state.skills.map((skills, i) => (
                  <div
                    key={i}
                    className="blog-box col-lg-12 col-md-12 form-group"
                  >
                    <div className="post-media col-lg-4 col-md-6">
                      <img
                        src={require(`../images/skills/${skills.skill_image_url}`)}
                        alt=""
                        className="img-responsive lefty"
                      />
                    </div>
                    <div className="blog-desc col-lg-8 col-md-6">
                      <h4 className="text-center">{skills.skill_label}</h4>
                      <p>{skills.skill_value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    );
  }
}

export default Skills;
