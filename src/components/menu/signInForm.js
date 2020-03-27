import React, { useState, useEffect } from "react";

function SignInForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState(false);

  useEffect(() => {
    props.onCredentialUpdate({ username, password });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[password, username]);

  const onEnter = (e) => {
    if(e.which === 13 || e.keyCode === 13) {
      props.onEnter(true);
    }
  }
  return (
    <div className="row">
      <div className="col-lg-12">
        <label htmlFor="username">User Name:</label>
        <input
          onChange={e => setUsername(e.target.value)}
          type="text"
          id="username"
          className="form-control"
          onKeyDown={(e) => onEnter(e)}
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
              onKeyDown={(e) => onEnter(e)}
            />
            <i onClick={() => setType(!type)} className={`fa fa-${!type ? "eye" : "eye-slash"}`} />
          </div>
        </div>
        <div className="form-group">
          <button onClick={() => props.showForgot(true)} className="btn-bni-sm">Change Password</button>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
