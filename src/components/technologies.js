import React from "react";
import apiInstance from "../apiServices";
import Loader from "react-loader-spinner";
import helpers from "../helpers";
import Breadcrumbs from "./breadcrumb";
import baseUrl from "../environment";

class Technologies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    document.title = "Bharani | Technologies";
  }
  componentDidMount() {
    const one = this.getTechnologies();
    const two = this.getIdes();
    const three = this.getOss();

    Promise.all([one, two, three]).then(r => {
      const [techHeading, techs] = r[0];
      const ideTechs = r[1];
      const osTechs = r[2];
      this.setState({ techHeading, techs, ideTechs, osTechs });
    });
  }
  getTechnologies = async () => {
    const tech = apiInstance
      .get("/technologies")
      .then(response =>
        helpers.sageHeaderAndList(response.data.response, "tech_sort")
      );
    const json = await tech.then(r => r);
    return json;
  };
  getIdes = async () => {
    const ide = apiInstance
      .get("/ides")
      .then(response => response.data.response);
    const json = await ide.then(r => r);
    return json;
  };
  getOss = async () => {
    const os = apiInstance
      .get("operating-system")
      .then(response => response.data.response);
    const json = await os.then(r => r);
    return json;
  };
  render() {
    return (
      <section
        className="section lb"
        style={{ minHeight: window.screen.height }}
      >
        {this.state.techHeading &&
        this.state.techs &&
        this.state.ideTechs &&
        this.state.osTechs ? (
          <>
            <div className="breadcrumbs">
              <Breadcrumbs />
            </div>
            <div className="section-title text-center">
              <div
                style={{ backgroundColor: "transparent" }}
                className="process-box"
              >
                <div className="process-front text-center">
                  <h2 style={{ color: "#aaa" }}>Technologies</h2>
                  <hr />
                  <i className="fi-creative-computer"></i>
                  <p>
                    {this.state.techHeading
                      ? this.state.techHeading.tech_value
                      : null}
                  </p>
                </div>
              </div>
            </div>
            {this.state.techs
              ? this.state.techs.map((t, i) => (
                  <div
                    style={{ color: "#333" }}
                    key={i}
                    className={`text-center ${
                      (i + 1) % 3 === 0 ? "row form-group ml-0 mr-0" : null
                    }`}
                  >
                    <div className="col-lg-4 hidden-md">
                      <div className="blog-box">
                        <div className="post-media">
                          {t.tech_image_url ? (
                            <img
                              src={`${baseUrl()}/image/actualAvatar/technology/${t.tech_image_url}`}
                              alt=""
                              className="img-responsive"
                            />
                          ) : null}
                        </div>
                        <div className="blog-desc">
                          <h4>{t.tech_label}</h4>
                          <p>{t.tech_value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : null}
            {this.state.techs.map((t, i) => (
              <div
                style={{ color: "#333" }}
                key={i}
                className={`text-center ${
                  (i + 1) % 2 === 0 ? "row form-group" : null
                }`}
              >
                <div className="col-md-6 visible-md-block">
                  <div className="blog-box">
                    <div className="post-media">
                      {t.tech_image_url ? (
                        <img
                          src={`${baseUrl()}/image/actualAvatar/technology/${t.tech_image_url}`}
                          alt=""
                          className="img-responsive"
                        />
                      ) : null}
                    </div>
                    <div className="blog-desc">
                      <h4>{t.tech_label}</h4>
                      <p>{t.tech_value}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div
              style={{ backgroundColor: "transparent" }}
              className="process-box"
            >
              <div className="process-front text-center">
                <h2 style={{ color: "#aaa" }}>IDE</h2>
                <i className="flaticon-monitor"></i>
              </div>
            </div>

            <div className="row">
              {this.state.ideTechs.map((ide, i) => (
                <div key={i} className="col-lg-3 col-md-6">
                  <div className="process-box">
                    <div className="process-front text-center">
                      {/* <i class="flaticon-lightbulb-idea"></i> */}
                      {ide.ide_image_url ? (
                        <img
                          style={{
                            width: "150px",
                            height: "100px",
                            margin: "0 auto"
                          }}
                          src={`${baseUrl()}/image/actualAvatar/ide/${ide.ide_image_url}`}
                          alt=""
                          className="img-responsive"
                        />
                      ) : null}
                      <h3>{ide.ide_label}</h3>
                    </div>

                    <div className="process-end text-center">
                      {/* <h3>Typo's</h3> */}
                      <p>{ide.ide_value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{ backgroundColor: "transparent" }}
              className="process-box"
            >
              <div className="process-front text-center">
                <h2 style={{ color: "#aaa" }}>OS</h2>
                <i className="flaticon-point-mark-on-a-circle"></i>
              </div>
            </div>

            <div className="row">
              {this.state.osTechs.map((os, i) => (
                <div key={i} className="col-lg-3 col-md-6">
                  <div className="process-box">
                    <div className="process-front text-center">
                      {/* <i class="flaticon-lightbulb-idea"></i> */}
                      {os.os_image_url ? (
                        <img
                          style={{
                            width: "100px",
                            height: "100px",
                            margin: "0 auto"
                          }}
                          src={`${baseUrl()}/image/actualAvatar/technology/${os.os_image_url}`}
                          alt=""
                          className="img-responsive"
                        />
                      ) : null}
                      <h3>{os.os_label}</h3>
                    </div>

                    <div className="process-end text-center">
                      <p>{os.os_value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="spinner">
            <Loader
              type={helpers.LoadRandomSpinnerIcon()}
              color="#c2d82e"
              height={100}
              width={100}
            />
          </div>
        )}
      </section>
    );
  }
}

export default Technologies;
