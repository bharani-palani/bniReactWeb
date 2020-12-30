import React from "react";
import PropTypes from "prop-types";
import { Accordion, Card, Button } from "react-bootstrap";
import CreateBank from "./CreateBank";
import CreateCreditCardAccount from "./CreateCreditCardAccount";
import CreateIncExpCategory from "./CreateIncExpCategory";
import CreateVendor from "./CreateVendor";

const CreateModule = props => {
    // const {id, name} = props; 
    const createArray = [
        {id: 1, label: "Bank account", component: <CreateBank />},
        {id: 2, label: "Credit card account", component: <CreateCreditCardAccount />},
        {id: 3, label: "Vendor", component: <CreateVendor />},
        {id: 4, label: "Income / expense category", component: <CreateIncExpCategory />},
    ];
    return (
        <div>
            <h5 className="text-center"><span className="colorGreen">CRUD Operations</span></h5>
            <div className="tableFixHead pr-10">
                <Accordion bsPrefix="util" defaultActiveKey={1}>
                {createArray.sort((a,b) => a.id > b.id).map((t,i) => 
                    <Card key={t.id}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={t.id}>
                                {t.label}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={t.id}>
                            <Card.Body>
                                {t.component}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>                                
                )}
                </Accordion>
            </div>
        </div>
    );
}

CreateModule.propTypes = {
  property: PropTypes.string,
};
CreateModule.defaultProps = {
  property: "String name",
};

export default CreateModule;