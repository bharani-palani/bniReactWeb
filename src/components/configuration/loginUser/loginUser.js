import React, { Component } from "react";
import "./loginUser.scss";

class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { userData } = this.props;
    return (
      <div className={`userMenu`}>
        <span className="welcomeText"><i className="fa fa-user-o" /> Welcome {userData.profileObj.name}..</span>
        <img className="userImage" alt="userImage" src={userData.profileObj.imageUrl} />
      </div>
    );
  }
}

export default LoginUser;
