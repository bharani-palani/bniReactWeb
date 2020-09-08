import React from "react";
import "../../node_modules/flat-icons/ecommerce.css";
import "../../node_modules/flat-icons/interface.css";
import "../../node_modules/flat-icons/technology.css";
import "../../node_modules/flat-icons/creative.css";
import Loader from "react-loader-spinner";
import apiInstance from "../apiServices";
import helpers from "../helpers";
import {baseUrl} from "../environment";

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
    apiInstance
      .get("/skills")
      .then(response => {
        const [skillsHeading, skillsList] = helpers.sageHeaderAndList(
          response.data.response,
          "skill_sort"
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
              color={helpers.fluorescentColor}
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
                  <h2 style={{ color: "#aaa" }}>Skills</h2>
                  <hr />
                  <i className="fi-tech-gamepad-1"></i>
                  <p>
                    {this.state.skillsHeading
                      ? this.state.skillsHeading.skill_value
                      : null}
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
                        src={`${baseUrl()}/image/actualAvatar/skills/${skills.skill_image_url}`}
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
