import React from 'react';
import apiInstance from "../apiServices";
import Loader from "react-loader-spinner";
import helpers from "../helpers";
import Breadcrumbs from "./breadcrumb";

class Awards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // awardsHeading: {
            //     awardValue: "Honours, Awards and Certification"
            // },
            awards: [
            //     {
            //         name: "Outstanding Performance",
            //         description: "Promising best developer on swift and efficient issue tracking and problem solving."
            //     },
            //     {
            //         name: "Quality Certification",
            //         description: "Attired award for best coding practices and code optimization."
            //     },
            //     {
            //         name: "Collaboration and Leadership",
            //         description: "Team handling, task splitting, knowledge sharing and higher end leadership qualities."
            //     },
            ]
        };
    }
    componentDidMount() {
        const that = this;
        apiInstance
          .get("/awards")
          .then(response => {
            const [awardsHeading, awardsList] = helpers.sageHeaderAndList(
              response.data.response,
              "award_sort"
            );
            that.setState({ awards: awardsList, awardsHeading });
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
            {this.state.awards.length < 1 ? (
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
                      <h2 style={{ color: "#aaa" }}>Awards</h2>
                      <hr />
                      <i className="fi-tech-shield-6"></i>
                      <p>
                        {this.state.awardsHeading
                          ? this.state.awardsHeading.award_value
                          : null}
                      </p>
                    </div>
                  </div>
                  {this.state.awards.map((award, i) => (
                    <div
                      style={{ color: "#333" }}
                      key={i}
                      className={`${(i + 1) % 3 === 0 ? "row form-group" : null}`}
                    >
                      <div className="col-md-4">
                        <div className="blog-box">
                          <div className="post-media">
                            <div className="title text-center">
                              <h4>{award.award_label}</h4>
                            </div>
                          </div>
                          <div className="blog-desc">
                            <p>{award.award_value}</p>
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

export default Awards; 