import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Wrapper from "../wrapper/wrapper";
import { Navbar } from "react-bootstrap";
import BackendUpdate from "./backendUpdate";
import { baseUrl } from "../../environment";
import GoogleLogin from "react-google-login";
import { oAuthToken } from "../../environment";
import LoginUser from "./loginUser/loginUser";
import { UserContext } from "../../contexts/UserContext";
import { ToastContainer, toast } from "react-toastify";
import { menus, socialMedias } from "../mockData/menuData";
import "./MainApp.scss";

const autoClose = 3000;

function MainApp() {
  let myAudio = React.createRef();
  const [navBarExpanded, setNavBarExpanded] = useState(false);
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [audioState, setAudioState] = useState("play");
  const [audioVisible, setAudioVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const userContext = useContext(UserContext);

  useEffect(() => {
    window.addEventListener("keydown", function(event) {
      if (event.ctrlKey && event.keyCode === 66) {
        setOpenModal(true);
      }
    });

    const nav = document.getElementsByTagName("nav")[0];
    nav.addEventListener("touchmove", function(event) {
      event.preventDefault();
      setOpenModal(true);
    });

    const div = document.getElementsByClassName("vertical-header-wrapper")[0];
    div.addEventListener("touchmove", function(event) {
      event.preventDefault();
      setOpenModal(true);
    });
    setTimeout(() => {
      setVideoVisible(true);
    }, 5000);
    // setOpenModal(true); //  comment this later
  }, []);

  const onNavBarToggle = () => {
    setNavBarExpanded(!navBarExpanded);
  };

  const onNavBarClose = () => {
    setNavBarExpanded(false);
  };

  const openBlank = url => {
    var win = window.open(url, "_blank");
    win.focus();
  };

  const toggleStyle = () => {
    return toggleSideBar
      ? { position: "absolute", right: "calc(100% - 0px)" }
      : { position: "absolute", right: "calc(100% - 260px)" };
  };

  const hamburgerStyle = () => {
    return toggleSideBar
      ? { right: "calc(100% - 46px)" }
      : { right: "calc(100% - 260px)" };
  };

  const togglePlay = () => {
    setAudioVisible(true);
    if (audioVisible) {
      myAudio = myAudio.current;
      if (myAudio.paused) {
        setAudioState("pause");
        myAudio.play();
      } else {
        setAudioState("play");
        myAudio.pause();
      }
    }
  };
  const fMessage = () => ({
    __html: `<span><i class="fa fa-thumbs-down"></i> Error: Unable to fetch from Google API..</span>`
  });
  const responseGoogle = response => {
    userContext.updateUserData(response);
    console.log(response);
  };
  const errorGoogle = () => {
    toast.error(
      <div className="capitalize" dangerouslySetInnerHTML={fMessage()} />
    );
  };
  return (
    <UserContext.Consumer>
      {userContextCallBack => {
        const { userData } = userContextCallBack;
        return (
          <Router>
            <ToastContainer autoClose={autoClose} className="bniToaster" />
            <div className="menu-wrapper">
              {openModal && (
                <BackendUpdate
                  show={openModal}
                  onHide={bool => setOpenModal(bool)}
                  size="sm"
                  animation={false}
                  style={{ zIndex: 9999 }}
                />
              )}
              {!toggleSideBar && videoVisible && (
                <video className="videoTag hidden-print" autoPlay loop muted>
                  <source
                    src={require("../../videos/video.mp4")}
                    type="video/mp4"
                  />
                </video>
              )}

              <div className="mobile-menu">
                <Navbar
                  fixed={"top"}
                  bg="dark"
                  onToggle={onNavBarToggle}
                  expanded={navBarExpanded}
                  expand="lg"
                >
                  <Navbar.Brand className="navbar-brand">
                    <Link onClick={onNavBarClose} to={"/"}>
                      <img
                        className="mobLogoImg "
                        src={`${baseUrl()}/image/actualAvatar/avatar/bniBlack.jpg`}
                        alt=""
                      />
                      <div className="mobLogoCaption">Bharani</div>
                    </Link>
                  </Navbar.Brand>
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    bsPrefix="navbar-toggle"
                  >
                    <i className="fa fa-bars" />
                  </Navbar.Toggle>
                  <Navbar.Collapse
                    style={{ marginTop: "80px" }}
                    id="basic-navbar-nav"
                  >
                    <ul
                      className={`mobile-menu-social text-center ${
                        navBarExpanded ? "slidedown" : "slideup"
                      }`}
                    >
                      {socialMedias.map((media, i) => (
                        <li key={i}>
                          <Link to="" onClick={() => openBlank(media.href)}>
                            <i className={media.icon}></i>
                          </Link>
                        </li>
                      ))}
                      <li className="google-mobile">
                        <GoogleLogin
                          clientId={oAuthToken}
                          buttonText=""
                          onSuccess={responseGoogle}
                          onFailure={errorGoogle}
                          cookiePolicy={"single_host_origin"}
                        />
                      </li>
                    </ul>
                    <ul className="primary-menu">
                      {menus.map((menu, i) => (
                        <li key={i} className="child-menu">
                          <Link onClick={onNavBarToggle} to={menu.href}>
                            {menu.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Navbar.Collapse>
                </Navbar>
              </div>
              <header className="vertical-header hidden-print">
                <i
                  style={hamburgerStyle()}
                  onClick={() => setToggleSideBar(!toggleSideBar)}
                  className={`fa hamburger ${
                    toggleSideBar ? "fa-times higlight" : "fa-bars"
                  }`}
                />
                <div
                  style={toggleStyle()}
                  className="vertical-header-wrapper slideRight"
                >
                  <nav className="nav-menu">
                    <div className="logo">
                      <Link to={"/"}>
                        <img
                          src={`${baseUrl()}/image/actualAvatar/avatar/bniBlack.jpg`}
                          alt=""
                        />
                      </Link>
                      <button className="audiBtn" onClick={() => togglePlay()}>
                        {!audioVisible ? (
                          <i className="fa fa-music" />
                        ) : (
                          <i
                            className={`fa fa-${
                              audioState === "play" ? "play" : "pause"
                            }`}
                          />
                        )}
                      </button>
                    </div>
                    <ul className="primary-menu">
                      {menus.map((menu, i) => (
                        <li key={i} className="child-menu">
                          <Link to={menu.href}>{menu.label}</Link>
                        </li>
                      ))}
                    </ul>
                    <div className="menu-social">
                      <ul className="list-inline text-center">
                        {socialMedias.map((media, i) => (
                          <li key={i}>
                            <Link to="" onClick={() => openBlank(media.href)}>
                              <i className={media.icon}></i>
                            </Link>
                          </li>
                        ))}
                        <li className="google">
                          <GoogleLogin
                            clientId={oAuthToken}
                            buttonText=""
                            onSuccess={responseGoogle}
                            onFailure={errorGoogle}
                            cookiePolicy={"single_host_origin"}
                          />
                        </li>
                      </ul>
                      <div className="text-center designedBy">
                        Design and development by Bharani
                      </div>
                    </div>
                  </nav>
                </div>
              </header>
              {audioVisible && (
                <audio
                  className="audio"
                  ref={myAudio}
                  controls
                  loop
                  src={require("../../videos/Heliolingus.mp3")}
                  preload="auto"
                />
              )}
            </div>
            <div
              className={`wrapper ${toggleSideBar ? "toggleOn" : "toggleOff"}`}
            >
              <div className={`userContainer hidden-print ${toggleSideBar ? "toggleOn" : "toggleOff"}`}>
                {userData &&
                  userData.profileObj &&
                  userData.profileObj.name &&
                  userData.profileObj.imageUrl && (
                    <LoginUser userData={userData} />
                  )}
              </div>
              <Wrapper />
              <button
                className="audiBtn mobile hidden-print"
                onClick={() => togglePlay()}
              >
                {!audioVisible ? (
                  <i className="fa fa-music" />
                ) : (
                  <i
                    className={`fa fa-${
                      audioState === "play" ? "play" : "pause"
                    }`}
                  />
                )}
              </button>
            </div>
          </Router>
        );
      }}
    </UserContext.Consumer>
  );
}

export default MainApp;
