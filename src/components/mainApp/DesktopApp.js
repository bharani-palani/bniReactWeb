import React from "react";
import PropTypes from "prop-types";
import { baseUrl } from "../../environment";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

const DesktopApp = props => {
  const {
    menus,
    oAuthToken,
    socialMedias,
    ls,
    audioVisible,
    audioState,
    togglePlay,
    responseGoogle,
    errorGoogle,
    openBlank,
    setToggleSideBar,
    toggleSideBar,
    appData
  } = props;

  const hamburgerStyle = () => {
    return toggleSideBar
      ? { right: "calc(100% - 46px)" }
      : { right: "calc(100% - 260px)" };
  };

  const toggleStyle = () => {
    return toggleSideBar
      ? { position: "absolute", right: "calc(100% - 0px)" }
      : { position: "absolute", right: "calc(100% - 260px)" };
  };

  return (
    <header className="vertical-header hidden-print">
      <i
        style={hamburgerStyle()}
        onClick={() => setToggleSideBar(!toggleSideBar)}
        className={`fa hamburger ${
          toggleSideBar ? "fa-times higlight" : "fa-bars"
        }`}
      />
      <div style={toggleStyle()} className="vertical-header-wrapper slideRight">
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
            {menus
              .filter(menu => !menu.showOnlyIfSuperUser)
              .map((menu, i) => (
                <li key={i} className="child-menu">
                  <Link to={menu.href}>{menu.label}</Link>
                </li>
              ))}
            {ls &&
              ls.profileObj &&
              ls.profileObj.googleId &&
              menus
                .filter(menu => menu.showOnlyIfSuperUser && ls.profileObj.googleId === appData.google_id)
                .map((menu, i) => (
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
            Design and development by <a className="normalLink" href={"mailto:barani.potshot@gmail.com"}>Bharani</a>
               
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

DesktopApp.propTypes = {
  property: PropTypes.string
};
DesktopApp.defaultProps = {
  property: "String name"
};

export default DesktopApp;
