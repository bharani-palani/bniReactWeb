import React from "react";
import Breadcrumbs from "./breadcrumb";
import baseUrl from "../environment";
import Loader from "react-loader-spinner";
import helpers from "../helpers";
import {Alert } from 'react-bootstrap';

class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      name: React.createRef(),
      mobile: React.createRef(),
      email: React.createRef(),
      comments: React.createRef(),
      lat: null,
      long: null,
      submitBtn: true
    }
  }
  componentDidMount() {
    this.getGeoLocation();
  }
  saveComments = () => {
    const that = this;
    const apiUrl = `${baseUrl()}/write`;
    const axios = require("axios");
    var formdata = new FormData();
    const {name, mobile, email, comments} = this.state
    formdata.append("name",name.current.value);
    formdata.append("mobile",mobile.current.value);
    formdata.append("email",email.current.value);
    formdata.append("comments",comments.current.value);
    formdata.append("latitude",this.state.lat);
    formdata.append("longitude",this.state.long);
    axios
      .post(apiUrl, formdata)
      .then(response => {
        that.setState({ showAlert: true },() => {
          this.formValidation();
        })
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  getGeoLocation = (callback) => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      this.setState({ lat, long },() => {
        if (callback && typeof(callback) === "function") {
          callback();
        }
      });
    });
  }
  validateName = (name) => {
    return name.current.value.length > 3 ? true : false;
  }
  validateMobile = (mobile) => {
    return typeof(Number(mobile.current.value)) === "number" && mobile.current.value.length === 10 ? true : false;
  }
  validateEmail = (email) => { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.current.value);
  } 
  validateComments = (comments) => {
    return comments.current.value.length > 10 ? true : false;
  }

  formValidation = () => {
    this.getGeoLocation(() => {
      const {name, mobile, email, comments} = this.state;
      const totState = (this.validateName(name) && this.validateMobile(mobile) && this.validateEmail(email) && this.validateComments(comments));
      this.setState({ submitBtn: !totState })
    });
  }
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
                  Write me your software related solutions, requirements or development
                </p>
              </div>
            </div>
          </div>
          <div className="container-fluid">
          <Alert show={this.state.showAlert} variant="success" onClose={() => this.setState({ showAlert: false})} dismissible>
            <p>
            <i className="fa fa-thumbs-up" /> Your comments are recieved. Will get in touch with you shortly..
            </p>
          </Alert>
            <div className="row mb-5">
              <div className="col-md-3">
                <input
                  ref={this.state.name}
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  onKeyUp={this.formValidation}
                />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-md-3">
                <input
                  ref={this.state.mobile}
                  type="number"
                  placeholder="Mobile"
                  className="form-control"
                  onKeyUp={this.formValidation}
                />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-md-3">
              <input
                  ref={this.state.email}
                  type="email"
                  placeholder="email"
                  className="form-control"
                  onKeyUp={this.formValidation}
                />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-md-6">
                <textarea
                  ref={this.state.comments}
                  style={{ resize: "none" }}
                  rows="5"
                  cols="10"
                  className="form-control"
                  placeholder="Your comments ... Min 10 characters ..."
                  onKeyUp={this.formValidation}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button
                  onClick={() => this.saveComments()}
                  className="btn btn-bni"
                  disabled={this.state.submitBtn}
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
