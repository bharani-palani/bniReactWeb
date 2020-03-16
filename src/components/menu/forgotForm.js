import React, { useState, useEffect } from "react";

function ForgotForm(props) {
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");

  useEffect(() => {
    props.onCredentialUpdate({ currentPass, newPass, repeatPass });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPass, newPass, repeatPass]);

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="form-group">
          <div className="passwordArea">
            <input
              onChange={e => setCurrentPass(e.target.value)}
              type="password"
              className="form-control"
              placeholder="Current Password"
            />
            <i
              className={`fa fa-${currentPass.length > 0 ? "check good" : "times bad"}`}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="passwordArea">
            <input
              onChange={e => setNewPass(e.target.value)}
              type="password"
              className="form-control"
              placeholder="New Password"
            />
            <i className={`fa fa-${newPass.length > 0 ? "check good" : "times bad"}`} />
          </div>
        </div>
        <div className="form-group">
          <div className="passwordArea">
            <input
              onChange={e => setRepeatPass(e.target.value)}
              type="password"
              className="form-control"
              placeholder="Repeat Password"
            />
            <i className={`fa fa-${(repeatPass.length > 0 && repeatPass === newPass) ? "check good" : "times bad"}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotForm;
