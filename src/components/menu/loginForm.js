import React, { useState } from "react";
import { Modal, Accordion, Card, Button } from "react-bootstrap";

function LoginForm(props) {
  const [auth, setAuth] = useState(false);
  const validateUser = () => {
    // make ajax call here for valiation
    props.validate(true);
  }
  return (
    <div>
      <div className="process-front text-center">
        <i className="fi-interface-user"></i>
      </div>
      <div className="text-center head">Sign In</div>
      <div className="row mb-50">
        <div className="col-lg-12">
          <div className="form-group">
            <label htmlFor="username">User Name:</label>
            <input type="text" id="username" className="form-control" />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className="form-control" />
          </div>
        </div>
      </div>
      <button onClick={() => validateUser()} className="btn btn-bni btn-block">Submit</button>
    </div>
  );
}

export default LoginForm;
