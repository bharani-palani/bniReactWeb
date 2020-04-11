import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Wrapper from "../wrapper/wrapper";
import { Navbar } from "react-bootstrap";
import BackendUpdate from "./backendUpdate";
import baseUrl from "../../environment";
import "./menu.scss";

function MainApp() {
  let myAudio = React.createRef();
  const [navBarExpanded, setNavBarExpanded] = useState(false);
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [audioState, setAudioState] = useState("play");
  const menus = [
    {
      href: "/about",
      label: "About"
    },
    {
      href: "/technologies",
      label: "Technolgies"
    },
    {
      href: "/projects",
      label: "Projects"
    },
    {
      href: "/skills",
      label: "Skills"
    },
    {
      href: "/awards",
      label: "Awards"
    },
    {
      href: "/contact",
      label: "Contact"
    },
    {
      href: "/resume",
      label: "Resume"
    },
    {
      href: "/utilities",
      label: "JS Utilities"
    },
    {
      href: "/write",
      label: "Write"
    }
  ];
  const socialMedias = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/bharani.palani",
      icon: "fa fa-facebook"
    },
    {
      name: "KinkedIn",
      href: "https://www.linkedin.com/in/bharani-palani-4860b2b3/",
      icon: "fa fa-linkedin"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/barani_sug",
      icon: "fa fa-twitter"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/bharani.palani/",
      icon: "fa fa-instagram"
    }
  ];

  useEffect(() => {
    window.addEventListener("keydown", function(event) {
      if (event.ctrlKey && event.keyCode === 66) {
        setOpenModal(true);
      }
    });

    const nav = document.getElementsByTagName("nav")[0];
    nav.addEventListener("touchmove", function(event) {
      event.preventDefault();
      const halfWidth = event.path[0].clientWidth / 2;
      if (
        event.touches[0].clientX > halfWidth &&
        event.touches[0].clientX < halfWidth + 10
      ) {
        setOpenModal(true);
      }
    }, { passive: false });

    const div = document.getElementsByClassName("vertical-header-wrapper")[0];
    div.addEventListener("touchmove", function(event) {
      event.preventDefault();
      setOpenModal(true);
    });
    // setOpenModal(true); //  change this later
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
    myAudio = myAudio.current;
    if(myAudio.paused) {
      setAudioState("pause");
      myAudio.play();
    } else {
      setAudioState("play")
      myAudio.pause();
    }
  };

  return (
    <Router>
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
        {!toggleSideBar ? (
          <video className="videoTag" autoPlay loop muted>
            <source src={require("../../videos/video.mp4")} type="video/mp4" />
          </video>
        ) : null}

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
                  src={`${baseUrl()}/image/actualAvatar/avatar/bniBlack.png`}
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
        <header className="vertical-header">
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
                    src={`${baseUrl()}/image/actualAvatar/avatar/bniBlack.png`}
                    alt=""
                  />
                </Link>
                <button className="audiBtn" onClick={() => togglePlay()}>
                  <i
                    className={`fa fa-${
                      audioState === "play" ? "play" : "pause"
                    }`}
                  />
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
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <audio
          className="audio"
          ref={myAudio}
          controls
          loop
          id="myAudio"
          src={require("../../videos/Heliolingus.mp3")}
          preload="auto"
        ></audio>
      </div>
      <div
        className={`wrapper ${
          toggleSideBar ? "toggleOn" : "toggleOff"
        }`}
      >
        <Wrapper />
        <button className="audiBtn mobile" onClick={() => togglePlay()}>
          <i
            className={`fa fa-${
              audioState === "play" ? "play" : "pause"
            }`}
          />
        </button>
      </div>
    </Router>
  );
}

export default MainApp;