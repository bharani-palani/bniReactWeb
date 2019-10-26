import React from 'react';
import {Button, Accordion, Card } from 'react-bootstrap';
import DateTime from "./dateTime";
import "./utilities.scss";

class Utilities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            utils: [
                {
                    heading: "Date / Time",
                    component: <DateTime />
                }
            ]
        }
    }
    render() {
        return (
            <div id="wrapper">
                <section className="section lb" style={{ minHeight: window.screen.height }}>
                    <div className="section-title text-center">
                        <div style={{ backgroundColor: "transparent" }} className="process-box">
                            <div className="process-front text-center">
                                <h2 style={{ color: "#aaa" }}>Utilities</h2>
                                <hr />
                                <i className="flaticon-computer"></i>
                                <p>Some useful javascript utilities</p>
                            </div>
                        </div>
                    </div>
                    <div className="ml-20 mr-20">
                    <Accordion bsPrefix="util" defaultActiveKey="0">
                        {
                            this.state.utils.map((u,i) => 
                                <Card key={i}>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey={i}>
                                            {u.heading}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={i}>
                                        <Card.Body>{u.component}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>                                
                            )
                        }
                    </Accordion>
                    </div>

                </section>
            </div>
        );
    }
}

export default Utilities;