import React, { useState, useEffect, useContext } from "react";
import { Router } from "react-router";
import Wrapper from "../wrapper/wrapper";
import BackendUpdate from "../configuration/backendUpdate";
import LoginUser from "./loginUser/loginUser";
import { UserContext } from "../../contexts/UserContext";
import { ToastContainer, toast } from "react-toastify";
import { menus, socialMedias } from "../../mockData/menuData";
import MobileApp from "./MobileApp";
import DesktopApp from "./DesktopApp";
import Video from "./Video";
import Audio from "./Audio";
import history from "../../history";
import "./MainApp.scss";

const autoClose = 3000;

function MainApp(props) {
  const appData = props.appData;
  let myAudio = React.createRef();
  const [navBarExpanded, setNavBarExpanded] = useState(false);
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [audioState, setAudioState] = useState("play");
  const [audioVisible, setAudioVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const userContext = useContext(UserContext);
  const [ls, setLs] = useState(
    JSON.parse(localStorage.getItem("googleData")) || {}
  );

  useEffect(() => {
    if (Object.keys(appData).length > 0) {
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
      if (Object.keys(ls).length > 0) {
        localStorage.setItem("googleData", JSON.stringify(ls));
      }
    }
  }, [appData, ls]);

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
    setLs(response);
    userContext.updateUserData(response);
    onNavBarToggle(false);
    history.push("/write");
  };
  const errorGoogle = () => {
    onNavBarToggle(false);
    toast.error(
      <div className="capitalize" dangerouslySetInnerHTML={fMessage()} />
    );
    console.error("errorGoogle");
  };
  const onLogout = () => {
    setLs({});
    userContext.removeUserData();
    localStorage.removeItem("googleData");
    history.push("/");
  };
  return (
    Object.keys(appData).length > 0 && (
      <Router history={history}>
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
            <Video videoRoot={require("../../videos/video.mp4")} />
          )}
          <MobileApp
            menus={menus}
            onNavBarToggle={onNavBarToggle}
            navBarExpanded={navBarExpanded}
            onNavBarClose={onNavBarClose}
            socialMedias={socialMedias}
            oAuthToken={appData.google_login_auth_token}
            responseGoogle={responseGoogle}
            errorGoogle={errorGoogle}
            ls={ls}
            openBlank={openBlank}
            appData={appData}
          />
          <DesktopApp
            togglePlay={togglePlay}
            audioVisible={audioVisible}
            audioState={audioState}
            menus={menus}
            ls={ls}
            socialMedias={socialMedias}
            oAuthToken={appData.google_login_auth_token}
            responseGoogle={responseGoogle}
            errorGoogle={errorGoogle}
            openBlank={openBlank}
            setToggleSideBar={setToggleSideBar}
            toggleSideBar={toggleSideBar}
            appData={appData}
          />
          <Audio
            myAudio={myAudio}
            togglePlay={togglePlay}
            audioVisible={audioVisible}
            audioState={audioState}
          />
        </div>
        <div className={`wrapper ${toggleSideBar ? "toggleOn" : "toggleOff"}`}>
          {ls &&
            ls.profileObj &&
            ls.profileObj.name &&
            ls.profileObj.imageUrl && (
              <LoginUser
                userData={ls}
                toggleSideBar={toggleSideBar}
                onLogout={onLogout}
              />
            )}
          <Wrapper />
        </div>
      </Router>
    )
  );
}

export default MainApp;
