import React from "react";
import Breadcrumbs from "./breadcrumb";
import baseUrl from "../environment";
import Loader from "react-loader-spinner";
import helpers from "../helpers";
import { Alert } from "react-bootstrap";

class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      name: "",
      mobile: "",
      email: "",
      comments: "",
      lat: 0,
      long: 0,
      geoErrorHandle: {}
    };
  }
  componentDidMount() {
    this.getGeoLocation();
  }
  saveComments = () => {
    const { name, mobile, email, comments, lat, long } = this.state;
    const that = this;
    const apiUrl = `${baseUrl()}/write`;
    const axios = require("axios");
    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("mobile", mobile);
    formdata.append("email", email);
    formdata.append("comments", comments);
    formdata.append("latitude", lat);
    formdata.append("longitude", long);
    axios
      .post(apiUrl, formdata)
      .then(response => {
        that.setState(
          {
            showAlert: true,
            name: "",
            mobile: "",
            email: "",
            comments: ""
          },
          () => {
            document.getElementById("writeForm").reset();
          }
        );
        // console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  getGeoLocation = callback => {
    navigator.geolocation.getCurrentPosition(
      position => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        this.setState({ lat, long }, () => {
          if (callback && typeof callback === "function") {
            callback();
          }
        });
      },
      e => {
        this.setState({ geoErrorHandle: e });
      },
      {
        maximumAge: Infinity,
        timeout: 5000
      }
    );
  };
  validateName = name => {
    name.length > 3 ? this.setState({ name }) : this.setState({ name: "" });
  };
  validateMobile = mobile => {
    const bool = typeof Number(mobile) === "number" && mobile.length === 10;
    bool ? this.setState({ mobile }) : this.setState({ mobile: "" });
  };
  validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test(email) ? this.setState({ email }) : this.setState({ email: "" });
  };
  validateComments = comments => {
    const bool = comments.length > 9;
    bool ? this.setState({ comments }) : this.setState({ comments: "" });
  };

  render() {
    const {
      name,
      mobile,
      email,
      comments,
      lat,
      long,
      geoErrorHandle
    } = this.state;
    return (
      <section
        className="section lb"
        style={{ minHeight: window.screen.height }}
      >
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
                <h2 style={{ color: "#aaa" }}>Write to me</h2>
                <hr />
                <i className="fi-creative-edit"></i>
                <p>
                  Write me your software related solutions, requirements or
                  development
                </p>
                {Object.keys(geoErrorHandle).length === 0 &&
                geoErrorHandle.constructor === Object ? (
                  <div>{JSON.stringify([lat, long])}</div>
                ) : (
                  <div>{JSON.stringify(geoErrorHandle)}</div>
                )}
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <Alert
              show={this.state.showAlert}
              variant="success"
              onClose={() => this.setState({ showAlert: false })}
              dismissible
            >
              <p>
                <i className="fa fa-thumbs-up" /> Your comments are recieved.
                Will get in touch with you shortly..
              </p>
            </Alert>
            <form id="writeForm" onSubmit={e => e.preventDefault()}>
              <div className="row mb-5">
                <div className="col-md-3 pl-0">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    onChange={e => this.validateName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-3 pl-0">
                  <input
                    type="number"
                    placeholder="Mobile"
                    className="form-control"
                    onChange={e => this.validateMobile(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-3 pl-0">
                  <input
                    type="email"
                    placeholder="email"
                    className="form-control"
                    onChange={e => this.validateEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-6 pl-0">
                  <textarea
                    ref={this.state.comments}
                    style={{ resize: "none" }}
                    rows="5"
                    cols="10"
                    className="form-control"
                    placeholder="Your comments ... Min 10 characters ..."
                    onChange={e => this.validateComments(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 pl-0">
                  <button
                    onClick={() => this.saveComments()}
                    className="btn btn-bni"
                    disabled={!(name && mobile && email && comments)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      </section>
    );
  }
}

export default Write;
