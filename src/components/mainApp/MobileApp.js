import React from "react";
import PropTypes from "prop-types";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../../environment";
import GoogleLogin from "react-google-login";

const MobileApp = props => {
  const {
    menus,
    onNavBarToggle,
    navBarExpanded,
    onNavBarClose,
    socialMedias,
    openBlank,
    oAuthToken,
    responseGoogle,
    errorGoogle,
    ls,
    appData
  } = props;

  const isGoogleLogged = ls && ls.profileObj && ls.profileObj.googleId;
  const googleMenu =
    isGoogleLogged &&
    menus
      .sort((a, b) => a.label > b.label)
      .filter(
        menu =>
          menu.showOnlyIfSuperUser &&
          ls.profileObj.googleId === appData.google_id
      );

  return (
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
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          bsPrefix="navbar-toggle"
        >
          <i className="fa fa-bars" />
        </Navbar.Toggle>
        <Navbar.Collapse style={{ marginTop: "80px" }} id="basic-navbar-nav">
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
            {/* {isGoogleLogged && googleMenu.length > 0 && (
              <li className="menuHeading">Setup</li>
            )} */}
            {isGoogleLogged &&
              googleMenu
                .map((menu, i) => (
                  <li key={i} className={`child-menu ${i === googleMenu.length - 1 ? "last-child-menu" : ""}`}>
                    <Link onClick={onNavBarToggle} to={menu.href}>
                      {menu.label}
                    </Link>
                  </li>
                ))}
            {menus
              .filter(menu => !menu.showOnlyIfSuperUser)
              .map((menu, i) => (
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
  );
};

MobileApp.propTypes = {
  property: PropTypes.string
};
MobileApp.defaultProps = {
  property: "String name"
};

export default MobileApp;
