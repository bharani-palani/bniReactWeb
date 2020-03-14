import React, { useState, useEffect } from "react";
import apiInstance from "../../apiServices";
// import { Modal, Accordion, Card, Button } from "react-bootstrap";

function LoginForm(props) {
  const passRef = React.createRef();
  const [type, setType] = useState(false);
  const [auth, setAuth] = useState(true);
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);

  const validateUser = () => {
    var formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);

    apiInstance.post("/validateUser", formdata).then(response => {
      setAuth(response.data.response.isValidUser);
      props.validate(response.data.response.isValidUser);
    })
    .catch(error => console.error(error));
  };

  return (
    <div>
      <div className="process-front text-center">
        <i className="fi-interface-user user"></i>
      </div>
      <div className="text-center head">
        Sign In
        {
          !auth && (
            <div className="error">
              Wrong user name or password
            </div>
          )
        }
      </div>
      <div className="row mb-50">
        <div className="col-lg-12">
          <div className="form-group">
            <label htmlFor="username">User Name:</label>
            <input onChange={e => setUsername(e.target.value)} type="text" id="username" className="form-control" />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div className="passwordArea">
              <input ref={passRef} onChange={e => setPassword(e.target.value)} type={!type ? "password" : "text"} id="password" className="form-control" />
              <i onClick={() =>  setType(!type)} className="fa fa-eye" />
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => validateUser()} className="btn btn-bni btn-block">
        Submit
      </button>
    </div>
  );
}

export default LoginForm;
