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
        <div className="welcomeText"><i className="fa fa-user" /> Welcome {userData.profileObj.name}..</div>
        <div><img className="userImage" alt="userImage" src={userData.profileObj.imageUrl} /></div>
      </div>
    );
  }
}

export default LoginUser;
