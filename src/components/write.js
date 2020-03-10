import React from "react";
import Breadcrumbs from "./breadcrumb";
import apiInstance from "../apiServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
      email: "",
      comments: "",
      lat: 0,
      long: 0,
      geoErrorHandle: {},
      showLocationError: false,
      showToaster: false
    };
  }
  componentDidMount() {
    this.getGeoLocation();
  }
  saveComments = () => {
    const { name, mobile, email, comments, lat, long } = this.state;
    const that = this;
    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("mobile", mobile);
    formdata.append("email", email);
    formdata.append("comments", comments);
    formdata.append("latitude", lat);
    formdata.append("longitude", long);
    apiInstance
      .post("/write", formdata)
      .then(response => {
        console.log(response);
        that.setState(
          {
            name: "",
            mobile: "",
            email: "",
            comments: "",
          },
          () => {
            document.getElementById("writeForm").reset();
          }
        );
        this.notify()
      })
      .catch(error => {
        console.log(error);
      });
  };
  getGeoLocation = () => {
    const that = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          let lat = position.coords.latitude;
          let long = position.coords.longitude;
          that.setState({ lat, long, showLocationError: false });
        },
        e => {
          that.setState({ showLocationError: true });
        }
      );
    } else {
      that.setState({
        geoErrorHandle: { message: "Geolocation not supported!" }
      });
    }
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
  notify = () =>
    toast.success(
    "👍 Your comments are recieved. Will get in touch with you shortly..",{
      onOpen: () => this.setState({showToaster: true}),
      onClose: () => this.setState({showToaster: false}),
  });
  render() {
    const {
      name,
      mobile,
      email,
      comments,
      showLocationError,
      showToaster
    } = this.state;
    return (
      <section
        className="section lb"
        style={{ minHeight: window.screen.height, opacity: showToaster ? 1 : 0.8 }}
      >
        <ToastContainer className="bniToaster" /> 
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
                {showLocationError ? (
                  <div>
                    Please enable browser location or establish a safe{" "}
                    <a href="https://bharani.tech">https://bharani.tech</a>{" "}
                    connection
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="container-fluid">
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
