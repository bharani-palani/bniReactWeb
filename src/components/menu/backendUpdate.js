import React, {useState, useEffect} from 'react';
import { Modal, Accordion, Card, Button } from "react-bootstrap";
import LoginForm from "./loginForm";
import AboutBackend from "./backend/aboutBackend";
import "./backendUpdate.scss";

function BackendUpdate(props) {
  const [auth, setAuth] = useState(false); // change to false
  const [tabs, setTabs] = useState([
    {
        id:1,
        label: "About",
        component: <AboutBackend />
    },
    {
        id:2,
        label: "Technolgies",
        component: <AboutBackend />
    },
    {
        id:3,
        label: "Projects",
        component: <AboutBackend />
    },
    {
        id:4,
        label: "Skills",
        component: <AboutBackend />
    },
    {
        id:5,
        label: "Awards",
        component: <AboutBackend />
    },
    {
        id:6,
        label: "Contact",
        component: <AboutBackend />
    },
  ]);
  const [showForgot, setShowForgot] = useState(false);

  return (
    <Modal
      {...props}
      className="backendUpdate"
      size={auth ? "xl" : "sm"}
    >
      <Modal.Header closeButton>
        <Modal.Title>
            {showForgot ? <i onClick={() => setShowForgot(false)} className="fa fa-chevron-circle-left" /> : ""} 
            &nbsp;Backend Configure
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          {
            !auth ? <LoginForm ddForgot={b => setShowForgot(b)} dForgot={showForgot} showForgot={bool => setShowForgot(bool)} validate={bool => setAuth(bool)} /> : (
            <Accordion bsPrefix="util" defaultActiveKey="0">
                {tabs.map((t,i) => 
                    <Card key={i}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={i}>
                                {t.label} {auth}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={i}>
                            <Card.Body>
                                {t.component}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>                                
                )}
            </Accordion>                
            )
          }
        
      </Modal.Body>
    </Modal>
  );
}

export default BackendUpdate;
