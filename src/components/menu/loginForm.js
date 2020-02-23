import React, {useState} from 'react';
import { Modal, Accordion, Card, Button } from "react-bootstrap";

function LoginForm(props) {
  const [auth, setAuth] = useState(false);

  return (
      <div>
          <h4 className="text-center head">Sign In</h4>
          <div className="row">
            <div className="col-lg-12">
                <div className="form-group">
                    <label htmlFor="username">
                        User Name:
                    </label>
                    <input type="text"id="username" className="form-control" />
                </div>
            </div>
            <div className="col-lg-12">
                <div className="form-group">
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input type="password" id="password" className="form-control" />
                </div>
            </div>
            <div className="col-lg-12">
                <button className="btn btn-bni">Submit</button>
            </div>
          </div>
      </div>
  );
}

export default LoginForm;
