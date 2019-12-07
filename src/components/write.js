import React from "react";
import Breadcrumbs from "./breadcrumb";
import baseUrl from "../environment";
import Loader from "react-loader-spinner";
import helpers from "../helpers";

class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.name = React.createRef();
    this.mobile = React.createRef();
    this.email = React.createRef();
    this.comments = React.createRef();
  }
  saveComments = () => {
    const [name, mobile, email, comments] = [
      this.name.current.value,
      this.mobile.current.value,
      this.email.current.value,
      this.comments.current.value
    ];

    const that = this;
    const apiUrl = `${baseUrl()}/write`;
    const axios = require("axios");
    var formdata = new FormData();
    formdata.append("name",name);
    formdata.append("mobile",mobile);
    formdata.append("email",email);
    formdata.append("comments",comments);
    axios
      .post(apiUrl, formdata)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
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
                  Write me your software related requirements or development
                </p>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div class="alert alert-success">
              <strong>Success!</strong> Indicates a successful or positive action.
            </div>
            <div className="row mb-5">
              <div className="col-md-3">
                <input
                  ref={this.name}
                  type="text"
                  placeholder="Name"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-md-3">
                <input
                  ref={this.mobile}
                  type="number"
                  placeholder="Mobile"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-md-3">
              <input
                  ref={this.email}
                  type="email"
                  placeholder="email"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-md-6">
                <textarea
                  ref={this.comments}
                  style={{ resize: "none" }}
                  rows="5"
                  cols="10"
                  className="form-control"
                  placeholder="Your comments ..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button
                  onClick={() => this.saveComments()}
                  className="btn btn-bni"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </>
      </section>
    );
  }
}

export default Write;
