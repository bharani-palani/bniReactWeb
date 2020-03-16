import React, { useState, useEffect } from "react";

function SignInForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState(false);

  useEffect(() => {
    props.onCredentialUpdate({ username, password });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[password, username]);
  return (
    <div className="row">
      <div className="col-lg-12">
        <label htmlFor="username">User Name:</label>
        <input
          onChange={e => setUsername(e.target.value)}
          type="text"
          id="username"
          className="form-control"
        />
      </div>
      <div className="col-lg-12">
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="passwordArea">
            <input
              onChange={e => setPassword(e.target.value)}
              type={!type ? "password" : "text"}
              id="password"
              className="form-control"
            />
            <i onClick={() => setType(!type)} className="fa fa-eye" />
          </div>
        </div>
        <div className="form-group">
          <button onClick={() => props.showForgot(true)} className="btn-bni-sm">Forgot Password</button>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
