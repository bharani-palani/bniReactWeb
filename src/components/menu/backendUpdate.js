import React, {useState} from 'react';
import { Modal, Accordion, Card, Button } from "react-bootstrap";
import LoginForm from "./loginForm";
import BackendCore from "./backend/BackendCore";
import ViewMessages from "./viewMessages";
import ResumeBackend from "./resumeBackend";
import {configArray} from './backendTableConfig';
import "./backendUpdate.scss";

function BackendUpdate(props) {
  const [auth, setAuth] = useState(false); // change this to false
  const [collapse, setCollapse] = useState("");
  const [cObj, setCobj] = useState({viewMode: "Configure"}); // remove this {viewMode: "Messages"} obj
  const [showForgot, setShowForgot] = useState(false);
  const [lastLogin, setLastLogin] = useState("");
  return (
    <Modal
      {...props}
      className="backendUpdate"
      size={auth ? "xl" : "sm"}
    >
      <Modal.Header closeButton>
        <Modal.Title>
            <span className="pull-left">{showForgot ? <i onClick={() => setShowForgot(false)} className="fa fa-chevron-circle-left" /> : ""}</span>
            <span className="pull-left pl-5">
            {
                cObj.viewMode
            }
            </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          {!auth && (<LoginForm 
            ddForgot={b => setShowForgot(b)} 
            dForgot={showForgot} showForgot={bool => setShowForgot(bool)} 
            validate={(bool, lastLogin, cObj) => { setAuth(bool); setLastLogin(lastLogin); setCobj(cObj);}} 
          />)}
          {auth && cObj.viewMode === "Configure" && (
            <Accordion bsPrefix="util" defaultActiveKey="0">
            {configArray.map((t,i) => 
                <Card key={t.id}>
                    <Card.Header>
                        <Accordion.Toggle onClick={() => setCollapse(t.label)} as={Button} variant="link" eventKey={t.id}>
                            {t.label} {JSON.stringify(collapse === t.label)}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={t.id}>
                        <Card.Body>
                            {collapse === t.label && <BackendCore Table={t.Table} TableRows={t.TableRows} rowElements={t.rowElements} />}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>                                
            )}
            <div className="footer">
                Last login: {lastLogin}
            </div>
            </Accordion>
          )}
          {auth && cObj.viewMode === "Messages" && (
              <ViewMessages />
          )}
          {auth && cObj.viewMode === "Resume" && (
              <ResumeBackend lastLogin={lastLogin} />
          )}
      </Modal.Body>
    </Modal>
  );
}

export default BackendUpdate;
