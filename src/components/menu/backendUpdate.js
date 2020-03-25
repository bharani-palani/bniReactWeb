import React, {useState, useEffect} from 'react';
import { Modal, Accordion, Card, Button } from "react-bootstrap";
import LoginForm from "./loginForm";
import BackendCore from "./backend/BackendCore";
import "./backendUpdate.scss";

function BackendUpdate(props) {
  const [auth, setAuth] = useState(false); // change this to false
  const tabs = [
    {
        id:5,
        label: "About",
        component: <BackendCore Table="login" TableRows={["user_id","display_name","profile_name","user_mail","user_mobile"]} rowElements={["checkbox", "textbox", "textbox", "textbox", "number"]} />
    },
    {
        id:7,
        label: "About Images",
        component: <BackendCore Table="about_images" TableRows={["image_id","image_url","image_order"]} rowElements={["checkbox", "textbox", "number"]} />
    },
    {
        id:1,
        label: "Awards",
        component: <BackendCore Table="awards" TableRows={["award_id", "award_label", "award_value", "award_sort"]} rowElements={["checkbox", "textbox", "textarea", "number"]} />
    },
    {
        id:2,
        label: "Technolgies",
        component: <BackendCore Table="technologies" TableRows={["tech_id", "tech_label", "tech_value", "tech_image_url", "tech_sort"]} rowElements={["checkbox", "textbox", "textarea", "textbox", "number"]} />
    },
    {
        id:8,
        label: "IDE",
        component: <BackendCore Table="ide" TableRows={["ide_id", "ide_label", "ide_value", "ide_image_url", "ide_sort"]} rowElements={["checkbox", "textbox", "textarea", "textbox", "number"]} />
    },
    {
        id:9,
        label: "Operating System",
        component: <BackendCore Table="operating_system" TableRows={["os_id", "os_label", "os_value", "os_image_url", "os_sort"]} rowElements={["checkbox", "textbox", "textarea", "textbox", "number"]} />
    },
    {
        id:3,
        label: "Projects",
        component: <BackendCore Table="projects" TableRows={["project_id", "project_label", "project_value", "project_sort"]} rowElements={["checkbox", "textbox", "textarea", "number"]} />
    },
    {
        id:4,
        label: "Skills",
        component: <BackendCore Table="skills" TableRows={["skill_id", "skill_label", "skill_value", "skill_image_url", "skill_sort"]} rowElements={["checkbox", "textbox", "textarea", "textbox", "number"]} />
    },
    {
        id:6,
        label: "Contact",
        component: <BackendCore Table="contacts" TableRows={["contact_id","contact_label","contact_value","contact_href","contact_sort"]} rowElements={["checkbox", "textbox", "textbox", "textbox", "number"]} />
    },
    {
        id:10,
        label: "Public comments",
        component: <BackendCore Table="public_comments" TableRows={["comment_id","comment_name","comment_mobile","comment_description","comment_email", "comment_ip", "latitude", "longitude"]} rowElements={["checkbox", "textbox", "textbox", "textarea","textbox", "textbox", "number", "number"]} />
    },
  ];
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
