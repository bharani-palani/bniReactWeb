import React, { useState, useEffect, useContext } from "react";
import apiInstance from "../../services/apiServices";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../../contexts/UserContext";
import AppContext from "../../contexts/AppContext";
import "react-toastify/dist/ReactToastify.css";

function Write(props) {
  const [appData] = useContext(AppContext);
  document.title = `${appData.display_name} | Write`;
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [geoErrorHandle, setGeoErrorHandle] = useState({});
  const [showLocationError, setShowLocationError] = useState(false);
  const [showToaster, setShowToaster] = useState(false);
  const ls = JSON.parse(localStorage.getItem("googleData")) || {};

  useEffect(() => {
    getGeoLocation();
  });

  const saveComments = () => {
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
        setName("");
        setMobile("");
        setEmail("");
        setComments("");
        document.getElementById("writeForm").reset();
        notify();
      })
      .catch(error => {
        console.log(error);
      });
  };
  const getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          let lat = position.coords.latitude;
          let long = position.coords.longitude;
          setShowLocationError(false);
          setLat(lat);
          setLong(long);
        },
        e => {
          setShowLocationError(true);
        }
      );
    } else {
      setGeoErrorHandle({ message: "Geolocation not supported!" });
    }
  };
  const validateName = name => {
    name.length > 3 ? setName(name) : setName("");
  };
  const validateMobile = mobile => {
    const bool = typeof Number(mobile) === "number" && mobile.length === 10;
    bool ? setMobile(mobile) : setMobile("");
  };
  const validateEmail = email => {
    // eslint-disable-next-line no-useless-escape
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test(email) ? setEmail(email) : setEmail("");
  };
  const validateComments = comments => {
    const bool = comments.length > 9;
    bool ? setComments(comments) : setComments("");
  };
  const notify = () =>
    toast.success(
      "👍 Your comments are recieved. Will get in touch with you shortly..",
      {
        onOpen: () => setShowToaster(true),
        onClose: () => setShowToaster(false)
      }
    );
  const getDomainUrl = () => {
    return window.location.host;
  }  
  return (
    <UserContext.Consumer>
      {userContextCallBack => {
        if(ls &&
          ls.profileObj &&
          ls.profileObj) {
            validateName(ls.profileObj.name);
            validateEmail(ls.profileObj.email);
          }
        return <section
          className="section lb"
          style={{
            minHeight: window.screen.height,
            opacity: showToaster ? 1 : 0.8
          }}
        >
          <ToastContainer className="bniToaster" />
          <>
            <div className="section-title">
              <div
                className="process-box"
              >
                <div className="process-front text-center">
                  <h2 style={{ color: "#aaa" }}>Write to me</h2>
                  <hr />
                  <i className="fi-creative-edit"></i>
                  <p className="pl-5 pr-5">
                    Write me your software related solutions, requirements or development
                  </p>
                  {showLocationError && (
                    <div>
                      Please enable browser location or establish a safe{" "}
                      <a href={`https://${getDomainUrl()}`}>{`https://${getDomainUrl()}`}</a>{" "}
                      connection
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <form id="writeForm" onSubmit={e => e.preventDefault()}>
                <div className="row mb-5">
                  <div className="col-md-3 pl-0 pr-0">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      onChange={e => validateName(e.target.value)}
                      defaultValue={
                        (ls &&
                        ls.profileObj &&
                        ls.profileObj.name) || ""
                      }
                    />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-3 pl-0 pr-0">
                    <input
                      type="number"
                      placeholder="Mobile"
                      className="form-control"
                      onChange={e => validateMobile(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-3 pl-0 pr-0">
                    <input
                      type="email"
                      placeholder="email"
                      className="form-control"
                      onChange={e => validateEmail(e.target.value)}
                      defaultValue={
                        (ls &&
                        ls.profileObj &&
                        ls.profileObj.email) || ""
                      }
                    />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6 pl-0 pr-0">
                    <textarea
                      style={{ resize: "none" }}
                      rows="5"
                      cols="10"
                      className="form-control"
                      placeholder="Your comments ... Min 10 characters ..."
                      onChange={e => validateComments(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pl-0 pr-0">
                    <button
                      onClick={() => saveComments()}
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
      }}
    </UserContext.Consumer>
  );
}

export default Write;
