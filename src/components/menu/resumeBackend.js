import React, {useState} from 'react';
import { Accordion, Card, Button } from "react-bootstrap";
import {resumeArray} from './backendTableConfig';
import BackendCore from "./backend/BackendCore";

function ResumeBackend(props) {
    const [collapse, setCollapse] = useState("");
    return (
        <Accordion bsPrefix="util">
        {resumeArray.map((t,i) => {
            return <Card key={t.id}>
                <Card.Header>
                    <Accordion.Toggle onClick={() => setCollapse(t.label)} as={Button} variant="link" eventKey={i}>
                        {t.label}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={i}>
                    <Card.Body>
                        {
                            collapse === t.label && 
                            <BackendCore onSubmit={(b) => setCollapse("")} Table={t.Table} TableRows={t.TableRows} rowElements={t.rowElements} />
                        }
                    </Card.Body>
                </Accordion.Collapse>
            </Card>                                
        })}
        <div className="footer">
            Last login: {props.lastLogin}
        </div>
        </Accordion>
    )
}

export default ResumeBackend;