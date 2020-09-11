import React from "react";
import PropTypes from "prop-types";
import "./loginUser.scss";

const LoginUser = (props) => {
  const { userData, toggleSideBar } = props;
  return (
    <div
      className={`userContainer hidden-print ${
        toggleSideBar ? "toggleOn" : "toggleOff"
      }`}
    >
      <div className={`userMenu`}>
        <span className="welcomeText">
          <i className="fa fa-user-o" /> Welcome {userData.profileObj.name}..
        </span>
        <img
          className="userImage"
          alt="userImage"
          src={userData.profileObj.imageUrl}
        />
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
