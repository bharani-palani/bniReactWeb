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
      submitBtn: true
    }
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
  formValidation = () => {
    const {name, mobile, email, comments} = this.state
    console.log(name.current.value);
    //   name.current.value.length && 
    //   mobile.current.value.length && 
    //   email.current.value.length && 
    //   comments.current.value.length
    // ) {
    //   this.setState({submitBtn: false})
    // } else {
    //   this.setState({submitBtn: true})
    // }
    // debugger; 
    // console.log(this.state.name.current.value,this.state.mobile.current.value,this.state.email.current.value,this.state.comments.current.value,)

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
                  Write me your software related requirements or development
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
                  onKeyPress={this.formValidation}
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
                  onKeyPress={this.formValidation}
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
                  onKeyPress={this.formValidation}
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
                  placeholder="Your comments ..."
                  onKeyPress={this.formValidation}
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
