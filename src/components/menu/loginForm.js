import React, { useState, useEffect } from "react";
import apiInstance from "../../apiServices";
import Loader from "react-loader-spinner";
import helpers from "../../helpers";

function LoginForm(props) {
  const passRef = React.createRef();
  const [loader, setLoader] = useState(false);
  const [type, setType] = useState(false);
  const [auth, setAuth] = useState(true);
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);

  const validateUser = () => {
    setLoader(true);
    setAuth(true);
    var formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);

    apiInstance
      .post("/validateUser", formdata)
      .then(response => {
        setLoader(false);
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
        {!auth && <div className="error">Wrong user name or password</div>}
      </div>
      {!loader ? (
        <div className="row mb-50">
          <div className="col-lg-12">
            <div className="form-group">
              <label htmlFor="username">User Name:</label>
              <input
                onChange={e => setUsername(e.target.value)}
                type="text"
                id="username"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <div className="passwordArea">
                <input
                  ref={passRef}
                  onChange={e => setPassword(e.target.value)}
                  type={!type ? "password" : "text"}
                  id="password"
                  className="form-control"
                />
                <i onClick={() => setType(!type)} className="fa fa-eye" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="login-loader">
          <Loader
            type={helpers.LoadRandomSpinnerIcon()}
            color="#c2d82e"
            height={100}
            width={100}
          />
        </div>
      )}
      <button onClick={() => validateUser()} className="btn btn-bni btn-block">
        Submit
      </button>
    </div>
  );
}

export default LoginForm;
