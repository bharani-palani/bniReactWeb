import React from 'react';
import {Button, Accordion, Card } from 'react-bootstrap';
import DateTime from "./dateTime";
import RandomNumber from "./randomNumber";
import ArrayDiff from "./arrayDiff";
import "./utilities.scss";
import SomeEvery from "./someEvery";
import Destructure from "./destructure";

class Utilities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            utils: [
                {
                    id: 1,
                    heading: "Date / Time",
                    component: <DateTime />
                },
                {
                    id: 2,
                    heading: "Random Number",
                    component: <RandomNumber />
                },
                {
                    id: 3,
                    heading: "Array Difference",
                    component: <ArrayDiff />
                },
                {
                    id: 4,
                    heading: "Array Some & Every",
                    component: <SomeEvery />
                },
                {
                    id: 5,
                    heading: "Array Of Objects, Map Destructure and Alias Property Name",
                    component: <Destructure />
                },
            ]
        }
    }
    render() {
        return (
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
                                    <Accordion.Toggle as={Button} variant="link" eventKey={u.id}>
                                        {u.heading}
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={u.id}>
                                    <Card.Body>{u.component}</Card.Body>
                                </Accordion.Collapse>
                            </Card>                                
                        )
                    }
                </Accordion>
                </div>

            </section>
        );
    }
}

export default Utilities;