import React, { useState } from "react";
import PropTypes from "prop-types";
import { Accordion, Card, Button } from "react-bootstrap";
import BackendCore from "../../components/configuration/backend/BackendCore";
import { crudFormArray } from "../configuration/backendTableConfig";

const CreateModule = props => {
  const [collapse, setCollapse] = useState("");

  return (
    <div className="settings mt-20">
      <div className="pr-10">
        <Accordion bsPrefix="util" defaultActiveKey={1}>
          {crudFormArray
            .sort((a, b) => a.id > b.id)
            .map((t, i) => (
              <Card key={t.id}>
                <Card.Header>
                  <Accordion.Toggle
                    onClick={() => setCollapse(t.label)}
                    as={Button}
                    variant="link"
                    eventKey={t.id}
                  >
                    {t.label}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={t.id}>
                  <Card.Body>
                    {collapse === t.label && (
                      <BackendCore
                        key={i}
                        Table={t.Table}
                        TableRows={t.TableRows}
                        rowElements={t.rowElements}
                        getApiUrl="/account_planner/getAccountPlanner"
                        postApiUrl="/account_planner/postAccountPlanner"
                      />
                    )}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
        </Accordion>
      </div>
    </div>
  );
};

CreateModule.propTypes = {
  property: PropTypes.string
};
CreateModule.defaultProps = {
  property: "String name"
};

export default CreateModule;
