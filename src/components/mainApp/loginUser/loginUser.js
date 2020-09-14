import React from "react";
import PropTypes from "prop-types";
import "./loginUser.scss";

const LoginUser = (props) => {
  const { userData, toggleSideBar, onLogout } = props;
  return (
    <div
      className={`userContainer hidden-print ${
        toggleSideBar ? "toggleOn" : "toggleOff"
      }`}
    >
      <div className={`leftMenu`}>
        <img
          className="userImage"
          alt="userImage"
          src={userData.profileObj.imageUrl}
        />
        <span className="welcomeText pl-5">
          Welcome {userData.profileObj.name}..
        </span>
      </div>
      <div className="rightMenu text-right">
        <i onClick={onLogout} className="fa fa-sign-out signOut" title="Logout" />
      </div>
    </div>
  );
};

LoginUser.propTypes = {
  toggleSideBar: PropTypes.bool,
  userData: PropTypes.object
};
LoginUser.defaultProps = {};


export default LoginUser;
