import React, {useState} from 'react';
import { Modal, Accordion, Card, Button } from "react-bootstrap";
import LoginForm from "./loginForm";

function BackendUpdate(props) {
  const [auth, setAuth] = useState(false);
  const [tabs, setTabs] = useState([
    {
        id:1,
        label: "About"
    },
    {
        id:2,
        label: "Technolgies"
    },
    {
        id:3,
        label: "Projects"
    },
    {
        id:4,
        label: "Skills"
    },
    {
        id:5,
        label: "Awards"
    },
    {
        id:6,
        label: "Contact"
    },
  ]);

  return (
    <Modal
      {...props}
    >
      <Modal.Header closeButton>
        <Modal.Title>Backend Configure</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          {
            !auth ? <LoginForm /> : (
            <Accordion bsPrefix="util" defaultActiveKey="0">
                {tabs.map((t,i) => 
                    <Card key={i}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={i}>
                                {t.label}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={i}>
                            <Card.Body>content</Card.Body>
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
